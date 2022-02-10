let menuIcon = document.querySelector('.hero-menu'),
    menuBox = document.querySelector('.menu-box'),
    closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener("click", () =>{
    menuBox.style.display = "block"
})

closeMenu.addEventListener("click", () =>{
    menuBox.style.display = "none"
})