
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



// RANDOM LIST
// ---------------------------------------------
var random = document.querySelector('.random');
for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
}



// ABOUT OPEN/CLOSE
// ---------------------------------------------
var about = document.querySelector('.about');
var aboutBtn = document.querySelector('.about-btn');

function showAbout() {
  about.classList.toggle("show");
  aboutBtn.classList.toggle("close");
}



// CAPTION BUTTON (SHOW/HIDE)
// ---------------------------------------------
var captionBtn = document.getElementsByClassName("caption-btn");
var i;

for (i = 0; i < captionBtn.length; i++) {
  captionBtn[i].addEventListener("click", function() {

    // show/hide caption on mouse click
    var caption = this.nextElementSibling;
    caption.classList.toggle("caption-show");
  });
}



// UNUSED FIT TEXT
// ---------------------------------------------
// fitText(document.getElementById('fittext'), .92)




// UNUSED SCROLL
// ---------------------------------------------
// const button = document.querySelector('.slide-wrap');
// var width = document.documentElement.clientWidth;
// var container = document.querySelector('.slide-wrap')
// var scrollWidth = container.scrollWidth;
//
// var scrolled = false;
//
// container.addEventListener('scroll', function(event)
// {
//     var container = event.target;
//     if (container.scrollWidth - container.scrollLeft === container.clientWidth)
//     {
//         console.log('scrolled');
//         scrolled = true;
//     } else {
//         console.log('not scrolled');
//         scrolled = false;
//     }
// });
//
// button.onclick = function () {
//   if (scrolled == false) {
//     container.scrollLeft += width;
//   } else {
//     container.scrollLeft -= scrollWidth;
//   }
// };
