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
  