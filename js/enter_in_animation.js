// Sliding Commentaires -----------------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);

  //Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("com_1");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; 
  slides[slideIndex - 1].style.animation ="EnterRight 1s";
  dots[slideIndex - 1].className += " active";
  
}


// automatic slide
carousel();

function carousel() {
   var i;
   var slides = document.getElementsByClassName("com_1");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
 }
   if (slideIndex > slides.length) {slideIndex = 1}    
   slides[slideIndex - 1].style.display = "block";  
   slides[slideIndex - 1].style.animation ="EnterRight 1s";
  dots[slideIndex - 1].className += " active";
  setTimeout(carousel, 5000); // 
}