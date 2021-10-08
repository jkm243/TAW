//Hauteur du jumbotron -----------------------------------------------------------
var hauteurJumbotron = $('.jumbotron').outerHeight();
//Fonction appelée au scroll de la souris
function parallax() {
  //On calcule la distance de scroll, puis on réduit la taille du container du jumbotron en fonction de cette distance.
  var scrolled = $(window).scrollTop();
  $('.fond').css('height', hauteurJumbotron - scrolled + 'px');
}
//Ajout de la fonction à l'événement scroll
$(window).scroll(function(e) {
  parallax();
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

$('#myBtn').click(function() {
  $('body,html').animate(
    {
      scrollTop: 0
    },
    800
  );
  return false;
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Animation scrolling -----------------------------------------------------------
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

const handleIntersect = function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      entry.target.classList.add('RightToLeft-visible');
      entry.target.classList.add('LeftToRight-visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
  observer.observe(r);
});

document.querySelectorAll('.LeftToRight').forEach(function(r) {
  observer.observe(r);
});

document.querySelectorAll('.RightToLeft').forEach(function(r) {
  observer.observe(r);
});

// Magnific Popup
$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true
  }
});

// Counter Up Animation
$('.num').counterUp({
  delay: 10,
  time: 1500
});
