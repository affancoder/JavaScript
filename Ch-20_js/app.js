let num = 100;
if (num%1 === 0){
    console.log(`${num} ` +"is divisible by 10");
}
else{
    console.log("bad");
}

// let userName = prompt("your username");
// let age = prompt("your age");
// console.log("userName" + "age");
// alert("name is age years old");

let Months = 4;

switch(Months){
    case 1 :
        console.log("Months in qaurter 1 : january , february, march");
        break;
    case 2:
        console.log("Months in qaurter 2 : april,may,june");
        break;
    case 3:
        console.log("Months in qaurter 3 : july,august,september");
        break;
    case 4:
        console.log("Months in qaurter 4 : october,november,december");
        break;
    default:
        console.log("invalid"); 
}

let str = "affanasghar";
if((str[0] == 'a' || str[0] == 'A') && (str.length > 5)){
    console.log("Golden string");
}
else{
    console.log("not a golden string");
}
//comparison bwt three

let a = 4;
let b = 6;
let c = 23;

if(a>b){
    if (a > c){
        console.log(`${a} ` + "is biggest");
    }
    else{
        console.log(`${c} ` + "is biggest");
    }
}
else{
 if(b>c){
    console.log(`${b} ` + "is biggest");
}else{
        console.log(`${c} ` + "is biggest");
    }
}

let num1 = 32;
let num2 = 47852;

if((num1%10) == (num2%10)){
    console.log("it's match");
}
else{
    console.log("it's not match");
}