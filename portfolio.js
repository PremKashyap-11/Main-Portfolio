let button=document.querySelector(".btn").onclick=()=>{
    window.open("RESUME1.docx");
}
let button1=document.querySelector(".btn2").onclick=()=>{
    window.location.href="#contact";
}

let linked=document.querySelector("#linkedin").onclick=()=>{
   window.location.href="https://www.linkedin.com/in/prem-kashyap-191065279/";
}

let linked1=document.querySelector("#linked").onclick=()=>{
   window.location.href="https://www.linkedin.com/in/prem-kashyap-191065279/";
}


let github=document.querySelector("#git").onclick=()=>{
    window.location.href="https://github.com/PremKashyap-11";
 }

 let Portfolio=document.querySelector("#Dgit").onclick=()=>{
    window.location.href="https://github.com/PremKashyap-11/Portfolio";
 }

 let Portfolio1=document.querySelector("#Dlive").onclick=()=>{
    window.location.href=" https://premkashyap-11.github.io/Portfolio/"
 }

 let Caffeola=document.querySelector("#Cgit").onclick=()=>{
    window.location.href="https://github.com/PremKashyap-11/responsive-coffee-website";
 }

 let Caffeola1=document.querySelector("#Clive").onclick=()=>{
    window.location.href="https://premkashyap-11.github.io/responsive-coffee-website// ";
 }


 let Currency=document.querySelector("#Cugit").onclick=()=>{
   window.location.href="https://github.com/PremKashyap-11/Currency-Converter ";
}

let Currency1=document.querySelector("#Culive").onclick=()=>{
   window.location.href="https://premkashyap-11.github.io/Currency-Converter/";
}

let menu = document.querySelector("#hamburger");
let navbar = document.querySelector(".menu-links");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});
window.onscroll = () => {
   navbar.classList.remove("active");
};