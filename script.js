// Define the myFilter function
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
          result.push(arr[i]);
      }
  }
  return result;
}

// Callback function to filter words that start with 'A'
function startsWithA(word) {
  return word.charAt(0).toLowerCase() === 'a';
}

// Function to filter words and display the result
function filterWords() {
  const inputArray = document.getElementById('inputArray').value;
  const words = inputArray.split(',').map(word => word.trim());

  const filteredWords = myFilter(words, startsWithA);

  const outputDiv = document.getElementById('output');

  // Display the filtered words as an array
  outputDiv.textContent = `Filtered words: [${filteredWords.join(', ')}]`;
}

//Define the myMap function
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Callback function to square a number
const squareNumber = (number) => number * number;

// Function to calculate squares and display the result as an array
const calculateSquares = () => {
    const inputArray = document.getElementById('inputArray').value;
    const numbers = inputArray.split(',').map((number) => parseFloat(number.trim()));

    const squares = myMap(numbers, squareNumber);

    const outputDiv = document.getElementById('output');

    // Format the result as an array and display it
    outputDiv.textContent = `The square array is [${squares.join(', ')}]`;
};



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
  