h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed!");
        }, delay);
    });
    
}
//promises
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("ornage",1000);
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("blue color was conpleted");
    return changeColor("blue",1000);
});



// //call back hell (nesting)
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,() =>{
//         changeColor("green",1000, ()=>{
//             changeColor("yellow", 1000, ()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });


//promises

// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//       success();
//     } else{
//       failure();
//     }
// }

// savetoDb(
//     "apna college",
//     () => {
//         console.log("Success : Your data was saved " );
//         savetoDb("Hello World", ()=> {
//             console.log("Success 2 : data was saved");
//             savetoDb("Affan", () =>{
//                 console.log("Success 3: data was saved");
//             }), () => {
//                 console.log("Failure 3 : weak connection");
//             }
//         }), 
//         () => {
//             console.log("Failure 2 : weak connection");
//         }
//     },
//     () => {
//         console.log("Failure : Weak connection. data not saved");
//     }
// );

// function savetoDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("Success : data was saved");
//         } else {
//             reject("Failure : weak connection");
//         }
//     });
// }
// savetoDb("affan asghar")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log(result);
//     return savetoDb("Hello world");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log(result);
// })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("Promise was rejected");
//     console.log(error);
// });