
// let inp1 = document.querySelector("#name");
// let inp2 = document.querySelector("#Categary");
// let inp3 = document.querySelector("#date");
// let Btn = document.querySelector("#btn");

// let DataShow = document.querySelector("#tbody")

// let arr = [];

// Btn.addEventListener('click',()=>{
// if(inp1.value == "" || inp2.value == "" || inp3.value == ""){
//     alert("Please fill all the fields");
//     return;
// }
// let obj ={
//     inp1: inp1.value,
//     inp2: inp2.value,
//     inp3: inp3.value
// }
// arr.push(obj);
// inp1.value = ""; 
// inp2.value = "";
// inp3.value = ""; 
// display(); 
// })

// function display(){
//     DataShow.innerHTML = "";

//     arr.forEach((element,i)=>{
//     DataShow.innerHTML +=
//     `<tr>
//        <td>${i+1}</td>
//        <td>${element.inp1}</td>
//        <td>${element.inp2}</td>
//        <td>${element.inp3}</td>
//        <td><button onclick="edit(${i})">Edit</button></td>
//        <td><button onclick="del(${i})">Delete</button></td>
//     </tr>`
 
// //    console.log(element);
// })
// }

// function del(id){
 
//     arr.splice(id,1);
//     display();
//     // alert(id)
// }

// function edit(id){
// //  alert(id);
//     let obj = arr[id];
//     inp1.value = obj.inp1;
//     inp2.value = obj.inp2;
//     inp3.value = obj.inp3;
//     arr.splice(id, 1); 
//  display();
// }

let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#Categary");
let inp3 = document.querySelector("#date");
let Btn = document.querySelector("#btn");

let DataShow = document.querySelector("#tbody")

let arr = [];

Btn.addEventListener('click',()=>{
if(inp1.value == "" || inp2.value == "" || inp3.value == ""){
    alert("Please fill all the fields");
    return;
}
let obj ={
    inp1: inp1.value,
    inp2: inp2.value,
    inp3: inp3.value
}
arr.push(obj);
inp1.value = ""; 
inp2.value = "";
inp3.value = ""; 
display(); 
})

function display(){
    DataShow.innerHTML = "";

    arr.forEach((element,i)=>{
    DataShow.innerHTML +=
    `<tr>
       <td>${i+1}</td>
       <td>${element.inp1}</td>
       <td>${element.inp2}</td>
       <td>${element.inp3}</td>
       <td><button onclick="edit(${i})">Edit</button></td>
       <td><button onclick="del(${i})">Delete</button></td>
    </tr>`
 
//    console.log(element);
})
}

function del(id){
 
    arr.splice(id,1);
    display();
    // alert(id)
}

function edit(id){
//  alert(id);
    let obj = arr[id];
    inp1.value = obj.inp1;
    inp2.value = obj.inp2;
    inp3.value = obj.inp3;
    arr.splice(id, 1); 
 display();
}