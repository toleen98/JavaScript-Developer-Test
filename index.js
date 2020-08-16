var catHelth = 400;
var dogHelth = 400;

var cat = document.getElementById("cat");
var dog = document.getElementById("dog");
var right = document.getElementById("right-btn");
var left = document.getElementById("left-btn");
var handBtn = document.getElementById("hand");
var eyeBtn = document.getElementById("eye");

var catPosition =cat.offsetLeft;
var dogPosition = dog.offsetLeft;

// function leftBtn() {
//     catPosition+=60
//     if (catPosition !== dogPosition) {
//         console.log(catPosition,dogPosition)
//         cat.style.left += catPosition + "px"
//     }
// }




function hand(){
    dogHelth -= 20;
    document.getElementById('health-bar2').style.width = dogHelth + "px";
  
}

function eye(){
    dogHelth -= 40;
    document.getElementById('health-bar2').style.width = dogHelth + "px";
    
}