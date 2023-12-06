let result = document.getElementById("result");

// task 1 count e's in string
function countE() {
  let str = prompt("Enter a string: ");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "e") {
      count++;
    }
  }
  console.log("There are " + count + " e's in " + str);
  result.innerHTML = "There are " + count + " e's in " + str;
}

// task 2 check if string is palindrome

function palindrome() {
  let str = prompt("Enter a string: ");
  let caseSensitive = confirm("Do you want to consider case sensitivity?");
  let str2 = "";
  if (caseSensitive) {
    str2 = str;
  } else {
    str2 = str.toLowerCase();
  }
  let str3 = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    str3 += str2.charAt(i);
  }
  if (str2 === str3) {
    console.log(str + " is a palindrome");
    result.innerHTML = str + " is a palindrome";
  } else {
    console.log(str + " is not a palindrome");
    result.innerHTML = str + " is not a palindrome";
  }
}

// with built in functions
function palindrome2() {
  let str = prompt("Enter a string: ");
  let caseSensitive = confirm("Do you want to consider case sensitivity?");
  let str2 = "";
  if (caseSensitive) {
    str2 = str;
  } else {
    str2 = str.toLowerCase();
  }
  let str3 = str2.split("").reverse().join("");
  if (str2 === str3) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
}

// task 3 make some math operations

function mathOps() {
  let num1 = parseInt(prompt("Enter a number: "));
  let num2 = parseInt(prompt("Enter a number: "));
  let num3 = parseInt(prompt("Enter a number: "));
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let quotient = num1 / num2 / num3;
  console.log(
    "The sum of " + num1 + ", " + num2 + ", and " + num3 + " is " + sum
  );
  console.log(
    "The product of " + num1 + ", " + num2 + ", and " + num3 + " is " + product
  );
  console.log(
    "The quotient of " +
      num1 +
      ", " +
      num2 +
      ", and " +
      num3 +
      " is " +
      quotient
  );
  result.innerHTML = `The sum of ${num1}, ${num2}, and ${num3} is ${sum} <br>
  The product of ${num1}, ${num2}, and ${num3} is ${product} <br>
  The quotient of ${num1}, ${num2}, and ${num3} is ${quotient}`;
}

// task 4 sort an array of numbers

function sortArray() {
  let num1 = parseInt(prompt("Enter a number: "));
  let num2 = parseInt(prompt("Enter a number: "));
  let num3 = parseInt(prompt("Enter a number: "));
  let num4 = parseInt(prompt("Enter a number: "));
  let num5 = parseInt(prompt("Enter a number: "));

  let arr = [num1, num2, num3, num4, num5];
  console.log("The array is: " + arr);
  result.innerHTML = "The array is: " + arr;
  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log("The array sorted in ascending order is: " + sortedArr);
  result.innerHTML +=
    "<br> The array sorted in ascending order is: " + sortedArr;

  let sortedArr2 = arr.sort(function (a, b) {
    return b - a;
  });
  console.log("The array sorted in descending order is: " + sortedArr2);
  result.innerHTML +=
    "<br> The array sorted in descending order is: " + sortedArr2;
}

// task 5 calculate area of a circle function
function calculateArea() {
  let radius = parseInt(prompt("Enter a radius: "));
  let area = Math.PI * radius * radius;
  console.log("The area of a circle with radius " + radius + " is " + area);
  result.innerHTML = `The area of a circle with radius ${radius} is ${area}`;
}

// task 6 calculate square root of a number
function calculateSquareRoot() {
  let num = parseInt(prompt("Enter a number: "));
  let sqrt = Math.sqrt(num);
  result.innerHTML = `The square root of ${num} is ${sqrt}`;
  setTimeout(function () {
    alert("The square root of " + num + " is " + sqrt);
  }, 1000);
}

// task 7 calculate cos of a number
function calculateCos() {
  console.log(Math.cos(Math.PI));
  const degree = 60;
  console.log("cos(" + degree + ") = " + Math.cos((Math.PI * degree) / 180));
  let num = parseInt(prompt("Enter a number: "));
  //    convert to radians
  num = (num * Math.PI) / 180;
  let cos = Math.cos(num);
  result.innerHTML = `The cosine of ${num} is ${cos}`;
  setTimeout(function () {
    alert("The cosine of " + num + " is " + cos);
  }, 1000);
}
