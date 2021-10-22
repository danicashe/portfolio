function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$(window).scroll({
    previousTop: 0
  },
  function() {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
      $(".sidebar em").text("Up"); /* optional for demo */
      $("header").show();
    } else {
      $(".sidebar em").text("Down");
      $("header").hide();
    }
    this.previousTop = currentTop;
  });

//Get the button
var mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
