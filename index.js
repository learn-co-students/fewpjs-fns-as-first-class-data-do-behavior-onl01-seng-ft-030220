/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}
function greet(x) {
  const clockTime = parseInt(x, 10);
  if (clockTime < 12) return "Good Morning"
  if (clockTime > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
