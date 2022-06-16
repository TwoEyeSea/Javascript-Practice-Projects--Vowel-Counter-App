// Defining html elements as constants in JavaScript
const inputField = document.querySelector(".checker_input");
const checkButton = document.querySelector(".check_button");
const appForm = document.querySelector(".app_form");

appForm.addEventListener("submit", (e) => {
  //Define the input field value as a constant
  const inputString = inputField.value;
  //Use the function "stringToArray" to convert the inputString to an array
  const array = stringToArray(inputString);

  e.preventDefault();
  if (!inputString) {
    alert("Please enter a string to check.");
  }

  alert(`There are ${vowelCheck(array)} vowels in the string "${inputString}"`);

  inputField.value = "";
});

// Functions
// Function to convert the input string to an array

function stringToArray(input) {
  return [...input];
}

function vowelCheck(array) {
  let amount = 0;
  for (let element of array) {
    let toAdd = false;
    for (let i = 0; i < array.length; i++)
      if (
        element === "a" ||
        element === "e" ||
        element === "i" ||
        element === "o" ||
        element === "u" ||
        element === "y"
      )
        toAdd = true;
    if (toAdd) amount++;
  }
  return amount;
}

// ** vowelCheck function using an array to store each vowel and then checking the array.length to count the number of vowels

// Function to
// function vowelCheck(array) {
//   let amount = [];
//   for (let element of array) {
//     let toAdd = false;
//     for (let i = 0; i < array.length; i++)
//       if (
//         element === "a" ||
//         element === "e" ||
//         element === "i" ||
//         element === "o" ||
//         element === "u" ||
//         element === "y"
//       )
//         toAdd = true;
//     if (toAdd) amount.push(element);
//   }
//   console.log(amount.length);
// }

// Constant to represent the inputStringArray

const testArray = ["a", "b", "c", "d", "e", "o"];
vowelCheck(testArray);
