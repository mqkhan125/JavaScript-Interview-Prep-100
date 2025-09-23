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


// Qno.11 Convert an array of strings into a single comma-separated string.
let ArrOfStr = ["apple", "banana", "mango"];

let convertArrOfStr = ArrOfStr.join(",");
console.log(convertArrOfStr);

 // Qno.12 write a function to flatten a nested array (one level deep). e.g [1, [2,3],4] -> [1,2,3,4]
 // Method 1
let flatArr = [1,2,3,4, ['a', 'b', 'c'], 5,6]
console.log(flatArr[4])

flatArr.splice(4, 1, ...flatArr[4]) // splice change the origin array
console.log(flatArr)

// // Method 2
let flatArr2 = [1,2,3,4,5,['q','a','s','i','m'], 6,7]

 let singleArr = flatArr2.flat(1) // array k andar agar eik array hy tu flat(1) likna hay 2,3,4 tu flat(2) or 3 or 4.
  console.log(singleArr)

 // Qno 13 Write a function that checks if all elements in an array are numbers.
// method 1 me condition base check karta hay
  let arr = [1,2,3,'a','b',5,6];

  function checkNumberArray(){
    let isNumber = true;
    arr.forEach((arr) => {
        if(typeof arr !== 'number'){
           isNumber = false;
        }
    })
     return isNumber
  }

 let checkAllNumbers =  checkNumberArray(arr)
 console.log(checkAllNumbers)

//   // Method 2
//   // method 2 me every() har eik everyOne k ly condional check kar raha hy agar true hoga ab true return karey ga.
//    let array = [1, 2, 3, "a", "b", 5, 6];

   function checkArrayNumber(localArr){
      let newArr = localArr.every((elem) => typeof elem === 'number')
      console.log(newArr)
   }
   checkArrayNumber(array);

// QNo 14 Build a simple isPrime() function to check if a number is prime.
let isPrimeNumber = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

let result = isPrimeNumber.filter(isPrime);
console.log(result);

 // Q.15 Create a function that removes duplicate value from an array
let duplicateArr = [1, 5, 4, 1, 1, 2, 2, 6, 6];
 // Method 1 using the new Set() method
 function removeDuplicateNum(remove) {
   let set = new Set(remove);
   return [...set]
 }

let resultRDArr = removeDuplicateNum(duplicateArr);
console.log(resultRDArr)

// Method 2 using the filter() method
 function removeDuplicateNum1(dpNum){

  let resultantArr = dpNum.filter((elem, index) => {
        return dpNum.indexOf(elem) === index;
    })
    return resultantArr;
 }

 let resultRDArr1 = removeDuplicateNum1(duplicateArr)
console.log(resultRDArr1)

// // Qno.16 Find the Union of two array?
let array1 = [1,2,3,4,5]
let array2 = [1,2,3,4,5,6,7]

let getUnion = () => {
  let UnionArr = [...array1, ...array2]
  return [...new Set(UnionArr)]
}

let resultUnionArr = getUnion()
console.log(resultUnionArr)

// // Qno.17 Find the intersection of two array?

let arr3 = [1, 2, 3, 4, 5,6,7];
let arr4 = [8, 2, 3, 4, 9, 16, 17];

let getIntersection = () => {
    let intersectionArr = arr3.filter((elem) => {
        return arr4.includes(elem)
    })
    return intersectionArr
}

let resultIntersectionArr = getIntersection()
console.log(resultIntersectionArr)

 // Qno.18 How to remove the double values.
let a = [1,2,1,1,1,1,2,2,2,23,3,3,4,5,6,6]
let b = [...new Set(a)]
console.log(b)

 // Qno.19 hwo to find location of any elements in an array.
let store = ['qasim', 'ali', 'javed']

let name = 'qasim'
for(let i = 0; i <= store.length; i++){
    if(store[i] === name){
        console.log(i)
    }
}

// // Qno.20 solve the Currying
// // old method

function getSum(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    console.log(a+b+c+d+e)
                }
            }
        }
    }
}
getSum(5)(4)(3)(2)(1)

// ES6 Method 2
let getAdd = (a) => (b) => (c) => (d) => (e) => a + b + c * d + e
let resultCurrying = getAdd(5)(4)(3)(2)(1);
console.log(resultCurrying)

let sliceStr = 'javascript';
let sliceArr = ['j','a','v','a','s']
console.log(sliceArr.slice(1,-3))

// Qno.21 Create a function that reverse each word of a given sentence 
let str = "I am Muhammad Qasim khan";
let finalResults =  str.split(" ").map((word) => {
    let reverseWord = word.split('').reverse().join('')
    return reverseWord;
}).join(' ')
console.log(finalResults)


// Qno.22 In an array of numbers and strings, onlyy add those numbers which are not strings.
let numberArr = [1,2,3,'qasim',4,'javed',5]
 let sumNum = 0;

     let filterOutArr = numberArr.filter((num) => {
         if(typeof num === 'number'){
            console.log(num)
             sumNum += num;
            }
        })
        console.log(sumNum)

        
// Qno.23 How would you check if an number is an integer?
let integer = 123;
// method 1
console.log(Number.isInteger(integer))
// method 2
console.log(integer % 1 === 0 )


// Qno.24 Write a JavaScript function that reverse a number.
let numbers = 12345;
function reverseNum(num){
   return Number(num.toString().split('').reverse().join(''))
}
let reverseResults = reverseNum(numbers)
console.log(reverseResults)


// Qno.25 Write a JavaScript function that returns a passed string with letters in alphabetical order.
let string = "JavaScript is best programming language";

function strSort(letter) {
  return letter.split(" ").sort().join(" ");
}

let strSortResults = strSort(string);
console.log(strSortResults);


// // Qno.26 Write a JavaScript function that accepts a string as a parameter and convers the first
// letter of each word of the string in upper case.
let word = "i am web developer.";

const capitalizeFristWord = (alpha) => {
  let capitalizeWord = alpha.split(" ").map((elem) => {
    return elem.charAt(0).toUpperCase() + elem.slice(1);
  });
  return capitalizeWord.join(" ");
};
let resultsOfCapital = capitalizeFristWord(word);
console.log(resultsOfCapital);


// Qno.27  Write a JS func to get the first element of an array. Passing a parameter 'n' will
// return the first 'n' elements of the array.
function passArrElement(Arr, n) {
  if (!n) {
    return Arr[0];
  } else if (n > Arr.length) {
    console.log("Array length is less than n");
  } else {
    return Arr.slice(0, n);
  }
}
let resultArrElement = passArrElement([1, 2, 3, 4, 5], 4);
console.log(resultArrElement);


// Qno 28 Write a JS func to get the number of occurrences of each letter in specified string.
let str1 = "MuhammadQasimkhan";

const getOccurance = (string) => {
  let obj = {};

  string.toLowerCase().split("").forEach((letter) => {
    if (obj.hasOwnProperty(letter)) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  });

  for(let key in obj){
    console.log(`${key} = ${obj[key]}`)
  }
};
getOccurance(str1);


// Qno 29 Write a JS program to find the most frequent item of an array.
let numArr = [1, 2, 3, 4, 5, 2, 2, 3, 3, 4, 5, 6,1,1,];

const getOccuranceNum = (num) => {
  let freqObj = {};

  num.forEach((letter) => {
    if (freqObj.hasOwnProperty(letter)) {
      freqObj[letter]++;
    } else {
      freqObj[letter] = 1;
    }
  });

   let maxFreq = Math.max(...Object.values(freqObj));

  let freqArr = Object.entries(freqObj);
 let filteredArr = freqArr.filter((maxValue) => {
    return maxValue[1] === maxFreq
  });
  console.log(filteredArr)
};

getOccuranceNum(numArr);


// // Qno.30 Write a JS program to shuffle an array
let arrays = [1,3,2,5,4]
console.log(arrays)

for(let ind in arrays){
let randomInd = Math.floor(Math.random() * arrays.length);
    //  Method 1 
      let temp = arrays[ind];
      arrays[ind] = arrays[randomInd];
      arrays[randomInd] = temp

   // short Method 2 using Desturction method
//  [arrays[ind], arrays[randomInd]] = [arrays[randomInd], arrays[ind]];
  }
  console.log(arrays)

   // DOM base Questions
  // Qno.31 How can you update the DOM base on user input in real-time (live preview of a form)
  let inputName = document.querySelector('#name')
  let inputEmail = document.querySelector("#email")
  let nameValue = document.querySelector('.nameValue')
  let emailValue = document.querySelector(".emailValue")
  
  inputName.addEventListener('input', (e) => {
    let event = e.target.value;
    nameValue.innerText = event;
  })

  inputEmail.addEventListener('input', (e) => {
    emailValue.innerText = e.target.value;;
  })


  // Qno.32 How would you handle form validation in real time and show error mesages dynamically?
  let nameInput = document.querySelector('#name')
  let emailInput = document.querySelector('#email')
  let passwordInput = document.querySelector('#password')
  let nameError = document.querySelector(".nameError");
  let emailError = document.querySelector(".emailError");
  let passwordError = document.querySelector(".passwordError");


 nameInput.addEventListener("input", (e) => {
  let name = e.target.value;
  if(name.length < 4){
    nameError.innerText = 'Name must be atleast 4 characters';
  }else{
    nameError.innerText = "";
  }
});

 emailInput.addEventListener("input", (e) => {
  let email = e.target.value;
  if(!email.includes('@') || !email.includes('.')){    
    emailError.innerText = "must be require At (@) and dot (.)";
  }else{
    emailError.innerText = '';
  }
});

 passwordInput.addEventListener("input", (e) => {
  let password = e.target.value;
  if(password.length < 8){
  passwordError.innerText = 'password should be atleast 8 number';
  }else{
    passwordError.innerText = "";
  }
});



// Qno.33 How do you find the closest ancestor element when another element is clicked(show/hide)
let child = document.querySelector("#child")

child.addEventListener("click", (e) => {
   console.log(e.target.closest('.parent'))
})

// Qno.34 How would toggle a class on an element when another element is clicked (show/hide)
let sideBar = document.querySelector('.sidebar')
let button = document.querySelector('button')

button.addEventListener("click", () => {
  sideBar.classList.toggle('show-side-bar')
  console.log('show')
})

// Qno.35  Create a show/Hide Password Toggle
let passwordInp = document.querySelector('#pass')
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
  let passwordType = passwordInp.type;
  passwordInp.type = passwordType  === "password" ? "text" : "password";
  btn.innerText = passwordType === "password" ? "Hide" : "Show";
})


// Qno.36 Create a stcky Header on Scroll. the header beacomes fixed to the top after scorlling down.
// (key concepts: scroll event, window.scrollY, classList.add/remove)
let navbar = document.querySelector('nav')

window.addEventListener('scroll', (e) => {
  if(window.scrollY > 200){
    navbar.classList.add('sticky')
  } else{
    navbar.classList.remove('sticky')
  }
})