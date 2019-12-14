let iBtn = document.getElementById("indexBtn");
let pBtn = document.getElementById("portfolioBtn");
let cBtn = document.getElementById("contactBtn");
let iPage = document.getElementById("indexPage");
let pPage = document.getElementById("portfolioPage");
let cPage = document.getElementById("contactPage");

pBtn.addEventListener('click', switchPage1)
cBtn.addEventListener('click', switchPage2)
iBtn.addEventListener('click', switchPage3)

function switchPage1(){
    iPage.style.display = "none";
    pPage.style.display = "block";
    cPage.style.display = "none";
}
function switchPage2(){
    iPage.style.display = "none";
    pPage.style.display = "none";
    cPage.style.display = "block";
}
function switchPage3(){
    iPage.style.display = "block";
    pPage.style.display = "none";
    cPage.style.display = "none";
}