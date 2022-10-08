
var preloaderText = "www.akhileshkafle.com.np";

let i=0;
function typing(){
    if(i<preloaderText.length){
        document.querySelector(".preloader-text").innerHTML += preloaderText.charAt(i);
        i=i+1;
        setTimeout(typing,100)
    }
}
typing();

window.addEventListener("load",function(){
    this.document.querySelector(".preloader").style.display = "none"
})

setting = document.getElementById("setting")

setting.addEventListener("mouseenter",function(){
    setting.classList.add("fa-spin")
})

setting.addEventListener("mouseleave",function(){
    setting.classList.remove("fa-spin")
})
setting.addEventListener("click",function(){
    document.querySelector(".theme").style.display="block"
})
var themeCross=document.getElementById("theme-cross");

themeCross.addEventListener("click",function(){
    document.querySelector(".theme").style.display="none";
})


const bgcolor = localStorage.getItem("--color");
if (bgcolor){
    document.querySelector(":root").style.setProperty("--color",bgcolor);
}

document.querySelectorAll(".color").forEach(color=>{
    color.onclick = () =>{
        let bg = color.style.background;
        document.querySelector(":root").style.setProperty("--color",bg);
        localStorage.setItem("--color",bg)
    }
})

window.addEventListener("scroll",function(){
    if (window.scrollY>30){
        document.querySelector("header").classList.add("sticky");
    }
    else{
        document.querySelector("header").classList.remove("sticky");
    }
});

logo = document.querySelector("#logo");

logo.addEventListener("click",function(){
    window.scrollTo(0,0);
})

let menu = document.querySelector("#bars");
let navlist = document.querySelector(".navlist");
let navCross = document.querySelector("#nav-cross");

menu.addEventListener("click",function(){
    navlist.style.display = "flex";
    menu.style.display = "none";
})

navCross.addEventListener("click",function(){
    navlist.style.display = "none";
    menu.style.display = "block";
})


