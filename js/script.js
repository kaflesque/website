
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



/* idk why this ain't working.... fix in next release
const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll(".navlist li");

console.log(sections);
console.log(navList);
window.addEventListener("scroll",function(){
    let current = " "
    sections.forEach(section =>{
        const sectiontop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectiontop){
            current = section.getAttribute("id");
            console.log(current);
        }
    })

    navList.forEach(li =>{
        li.classList.remove("active");
        if (li.classList.contains(current)){
            li.classList.add("active")
        }
    })
}) */