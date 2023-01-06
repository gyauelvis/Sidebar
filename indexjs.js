let toggle_btn = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let nav_links = document.querySelectorAll("nav ul li a span");
let brandName = document.querySelector("nav .brandName");
let menuStatus = false;
let widthWindow = window.innerWidth;
let toggle = () =>{
    if( menuStatus === false){
        nav.style.width = "18rem";
        nav_links.forEach(function(link){
        link.style.display = "block";
        });
        brandName.style.display = "block";
        menuStatus = true;
    }
    else if(menuStatus === true){
        nav.style.width = "5rem";
        nav_links.forEach(function(link){
        link.style.display = "none";
        });
        brandName.style.display = "none";
        menuStatus = false;
    }
}
toggle_btn.addEventListener("click",toggle)


let menuIcons = document.querySelectorAll("nav ul li a img");
let titleOpen = (icon) => {
    if(menuStatus === false){
        menuIcons.forEach(function(menuIcon){
            menuIcon.setAttribute("title",icon)
        });
    }
}