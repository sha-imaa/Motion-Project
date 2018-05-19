var slider_container =
  document.getElementById("box");

//Array images' container
var images=['imgs/slider-1.png','imgs/slider-2.png','imgs/slider3.png'];

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
  
  
  
                 // Slide container code..
                 
  var slideIndex=1;
      showSlide(slideIndex);
      
      //buttons' function
  function plusSlide(n){
    showSlide(slideIndex =n+1);
  }
  plusSlide();
  
  //dots' function
  function currentSlide(n){
    
    showSlide(slideIndex=n);
  }
  currentSlide();
  
  // function for slides and dots
  function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("mySlideFade");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
      slideIndex = 1;
      }
      
    if(n < 1){
      slideIndex = slides.length;
      }
    
            //slides' loop
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
            //bubble dots' loop
    for(i=0; i < dots.length ; i++){
      dots[i].className= dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
  }
  
   showSlide();