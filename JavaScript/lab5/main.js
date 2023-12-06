// Task one - Calculator

let num1 = 0;
let num2 = 0;
let operator = "";
let answer = 0;
let flag = false;

// function to get number
function EnterNumber(num) {
  if (flag == true) {
    document.getElementById("Answer").value = "";
    flag = false;
  }
  document.getElementById("Answer").value += num;
}

// function to get operator
function EnterOperator(op) {
  num1 = parseFloat(document.getElementById("Answer").value);
  operator = op;
  document.getElementById("Answer").value = "";
}

function EnterEqual() {
  num2 = parseFloat(document.getElementById("Answer").value);
  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
  }
  document.getElementById("Answer").value = answer;
  flag = true;
}

function EnterClear() {
  document.getElementById("Answer").value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  answer = 0;
}

// Task two - Form validation and Enter Table
// variables for each input
let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");

// RegEx
let regName = /^[a-zA-Z]{3,}$/; // at least 3 characters
let regAge = /^(1[89]|[2-5][0-9]|6[0-5])$/; // 18-65
let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // email validation

// function for test reg exp
function testReg(reg, value) {
  return reg.test(value);
}

// function to add clas or remove class
function addRemoveClass(element, addRemove, className) {
  //  console.log( element.parentElement.classList );
  if (addRemove) {
    element.parentElement.classList.add(className);
    element.style.backgroundColor = "red";
  } else {
    element.parentElement.classList.remove(className);
    element.style.backgroundColor = "white";
  }
}

function validateName() {
  if (testReg(regName, name.value)) {
    addRemoveClass(name, false, "nameValidate");
  } else {
    addRemoveClass(name, true, "nameValidate");
  }
}

function validateAge() {
  if (testReg(regAge, age.value)) {
    addRemoveClass(age, false, "ageValidate");
  } else {
    addRemoveClass(age, true, "ageValidate");
  }
}

function validateEmail() {
  if (testReg(regEmail, email.value)) {
    addRemoveClass(email, false, "emailValidate");
  } else {
    addRemoveClass(email, true, "emailValidate");
  }
}

// for submit form
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  validateName();
  validateAge();
  validateEmail();

  if (
    !name.parentElement.classList.contains("nameValidate") &&
    !age.parentElement.classList.contains("ageValidate") &&
    !email.parentElement.classList.contains("emailValidate")
  ) {
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdEmail = document.createElement("td");

    tdName.textContent = name.value;
    tdAge.textContent = age.value;
    tdEmail.textContent = email.value;

    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdEmail);

    tbody.appendChild(tr);

    name.value = "";
    age.value = "";
    email.value = "";
  }
});

// for reset form
function resetForm() {
  name.style.backgroundColor = "white";
  age.style.backgroundColor = "white";
  email.style.backgroundColor = "white";
  name.parentNode.classList.remove("nameValidate");
  age.parentNode.classList.remove("ageValidate");
  email.parentNode.classList.remove("emailValidate");

  console.log("reset");
}
