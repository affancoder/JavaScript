// // console.log("Hello world!");
// // console.log("affan asghar");
// // let a = 10;
// // let b = 5;
// // console.log("sum is : ",a+b); 

// let pencilPrice = 50;
// let erasorPencil = 10;
// // let output ="total price is : " + (pencilPrice + erasorPencil) + " Rupees";

// let output = `The total price is : ${pencilPrice + erasorPencil} rupees`;
// let final = `The final price is : ${pencilPrice + erasorPencil} dollar`;

// console.log(output);
// console.log(final);
// let a = 10;
// console.log(a++);
// console.log(++a);
// console.log("before my if statement");
// // let age = 20;
// // if (age>18){
// //     console.log("You can vote");
// // }
// // console.log("after my if statement");
// let firstName = "affan asghar";
// if(firstName == "affan asghar"){
//     console.log(`welcome ${firstName}`);
// }

// let color = "red";
// if (color === "red"){
//     console.log("stop");
// }

// if (color === "yellow"){
//     console.log("wait");
// }

// if(color === "green"){
//     console.log("Go");
// }
// let age = 17;
// if (age >= 18){
//     console.log("You can vote");
// }
// else if(age >=16){
//     console.log("wait for few year");
// }
// else if(age <= 14){
//     console.log("YOU R KID");
// }

// let size = "xl";

// if (size === "xl"){
//     console.log("Price $250");
// }
// else if(size === "l"){
//     consolelog("$200");
// }
// else if(size === "m"){
//     console.log("$100");
// }
// else if(size === "s"){
//     console.log("$50");
// }
// else {
//     console.log("invaild option");
// }
// let marks = 45;
// if(marks >= 33){
//       console.log("pass");
// }

// let str= "asghar";
// if(str[0] === 'a' && str.length > 3){
//     console.log(`${str} is a` +"goodstring");
// }
// else{
//     console.log("bad string");
// }
// let num =12;
// if((num%3  === 0) && (num+1 ==15) || (num - 1==11)){
//     console.log("safe");
// }
// else{
//     console.log("unsafe");
// }

let color = "green";
 
switch(color){
    case "red":
        console.log("stop your vehicle");
        break;
    case "yellow":
        console.log("waiting");
        break;
    case "green":
        console.log("you can go");
        break;
    default:
        console.log("broken light");
}

let day = 4;
switch(day){
    case day = 1:
        console.log("M");
        break;
    case day = 2:
        console.log("T");
        break;
    case day = 3 :
        console.log("W")
        break;
    case day = 4 :
        console.log("T")
        break;
    case day = 5 :
        console.log("F")
        break;
    case day = 6 :
        console.log("S")
        break;
    case day = 7 :
        console.log("S")
        break;
    default:
        console.log("invaild")
}

alert("Danger");
console.log("this is a simple message");
console.error("error happening");
console.warn("i warn you");

// let firstName = prompt("Enter your name: ");
// console.log(firstName);

// let roll = prompt("your roll no: ")
// console.log(roll);

let firstName = prompt("Enter your name: ");
let lastName= prompt("enter your last name : " );
console.log("welcome",firstName , lastName);