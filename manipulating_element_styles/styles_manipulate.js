let inputBox = document.getElementById("user")
//style property
console.log(inputBox.style);//It is used to get the all style elements in the selected Id
console.log(inputBox.style.backgroundColor);//In these we can get the properties of selected item
inputBox.style.padding = "10px";///adding properties to the element using css
console.log(inputBox.style);
//cssText// By usinf this cssText we can add multiple css properties by using semicolon;
inputBox.style.cssText += "width: 200px; color: green";
console.log(inputBox.style);
//getComputedstyle() method ---we can read all the css properties on the HTML element
console.log((window.getComputedStyle(inputBox).fontSize));
///className property
let title = document.getElementById("title")
console.log(title.className);
title.className = "new"
console.log(title);//
title.className += " new"///It ia used for concatanetation it avoids the over ride
console.log(title);
//classList
title.classList.add("new2") //adding a new class
console.log(title.classList);
console.log(title);
//we can also remove existing classes
title.classList.remove("new")
console.log(title);
title.classList.replace("new2","message");
console.log(title);
//contains
title.classList.contains("message")
console.log(title);
//