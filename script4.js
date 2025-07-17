
let inp = document.querySelector("#text1");
let imp = document.querySelector("#date");
let inp2 = document.querySelector("#select1");
let BTN = document.querySelector("#add");

let showdata = document.querySelector("#show");

let arr = [];

BTN.addEventListener('click',()=>{

    let obj ={
        inp:inp.value,
        inp2:inp2.value,
        imp:imp.value
    }
    arr.push(obj);
    inp.value="";
    inp2.value="";
    imp.value="";
    display();
    

})

function display(){
 
    showdata.innerHTML="";
    arr.forEach((Element,i)=>{
        showdata.innerHTML+=
        `<tr >
       <td>${i+1}</td> 
       <td>${Element.inp}</td>
       <td>Prioprity:${Element.inp2}</td>
       <td>Deadline:${Element.imp}</td>
       <td><button onclick="del(${i})">Task done</button></td>
     </tr>`
    })
}

let del=(id)=>{
  arr.splice(id,1);
  display();
}