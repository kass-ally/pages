window.addEventListener("load", function(){
    var photos = document.getElementsByClassName("photograph");
    var i = 0;
    for(i=0; i<photos.length; i++){
        photos[i].classList.add("photoShow");
        photos[i].classList.remove("hidden");
    }
})

window.addEventListener("click", function(event){
    var imgurl = event.target.parentElement.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    var enlargeCont = document.getElementById("enlarge");
    var enlargedPhoto = document.getElementById("enlargedPhoto");
    var img = document.createElement("img");
    img.src = imgurl;
    enlargedPhoto.appendChild(img);
    enlargedPhoto.childNodes[0].classList.add("enlargedImg")
    enlargeCont.classList.remove("hidden");
})