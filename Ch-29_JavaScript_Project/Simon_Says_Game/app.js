let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("click", function () {
  if (started == false) {
    console.log("Game is started");
    started = true;

    levelUp();

    sbtnSound.play();
  }
});

let sbtnSound = document.querySelector(".bg-music");
let startbtnSound = function () {
  sbtnSound.play();
};

let errorbtn = document.querySelector(".error-music");

let pausebtnSound = function () {
  errorbtn.play();
};

//Flashing Buttons and level up

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  //random btn choose
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

//button event listeners

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(() => levelUp(), 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score is <b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    errorbtn.play();
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor =
        "rgb(186, 250, 122)";
      sbtnSound.pause();
    }, 2500);
    reset();
  }
}
function btnPress() {
  let btn = this; //this property it is used to detect button number
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
