//(i)
let para1 = document.createElement("p");
para1.innerText = "Hi, i am red";
document.querySelector('body').prepend(para1);

para1.classList.add("red");

//(ii)
let h3 = document.createElement("h3");
h3.innerText = "Hi, i am blue in color";
document.querySelector('body').prepend(h3);

h3.classList.add("blue");

//(iii)
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in a div";
para2.innerText = "Me Too";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").prepend(div);

