
function SelectRedirect(){
  switch(document.getElementById('s1').value)
  {
    case "Tamil":
    window.location="file:///C:/Users/SANJAY/OneDrive/Desktop/transport%20project/submittamil.html";
    break;

    case "Telugu":
    window.location="file:///C:/Users/SANJAY/OneDrive/Desktop/transport%20project/submittelugu.html";
    break;

    case "Kannada":
    window.location="file:///C:/Users/SANJAY/OneDrive/Desktop/transport%20project/submitkannada.html";
    break;

    case "Malayalam":
    window.location="file:///C:/Users/SANJAY/OneDrive/Desktop/transport%20project/submitmalyalam.html";
    break;
  }
}
let slideIndex=0;
showSlides();
function showSlides(){
  let i;
  let slides=document.getElementsByClassName("slides");
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  slideIndex++;
  if(slideIndex>slides.length){
    slideIndex=1
  }
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,2000);
}
