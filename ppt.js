let pic=0;
const slides = document.getElementsByClassName("slide");

function showslide(index) {

  for (let i = 0; i < slides.length; i++) {
    slides[i].getElementsByClassName.display = "none";
  }

  slides[index].getElementsByClassName.display = "block";

}


function prevSlide() {
  pic--;
  if (pic < 0){
    pic =slides.length -1;
  }
  showslide(pic);
}

function nextSlide() {
  pic++;
  if (pic >= slides.length) {
    pic = 0;
  }
  showslide(pic);
}













