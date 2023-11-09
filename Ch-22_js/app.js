//loop
// let num = 2;
// for(let i = 1; i<=10; i++){
//     console.log(i*num);
// }

// for(let i=10 ; i >= 1 ; i--){
//     console.log(i);
// }
// console.log(i);

//table of five
// for(let i=3; i<=30; i=i+3){
//     console.log(i);
// }

// //table of nine
// for(let o=9;o<=90;o=o+9){
//     console.log(o);
// }

// let n = prompt("writw your number");
// n = parseInt(n); //parseInt() convert number to string
// for(let i = n; i<=n*10; i=i+n){
//     console.log(i);
// }

// for(let i = 1; i<=3; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=3; j++){
//         console.log(`inner ${j}`);
//     }
// }

//while loop
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// const favMovie = "avatar";
// let guess = prompt("Guess my favourite movie");

// while((guess != favMovie) && (guess == "quit")){
//     guess = prompt("wrong guess! please try again");
// }

// if(guess == favMovie){
//     console.log("Congrats! it's match");
// }
// else{
//     console.log("Not match")
// }

// let i = 1;
// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

//loops in array

// let fruits = ["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple");
// fruits.reverse();
// // fruits.splice(4,1);
// for(let i = 0; i < fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// // nested loops

// let heroes = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j <= heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`)
//     }
// }

//of loops

// let fruits = ["mango","apple","banana","orange","litchi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "affanasghar"){
//     console.log(char);
// }

// //TODO APP

// let todo = [];
// let req = prompt("please enter your request");

// while(true){
//     if(req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list") {
//         console.log("--------------");
//        for(let i = 0; i<todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("--------------");
//     } else if(req == "add") {
//         let task = prompt("please enter the task");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete"){
//         let idx = prompt("please enter the task");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }

//     req = prompt("please enter your request");
// }

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,2);
//     }
// }
// console.log(arr);

let num = 287152;
let count = 0;

let copy = num;

while(copy>0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);
