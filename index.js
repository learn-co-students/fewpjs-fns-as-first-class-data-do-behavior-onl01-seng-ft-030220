/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(string) {
  let splitString = string.split(":")
  let time = splitString[0]
  let newTime = parseInt(time, 10)

  if (time < 12) return "Good Morning"
  if (newTime > 17) return "Good Evening"
  return "Good Afternoon"
}


/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}