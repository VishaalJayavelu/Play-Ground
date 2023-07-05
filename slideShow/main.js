let slides=1;
Slideshow(slides)

function updateSlideshow(n){
     Slideshow(slides=n);
}
function Slideshow(n){
     let i;
     let img=document.getElementsByClassName("slides");
     let btn=document.getElementsByClassName("btn");
     
     if(n>img.length){slides=1}

     if(n<1){slides=img.length;}
     
     for(i=0; i<img.length; i++){
          img[i].style.display="none";
     }
     
     for (i = 0; i<btn.length; i++) {
          btn[i].className = btn[i].className.replace(" active", "");
     }
     
     img[slides-1].style.display="block";
     btn[slides-1].className += " active";
     setTimeout(updateSlideshow, 3000, slides+1);
}


