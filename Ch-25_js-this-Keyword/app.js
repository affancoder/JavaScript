// const student = {
//     name : "affan",
//     age : 20,
//     eng : 89,
//     math: 98,
//     phy : 78,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }
// }
// function getAvg(){
//     console.log(this);
// }

// console.log("hello");
// try{
//     console.log(a);
// }catch{
//     console.log("try catch")
// }

//Arror function

const sum = (a,b) => {
    console.log(a+b);
};

const sub = (a,b) =>{
    console.log(a-b);
};

const cube = (a) =>{
    return a*a*a;
};

const pow = (a,b) =>{
    return a**b;
}

let mul = (a,b) =>(
    a*b
);

let sumo = (a,b,c) =>(
    a+b+c
);

let subo = (a,b) => a-b;
let mulo = (a,b,c,d) => a*b*c*d;

// console.log("Hi there");

// setTimeout( () => {
//     console.log("Apna College")
// },4000);

// console.log("Welcome to web");

// console.log("MD Affan Asghar");

// let id = setInterval(()=> {
//     console.log("Good boy");
// },2000);

// console.log("Roll no.135");
// console.log(id);

// console.log("hi");
// let id2= setInterval(()=>{
//     console.log("here");
// },2000);
// console.log("bye");
// console.log(id2);

const student = {
    name : "affan",
    age : 25,
    prop: this,

    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);
        return this.marks;
    },

    getInfo1:function (){
        setTimeout( () => {
            console.log(this);
    },2000);
    },
    getInfo2:function (){
        setTimeout( function() {
            console.log(this);
        }, 2000);
    },
};

//P Qs

// const square = (n) => n*n;
// console.log(square(5));

// console.log("hi");

// let id = setInterval( () => {
//     console.log("Hello World");
// },2000);

// setTimeout( () =>{
//     clearInterval(id);
//     console.log("clear interval");
// },10000),

// console.log("bye");

//P Qs

const arrayAvg = (arr) => {
    let total = 0;
    for(let number of arr){
        total +=number;
    }
    return total/arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAvg(arr));

let num = 6;

const isEven = (num) => num%2 == 0;

let odd = 7;

const isOdd = (num) => num%2 !=0 ;

const object  = {
    message: 'hello, world!',

    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

let length = 4;
function callback(){
    console.log(this.length);
}

const object1 = {
    length: 5,
    method(calback){
        callback();
    },
};
object1.method(callback,1,2);