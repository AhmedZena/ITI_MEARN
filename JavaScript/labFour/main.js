/// task 1
function sumOfTwoNumbers(a, b) {
  return parseInt(a) + parseInt(b);
}

function myFunction() {
  let a = prompt("Enter a number");
  let b = prompt("Enter another number");
  let sum = sumOfTwoNumbers(a, b);
  console.log("The sum of " + a + " and " + b + " is " + sum);
}

/// task 2
function lessThan100() {
  let a = prompt("Enter a number");
  let b = prompt("Enter another number");
  let sum = sumOfTwoNumbers(a, b);
  if (sum < 100) {
    console.log("True");
  } else {
    console.log("False");
  }
}

/// task 3
function toNumber() {
  let string = prompt("Enter a number");
  let number = Number(string);
  console.log(number);
}

/// task 4
function createStarts() {
  let stars = "";
  for (let i = 0; i < 6; i++) {
    stars += "*";
    console.log(stars);
  }
}

/// task 5
let string = "webmaster";
function sortString() {
  let string = prompt("Enter a string");
  let sortedString = string.split("").sort().join("");
  console.log(sortedString);
}

// task 6 skills are in the html file

let skills = ["HTML", "CSS", "JavaScript"];

function displaySkills() {
  let skillsParent = document.getElementsByClassName("skills")[0];
  let skillsList = document.createElement("ul");
  skillsList.className = "skills-list";
  //   console.log(skillsList);
  for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  }

  // delete any list when clicked
  skillsList.addEventListener("click", function (e) {
    e.target.remove();
  });

  // add a new skill from input
  let inputEnter = document.createElement("input");
  inputEnter.type = "text";
  inputEnter.placeholder = "Enter a skill";
  inputEnter.className = "input-skill";

  inputEnter.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      let newSkill = document.createElement("li");
      newSkill.innerText = inputEnter.value;
      skillsList.appendChild(newSkill);
      inputEnter.value = "";
    }
  });
  skillsParent.appendChild(skillsList);
  skillsParent.appendChild(inputEnter);
}

displaySkills();

let t = document.getElementById("t");
