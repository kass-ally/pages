window.addEventListener("load", function(){
    var photos = document.getElementsByClassName("photograph");
    var i = 0;
    for(i=0; i<photos.length; i++){
        photos[i].classList.add("photoShow");
        photos[i].classList.remove("hidden");
    }
})

window.addEventListener("click", function(event){
    var body = document.body;
    var enlargeCont = document.getElementById("enlarge");
    var enlargedPhoto = document.getElementById("enlargedPhoto");
    var img = document.createElement("img");
    if(event.target.classList.contains("layer")){
        var imgurl = event.target.parentElement.style.backgroundImage.slice(4, -1).replace(/"/g, "");
        img.src = imgurl;
        body.classList.add("noOf");
        enlargedPhoto.appendChild(img);
        enlargedPhoto.childNodes[0].classList.add("enlargedImg")
        enlargeCont.classList.remove("hidden");
        enlargeCont.classList.add("largephfadeIn");
        enlargeCont.classList.remove("largephfadeOut");
        }else{
            if(!enlargeCont.classList.contains("hidden")){
                if (!event.target.closest('.enlargedImg')){
                    enlargeCont.classList.add("hidden");
                    enlargedPhoto.removeChild(enlargedPhoto.lastElementChild);
                    body.classList.remove("noOf");
                    enlargeCont.classList.remove("largephfadeIn");
                    enlargeCont.classList.add("largephfadeOut");
                } 
            }
        }
})