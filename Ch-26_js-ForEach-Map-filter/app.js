// let arr = [1,2,3,4,5];

// arr.forEach( (el) => {
//     console.log(el);
// });

// arr.forEach(function (el){
//     console.log(el);
// });

// // arr.forEach(print);

let students = [{
    name : "affan",
    marks : 98,
},
{
    name :"shraddha",
    marks : 94.4,
},
{
    name : "rajat",
    marks: 94,
},
];
// arr.forEach((student) => {
//     console.log(student.marks);
// });

let gpa = students.map((el)=> {
    return el.marks/10;
});

let cgpa = students.map((el) =>{
    return el.marks/10*1.5;
});

let num = [1,2,3,4];

let double = num.map((el) => {
    return el*el;
});

// let nums = [1,2,3,4,5,6,7,8,9,10,13];

// let ans = nums.filter((el)=>{
//     return el%2 == 0;
// });

// let oddans = nums.filter((el)=> {
//     return el%2 != 0;
// });

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);

// //Reduce method 

// let numbers = [12,10,40];

// let total = numbers.reduce((res,count) => {
//     return res + count;
// });
// console.log(total);

// let arr = [1,2,3,4,5,,86,98,95,40];

// let max = -1;

// for(let i = 0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// // console.log(max);

// let ans = arr.reduce((max,el)=>{
//     if(max < el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// Array are multiples of 10 or not
// let arr = [10,50,20,30,40];

// let ten = arr.every((el)=> el%10 == 0);
// console.log(ten);

// to find min number in array

let nums = [10,12,45,7,96];

function getMin(nums){ 
let min = nums.reduce((min,el) => {
    if(min<el){
        return min;
    }else{
        return el;
    }
});
    return min;
}

// console.log(`Minimum among all in array is ${min}`);

// another ex

let array = [7,5,6,2,8,3,4];

let max = array.reduce((max,el) => {
    if(max>el){
        return max;
    }else{
        return el;
    }
});
console.log(`Maximum among all in array is ${max}`);

//spread
console.log(..."MD Affan Asghar");
//spread array literals
let arrr = [1,2,3,4,5];
let newarr = [...arrr];

let chars = [..."Hello"];

//spread object literals

const data = {
    email : "affanasgar8@gmial.com",
    password : "1234",
};
const dataCopy = {...data, id: 45, country: "India"};

function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us: ",args[i]);
    }
}

// Destructuring

let names = ["tony","bruce","peter","steve"];

// let winner = name[0];
// let runnerup = name[1];

let [winner, runnerup, ...others] = names;

const student = {
    name : "karan",
    age : 20,
    class: 11,
    subjects : ["hindi","english","math","science"],
    username : "karan@123",
    password: "abcd123",
};

let { username: user, password: secret, place = "kolkata"} = student;

//P qs

// let arr = [1,2,3,4,5,10];

// let arrSum = arr.reduce((res , el) => res+el , 0);

// console.log(arrSum);

// let arrSquare = arr.map((num) => num*num);
// console.log(arrSquare);

// let avg = arrSquare/arr.length;
// console.log(avg);

let arr = [10,20,30,40,50];

let arrmap = arr.map((arr) => (arr) + 5);
console.log(arrmap);

let list = ["affan","rahul","vivek","praveen","akash"];

let listUpper = list.map((list) => list.toUpperCase());
console.log(listUpper);

let doubleAndReturnArgs = (arr,...args) => [
...args,
...args.map((v) => v * 2),
];

doubleAndReturnArgs([1,2,3],4,4,);
doubleAndReturnArgs([2],10,4);

let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
mergeObjects = ({ a:1, b:2 },{ c:3, d:4 });