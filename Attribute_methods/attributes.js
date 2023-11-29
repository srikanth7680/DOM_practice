//Attribite methods in JS
let inputBox = document.getElementById("username")
console.log(inputBox.attributes);///It is used for getting all the elements of selected Id
//getAttribute()
console.log(inputBox.getAttribute("placeholder"));//It is used to read the attributes
//setAttribute()
inputBox.setAttribute("class","user");
console.log(inputBox.attributes);
//hasAttribute----> It checks the attribute is there or not and it gives true or false value.
inputBox.hasAttribute("class");//true
//removeAttribite()
inputBox.removeAttribute("placeholder");
console.log(inputBox);