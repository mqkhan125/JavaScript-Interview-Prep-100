// Qno.1 Create a function that returns the last element of and array.
let num = [1, 2, 3, 4, 5];
// get the last element by apply splice() or pop() but both are change in origin array. I shouldn't change in origin array
let newArr = num.splice(4, 1);
//  let newArr = num.pop()
console.log(num);
console.log(newArr);

// correct way
let getLastElement = (localArr) => {
  return localArr[localArr.length - 1];
};

let lastElement = getLastElement(num);
console.log(lastElement);

// Qno.2 Find the combinations of two arrays.
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [8, 9, 10];

// using with concat()
let combinationArr = arr1.concat(arr2);
console.log(combinationArr);

// using with spread operator
let combinationArrs = [...arr1, ...arr2];
console.log(combinationArrs);

// Qno.3 Generate a rnadom integer between 0 to 18

let randomNumber = Math.floor(Math.random() * 19);
console.log(randomNumber);

// Qno.4 Create a function that takes an array containing both number and strings, and returns a
// new array containing only the string valuses

let containerArr = [1, 2, 3, "Qasim", "javeed", 20, 30];

let newContArr = containerArr.filter((elem) => typeof elem === "string");
console.log(newContArr);

// Qno.5 Find the maximum number in an array.

let maxNum = [1, 12, 33, 45, 98, 80, 40];
let findMaxNum = Math.max(...maxNum); // yaha spread opartor is ly use kia k Math.max() array nhi lytha humay array ko torna parega
// is ly spread oparator ko use kia. ye possible nhi hy Math.max(maxNum)
console.log(findMaxNum);

//   // Qno.6 Write a function that returns the length of a given object(number of keys)

let objKeys = {
  name: "Qasim",
  age: 21,
  city: "Lahore",
};

console.log(Object.keys(objKeys).length);

// // Qno.7 In an array of objects filter but those objects which have gender's value male.

let arrOfObj = [
  {
    name: "Qasim",
    gender: "male",
  },
  {
    name: "Abrar",
    gender: "female",
  },
  {
    name: "Qasim",
    gender: "male",
  },
  {
    name: "Naseem",
    gender: "male",
  },
  {
    name: "anas",
    gender: "female",
  },
];

let resultArrOfObj = arrOfObj.filter((obj) => {
  return obj.gender === "male";
});
console.log(resultArrOfObj);

// Qno.8 Given an array of strings, return a new array where all strings are in uppercase.

let arrOfStr = ["qasim", "javed", "sadaf", "jhangir"];

let newArrOfStr = arrOfStr.map((val) => {
  return val.toUpperCase();
});
console.log(newArrOfStr);

// Qno.9 Check if an object is empty (has no keys)

let checkObj = {};

let isEmptyObj = Object.keys(checkObj).length < 1;
console.log(isEmptyObj ? "obj is empty" : "obj is not empty");

// Qno.10 Create an array of numbers and double each value using .map()

let arrNum = [1, 2, 3, 4];
let doubleArr = arrNum.map((val) => val * 2);
console.log(doubleArr);
