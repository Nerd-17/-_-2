let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

showSlides();
function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block"; 
    
    setTimeout(showSlides, 3000); 
}
function moveSlide(n) {
    showCurrentSlide(slideIndex += n);
}
function showCurrentSlide(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
