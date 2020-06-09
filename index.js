/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(string) {
  let splitString = string.split(":")
  let time = splitString[0]
  let newTime = parseInt(time, 10)

  if (newTime < 12) return "Good Morning"
  if (newTime > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting
}
