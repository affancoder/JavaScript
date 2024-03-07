// ------------------------ Async Function -------------------------

// async function name() {
//   //  // throw use for error
//   throw "Error happening";
//   return "Affan khan";
// }
// name();

// name()
//   .then((result) => {
//     console.log("Promise was resolved: ");
//   })
//   .catch((err) => {
//     console.log("Promise was rejected:");
//   });

// // ------------------------ Await Function ----------------------

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }
// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }

// // await for colors changing
// // Promise (capital P)

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("Color changed!");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("green", 1000);
//   await changeColor("blue", 1000);
// }

// // ----------------------------- API -------------------------------

// let json =
//   '{"fact":"A tomcat (male cat) can begin mating when he is between 7 and 10 months old.","length":76}';

// let validRes = JSON.parse(json);
// console.log(validRes.fact);

// let student = {
//   name: "Affan",
//   marks: 69,
// };

// // stringify convert into JSON format

// console.log(JSON.stringify(student));

// -------------------------- API Using fetch ----------------------------

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Fact 1: ", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data2) => {
//     console.log("Fact 2: ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// ---> parse convert into JSON Format ---
// ---> stringify convert into json ---
// ---> (response)res.json use to extract data to print api ---

// ------------------------- Using async-await in fetch url(api) -------------------------------

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (err) {
    console.log("Something Goes Wrong", err);
  }
}

getFacts();
