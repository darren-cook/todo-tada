const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(navButton =>(
    navButton.addEventListener("click",function(){
        event.stopPropagation();
        console.log(navButton.id)
    })
))