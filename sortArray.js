function third(arr) {
  for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
      
    let temp;
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }}
  return arr;
}

console.log(third([1, 5, 8, 10, 3, 21]));

//output : [1, 3, 5, 8, 10, 21]
