const navButtons = document.querySelectorAll(".nav-button");
const navToggle = document.querySelector("#nav-toggle");

navButtons.forEach(navButton =>(
    navButton.addEventListener("click",function(){
        event.stopPropagation();
        const navActive = document.querySelector(".nav-active");

        navActive.classList.toggle("nav-active");
        navButton.classList.toggle("nav-active");
    })
))

navToggle.addEventListener("click",function(){
    const sidePanel = document.querySelector("#side-panel");
    const nav = document.querySelector("nav");
    const navTexts = document.querySelectorAll(".nav-text");

    sidePanel.classList.toggle("side-panel-open");
    sidePanel.classList.toggle("side-panel-closed");

    nav.classList.toggle("nav-open");
    nav.classList.toggle("nav-closed");

    navToggle.classList.toggle("nav-toggle-open");
    navToggle.classList.toggle("nav-toggle-closed");

    navTexts.forEach(navText => {
        navText.classList.toggle("nav-text-open");
        navText.classList.toggle("nav-text-closed");
    })
})