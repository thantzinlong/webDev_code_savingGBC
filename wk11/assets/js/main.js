alert("Everything is Awesome");

let name = prompt("Enter your name");
let user_wish = confirm("Do you want to continue?");

let num1 = 7;
let num2 = 8;
let num3 = 9;
let firstName = "Thant";
let lastName = "Win";
const age = 34;
const flag = true;

if (age <= 34) {
  console.log("My first name is: " + firstName);
  document.write("My first name is: " + firstName + "<br>");
  console.log("My last name is: " + lastName);
  document.write("My last name is: " + lastName + "<br>");
  console.log("My age is : less than or equal to 34");
  document.write("My age is : less than or equal to 34" + "<br>");
} else {
  console.log("My age is : more than 34");
  document.write("My age is : more than 34");
}
if (flag == true) {
  document.getElementById("ID3").innerText = "Introduction to Web Development";
}
