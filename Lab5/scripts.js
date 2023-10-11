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
  text = document.getElementById('text_to_parse_area').value;

  // analyze the text and classify it as specified in the instructions
  text.trim(); // Trim off any whitespace.
  

  alert("This is a test, this is only a test"); // displays output
}