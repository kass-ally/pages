window.addEventListener("load", function(){
    var photos = document.getElementsByClassName("photograph");
    var i = 0;
    for(i=0; i<photos.length; i++){
        photos[i].classList.add("photoShow");
        photos[i].classList.remove("hidden");
    }
})

function enlargePhoto(event){
    var enlargeEle = document.getElementById("enlarge");
    var photocontainer = document.querySelectorAll("main");
    enlargeEle.classList.remove("hidden");
    photocontainer[0].classList.toggle("photo-container");
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.enlarged-ph')){
            console.log("clickeddd")
        };
    
    }, false);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}