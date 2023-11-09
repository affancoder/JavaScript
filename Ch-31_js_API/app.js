h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3) {
                reject("Promise rejected");
            }
            h1.style.color = color;
            resolve("Color Changed!");
        }, delay);
    });
}

async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    } catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a = 5;
    console.log(a);
    console.log("new number : ", a+3);
}
// async function greet(){
//     // throw "404 page not found";
//     return "hello";
// }
// greet()
// .then((result)=>{
//     console.log("Promise eas resolved");
//     console.log("result was: ",result);
// })
// .catch((err)=>{
//     console.log("Promise was rejected with error: ",err)
// });

// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }

// Accessing JSON data 

let student = {
    name : "Affan",
    marks : 8.13,
};
console.log(JSON.stringify(student));

//API request
let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=> {
//     console.log("Data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// });

// using fetch with async-await 

async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch();
        let data2 = await res2.json();
        console.log(data2.fact);
    } catch(e){
        console.log("Error - ",e);
    }
}