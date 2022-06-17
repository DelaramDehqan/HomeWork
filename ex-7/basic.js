
//mosemove function

let moseMove = document.getElementById('show_position');
function event_function(event){
    let x = event.clientX;
    let y = event.clientY;
    let coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    moseMove.innerText = coords;
    console.log(moseMove);
}
