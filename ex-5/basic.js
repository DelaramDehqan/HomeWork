
// we need addEventListener, target
let buttons = document.querySelector("#buttons");
let btns = document.querySelectorAll('button');
buttons.addEventListener("click", (event) => {
  let clicked = event.target;
  if ((clicked.className === "buttonClass")) 
    console.log("buttonClass");
  else if ((clicked.className === "buttonClass2")) 
    console.log("click");
});
