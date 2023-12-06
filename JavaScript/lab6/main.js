// AJAX and JSON
// xmlHttpRequest
let xhr = new XMLHttpRequest();
xhr.open("GET", "rockbands.json");
xhr.responseType = "json";
xhr.send();

// onload
xhr.onload = function () {
  let bands = xhr.response;
  showBands(bands);
};

// showBands
function showBands(jsonObj) {
  let bands = jsonObj;

  // create select element for bands
  let bandList = document.createElement("select");

  // create options for bands
  for (let band in bands) {
    let bandItem = document.createElement("option");
    bandItem.textContent = band;
    bandList.appendChild(bandItem);
  }

  // append select element to body
  document.body.appendChild(bandList);

  // create select element for band members
  let bandMembers = document.createElement("select");

  // onchange bandList
  bandList.onchange = function () {
    let band = bandList.value;
    console.log(band);
    bandMembers.innerHTML = "";
    for (let i = 0; i < bands[band].length; i++) {
      let bandMember = document.createElement("option");
      bandMember.textContent = bands[band][i].name;
      bandMembers.appendChild(bandMember);
      //   console.log(`${bands[band][i].name} ${bands[band][i].value}`);
    }
    console.log(bandMembers);
    document.body.appendChild(bandMembers);

    // onchange bandMembers
    bandMembers.onchange = function () {
      let bandMember = bandMembers.value;
      console.log(bandMember);

      for (let i = 0; i < bands[band].length; i++) {
        if (bandMember === bands[band][i].name) {
          console.log(bands[band][i].value);
          window.open(bands[band][i].value);
        }
      }
    };
  };
}

// Task one
// function to check number of parameters if it is 2
function checkParams(param1, param2) {
  if (arguments.length !== 2) {
    throw new Error("Number of parameters either less than or exceeds 2");
  } else {
    console.log("Number of parameters is 2");
  }
}
checkParams(1, 2); // Number of parameters is 2
// checkParams(1, 2, 3); // Uncaught Error: Number of parameters either less than or exceeds 2

// Task two
// function to add only numbers
function addNumbers() {
  if (arguments.length === 0) {
    throw new Error("Please enter numbers");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === "number") {
        sum += arguments[i];
      } else {
        throw new Error("Only numbers are allowed");
      }
    }
    return sum;
  }
}
console.log(addNumbers(1, 2, 3, 4, 5)); // 15

// Task three
// function to reverse array
function reverseArray() {
  let arr = [];
  for (let i = arguments.length - 1; i >= 0; i--) {
    arr.push(arguments[i]);
  }
  return arr;
}
console.log(reverseArray(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]

// another way
function reverseArray2() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.unshift(arguments[i]);
  }
  return arr;
}

console.log(reverseArray2(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]

// another dfifferent way
function reverseArray3(...nums) {
  nums.reverse();
  return nums;
}
console.log(reverseArray3(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]
