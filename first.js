let slideIndex = 0;
let slideIn = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length)  {
    slideIndex = 1  }

  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}



// ---------------------------------------------------
// we can do the media query with this syntax of javascript 

// function myFunction(x) {
//   if (x.matches) 
//   { 
      
//     }
    
//   else {
   
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) 
// x.addListener(myFunction)