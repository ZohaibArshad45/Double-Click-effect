var box = document.querySelector(".box-img")
var cricled = document.querySelector("i")
var check =0

box.addEventListener("dblclick", function(){
    cricled.style.scale =1
    cricled.style.opacity =1
    setTimeout( function(){
        cricled.style.scale =1
        cricled.style.opacity =1

    },1000);
    setTimeout( function(){
        cricled.style.scale =0
        cricled.style.opacity =0

    },1000);


})