var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: 2000,
  pauseAutoPlayOnHover: false,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 1,
  friction: 1,
  draggable: false
});

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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
// window.addEventListener('resize', () => {
  // We execute the same script as before
  // let vh = window.innerHeight * 0.01;
  // document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
