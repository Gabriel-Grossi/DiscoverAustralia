let slideIndex = 0;

function slideCarousel() {
    let i;
    let slide = document.getElementsByClassName("content-biggest-cities-slides-item");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) { slideIndex = 1 }
    slide[slideIndex - 1].style.display = "flex";
    
    setTimeout(slideCarousel, 6000);
}
slideCarousel();