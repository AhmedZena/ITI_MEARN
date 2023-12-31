function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, 2000);
  });
}

function* fetchDataGenerator() {
  const data1 = yield fetchData("https://api.example.com/data1");
  console.log(data1);
  const data2 = yield fetchData("https://api.example.com/data2");
  console.log(data2);
  const data3 = yield fetchData("https://api.example.com/data3");
  console.log(data3);
}

const iterator = fetchDataGenerator();
const promise = iterator.next().value;
promise.then((data) => {
  iterator.next(data1).value.then((data) => {
    iterator.next(data2).value.then((data) => {
      iterator.next(data3);
    });
  });
});
