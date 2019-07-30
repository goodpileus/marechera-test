// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
//   // document.querySelector('.about').style.display = "flex";
//   document.querySelector('html').style.overflowY = "scroll";
//   // document.querySelector('.feature').style.height = "97vh";
//   document.querySelector('.down-arrow').style.bottom = "2rem";
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }

// var ul = document.querySelector('ul');
// for (var i = ul.children.length; i >= 0; i--) {
//     ul.appendChild(ul.children[Math.random() * i | 0]);
// }
//
// document.onscroll = function(){
//   document.querySelector('.down-arrow').style.opacity = "0";
// };

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  wrapAround: true,
  prevNextButtons: false,
  draggable: true,
  pageDots: false,
  imagesLoaded: true,
  // freeScroll: true,
  lazyLoad: true,
  dragThreshold: 1,
  // autoPlay: 1500,
  // freeScrollFriction: 0.03
});

// carousel static click to advance slide
    flkty.on('staticClick', function(event, pointer, cellElement, cellIndex) {
      if (!cellElement) {
        return;
      }

      if (cellIndex == flkty.selectedIndex) {
        flkty.next();
      } else {
        flkty.select(cellIndex);
      }
    });
