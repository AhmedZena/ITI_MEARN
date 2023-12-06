// function for displaying the current date
function displayDate() {
  //   date to local format
  document.getElementById("displayDate").innerHTML =
    new Date().toLocaleDateString();
}

// function for opening a new window half the size of the screen
function newWindowHalfSize() {
  // get the screen size
  var w = window.innerWidth;
  var h = window.innerHeight;

  // open a new window half the size of the screen
  window.open(
    "https://internal.iti.gov.eg/",
    "",
    "width=" + w / 2 + ",height=" + h / 2
  );
}

// open a new window with a counter
function newCounterWindow() {
  let counter = document.getElementById("counterTime").value;
  console.log(counter);

  let windowCounter = window.open(
    "counterWindow.html",
    "",
    "width=200,height=200,location=no,menubar=no,toolbar=no"
  );

  windowCounter.counter = parseInt(counter);
}

// function to check the input
function checkInput(input, regex) {
  if (regex.test(input)) {
    return true;
  } else {
    return false;
  }
}

// function to get the name
function getName() {
  let myName = prompt("Enter your name: ");
  let regName = /^[a-zA-Z]+$/;

  if (checkInput(myName, regName)) {
    return myName;
  } else {
    // alert("Please enter a valid name");
    return getName();
  }
}

// function to get the phone number
function getPhoneNumber() {
  let phoneNumber = prompt(
    "Mendatry Vodafone, Enter the 8 Numbers after 010: "
  );
  let regPhoneNumber = /^\d{8}$/;

  if (checkInput(phoneNumber, regPhoneNumber)) {
    return phoneNumber;
  } else {
    return getPhoneNumber();
  }
}

// function to get the mobile number
function getMobileNumber() {
  let mobileNumber = prompt(
    "Have another Number , Enter num phone begin with 010 or 011 or 012 or 015: "
  );
  let regMobileNumber = /^(010|011|012|015)\d{8}$/;

  if (checkInput(mobileNumber, regMobileNumber)) {
    return mobileNumber;
  } else {
    return getMobileNumber();
  }
}

// function to get the email
function getEmail() {
  let email = prompt("Enter your email: ");
  let regEmail = /^([A-Za-z]{3})+@{1}[0-9]{3}\.+com$/;

  if (checkInput(email, regEmail)) {
    return email;
  } else {
    return getEmail();
  }
}

// function to get the color
function takeColor() {
  return (color = prompt(
    "Enter your favorite color from the following colors: red, green, blue, yellow, pink, black, white, orange, purple, brown"
  ));
}

// function to display the info
function displayInfo() {
  let myName = getName();
  let phoneNumber = getPhoneNumber();
  let mobileNumber = getMobileNumber();
  let email = getEmail();
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let color = takeColor();
  document.body.style.backgroundColor = color;

  document.getElementById(
    "displayInfo"
  ).innerHTML = `<h2>Welcome ${myName}</h2> 
<p>Your phone number is ${phoneNumber}</p>
<p>Your another number is ${mobileNumber}</p>
<p>Your email is ${email}</p>
<p>Today is ${day}/${month}/${year}</p>
<p>Your favorite color is ${color}</p>`;

  document.getElementById("displayInfo").style.color = "white";
}

// function to change color and font
function changeColorBackAndFont(id, Bcolor, Fcolor) {
  document.getElementById(id).style.backgroundColor = Bcolor;
  document.getElementById(id).style.color = Fcolor;
}

// function to check even or odd
function checkEvenOdd() {
  let num1 = +document.getElementById("number1").value;
  let num2 = +document.getElementById("number2").value;
  let num3 = +document.getElementById("number3").value;
  let num4 = +document.getElementById("number4").value;
  let evenReg = /^[0-9]*[02468]{1}$/;

  //   check if the number is even or odd
  checkInput(num1, evenReg)
    ? changeColorBackAndFont("number1", "green", "white")
    : changeColorBackAndFont("number1", "red", "white");

  checkInput(num2, evenReg)
    ? changeColorBackAndFont("number2", "green", "white")
    : changeColorBackAndFont("number2", "red", "white");

  checkInput(num3, evenReg)
    ? changeColorBackAndFont("number3", "green", "white")
    : changeColorBackAndFont("number3", "red", "white");

  checkInput(num4, evenReg)
    ? changeColorBackAndFont("number4", "green", "white")
    : changeColorBackAndFont("number4", "red", "white");
}
