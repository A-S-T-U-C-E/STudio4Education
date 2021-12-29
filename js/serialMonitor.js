/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Utility functions for handling serial communication & plotter.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

var graph = true;
let reader;
let inputDone;
let outputDone;
let inputStream;
let outputStream;

document.getElementById('btn_serialPeekClear').addEventListener("click", () => {
    document.getElementById('inputSerialPeek').value = '';
    Code.chart.destroy();
    createGraph();
});

document.getElementById('btn_serialSend').addEventListener("click", () => {
    var input = document.getElementById('serialSendBox').value;
    if (Code.serialPort) {
        document.getElementById('inputSerialPeek').value += input + "<br>";
        writeToStream(input);
    }
});

document.getElementById('btn_serialConnect').addEventListener("click", clickConnect);

/**
 * @name clickConnect
 * Click handler for the connect/disconnect button.
 */
async function clickConnect() {
    if (Code.serialPort) {
        await disconnect();
        Code.chart.destroy();
        toggleUIConnected(false);
        return;
    }
    await connect();
    toggleUIConnected(true);
    createGraph();
}

function createGraph() {
    var ctx = document.getElementById("serialGraph");
    ctx.style.backgroundColor = 'rgba(255,255,255,255)';
    Code.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'USB',
                borderColor: "#FF0000",
                backgroundColor: '#03234b',
                data: [],
                fill: true,
                pointStyle: 'circle',
                pointRadius: 2,
                pointHoverRadius: 7,
                lineTension: 0,
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            chartArea: {
                backgroundColor: 'rgba(255, 255, 255, 1)'
            }
        }
    });
}


/**
 * @name readLoop
 * Reads data from the input stream and displays it on screen.
 */
async function readLoop() {
    var today = new Date();
    while (true) {
        const { value, done } = await reader.read();
        var time = today.getHours() + ":" + today.getMinutes();
        if (value) {
            if (document.getElementById('btn_serialAddTimeStamp').checked) {
                document.getElementById('inputSerialPeek').value += getDateString() + " -> ";
            }
            document.getElementById("inputSerialPeek").value += value + "\n";
            document.getElementById('inputSerialPeek').scrollTop = document.getElementById('inputSerialPeek').scrollHeight;
            document.getElementById('inputSerialPeek').animate({
                scrollTop: document.getElementById('inputSerialPeek').scrollHeight
            });
            if (graph) {
                if (Code.chart.data.labels.length != document.getElementById("input_serialChartZoomLength").value) { //If we have less than 15 data points in the graph
                    Code.chart.data.labels.push(time); //Add time in x-asix
                    Code.chart.data.datasets.forEach((dataset) => {
                        dataset.data.push(value); //Add temp in y-axis
                    });
                } else { //If there are already 15 data points in the graph.
                    Code.chart.data.labels.shift(); //Remove first time data
                    Code.chart.data.labels.push(time); //Insert latest time data
                    Code.chart.data.datasets.forEach((dataset) => {
                        dataset.data.shift(); //Remove first temp data
                        dataset.data.push(value); //Insert latest temp data
                    });
                }
                Code.chart.update();
            } else Code.chart.stop();
        }
        if (done) {
            reader.releaseLock();
            break;
        }
    }
}
/**
 * @name writeToStream
 * Gets a writer from the output stream and send the lines.
 * @param  {...string} lines lines to send
 */
function writeToStream(...lines) {
    const writer = outputStream.getWriter();
    lines.forEach(line => {
        writer.write(line + "\n");
    });
    writer.releaseLock();
}
/**
 * @name LineBreakTransformer
 * TransformStream to parse the stream into lines.
 */
class LineBreakTransformer {
    constructor() {
        this.container = "";
    }
    transform(chunk, controller) {
        this.container += chunk;
        const lines = this.container.split("\r\n");
        this.container = lines.pop();
        lines.forEach(line => controller.enqueue(line));
    }
    flush(controller) {
        controller.enqueue(this.container);
    }
}

/**
 * @name JSONTransformer
 * TransformStream to parse the stream into a JSON object.
 */
class JSONTransformer {
    transform(chunk, controller) {
        try {
            controller.enqueue(JSON.parse(chunk));
        } catch (e) {
            controller.enqueue(chunk);
        }
    }
}

/**
 * @name connect
 * Opens a Web Serial connection and sets up the input and
 * output stream.
 */
async function connect() {
    Code.serialPort = await navigator.serial.requestPort();
    let baudrate = document.getElementById('serialConnectSpeed_Menu').value;
    await Code.serialPort.open({ baudRate: baudrate });
    const encoder = new TextEncoderStream();
    outputDone = encoder.readable.pipeTo(Code.serialPort.writable);
    outputStream = encoder.writable;
    let decoder = new TextDecoderStream();
    inputDone = Code.serialPort.readable.pipeTo(decoder.writable);
    inputStream = decoder.readable.pipeThrough(
        new TransformStream(new LineBreakTransformer())
    );
    reader = inputStream.getReader();
    readLoop();
}


/**
 * @name disconnect
 * Closes the Web Serial connection.
 */
async function disconnect() {
    if (reader) {
        await reader.cancel();
        await inputDone.catch(() => {});
        reader = null;
        inputDone = null;
    }
    if (outputStream) {
        await outputStream.getWriter().close();
        await outputDone;
        outputStream = null;
        outputDone = null;
    }
    Code.chart.stop();
    await Code.serialPort.close();
    Code.serialPort = null;
}

function toggleUIConnected(connected) {
    let label = MSG['btn_serialConnect_span'];
    if (connected) {
        label = MSG['btn_serialStop_span'];
    }
    document.getElementById('btn_serialSend').disabled = !connected;
    document.getElementById('btn_serialConnect').value = label;
}

document.getElementById('btn_serialChartPause').onclick = function() {
    let label = MSG['btn_serialChartStart_span'];
    if (graph) {
        graph = false;
        label = MSG['btn_serialChartStart_span'];
    } else {
        graph = true;
        label = MSG['btn_serialChartPause_span'];
    }
    document.getElementById('btn_serialChartPause').value = label;
}

document.getElementById('btn_serialPeekCSV').onclick = function() {
    var datas = document.getElementById('inputSerialPeek').value;
    datas = datas.replaceAll(' -> ', ';');
    datas = datas.replaceAll('\n<br>', ';\n');
    // code = code.split('<br>').join(';').replaceAll('\n', '');
    // cut off first text
    datas = datas.slice(datas.indexOf(';') + 1);
    // cut off last text
    datas = datas.slice(0, datas.indexOf('stop') - 1);
    let dataUri = 'data:text/csv;charset=utf-8,' + datas;
    let exportFileDefaultName = 'data.csv';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
};
document.getElementById('btn_serialPeekJSON').onclick = function() {
    var datas = document.getElementById('input_serialChartJSONheaders').value;
    datas += '\n' + document.getElementById('inputSerialPeek').value;
    datas = datas.replaceAll(' -> ', ';');
    datas = datas.replaceAll('\n<br>', ';');
    // cut off last text
    datas = datas.slice(0, datas.indexOf('stop') - 1);
    var lines = datas.split("\n");
    var result = [];
    var headers = lines[0].split(";");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(";");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    let dataStr = JSON.stringify(result, null, 2);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = 'data.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
};
document.getElementById('btn_serialChart').addEventListener('click', () => {
    if (!graph) {
        document.getElementById('serialPeek').style.width = '120px';
        document.getElementById('serialGraphWindow').style.display = 'table-cell';
        document.getElementById('btn_serialChart').classList.add('active');
        graph = true;
    } else {
        document.getElementById('serialPeek').style.width = '100%';
        document.getElementById('serialGraphWindow').style.display = 'none';
        document.getElementById('btn_serialChart').classList.remove('active');
        graph = false;
    }
});
document.getElementById('input_serialChartZoomMin').addEventListener('change', () => {
    Code.chart.options.scales.y.suggestedMin = parseInt(document.getElementById("input_serialChartZoomMin").value);
    Code.chart.update();
});
document.getElementById('input_serialChartZoomMax').addEventListener('change', () => {
    Code.chart.options.scales.y.suggestedMax = parseInt(document.getElementById("input_serialChartZoomMax").value);
    Code.chart.update();
});
// helper function to get a nicely formatted date string
function getDateString() {
    var now = new Date();
    return (('0' + now.getHours()).slice(-2) + ":" + ('0' + now.getMinutes()).slice(-2) + ":" + ('0' + now.getSeconds()).slice(-2));
}