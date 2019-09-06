// only loads once the window completely loads
window.onload = function() {
  console.log(':-)');

  // hide loading mask
  document.getElementById("loading").style.display = "none";
  document.getElementById("main-wrap").style.opacity = "1";
}

// RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
}

// ADVANCE SLIDES
// ---------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
    x[i].style.zIndex = "0";
  }
  x[slideIndex-1].style.opacity = "1";
  x[slideIndex-1].style.zIndex = "999";
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
            plusDivs(-1);
            break;
        case 39:
            //right
            plusDivs(+1);
            break;
    }
};


setTimeout(function(){
  var interval = setInterval(timer, 10000);

  function timer() {
    plusDivs(+1);
  }
}, 5000);

// var prompt1 = document.querySelector('.prompt1');
// var prompt2 = document.querySelector('.prompt2');
//
// setTimeout(function(){
//   var interval = setInterval(timer, 10000);
//
//   function timer() {
//     prompt1.classList.toggle("in-front");
//     prompt2.classList.toggle("in-front");
//   }
// }, 5000);
//
// setTimeout(function(){
//     prompt1.classList.toggle("in-front");
// }, 5000);


// ABOUT OPEN/CLOSE
// ---------------------------------------------
var about = document.querySelector('.about');
var prompt = document.querySelector('.prompt-wrap');
var aboutBtn = document.querySelector('.about-btn');
var html = document.querySelector("html");

function showAbout() {
  about.classList.toggle("show");
  prompt.classList.toggle("show");
  html.classList.toggle("stop-scrolling");

  setTimeout(function(){
  }, 0);
  // aboutBtn.classList.toggle("close");
}


// document.onscroll = function(){
//   document.querySelector('.down-arrow').style.opacity = "0";
// };
