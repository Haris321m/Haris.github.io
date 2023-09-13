var up = document.querySelector("#up")
var down = document.querySelector("#down")
var img_1 = document.querySelector("#img-1")
var img_2 = document.querySelector("#img-2")
var img_3 = document.querySelector("#img-3")

up.addEventListener("click", function(){

      img_1.style.display="block";
      img_3.style.display="none";

});
down.addEventListener("click", function(){

    img_3.style.display="block";
    img_1.style.display="none";

});
document.querySelector(".ul .up-btn").addEventListener("click", function(){

      img_1.style.display="block";
      img_3.style.display="none";

});
document.querySelector(".ul .down-btn").addEventListener("click", function(){

    img_3.style.display="block";
    img_1.style.display="none";

});

var images = document.querySelectorAll(".hero .right .images .ul .slide");
images.forEach(function(image) {
    image.addEventListener("click", function() {
        var imageUrl = image.getAttribute("src");
        document.querySelector(".header").style.backgroundImage = "url('" + imageUrl + "')";
    });
});