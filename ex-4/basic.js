//we need for method here: 

let features = document.getElementsByClassName('item');
for(let i=0;i<features.length;i++){
    features[i].addEventListener('click',()=>{
        features[i].style.textDecoration = "line-through"
      });   
}