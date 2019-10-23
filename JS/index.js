var openedByHamburger = false;
function toggleActive(){ 
    openedByHamburger = !openedByHamburger;
    document.getElementById("hamburger").classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("sum").classList.toggle("active");
}

function roll(elementId){
    if(openedByHamburger){
        toggleActive();
    }
    var el = document.getElementById(elementId);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}