let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    // alert("form submitted");

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    //this property
    // let user = this.elements[0];
    // let pass = this.elements[1];
    // console.dir(inp);

    // console.log(inp.innerText);
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

// let user = document.querySelector("#user");

// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value = ",this.value);
// })