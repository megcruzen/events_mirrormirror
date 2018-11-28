// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// 1. Create an input field in your DOM. Give it an id of message.
// 2. Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// 3. Give each article a different border color.
// 4. Write an event listener that listens for the keyup event on the input field.
// 5. The event handler function should update the textContent property of both sections.


let messageOutput = document.getElementsByClassName("output"); // Makes a LIST of the elements with .output
console.log(messageOutput);

let messageInput = document.getElementById("message"); // Grabs the element with #message

for (let i = 0; i < messageOutput.length; i++) {
messageInput.addEventListener("keyup", function (event) {
    messageOutput[i].innerHTML = event.target.value;
})
}

