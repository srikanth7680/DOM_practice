let message = document.getElementById("intro") //getElementById
console.log(message);
let x = document.getElementById("name") //getElementById
console.log(x);
let y = document.getElementsByName("language") ///getElementByName
console.log(y);
// let heading = document.getElementsByTagName("h1") //getElementByTagName
// console.log(heading);
let cls = document.getElementsByClassName("cls_selector")
console.log(cls);
let cont = document.getElementById("container")
let cls_name = cont.getElementsByClassName("message")
console.log(cls_name);

let container = document.querySelector('#container')
let output = container.querySelectorAll("first")
console.log(output);
