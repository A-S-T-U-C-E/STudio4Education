/**
 * function about Arrowhead config modals
 **/
function ArrowheadServRegConfigurationShow() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('ArrowheadServRegConfigurationModal').classList.add('show');
    window.addEventListener('click', ArrowheadServRegConfigurationShowHide, 'once');
};
document.getElementById("closeModalArrowheadServRegConfiguration").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('ArrowheadServRegConfigurationModal').classList.remove('show');
};

function ArrowheadServRegConfigurationShowHide(event) {
    if (document.getElementById('ArrowheadServRegConfigurationModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('ArrowheadServRegConfigurationModal').classList.remove('show');
    }
};

function ArrowheadProviderConfigurationShow() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('ArrowheadProviderConfigurationModal').classList.add('show');
    window.addEventListener('click', ArrowheadProviderConfigurationShowHide, 'once');
};
document.getElementById("closeModalArrowheadProviderConfiguration").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('ArrowheadProviderConfigurationModal').classList.remove('show');
};

function ArrowheadProviderConfigurationShowHide(event) {
    if (document.getElementById('ArrowheadProviderConfigurationModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('ArrowheadProviderConfigurationModal').classList.remove('show');
    }
};

function ArrowheadConsumerConfigurationShow() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('ArrowheadConsumerConfigurationModal').classList.add('show');
    window.addEventListener('click', ArrowheadConsumerConfigurationShowHide, 'once');
};
document.getElementById("closeModalArrowheadConsumerConfiguration").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('ArrowheadConsumerConfigurationModal').classList.remove('show');
};

function ArrowheadConsumerConfigurationShowHide(event) {
    if (document.getElementById('ArrowheadConsumerConfigurationModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('ArrowheadConsumerConfigurationModal').classList.remove('show');
    }
};

function ArrowheadAuthConfigurationShow() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('ArrowheadAuthConfigurationModal').classList.add('show');
    window.addEventListener('click', ArrowheadAuthConfigurationShowHide, 'once');
};
document.getElementById("closeModalArrowheadAuthConfiguration").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('ArrowheadAuthConfigurationModal').classList.remove('show');
};

function ArrowheadAuthConfigurationShowHide(event) {
    if (document.getElementById('ArrowheadAuthConfigurationModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('ArrowheadAuthConfigurationModal').classList.remove('show');
    }
};

function ArrowheadOrchConfigurationShow() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('ArrowheadOrchConfigurationModal').classList.add('show');
    window.addEventListener('click', ArrowheadOrchConfigurationShowHide, 'once');
};
document.getElementById("closeModalArrowheadOrchConfiguration").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('ArrowheadOrchConfigurationModal').classList.remove('show');
};

function ArrowheadOrchConfigurationShowHide(event) {
    if (document.getElementById('ArrowheadOrchConfigurationModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('ArrowheadOrchConfigurationModal').classList.remove('show');
    }
};

/**
 * Checks that an element has a non-empty `name` and `value` property.
 * @param  {Element} element  the element to check
 * @return {Bool}             true if the element is an input, false if not
 */
const isValidElement = element => {
    return element.name && element.value;
};

/**
 * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the value should be added, false if not
 */
const isValidValue = element => {
    return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

/**
 * Checks if an input is a checkbox, because checkboxes allow multiple values.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a checkbox, false if not
 */
const isCheckbox = element => element.type === 'checkbox';

/**
 * Checks if an input is a `select` with the `multiple` attribute.
 * @param  {Element} element  the element to check
 * @return {Boolean}          true if the element is a multiselect, false if not
 */
const isMultiSelect = element => element.options && element.multiple;

/**
 * Retrieves the selected options from a multi-select as an array.
 * @param  {HTMLOptionsCollection} options  the options for the select
 * @return {Array}                          an array of selected option values
 */
const getSelectValues = options => [].reduce.call(options, (values, option) => {
    return option.selected ? values.concat(option.value) : values;
}, []);

/**
 * A more verbose implementation of `formToJSON()` to explain how it works.
 *
 * NOTE: This function is unused, and is only here for the purpose of explaining how
 * reducing form elements works.
 *
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON_deconstructed = elements => {

    // This is the function that is called on each element of the array.
    const reducerFunction = (data, element) => {

        // Add the current field to the object.
        data[element.name] = element.value;

        // For the demo only: show each step in the reducer’s progress.
        console.log(JSON.stringify(data));

        return data;
    };

    // This is used as the initial value of `data` in `reducerFunction()`.
    const reducerInitialValue = {};

    // To help visualize what happens, log the inital value, which we know is `{}`.
    console.log('Initial `data` value:', JSON.stringify(reducerInitialValue));

    // Now we reduce by `call`-ing `Array.prototype.reduce()` on `elements`.
    const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);

    // The result is then returned for use elsewhere.
    return formData;
};

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {

    // Make sure the element has the required properties and should be added.
    if (isValidElement(element) && isValidValue(element)) {

        /*
         * Some fields allow for more than one value, so we need to check if this
         * is one of those fields and, if so, store the values as an array.
         */
        if (isCheckbox(element)) {
            data[element.name] = (data[element.name] || []).concat(element.value);
        } else if (isMultiSelect(element)) {
            data[element.name] = getSelectValues(element);
        } else {
            data[element.name] = element.value;
        }
    }

    return data;
}, {});

/**
 * A handler function to prevent default submission and run our custom script.
 * @param  {Event} event  the submit event triggered by the user
 * @return {void}
 */
const handleFormSubmit = event => {
    event.preventDefault();
    const data = formToJSON(document.getElementById(event.target.id).elements);
    const dataContainer = JSON.stringify(data, null, "  ");
    sessionStorage.setItem(event.target.id, dataContainer);
};

/*
 * Attach the `handleFormSubmit()` function to the `submit` event.
 */
document.getElementById('ArrowheadServRegConfigurationModalForm').addEventListener('submit', handleFormSubmit);
document.getElementById('ArrowheadProviderConfigurationModalForm').addEventListener('submit', handleFormSubmit);
document.getElementById('ArrowheadConsumerConfigurationModalForm').addEventListener('submit', handleFormSubmit);
document.getElementById('ArrowheadAuthConfigurationModalForm').addEventListener('submit', handleFormSubmit);
document.getElementById('ArrowheadOrchConfigurationModalForm').addEventListener('submit', handleFormSubmit);

/*
 * WIP
 */
function importArrowheadConfigFile() {
    // Create event listener function
    var parseInputXMLfile = function(e) {
        var files = e.target.files;
        var reader = new FileReader();
        reader.onloadend = function() {
            // Destroyihng the element after being clicked
            var success = false;
            if (reader.result != null) {
                // complete form with reader.result;
                success = true;
            }
            if (success) {
                // Code.mainWorkspace.render();
            } else {
                Blockly.alert(MSG['badXml'], callback);
            }
        };
        reader.readAsText(files[0]);
    };
    // Create once invisible browse button with event listener, and click it
    var selectFile = document.getElementById('select_file');
    if (selectFile === null) {
        var selectFileDom = document.createElement('INPUT');
        selectFileDom.type = 'file';
        selectFileDom.id = 'select_file';
        selectFileDom.accept = '.json';
        selectFileDom.style.display = 'none';
        document.body.appendChild(selectFileDom);
        selectFile = document.getElementById('select_file');
        selectFile.addEventListener('change', parseInputXMLfile, false);
    }
    selectFile.onclick = function destroyClickedElement(event) {
        document.body.removeChild(event.target);
    };
    selectFile.click();
    // complete form with dataToImport
}

function exportArrowheadConfigFile() {
    var dataToSave = handleFormSubmit();
    var blob = new Blob([dataToSave], {
        type: 'text/xml;charset=utf-8'
    });
    Blockly.prompt(MSG['save_span'], document.getElementById('sketch_name').value, function(fileNameSave) {
        if (fileNameSave) {
            var fakeDownloadLink = document.createElement("a");
            fakeDownloadLink.download = fileNameSave + ".json";
            fakeDownloadLink.href = window.URL.createObjectURL(blob);
            fakeDownloadLink.onclick = function destroyClickedElement(event) {
                document.body.removeChild(event.target);
            };
            fakeDownloadLink.style.display = "none";
            document.body.appendChild(fakeDownloadLink);
            fakeDownloadLink.click();
        }
    });
}

/**
 * A download file function to import config from Papyrus SysML model.
 * @param  fileUrl: string name of the file to download
 * @param  outputLocationPath: string location where file is automatically saved
 * @return {void}
 **/
async function downloadFile(fileUrl, outputLocationPath) {
    const writer = createWriteStream(outputLocationPath);
    return Axios({
        method: 'get',
        url: fileUrl,
        responseType: 'stream',
    }).then(response => {
        return new Promise((resolve, reject) => {
            response.data.pipe(writer);
            let error = null;
            writer.on('error', err => {
                error = err;
                writer.close();
                reject(err);
            });
            writer.on('close', () => {
                if (!error) {
                    resolve(true);
                }
            });
        });
    });
}