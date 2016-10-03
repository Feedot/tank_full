window.onload = function() {
  var header = document.getElementsByClassName('product-tab__head');

  for( var i=0 ; i < 3; i++) {
    header[i].addEventListener('click', toogleActive);
  }

  function toogleActive() {
    clear();
    this.parentNode.classList.add('active');
  }

  function clear() {
    var top = document.getElementsByClassName('product-tab');
    for( var i = 0; i < 3; i ++)
      top[i].classList.remove('active');
  }
};

