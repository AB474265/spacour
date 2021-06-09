const loader = document.querySelector(".preloader");
const unchecked = document.querySelector("#navi-toggle");
const body1 = document.querySelector("body");
const navItems = document.querySelectorAll(".navigation__link");


window.onload = setTimeout( function(){
    loader.style.display = "none";
}, 2000);

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", () => {
        console.log("Clicked");
        console.log(unchecked);
        unchecked.checked = false;
    });
    
}


