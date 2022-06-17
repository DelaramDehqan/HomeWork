
//first part
let title = document.getElementById('elemId');
title.addEventListener('click',()=>{
console.log('Goodbye');
});



//second part
function showCoords(event) {
  let x = event.clientX;
  let y = event.clientY;
  let coords = "X coords: " + x + ", Y coords: " + y;
  console.log(coords);
}