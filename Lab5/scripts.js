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

function find_roman_windows() {
  // retrieve text from text_to_parse_area
  // let romanWindow = {
  //   char: "",
  //   isRomanNumeral: false,

  // };
  let presentRomanNumerals = [];
  let isRomanWindow = false;
  let isIdealRomanWindow = false;
  text = document.getElementById('text_to_parse_area').value;

  // analyze the text and classify it as specified in the instructions
  text.trim(); // Trim off any whitespace.
  // Check for the 
  for (char of text) {
    char.toUpperCase(); // Make the char upper case by default.
    if ((/[a-zA-z]/).test(char)) {
      //TODO: Consider making sure there is an XOR in this logic so that if the conditions below are already met that the code can push characters that are already present.
      if (char == 'I' && !presentRomanNumerals.includes('I')) {
        presentRomanNumerals.push(char);
      }
      if (char == 'V' && !presentRomanNumerals.includes('V')) {
        presentRomanNumerals.push(char);
      }
      if (char == 'X' && !presentRomanNumerals.includes('X')) {
        presentRomanNumerals.push(char);
      }
      if (char == 'L' && !presentRomanNumerals.includes('L')) {
        presentRomanNumerals.push(char);
      }
      if (char == 'C' && !presentRomanNumerals.includes('C')) {
        presentRomanNumerals.push(char);
      }
      if (char == 'D' && !presentRomanNumerals.includes('D')) {
        presentRomanNumerals.push(char);
      }
      if (char == 'M' && !presentRomanNumerals.includes('M')) {
        presentRomanNumerals.push(char);
      }
    }
  }
  // Verify if the romand window is correct.
  // Check for roman window
  if (presentRomanNumerals.includes('I') &&
    presentRomanNumerals.includes('V') &&
    presentRomanNumerals.includes('X') &&
    presentRomanNumerals.includes('L') &&
    presentRomanNumerals.includes('C') &&
    presentRomanNumerals.includes('D') &&
    presentRomanNumerals.includes('M')) {
      isRomanWindow = true;
  }
  // Check for ideal roman window
  if(numberofOccurances('I') == 1 &&
    numberofOccurances('V') == 1 &&
    numberofOccurances('X') == 1 &&
    numberofOccurances('L') == 1 &&
    numberofOccurances('C') == 1 &&
    numberofOccurances('D') == 1 &&
    numberofOccurances('M') == 1) {
    
    isIdealRomanWindow = true;
  }
  // Check for perfect roman window

  // Check for ideal roman window

  // Check for 
  if (isRomanWindow) {
    if (isIdealRomanWindow == true && 
      isNumericallyOrderedWindow == true) {
      alert("Perfect Roman Window");
    } else if (isNumericallyOrderedWindow == true) {
      alert("Numerically Ordered Roman Window");
    } else if (isIdealRomanWindow == true) {
      alert("Ideal Roman Window");
    } else {
      alert("Roman Window");
    }
  } else {
    alert("Not a Roman Window");
  }
}
// Gets total of occurances of a char in an array.
function numberofOccurances(arrToCheck, charToFind) {
  let totalOccurances = 0;
  for (const char of arrToCheck) {
    if(char == charToFind) {
      totalOccurances++;
    }
  }
  return totalOccurances;
}