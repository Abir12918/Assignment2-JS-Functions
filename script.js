// Define the myEach function
function myEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// Callback function to print each element
function printElement(element) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `${element}<br>`;
}

// Function to process user input
function processInput() {
    const inputArray = document.getElementById('inputArray').value;
    const elements = inputArray.split(',').map(element => element.trim());

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    // Use myEach to print each element
    myEach(elements, printElement);
}

// Mahathir (includes())
function myIncludes(arr, target) {
    // Convert the target to lowercase for comparison
    const lowerTarget = String(target).toLowerCase();

    for (let i = 0; i < arr.length; i++) {
        // Convert each element to lowercase for comparison
        const lowerElement = String(arr[i]).toLowerCase();

        if (lowerElement === lowerTarget) {
            return true;
        }
    }

    return false;
}




function processIncludeInput() {
    const inputId = 'inputArray'; // Update to match the HTML ID
    const outputId = 'Includeoutput'; // Update to match the HTML ID

    const inputIncludeId = 'inputIncludeArray';

    const userInput = document.getElementById(inputId).value;
    const userArray = userInput.split(','); // Split by comma (keeping elements as strings)

    // Convert the target value to a string
    const targetValue = document.getElementById(inputIncludeId).value;

    // Check if the target value is included in the userArray
    const isIncluded = myIncludes(userArray, targetValue);

    const outputElement = document.getElementById(outputId);

    // Display just "true" or "false"
    outputElement.textContent = isIncluded.toString();
}