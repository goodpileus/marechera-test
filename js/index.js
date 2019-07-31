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
    x[i].style.zIndex = "0";

  }
  // x[slideIndex-1].style.display = "flex";
  x[slideIndex-1].style.opacity = "1";
  x[slideIndex-1].style.zIndex = "999";
}

// var ul = document.querySelector('ul');
// for (var i = ul.children.length; i >= 0; i--) {
//     ul.appendChild(ul.children[Math.random() * i | 0]);
// }
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

// var caption = document.querySelector('.caption');

// function toggleCaption() {
//   caption.classList.toggle("caption-show");
// }

var captionBtn = document.getElementsByClassName("caption-btn");
var i;

for (i = 0; i < captionBtn.length; i++) {
  captionBtn[i].addEventListener("click", function() {

    // resizes window to fix flickity height
    // window.dispatchEvent(new Event('resize'));

    // this.classList.toggle("caption-show");
    var caption = this.nextElementSibling;
    caption.classList.toggle("caption-show");
  });
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
