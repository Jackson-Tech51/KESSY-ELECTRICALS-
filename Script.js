// =========================
// KESSY ELECTRICALS
// script.js
// =========================

// Dark Mode
const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        darkBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", function(){

    cards.forEach(function(card){

        let position = card.getBoundingClientRect().top;

        let screen = window.innerHeight;

        if(position < screen - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

// Initial Style

cards.forEach(function(card){

    card.style.opacity = "0";

    card.style.transform = "translateY(80px)";

    card.style.transition = "1s";

});

// =========================
// Header Background
// =========================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 80){

        header.style.background = "#02102c";

        header.style.boxShadow =
        "0 5px 15px rgba(0,0,0,.4)";

    }

    else{

        header.style.background =
        "rgba(0,0,0,.4)";

        header.style.boxShadow = "none";

    }

});

// =========================
// Smooth Hover Effect
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn){

btn.addEventListener("mouseover",function(){

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseout",function(){

btn.style.transform="scale(1)";

});

});

// =========================
// Welcome Message
// =========================

window.onload = function(){

console.log("Welcome to KESSY ELECTRICALS Website");

};

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});