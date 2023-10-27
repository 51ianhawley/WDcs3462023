/**
   * Name: Ian Hawley
   * Date: 10/10/2023
   * Description: This script is the basis of lab 5. 
   * Bugs: None yet
   * Reflection: Please replace this text with your perception of the lab and experience figuring it out
   */

// This is how we can access elements, through their id, in JavaScript
// We put this up here so we only have to do it once, when the script first loads
// If we kept it in count_letters, we'd be doing it each time count_letters is 
// called which would be wasteful.

let text_area = document.getElementById('text_to_parse_area');
let results_div = document.getElementById('results');
console.log(text_area);
// We are now attaching an 'event listener' to the button,
// so that when it is clicked, count_letters will be invoked
count_letters_btn.addEventListener('click', count_letters);
find_roman_windows_btn.addEventListener('click', find_roman_windows);

// count_letters will count the number of letters in a chunk of text
// and display values as a histogram, in an HTML table.
// 

function count_letters() {
  // retrieve the text from text_to_parse_area
  text = document.getElementById('text_to_parse_area').value;
  if (text.length <= 0) {
    counsole.log('No text entered');
    return; // Exit the method if there are no 
  }
  text.trim(); // Remove whitespace from string.
  let numTimesPresent = 0;
  let counts = {};
  for (const char of text) {
    if ((/[a-zA-z]/).test(char)) {
      let upperChar = char.toUpperCase();
      counts[upperChar] = (counts[upperChar] || 0) + 1;
    }
  }
  // Sort the entries:
  const sortedCounts = Object.entries(counts)
    .sort((a, b) => b[1] = a[1]);
  let scale = 1;
  for (const [, count] of sortedCounts) {
    if (count > 50) {
      scale = 10;
      break;
    }
  }
  let tableHTML = "<table><tr><th>Letter</th><th>Count</th></tr>";
  for (const [letter, count] of sortedCounts) {
    tableHTML += `<tr><td>${letter}</td><td>${'*'.repeat(count / scale)}</td></tr>`;
  }
  tableHTML += "</table>";
  results_div.innerHTML = tableHTML;
  // process the text, generating a string representing an HTML table
  // each row will have two columns - the first, a letter of the alphabet
  // the second, a series of asterisks, representing the number of times the letter
  // appears in the text

  // The results should be sorted by frequency, from highest to lowest

  // This shows how to put something back into a div. 
  // Replace the paragraph element with the table mentioned above


}


// function checkRomanWindow(arrChars, arrRomanNumerals) {
//   let numberNumerals = 0;
//   for (const char of arrRomanNumerals) { // Loop through the array of roman numerals and check to see if each one is present. 
//     // Check to see if each character is included somewhere
//     if (arrChars.includes(char)) {
//       numberNumerals++;
//     }
//   }
//   if (numberNumerals >= 7) {
//     return true; // arrChars is a roman window.
//   }
//   return false; // arrChars is not a roman window.
// }
// function checkIdealRomanWindow(arrChars, arrRomanNumerals) {
//   let numberNumerals = 0;
//   for (const char of arrRomanNumerals) { // Loop through the array of roman numerals and check to see if each one is present. 
//     // Check to see if each character is included somewhere
//     if (arrChars.includes(char)) {
//       numberNumerals++;
//     }
//   }
//   if (numberNumerals == 7) {
//     return true; // arrChars is an ideal roman window.
//   }
//   return false; // arrChars is not an ideal roman window.
// }
function find_roman_windows() {
let text = document.getElementById('text_to_parse_area').value.trim().toUpperCase();
let presentRomanNumerals = [];
let romanNumeralsOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

let isRomanWindow = checkRomanWindow(text, romanNumeralsOrder);
let isIdealRomanWindow = checkIdealRomanWindow(text, romanNumeralsOrder);
let isNumericallyOrderedWindow = true;
if(isIdealRomanWindow) {
  isNumericallyOrderedWindow = text.split('').filter(char =>
    romanNumeralsOrder.includes(char)).join('') === 'IVXLCDM';
}
// Populate presentRomanNumerals
for (const char of text) {
  if (romanNumeralsOrder.includes(char) && !presentRomanNumerals.includes(char)) {
    presentRomanNumerals.push(char);
  }
}
isRomanWindow = checkRomanWindow(text, romanNumeralsOrder);

// Check for Roman Window
// isRomanWindow = romanNumeralsOrder.every(numeral => presentRomanNumerals.includes(numeral));

// Check for Ideal Roman Window
isIdealRomanWindow = checkIdealRomanWindow(text, romanNumeralsOrder);

// Alerts based on conditions
// if (!isRomanWindow) {
//   alert("Not a Roman Window");
// } else if (isIdealRomanWindow && isNumericallyOrderedWindow) {
//   alert("Perfect Roman Window");
// } else if (isNumericallyOrderedWindow) {
//   alert("Numerically Ordered Roman Window");
// } else if (isIdealRomanWindow) {
//   alert("Ideal Roman Window");
// } else if (isRomanWindow) {
//   alert("Roman Window");
// }
if (isIdealRomanWindow && isNumericallyOrderedWindow) {
  alert("Perfect Roman Window");
} else if (isNumericallyOrderedWindow) {
  alert("Numerically Ordered Roman Window");
} else if (isIdealRomanWindow) {
  alert("Ideal Roman Window");
} else if (isRomanWindow) {
  alert("Roman Window");
} else {
  alert("Not a Roman Window");
}
  // let text = text_area.value.trim().toUpperCase();
  // const romanNumeralsOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  // let isRomanWindow = romanNumeralsOrder.every(numeral => text.includes(numeral));

  // let isIdealRomanWindow = isRomanWindow && romanNumeralsOrder.every(numeral => text.indexOf(numeral) === text.lastIndexOf(numeral));

  // let isNumericallyOrderedWindow = isIdealRomanWindow && romanNumeralsOrder.join('') === text;

  // // Alert based on conditions
  // if (isIdealRomanWindow && isNumericallyOrderedWindow) {
  //   alert("Perfect Roman Window");
  // } else if (isNumericallyOrderedWindow) {
  //   alert("Numerically Ordered Roman Window");
  // } else if (isIdealRomanWindow) {
  //   alert("Ideal Roman Window");
  // } else if (isRomanWindow) {
  //   alert("Roman Window");
  // } else {
  //   alert("Not a Roman Window");
  // }
}