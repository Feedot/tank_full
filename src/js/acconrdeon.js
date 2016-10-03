window.onload = function() {
  var header = document.getElementsByClassName('product-tab__head');
  for (var i=0; i < 3; i++) {

    header[i].addEventListener('click', toogleActive(header[i]), false);
  }

  function toogleActive(item) {

    console.log("click");

    // item.parentNode.classList.remove('active');
    // item.parentNode.classList.add('active');

    console.log("active");
  }
};

