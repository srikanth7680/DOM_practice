let txt = document.querySelector(".text")
console.log(txt.parentNode); ///It is used to get the parentNode with the help of childNode

let x = document.querySelector(".title1")
console.log(x.firstElementChild);
console.log(x.lastChild);
console.log(x.childNodes);//for accessing all childnodes using parentNodes
//selecting sibling element
let second = document.querySelector(".second")
console.log(second.previousElementSibling);//It is used to get the previous sibling element
console.log(second.nextElementSibling);// It is used to get the next sibling element

