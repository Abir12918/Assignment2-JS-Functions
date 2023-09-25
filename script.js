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