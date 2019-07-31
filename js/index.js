var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
  // document.querySelector('.about').style.display = "flex";
  // document.querySelector('.feature').style.height = "97vh";
  // document.querySelector('.down-arrow').style.bottom = "2rem";
}

// function toggleCaption() {
//   var caption = document.querySelector(".caption");
//   caption.classList.toggle("show");
// }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    // x[i].style.display = "none";
    x[i].style.opacity = "0";
  }
  // x[slideIndex-1].style.display = "flex";
  x[slideIndex-1].style.opacity = "1";
}

var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
//
// document.onscroll = function(){
//   document.querySelector('.down-arrow').style.opacity = "0";
// };

var about = document.querySelector('.about');
var aboutBtn = document.querySelector('.about-btn');
function showAbout() {
  // about.style.transform = "translateY(-100%)";
  about.classList.toggle("show");
  aboutBtn.classList.toggle("close");

  // document.querySelector('html').style.overflowY = "scroll";
}

fitText(document.getElementById('fittext'), .92)

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
