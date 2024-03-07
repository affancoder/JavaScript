// function hello(){
//     console.log("Hello");
// }
// hello();
// // hello();
// // hello();

// // function printName(){
// //     console.log("MD Affan Asghar");
// // }
// // printName();

// function printRoll(){
//     console.log("Roll no. 135");
// }
// printRoll();

// //applying loop
// function PrintNick(){
//     for(let i=0; i<=5; i++){
//         console.log(`${i}` + " Affan is best");
//     }
// }
// PrintNick();

// let poem = "Poetry (derived from the Greek poiesis), also called verse,[note 1] is a form of literature that uses aesthetic and often rhythmic[1][2][3] qualities of language such as phonaesthetics, sound symbolism, and metre to evoke meanings in addition to, or in place of, a prosaic ostensible meaning. A poem is a literary composition, written by a poet, using this principle Poetry has a long and varied history, evolving differentially across the globe. It dates back at least to prehistoric times with hunting poetry in Africa and to panegyric and elegiac court poetry of the empires of the Nile"

// function printPoem(){
//     console.log(poem);
// }
// printPoem();

// let ran = Math.random() * 6;

// function dice(){
//     console.log(Math.floor(ran) + 1);
// }
// console.log("The result of rolling dice is: ")
// dice();

// //function with arguments
// function printName(name, age, city){
//     console.log(`Name is ${name}, age is ${age} & city is ${city}`);
// }
// printName("Iron man",40,"kolkata");
// printName("Super man", 30,"London");

// function sum(a , b){
//     console.log(`The sum is ${a+b}`);
// }
// sum(5,3);
// sum(9,6);

// function divide(f,e){
//     console.log(`The division is of ${f} from ${e} is ${f/e}`);
// }
// divide(9,3);
// divide(10,2);

// function avg(a,b,c){
//     console.log(`The average of ${a}, ${b} & ${c} is ${(a+b+c)/3}`);
// }
// avg(98,56,74);
// avg(3,4,5);

// // let n = prompt("input the number: ");

// function table(n){
//     for(let i = n; i<=10*n; i=i+n)
//     {
//         console.log(i);
//     }
// }
// // table(9);
// table(8);

// let arr = [1,2,3,4,5]   //SLICE print the starting value to end 
// console.log(arr.slice(1,3));

// function sum(a,b){
//     console.log(`the sum is ${a-b}`);
// }
// sum(85,9);

// //return keyword
// function sub(a,b){
//     return a-b ;
// }
// console.log(sub(9,6));

// function division(f,d){
//     return f/d;
// }
// console.log(division(24,6));


// function isAdult(age){
//     if(age>=18){
//         return "Adult";
//     } else{
//         return "Not adult";
//     }
//     console.log("OK");
// }
// isAdult(28);

// // P QS 5

// function getSum(n){
//     let sum = 0;

//     for(let i=1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// // P QS 5

// function getSum(n){
//     let sum = 0;

//     for(let i=1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// //p qs 6
// let str = ["md","affan","asghar"];

// function concat(str){
//     let result = " ";

//     for(let i=0; i < str.length; i++){
//         result  = result + str[i];
//     }
//     return result;
// }

//lexical scope

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }

//P Qs 7
// let greet  = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// let name = "affan";

// let sum = function(a,b,c){
//     return a+b+c;
// }

// let hello = function(){
//     console.log("hello");
// }

//higher order function

// function multipleGreet(func,count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("namaste");
// }
// multipleGreet(greet,100);

// let odd = function(n){
//     console.log(!(n%2==0));
// }

// let even = function(n){
//     console.log(n%2==0);
// }

// const calculator = {
//     num : 60,
//     add: function (a,b) {
//         return a+b;
//     },
//     sub: function (a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };

//return array element larger than the number

let arr = [8,9,10,1,2,3,4,5,6,7,8];
let num = 5;

function getElements(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>num){
            console.log(arr[i])
        }
    }
}
getElements(arr,num);

//extract unique character
// let str = "abcdabcdefgggh";

// function getUnique(str){
//     let ans = "";
//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);

let country = ["australia","germany","united state of america"];

function longestName(country){
    let ansIdx = 0;
    for(let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);

let str = "apnacollege";

function countVowels(str){
    let count = 0;
    for(let i=0; i< str.length; i++) {
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
          ){
            count++;
          }
    }
    return count;
}

let start = 100;
let end = 200;
 function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}