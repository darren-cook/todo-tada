function changeDispay(navButton){
    const navActive = document.querySelector(".nav-active");
    const oldMain = document.querySelector(".main-active");
    const newMain = document.querySelector(`#main-${navButton.id}`);

    navActive.classList.toggle("nav-active");
    navButton.classList.toggle("nav-active");

    oldMain.classList.toggle("main-active");
    newMain.classList.toggle("main-active");
    oldMain.classList.toggle("main-inactive");
    newMain.classList.toggle("main-inactive");
}


export { changeDispay }