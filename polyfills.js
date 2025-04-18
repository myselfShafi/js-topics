// polyfills

// custom Array.map method
function myMap(func) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(func(this[i], i, this));
  }

  return newArray;
};

Array.prototype.myMap = myMap;
const map = [1,2,3,4].myMap(num => num*2);

console.log('custom .map', map);

// custom Array.filter method
function myFilter(func) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    let check = func(this[i], i, this) === true;
    if (check) newArray.push(this[i]);
  }

  return newArray;
};

Array.prototype.myFilter = myFilter;
const filter = [1,2,3,4].myFilter(num => num%2 === 0);

console.log('custom .filter', filter);

// custom Object.assign() method
function myAssign(target, source) {
  for ( key in source ) {
    let value = source[key];
    target[key] = value;
  };
  return target;
};

Object.myAssign = myAssign;

console.log('custom Object.myAssign',Object.myAssign({ a:1 }, { b:2, c:3 }));
