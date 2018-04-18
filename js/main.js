var slider_container =
  document.getElementById("box");

//Array images' container
var images=['imgs/slider-1.png','imgs/slider2.PNG','imgs/slider3.png'];

var i = image.length;


             //function for next button
             
function nextSlide(){
   
  "use strict";
  if(i<images.length){
    i++;
     }else{
       i=1;
       
     }
     
  slider_container.innerHTML = "<img src = "+images[i-1]+">";
}
   nextSlide();
   

         //function for previous button
         
function prevSlide(){
   
  "use strict";
  if(i<=images.length && i>1){
    i=i-1;
     }else{
       i=images.length;
       
     }
     
  slider_container.innerHTML = "<img src = "+images[i-1]+">";
}
  prevSlide();