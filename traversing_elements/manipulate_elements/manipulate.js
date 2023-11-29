///MANIPULATE ELEMENTS
let y = document.createElement("div")//It is used to create a element in the HTML
y.innerHTML = "<p>hello 2</p>" //It is used to write a inner text in the element
document.body.appendChild(y)//It is used to append the created node to the body of the HTMLpage
y.className="greet"//It is used to add a className or id to the element
console.log(y)

//append() method
//create a element and append to the ul 
let menu = document.getElementById("menu"); //select the elementById

let list = document.createElement("li")//create a element
list.innerHTML = "Contact";//give inner html
menu.appendChild(list);//append to the selected Id

//text content
let m = document.getElementById("menu")
console.log(m.textContent)  //It gives the textContent inside the selected element
// m.textContent = "Hello!"//It changes whole page data inside the element
//innerHTML
m.innerHTML = "<h1>Hello</h1>" //It prints Hello in webpage with heading tag
//innerHTML accepts HTML tags but textContent doesnt accept HTML tags.It prints as it is.
//after() method
m.after("good morning","hello");
//append()--it is used to append the multiple nodes into the element
m.append("hello","sir")//It is used to add multiple nodes to the element
// m.appendChild("hello")//It is  used when we create a element and then appenChild is used to appended to the element
//prepend()
m.prepend("afternoon");// It will add newnodes as a first child
//InsertAdjacentHTML() method---By using this we can add an element where ever we want
let p = document.getElementById("header")
console.log(p);
p.insertAdjacentHTML("afterbegin", "<li>ccontact</li>");
//replaceChild() method --It is used to replace the child element with new element
///cloneNode() method---It is used to clone an element
let clone = document.getElementById("header")
let newClone = clone.cloneNode()
console.log(newClone);///Here newClone acquires the same properties of header
//removeChild()--It remove the childelement of a node
clone.removeChild(clone.lastElementChild);
//insertBefore() method--while using this method we can create a element and then insert the element
let list1 = document.createElement("li")
list1.innerHTML = "Company"
clone.insertBefore(list1,clone.firstElementChild);