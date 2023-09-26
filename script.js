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
    const inputArray = document.getElementById('inputArray1').value;
    const words = inputArray.split(',').map(word => word.trim());

    const filteredWords = myFilter(words, startsWithA);

    const outputDiv = document.getElementById('output1');

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
    const inputArray = document.getElementById('inputArray2').value;
    const numbers = inputArray.split(',').map((number) => parseFloat(number.trim()));

    const squares = myMap(numbers, squareNumber);

    const outputDiv = document.getElementById('output2');

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
    const outputDiv = document.getElementById('output3');
    outputDiv.innerHTML += `${element}<br>`;
}

// Function to process user input
function processInput() {
    const inputArray = document.getElementById('inputArray3').value;
    const elements = inputArray.split(',').map(element => element.trim());

    const outputDiv = document.getElementById('output3');
    outputDiv.innerHTML = ''; // Clear previous output

    // Use myEach to print each element
    myEach(elements, printElement);

}



function mySomeArrayInput() {
    const inputArray = document.getElementById("mySomeInputArray").value
    const inputElement = parseInt(document.getElementById("mySomeInputElement").value) // converts argument into a interger
    const elements = inputArray.split(',').map(function(item) {
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
function mySome(arr, callback, element) {

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], element)) {
            return true
        }
    }
    return false
}

function DoubleSalary(element, standard) {
    return element >= standard * 2
}






// plan to get user inputted set of arrays 
// do every math function, let their be a user inputted value
// the function itself will check if all of the values in the array work with the mathamatical operation

function myEveryArrayInput() {
    const inputArray = document.getElementById("myEveryInputArray").value
    const inputElement = parseInt(document.getElementById("myEveryInputElement").value) // converts argument into a interger
    const elements = inputArray.split(',').map(function(item) {
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
function myEvery(arr, callback, element) {

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], element) === false) {
            return false
        }
    }
    return true
}

function Years(element, standard) {
    return element > standard
}


//------------------------------
function myReduceArrayInput() {
    const inputArray = document.getElementById("myReduceInputArray").value
        // const inputElement = parseInt(document.getElementById("myEveryInputElement").value)// converts argument into a interger
    const elements = inputArray.split(',').map(function(item) {
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
function myReduce(arr, callback) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        value = Sum(arr[i], value)
    }
    return value
}

function Sum(element, sums) {
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

// Mahathir's Second function's funcs

function myIndexOf(arr, target) {
    const targetStr = String(target); // Convert the target to a string

    for (let i = 0; i < arr.length; i++) {
        const elementStr = String(arr[i]); // Convert each element to a string

        if (elementStr === targetStr) {
            return i; // Return the index of the first encounter
        }
    }
    return -1; // Element not found in the array
}

function printOutput(element) {
    const outputDiv = document.getElementById('output1');
    outputDiv.innerHTML += `${element}<br>`;
}

function indexOfInput() {
    const inputArray = document.getElementById('inputArray1').value;
    const elements = inputArray.split(',').map(element => element.trim());

    const outputDiv = document.getElementById('output1');
    outputDiv.innerHTML = ''; // Clear previous output

    // Use myEach to print each element
    myEach(elements, printOutput);
}



function processIndexInput() {
    const inputId = 'inputArray1';
    const outputId = 'Indexoutput';

    const inputIndexId = 'inputIndexArray';

    const userInput = document.getElementById(inputId).value;
    const userArray = userInput.split(','); // Splitting by comma 

    // Converting value to string again
    const targetValue = document.getElementById(inputIndexId).value;

    // Checking if target value is in userArray, if so return index
    const isIndexOf = myIndexOf(userArray, targetValue);
    const outputElement = document.getElementById(outputId);

    // Display the index
    outputElement.textContent = isIndexOf.toString();
}

// Mahathir's third function funcs 

function printTheOutput(element) {
    const outputDiv = document.getElementById('output2');
    outputDiv.innerHTML += `${element}<br>`;
}

function pushInput() {
    const inputArray = document.getElementById('inputArray2').value;
    const elements = inputArray.split(',').map(element => element.trim());

    const outputDiv = document.getElementById('output2');
    outputDiv.innerHTML = ''; // Clear previous output

    // Use myEach to print each element
    myEach(elements, printTheOutput);
}

function myPush(arr, elementToAdd) {
    // Get the current length of the array
    const currentLength = arr.length;

    // Assign the element to the next index
    arr[currentLength] = elementToAdd;

    // Print the updated array
    console.log(`Updated Array: [${arr.join(', ')}]`);

    // Return the updated array
    return arr;
}


function processPushInput() {
    const inputId = 'inputArray2';
    const outputId = 'Pushoutput';
    const joinElementId = 'inputPushArray';

    const userInput = document.getElementById(inputId).value;
    const userArray = userInput.split(','); // Splitting by comma 

    // Converting value to string again
    const targetValue = document.getElementById(joinElementId).value;

    // Use your custom myPush function to add the element
    const updatedArray = myPush(userArray, targetValue);

    const outputElement = document.getElementById(outputId);

    // Display the updated array (which now includes the added element)
    outputElement.textContent = `Updated Array: [${updatedArray.join(', ')}]`;
}
// End of Mahathir's functions


// Start of Muhammed's funcs
  
  function myLastIndexOf(arr, target) {
    // Start from end of the array.
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target) {
        return i; // Return the index if the target element is found.
      }
    }
    
    // Return -1 if the target element is not found in the array.
    return -1;
  }

  function grabKeys(obj) {
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

  function grabValues(obj) {
    const values = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  }

  function ValueInputs() {
    const inputid = 'inputArray';
    const outputid = 'outputvalue';
    const inputTargetid = 'inputTarget';

    const user_input = document.getElementById(inputid).value;
    const user_array = user_input.split(',');

    // Convert each element of the user_array to a number
    const user_array_numbers = user_array.map(Number);

    const target_value = +document.getElementById(inputTargetid).value;

    const islastindex = myLastIndexOf(user_array_numbers, target_value);

    const output_element = document.getElementById(outputid);

    output_element.textContent = islastindex.toString();
}


function getKeys() {
  const inputText = document.getElementById("inputObject").value;

  try {
      const inputObject = JSON.parse(inputText);
      const keys = grabKeys(inputObject);

      const outputElement = document.getElementById("outputKeys");
      outputElement.textContent = `Keys: ${keys.join(', ')}`;
  } catch (error) {
      const outputElement = document.getElementById("outputKeys");
      outputElement.textContent = "Invalid JSON input. Please enter a valid JSON object.";
  }
}

function getValue() {
  const inputText = document.getElementById("inputObject").value;

  try {
      const inputObject = JSON.parse(inputText);
      const keys = grabValues(inputObject);

      const outputElement = document.getElementById("outputValues");
      outputElement.textContent = `Values: ${keys.join(', ')}`; 
  } catch (error) {
      const outputElement = document.getElementById("outputValues");
      outputElement.textContent = "Invalid JSON input. Please enter a valid JSON object.";
  }
}
