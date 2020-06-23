var SERVER_PORT = 8443;
var serviceVersion = 1;
var serviceURI = "STudio4Education";
var ssid = "STudio4Education";
var password = "arrowhead";

var serviceRegistry_addr = "http://arrowhead.tmit.bme.hu:8442";
var serviceDefinition = "Studio4Education";
var serviceInterface = "JSON_Insecure_S4E";
var systemName = "InsecureBlocklyInterface";

var XHR = new XMLHttpRequest();
var urlEncodedData = "";
var urlEncodedDataPairs = [];
var name;

function ArrowheadRegister() {
    document.getElementById('content_serial').style.color = '#00FF00';
    document.getElementById('content_serial').innerHTML = "connecting...";
}
