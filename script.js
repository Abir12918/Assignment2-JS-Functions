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

  

function mySomeArrayInput(){
  const inputArray = document.getElementById("mySomeInputArray").value
  const inputElement = parseInt(document.getElementById("mySomeInputElement").value)// converts argument into a interger
  const elements = inputArray.split(',').map(function(item){
    return parseInt(item)
  }) // seperates values based on ',', then is converted into a int, finally placed into array

  const outputDiv = document.getElementById('mySomeOutput');
  // console.log(elements)

  // console.log(inputElement)
  outputDiv.innerHTML = ''; // Clear previous output
  const results = mySome(elements, DoubleSalary, inputElement) 
  outputDiv.innerHTML = `${results}` // results are placed into the a div, innerHTML allows access what value can be placed into the div. `${}` helps place the values into a HTML 

}

// three parameters. first is the array inputted by the users, second is the callback function which can be anything that will check for contrainst in the array, third is an value that can change the contranist on the callback function 
function mySome(arr, callback, element){

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], element)) {
        return true      
    }
  }
  return false      
}

function DoubleSalary(element, standard ){
  return element >=standard*2
}






// plan to get user inputted set of arrays 
// do every math function, let their be a user inputted value
// the function itself will check if all of the values in the array work with the mathamatical operation

function myEveryArrayInput(){
  const inputArray = document.getElementById("myEveryInputArray").value
  const inputElement = parseInt(document.getElementById("myEveryInputElement").value)// converts argument into a interger
  const elements = inputArray.split(',').map(function(item){
    return parseInt(item)
  }) // seperates values based on ',', then is converted into a int, finally placed into array

  const outputDiv = document.getElementById('myEveryOutput');
  // console.log(elements)

  // console.log(inputElement)
  outputDiv.innerHTML = ''; // Clear previous output
  const results = myEvery(elements, Years, inputElement) 
  outputDiv.innerHTML = `${results}` // results are placed into the a div, innerHTML allows access what value can be placed into the div. `${}` helps place the values into a HTML 

}

// three parameters. first is the array inputted by the users, second is the callback function which can be anything that will check for contrainst in the array, third is an value that can change the contranist on the callback function 
function myEvery(arr, callback, element){

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], element) === false) {
        return false      
    }
  }
  return true      
}

function Years(element, standard){
  return element > standard
}


//------------------------------
function myReduceArrayInput(){
  const inputArray = document.getElementById("myReduceInputArray").value
  // const inputElement = parseInt(document.getElementById("myEveryInputElement").value)// converts argument into a interger
  const elements = inputArray.split(',').map(function(item){
    return parseFloat(item)
  }) // seperates values based on ',', then is converted into a int, finally placed into array

  const outputDiv = document.getElementById('myReduceOutput');
  // console.log(elements)

  // console.log(inputElement)
  outputDiv.innerHTML = ''; // Clear previous output
  const results = myReduce(elements, Sum) 
  outputDiv.innerHTML = `${results}` // results are placed into the a div, innerHTML allows access what value can be placed into the div. `${}` helps place the values into a HTML 

}

// three parameters. first is the array inputted by the users, second is the callback function which can be anything that will check for contrainst in the array, third is an value that can change the contranist on the callback function 
function myReduce(arr, callback){
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    value = Sum(arr[i],value)
  }
  return value 
}

function Sum(element, sums)
{
  return element + sums
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