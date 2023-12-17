// // function multiply(a) {
// //   return function (b) {
// //     return a * b;
// //   };
// // }

// // console.log(multiply(2)(3));

// // let OnOff = toggle ("on", "off")

// function toggle(...args) {
//   //   let temp = a;
//   //   return function () {
//   //     temp = temp == a ? b : a;
//   //     return temp;
//   //   };

//   let index = 0;
//   return function () {
//     // return args[index++];
//     // return args[index++ % args.length];
//     index = index === args.length ? 0 : index;
//   };
// }

// let OnOff = toggle("on", "off");
// console.log(OnOff());
// console.log(OnOff());
// console.log(OnOff());

// // let on = function () {
// //     console.log("on");
// //     }

// //     console.log(on);

// renge (2, 5) => [2, 3, 4, 5]
// range (2)(5) => [2, 3, 4, 5]
// range (2)() => []

function range(a, b) {
  if (b === undefined) {
    return function (b) {
      return a <= b ? [a, range(a + 1, b)] : [];
    };
  } else {
    return a <= b ? [a, ...range(a + 1, b)] : [];
  }
}

console.log(range(2, 5));
console.log(range(2)(5));
console.log(range(2)());
