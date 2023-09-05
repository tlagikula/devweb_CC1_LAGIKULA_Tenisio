"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");
const $res = document.getElementById('resultat')


let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;

function launchGame(_evt) {
  
  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  /*maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;*/
  maxGuesses = Math.floor(Math.random()*$maxUsr.value) + 1
  $guessBtn.removeAttribute("disabled");
  $output.innerHTML += "partie Lancée, trouver le nombre secret en  " + maxGuesses + "  coups<br>";
  $guessBtn.addEventListener("click",function verif (){
  const user = parseInt($numUsr.value)
  if (user<$maxUsr.value){
    if (user === secretNumber){
      $output.innerHTML += user + "<br>félicitation<br>";
      $guessBtn.toggleAttribute("Disabled");
      } 
    if(user<secretNumber) {
        $output.innerHTML += user + "<br>il est plus haut<br>";
      }
    if(user>secretNumber){
        $output.innerHTML += user + "<br>il est plus bas<br>";
      }
      }
  else{
        $output.innerHTML += user + "le nombre entrée est supérieur ou inférieur au nombre max à chercher<br>";
      }
    });
  }
    
$startBtn.addEventListener("click",launchGame);
  



function addCow(evt) {
  console.debug(evt.x, evt.y);
  const $img = document.createElement("img");
  $img.src = "https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg";
  document.body.appendChild($img);
  $img.classList.add("cow");
  $img.style.top=`${evt.y-20}px`;
  $img.style.left=`${evt.x-30}px`;
  var rotation = (Math.random() * 360);
  $img.style.transform = "rotate("+rotation+"deg)";

}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);

