/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (time) {
  const splitTime = time.split(':')
  const hours = parseInt(splitTime[0])
  const minutes = parseInt(splitTime[1])
  let greeting = ""
  if (hours < 12) {
    greeting = "Good Morning"
  } else if (hours > 12 && hours < 17) {
    greeting = "Good Afternoon"
  } else {
    greeting = "Good Evening"
  }
  return greeting
}
/* Write your implementation of displayMessage() */

function displayMessage (string) {
  let element = document.getElementById('greeting')
  element.innerText = string
}