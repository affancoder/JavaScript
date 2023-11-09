// let btns = document.querySelectorAll("button");
// // console.dir(btn);

// // onclick  is one of the most used property

// // btn.onclick = function(){
// //     alert("button was clicked");
// // };

// for(btn of btns){
// //     btn.onclick = sayHello;
// //     btn.onmouseenter = function() {
// //         console.log("you entered a button");
// //     };

//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName(){
//     alert("Congrats");
// }

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box");
// })

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundcolor = "blue";
// })

let btn = document.querySelector("button");

btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button clicked");
});