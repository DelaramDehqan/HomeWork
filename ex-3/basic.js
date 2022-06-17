// //add the event click listeners for div
// let div = document.getElementsByClassName('cta_container')[0];
// div.addEventListener('click', () => {
//     alert ('cta_container');
//     return;
// });

// //add the event click listeners for button
// // let button = document.getElementsByClassName('cta_button')[2];
// // button.addEventListener('click', ()=> {
// //     alert ('cta_button');
// // });
// document.getElementsByClassName("cta_button").addEventListener("click", function() {
//     alert("Hello World!");
//   });
// events and args should be of type Array

//first part
const container = document.querySelector('.cta_container');
container.addEventListener('click', () => {
  console.log(container.nodeName);
});


//second part
const btn =document.querySelector('.cta_button');
btn.addEventListener('click',(e)=>{
console.log(btn.nodeName);
e.stopPropagation()
})
