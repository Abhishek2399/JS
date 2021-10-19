
// Console API of JS
// console.warn("This is a warning"); // display warning in the browser console 
// console.error("This is a error"); // this is a error in the browser console
// console.log("This is a console log"); // logging or printing in the console 

// // Javascript Varibles
// // Container to store values -> variable
// var number1 = 34; 
// let number2 = 56; // scope is not global 
// console.log(number1 + number2)

// // Data types in JS
// // Primarly we use number and strings

// Strings
// var f_name = "Abhishek"; // string 
// var l_name = "Bhovar"; // string 
// console.log(f_name + l_name)

// // Numbers
// var number1 = 34; // number
// var number2 = 56.567; // number 
// console.log(number1 + number2)

// Objects {key : value} key value pairs like dictionary 
var marks = {
    ravi : 34,
    shubham : 95,
    harry : 98,
    areAllMales : true 
}
// console.log(marks);
// console.log(marks.harry); // accessing single value 
// console.log(marks["areAllMales"]); // accessing single value 

// // Undefined => var which is not defined i.e. not given any value 
// var und = undefined;
// var def; 
// console.log(und); // undefined 
// console.log(def); // undefined

// // Null => empty variable 
// var emptyVar = null;
// console.log(emptyVar); // null


// // At very high levels we have 2 types of data types 
// // 1. Primitive : undefined, null, number, string, bool, symbol
// // 2. Reference : Array, Objects

// // Arrays >  collection of elements 
// arr = [1,2,3,4,5,6];
// multiDataTypeArr = ["Abhi", 21, true];
// console.log(arr); // all the elements from the array 
// console.log(arr[0]); // accessing single element
// console.log(arr[arr.length-1]); // .length to get the length of the element 
// console.log(multiDataTypeArr);


// // Operators
// // Arithmetic -> +,-,/,*
// var a = 10;
// var b = 90;
// console.log("a+b", a+b);
// console.log("a-b", a-b);
// console.log("a/b", a/b);
// console.log("a*b", a*b);

// // Assignment -> =
// var c = b;
// a += b;
// console.log("C : " + c);
// console.log("A : " + a);

// // Comparision{Return bool} -> <, >, <=, >=
// console.log(a>b); // will return bool values 
// console.log(c>=b);
// console.clear();

// // Logical{Operate on bool} -> &&. ||
// console.log("AND (true if both values true)");
// console.log(false && false);
// console.log(false && true);
// console.log(true && false);
// console.log(true && true);

// console.log("OR (true if anyone value true)");
// console.log(false || false);
// console.log(false || true);
// console.log(true || false);
// console.log(true || true);

// // Functions in JS <func_name>(var1, var2, . . .. .)
// function avg(a, b){
//     return (a+b)/2;
// }
// console.log(avg(10,5));


// console.log("abhi" > "abhi")

// Conditional Statement 
// var age = 18;
// if(age > 18){
//     console.log("You Can Drive");
// }
// else if(age > 15){
//     console.log("You Can Learn to Drive");
// }
// else{
//     console.log("You Can't Drive");
// }

// // let is to be used instead of var because scope of let is local 
// // Array methods 
// let myArr = ["Abhi", 32.4, true, marks];
// console.log(myArr);
// myArr.shift(); // removes the first element 
// console.log(myArr);
// myArr.unshift("Abhi");
// console.log(myArr); // puts an element in the array

// console.log(myArr.pop()); // removes the last element from the array 
// console.log(myArr); 
// myArr.push(marks); // puts an element in the end of the array 
// console.log(myArr); 

// myArr.sort(); // converts all the element in string sorts alphabetically and convert in original type again 
// console.log(myArr); 

// String methods 
// let myName = "Abhishek is a good boy";
// // console.log(myName.length); // len of the string 
// // console.log(myName.indexOf('s')); // index of first occurence 
// // console.log(myName.lastIndexOf('s')); // index of last occurence 

// console.log(myName.slice(1,9)); // slices from start to end-1 .slice(start, end)
// console.log(myName.replace("good", "bad")); // replaces first occurence 


// Dates in JS
let myDate = new Date(); // creating a new date object 
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay()); // if sunday -> 1 and so on 
// console.log(myDate.getHours());

// DOM Manipulation -> Document Object Model {html elements manipulation}
// let button = document.getElementById("click"); // getting element by id and applying some funcitons on it 
// button.click(); // clicking the button element 
// let container = document.getElementsByClassName("container"); // getting element by class name 
// console.log(button);
// console.log(container); // as we have 2 elements in the html with class container we will get collection 
// //container[0].style.backgroundColor = "red"; // changing the background of first container i.e. container with click button 
// container[0].classList.add("bg-primary"); // adding a class to another class
// container[0].classList.add("text-success"); // will add the class irrespective of its presence 
 
// tn = document.getElementsByTagName("div"); // getting elements by tag names from the html page 
// console.log(tn[0]);

// newElement = document.createElement('p'); // creating a para element 
// newElement.innerText = "This is created element"; // giving some text to write in para 
// tn[0].appendChild(newElement); // getting the first 'div' tag and appending a new element inside it 

// replaceElement = document.createElement('p');
// replaceElement.innerText = "This is replace element";
// tn[0].replaceChild(replaceElement, newElement); // replaces element .replceChild(to, with)


// Selecting using Query 
// sel = document.querySelector('.container'); // searches and returns the first queried element 
// console.log(sel);

// selAll = document.querySelectorAll('.container'); // searches and returns all the elements searched 
// console.log(selAll);

// Events 
// we have multiple events to be used in tags 
// <button id="click" onclick="clicked()"> Click Me </button> -> where onclick is event and value passed in the function to be called 

// function clicked(){
//     // console.log("Button was clicked ");
//     alert("Click was clicked");
// }

// container = document.getElementsByClassName("container")[0];
// // Adding an event listener with 2 params "event", "function to perform for that event"
// // Click
// container.addEventListener("click", function(){ // while clicking on the container 
//     console.log("Clicked on container");
// })

// // Mouse Over
// container.addEventListener("mouseover", function(){ // while mouse in the container 
//     console.log("Mouse on container");
// })

// // Mouse Out
// container.addEventListener("mouseout", function(){ // while mouse out of the container 
//     console.log("Mouse out container");
// })

// // Mouse up leaving pressed mouse 
// container.addEventListener("mouseup", function(){ // while mouse out of the container 
//     console.log("Mouse up");
// })

// // Mouse down while pressed mouse 
// container.addEventListener("mousedown", function(){ // while mouse out of the container 
//     console.log("Mouse down");
// })

// Arrow function 
// no var/let for the variable holding it along with (params) => { body of the function }
// sum = (a, b) => {
//     return a+b;
// }

// // SetTimeout and SetInterval

// // takes a function as argument and time in ms, runs the function passed after the ms passed to it

// function logOut(){
//     console.log("Log out");
// }

// setTimeout(() => {
//     console.log("Logged in");
// }, 2000);

// setTimeout(logOut, 2000);


// // Set Interval
// clr = setInterval(() => {
//     console.log("This is interval");
// }, 2000);

// clearInterval(clr); // object given by setInterval is used to clear/stop interval
// // Similarly clearTimeout is used to stop setTimeout with object returned by setTimeout 
// console.log(sum(9, 10))

// Local Storage -> used to store data locally client side {Run in Browser console}
// Every Domain has their own local storage 
// localStorage.setItem("name", "Abhishek");
// console.log(localStorage.getItem("name"));










