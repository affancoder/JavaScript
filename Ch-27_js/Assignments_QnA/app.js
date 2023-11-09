//1
let button = document.createElement('button');
let input = document.createElement('input');

button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// button.classList.add(btn);

//2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

//3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";

document.querySelector("body").append(h1);
// h1.classList.add(h1);

//5
let p = document.createElement("p");
p.innerHTML = "Apna College <strong>Delta</strong> Practice";

document.querySelector("body").append(p);
// p.classList.add(p);