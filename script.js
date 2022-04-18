var a = document.getElementById("a").innerHTML = "hey ";
var b = document.getElementById("b").innerHTML = "cars ";
var c = document.getElementById("c").innerHTML = "lol ";
//typewritter effect 
document.getElementById("main").innerHTML = "";
setTimeout(() => {
document.getElementById("main").innerHTML = (a);
}, 100);
setTimeout(() => {
document.getElementById("main").innerHTML = (a + b);
}, 200);
setTimeout(() => {
document.getElementById("main").innerHTML = (a + b + c);
}, 300);
