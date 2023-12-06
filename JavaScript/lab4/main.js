// Task One Slide Show

let img = document.querySelector("img");
let btnNext = document.getElementsByTagName("button")[0];
let btnSlideShow = document.getElementsByTagName("button")[1];
let btnPrevious = document.getElementsByTagName("button")[2];
let btnStop = document.getElementsByTagName("button")[3];

let paragraph = document.querySelector("p");

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let index = 0;
let interval;

function changeParagraph() {
  paragraph.innerHTML = index + 1 + " / " + images.length;
}

function next() {
  index++;
  index == images.length ? (index = images.length - 1) : index;
  img.src = "assets/SlideShow/" + images[index];
  changeParagraph();
}

function previous() {
  index--;
  index == -1 ? (index = 0) : index;
  img.src = "assets/SlideShow/" + images[index];
  changeParagraph();
}

function slideShow() {
  interval = setInterval(() => {
    index++;
    index == images.length ? (index = 0) : index;
    img.src = "assets/SlideShow/" + images[index];
    changeParagraph();
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

btnNext.addEventListener("click", next);
btnPrevious.addEventListener("click", previous);
btnSlideShow.addEventListener("click", slideShow);
btnStop.addEventListener("click", stop);

// task 3 my own input type text , wanna make it like a type number
let myInput = document.getElementById("myInput");

myInput.addEventListener("keydown", (e) => {
  e.preventDefault();
  let key = e.key;
  if (key >= 0 && key <= 9) {
    myInput.value += key;
  }
  // backspace
  if (key == "Backspace") {
    myInput.value = myInput.value.slice(0, -1);
  }
  // delete
  if (key == "Delete") {
    myInput.value = myInput.value.slice(0, -1);
  }

  //  alt
  if (key == "Alt") {
    console.log("alt");
  }

  // ctrl
  if (key == "Control") {
    console.log("ctrl");
  }
});

// Task 4
let myInputAscii = document.getElementById("asciiInput");
let myAscii = document.getElementById("asciiValue");

myInputAscii.addEventListener("keydown", (e) => {
  myInputAscii.value = "";
  let ascii,
    key = e.key;
  ascii = key.charCodeAt(0);
  myAscii.innerHTML = ascii;

  // Alt
  if (key == "Alt") {
    myAscii.innerHTML = "Alt";
  }

  // Ctrl
  if (key == "Control") {
    myAscii.innerHTML = "Ctrl";
  }

  // Shift
  if (key == "Shift") {
    myAscii.innerHTML = "Shift";
  }
});

// prevent Right Click
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
// window.addEventListener("contextmenu", (e) => e.preventDefault());

// Task 6 move marbels

let marble1 = document.getElementById("marble1");
let marble2 = document.getElementById("marble2");
let marble3 = document.getElementById("marble3");
let marble4 = document.getElementById("marble4");
let marble5 = document.getElementById("marble5");

let intervalMarbels;
function moveRight() {
  let arrMarbels = [marble1, marble2, marble3, marble4, marble5];
  let indexMarbels = 0;
  intervalMarbels = setInterval(() => {
    arrMarbels[indexMarbels].src = "assets/marbels/marble3.jpg";
    // others to marble1
    for (let i = 0; i < arrMarbels.length; i++) {
      if (i != indexMarbels) {
        arrMarbels[i].src = "assets/marbels/marble1.jpg";
      }
    }

    indexMarbels++;
    if (indexMarbels == arrMarbels.length) {
      indexMarbels = 0;
    }
  }, 1000);
}

moveRight();

let marble = document.getElementsByClassName("marbels")[0];
marble.addEventListener("mouseover", (e) => {
  console.log(e.target);
  console.log(marble);
  e.target != marble ? clearInterval(intervalMarbels) : "";
  //   clearInterval(intervalMarbels);
});

marble.addEventListener("mouseout", () => {
  moveRight();
});
