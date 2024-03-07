let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async function (e) {
  let link = await getImage();
  console.log(link);
  let img = document.querySelector("#result");
  img.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (err) {
    console.log("ERORR", err);
    return "No Image Found";
  }
}

btn.addEventListener("click", async function (e) {
  let fact = await getfacts();
  console.log(fact);
  let p = document.querySelector("#result");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getfacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (err) {
    console.log("ERORR", err);
    return "No Fact Found";
  }
}
