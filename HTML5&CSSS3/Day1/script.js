// Task one drag and drop
let list = document.getElementById("list");
let items = list.getElementsByTagName("li");
let arr = [];
for (let i = 0; i < items.length; i++) {
  items[i].setAttribute("draggable", "true");
  items[i].classList.add(`item${i + 1}`);
  arr.push(items[i]);
}
console.log(arr);

// want swap
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// drag start
list.addEventListener("dragstart", function (e) {
  e.target.classList.add("dragging");
});

// drag end
list.addEventListener("dragend", function (e) {
  e.target.classList.remove("dragging");
});

// drag over
list.addEventListener("dragover", function (e) {
  e.preventDefault();
  let dragging = document.querySelector(".dragging");
  let dragOver = e.target;
  let index1 = arr.indexOf(dragging);
  let index2 = arr.indexOf(dragOver);
  swap(arr, index1, index2);
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    list.appendChild(arr[i]);
  }
});
