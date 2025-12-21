var div=document.querySelector(".card div");
var like=document.querySelector("#like");  
let lastTap = 0;

div.addEventListener("click", () => {
  const now = Date.now();

  // detect double tap (2 clicks within 300ms)
  if (now - lastTap < 300) {
    showHeart();
  }

  lastTap = now;
});
function showHeart(){
    like.style.opacity=1;
    like.style.transform= `translate(-50%,-50%) scale(1) rotate(0deg)`;

    setTimeout(function(){
         like.style.transform = 'translate(-50%,-400%) scale(1) rotate(60deg)'
    }, 800)
     setTimeout(function () {
        like.style.opacity = 0
    }, 1000)
     setTimeout(function () {
        like.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
    }, 1200)

}