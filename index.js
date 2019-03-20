console.log('Webpack works!');

const arr = [1,3,4,6,8,9,11,14,17,23,26,29,31],
    newArr = [];

arr.forEach(el => {
  if(el%2 == 0) {
    newArr.push(el);
  }
});

document.write(newArr);