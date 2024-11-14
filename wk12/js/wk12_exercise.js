let yourName = prompt("Enter your Name Please :");

let stID = prompt("Enter your Student ID Please :");

let inputNum = parseInt(prompt("Enter a number :"));

document.write("<strong>My name is:</strong> " + yourName + "<br>");
document.write("<strong>My Student ID is:</strong>  " + stID + "<br>");

while (true) {
  if (isNaN(inputNum) || inputNum == null) {
    alert("Please enter a valid number");
    inputNum = parseInt(prompt("Enter a number : "));
  } else if (inputNum < 1 || inputNum > 9) {
    alert("Please enter a number between 1 and 9");
    inputNum = parseInt(prompt("Enter a number : "));
  } else {
    break;
  }
}

for (let i = 1; i <= inputNum; i++) {
  let output = "" ;
  for (let j = 1; j <= i; j++) {
    output += j;
  }
  document.write(output + "<br>");
}
