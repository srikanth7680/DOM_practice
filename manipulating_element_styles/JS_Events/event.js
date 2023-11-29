function btn() {
  console.log("Button clicked succesful from function btn()");
}
let subscribe = document.getElementById("event_button")
subscribe.onclick = function() {
  console.log("succesfully clicked");
}
///addEventListner()
//syntax-- addEventListner(event,function,usecapture)
// subscribe.addEventListner('click',function() {
//   console.log("submitted");
// })
let abc = document.getElementById("eb")
abc.addEventListener("click",function() { //here we add eventListner
  console.log("You already submitted");
})
//
abc.addEventListener("click",function(event) { //here we add eventListner
  console.log(event.type);
})
//
let n = document.getElementById("new");
function new1() {
  console.log("submittedd!!");
}
n.addEventListener("click",new1)
n.removeEventListener("click",new1)//removeEventListner()   
n.addEventListener("click",function(){
  console.log("Hello world!!");
})