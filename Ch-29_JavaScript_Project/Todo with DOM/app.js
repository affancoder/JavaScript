let addT = document.querySelector("button");
let enterT = document.querySelector("input");
let ul = document.querySelector("ul");

addT.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = enterT.value;
  // console.log(li.innerText);
  ul.append(li);

  let delB = document.createElement("button");
  delB.innerText = "Delete";
  delB.classList.add("delete");
  li.append(delB);
  enterT.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click",function(){     //work only exist html button
//         console.log("delete item");
//         delBtn.parentElement.remove();
//     });
// }

//eventBubbling use-
ul.addEventListener("click", function (event) {
  // console.dir(event.target);
  // console.log(event.target);      //event.targert se jis element ko triger kiya vo element deta hai
  // console.log(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let parent = event.target.parentElement;
    // console.log(parent);
    parent.remove();
    console.log("deleted");
  }
});
