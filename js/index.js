
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
    // document.querySelector('.about').style.display = "flex";
    document.querySelector('html').style.overflowY = "scroll";
    // document.querySelector('.feature').style.height = "97vh";
    document.querySelector('.down-arrow').style.bottom = "2rem";
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

  var ul = document.querySelector('ul');
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }

  document.onscroll = function(){
    document.querySelector('.down-arrow').style.opacity = "0";
  };
