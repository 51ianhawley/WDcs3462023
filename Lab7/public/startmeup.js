/**
*
* Name:
* Date:
* Description:
* Bugs:
* Reflection:
*
*/

// Configure the button
let fetcherama = document.getElementById('fetcherama');
fetcherama.addEventListener('click', fetchActor);

/**  This method uses promises  */
function fetchActor() {
    const url = 'https://lab-7-spelling-bee-redux.web-dev-f23.repl.co/actor';
    fetch(url)    // reach out to ther server ...
        .then(response => {        // called asynchronously
            if (!response.ok) {    // did everything work out?
                throw new Error('Network response was not ok');    // ... nope
            }
            return response.json(); // ... Yup, so convert response body to a JS object
        })
        .then(data => { // data is the JavaScript object returned in the previous then()
            try {
                alert('JSON data: ' + JSON.stringify(data)); // converts JS  back to a string
                // Now we have data from the server, a JS object, let's work with it
                // You could do everything here or ... call another function. Decisions, decisions
            } catch (error) {
                console.error('JSON Parsing Error:', error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}