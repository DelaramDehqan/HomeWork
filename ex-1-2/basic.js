
//name fild value
function myFunction(){
    let enter = document.getElementById("Name").value;
   if(enter){
       console.log("valid name please");
   }else{
       console.log("required name please!");
   }
}


// stoping submit click
function myFunction2(){
    let email = document.getElementById('Email');
    let change = document.getElementById('change');
    change.innerText = email.value;
}


//sumit 
let submited = document.getElementsByClassName("submit");
  submited.addEventListener("click", (e) => {
  e.preventDefault();
  });
