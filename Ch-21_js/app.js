// let msg = "     hello!         ";
// console.log(msg);
// msg.trim();

// let password = prompt("set your password");
// let newpass = password.trim();
// console.log(newpass);

// let name = "Affan Asghar";
// // let msg = "error";

// console.log(msg.toUpperCase());
// console.log(name.toLowerCase());

// let str = "ilikecoding"; //index founding
// str.indexOf("like");

// msg = "   hello...!    "; //method chaining
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);

// let msg = "ilikecode"; //slice
// console.log(msg.slice(1,2));

// //repeat & replace
// let msg = "ilovecoding"
// console.log(msg.replace("love" , "hate"));

// let str  =  "affan";
// console.log(str.repeat(6));

//Practice Qs
// let msg = "help!";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);

// let name = "ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.slice(4).replace("l","t"));

//Array(DS)
let students = ["vivek","affan","aman","rahul"];
console.log(students);

let banks = ["hdfc","png","sbi"];
console.log(banks);

let num = [2,4,6,8];
console.log(num);
console.log(num[2]); //index

let info = ["affan" , 20 , 8.13, "a8"];
console.log(info);

let cars = ["audi" , "porche" , "bmw","fortuner"];
console.log(cars);
console.log(cars.push("ferrari"));
console.log(cars);
console.log(cars.shift("audi"));
console.log(cars);

let months = ["jan" , "july" , "march" ,"aug"];
console.log(months);
console.log(months.shift("jan"));
console.log(months);
console.log(months.shift("july"));
console.log(months);
console.log(months.unshift("july"));
console.log(months);
console.log(months.unshift("june"));
console.log(months);

//merging
let primary = ["red", "yellow","blue"];
let secondry = ["orange","greeen","violet"];
primary.concat(secondry);
console.log(primary.concat(secondry));

console.log(primary.reverse()); //reverse

//Assignment Qs
//3
// let str = prompt("what is your name?");
// if (str.length==0){
//     console.log("string is empty");
// }
// else{
//     console.log("string is not empty");
// }
//4
// let str="ApnaCollEGE";
// let idx = 3;
// if(str[idx] == str[idx].toLowwerCase()){
//     console.log("charcter is lower");
// }
// else{
//     console.log("character is not lower");
// }
//5
let str = prompt("what a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);
//6
let arr  = ["hello",'a',23,64,99,-6];
let item = 64;

if(arrindexOf(item)!=-1){
    console.log("element exist in array");
}
else{
    console.log("element does not exist in array");
}