let url = "https://fakerapi.it/api/v1/credit_cards?_quantity=2";

let btn = document.querySelector("button");

async function getData(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch(e){
        console.log("Error - ",e);
    }
}