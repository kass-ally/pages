var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btns = document.getElementsByClassName("button-bar");
var i = 0;
var lastScrollTop = 0;

// When window scrolled to position, show hamburger navigation bar
window.addEventListener("scroll", function(){
   var lengthscrolled = window.pageYOffset || document.documentElement.scrollTop; 
   if (lengthscrolled > lastScrollTop){
    if(lengthscrolled > 110){
        btn.classList.remove("hidden");
        for( i=0; i<btns.length; i++){
            btns[i].classList.add("show");
            btns[i].classList.remove("hide");
        }
    }
   } else {
    if(lengthscrolled < 110){
        for( i=0; i<btns.length; i++){
            btns[i].classList.add("hide");
            btns[i].classList.remove("show");
        }
        btn1.classList.remove("flatRoatate1");
        btn2.classList.remove("scaleUp");
        btn3.classList.remove("flatRoatate2");
    }
   }
   lastScrollTop = lengthscrolled <= 0 ? 0 : lengthscrolled;
}, false);

// When btn is clicked, crossed is formed by lines
btn.addEventListener("click", function(){
    console.log("Cclicked");
    var fullNav = document.getElementById("fullNav");
    var body = document.body;
    var main = document.querySelectorAll("main");
    var pageTitle = document.getElementById("pageTitle");
    var dmNo = document.getElementsByClassName("dm-no");
    var dmW = document.getElementsByClassName("dmW");
    fullNav.classList.remove("hidden");
    body.classList.toggle("noOf");
    if(main[0].classList.contains("blurry")){
        main[0].classList.remove("blurry");
        main[0].classList.add("noblurry");
        pageTitle.classList.remove("blurry");
        pageTitle.classList.add("noblurry");
    }else{
        main[0].classList.add("blurry");
        main[0].classList.remove("noblurry");
        pageTitle.classList.add("blurry");
        pageTitle.classList.remove("noblurry");
    }
    if(fullNav.classList.contains("greyBg")){
        fullNav.classList.add("nogreyBg");
        fullNav.classList.remove("greyBg");
    }else{
        fullNav.classList.remove("nogreyBg");
        fullNav.classList.add("greyBg");
    }
    if( btn1.classList.contains("crossRoatate1")){
        btn1.classList.add("flatRoatate1");
        btn1.classList.remove("crossRoatate1");
    }else{
        btn1.classList.add("crossRoatate1");
        btn1.classList.remove("flatRoatate1");
    }
    if( btn3.classList.contains("crossRoatate2")){
        btn3.classList.add("flatRoatate2");
        btn3.classList.remove("crossRoatate2");
    }else{
        btn3.classList.add("crossRoatate2");
        btn3.classList.remove("flatRoatate2");
    }
    if( btn2.classList.contains("scaleDown")){
        btn2.classList.add("scaleUp");
        btn2.classList.remove("scaleDown");
    }else{
        btn2.classList.add("scaleDown");
        btn2.classList.remove("scaleUp");
    }
    for(i=0;i<dmNo.length;i++){
        if(dmNo[i].classList.contains("dnofadeIn")){
            dmNo[i].classList.add("dnofadeOut");
            dmNo[i].classList.remove("dnofadeIn");
        }else{
            dmNo[i].classList.add("dnofadeIn");
            dmNo[i].classList.remove("dnofadeOut");
        }
    }
    for(i=0;i<dmW.length;i++){
        if(dmW[i].classList.contains("dnofadeIn")){
            dmW[i].classList.add("dnofadeOut");
            dmW[i].classList.remove("dnofadeIn");
        }else{
            dmW[i].classList.add("dnofadeIn");
            dmW[i].classList.remove("dnofadeOut");
        }
    }
});

// When btn is hovered, middle line shorten/longen 
function hoverLong(x) {
    btn2.classList.remove("show");
    btn2.classList.remove("hoverShort");
    btn2.classList.add("hoverLong");
    btn2.classList.remove("scaleUp");
} 
function hoverShort(x) {
    btn2.classList.remove("hoverLong");
    btn2.classList.add("hoverShort");
    btn2.classList.remove("scaleUp");
}
