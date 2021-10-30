var video = document.getElementById("video");

function playVideo() {
        video.play();
    } 


function dropDown(clickedRow) {
    var dropdownMenu = clickedRow.querySelector('ul')
    dropdownMenu.classList.toggle('visible')
}

// click listeners
let rows = document.querySelectorAll('.row')
// console.log(rows);

rows.forEach(function(row){
    row.addEventListener('click', function(){
        dropDown(row)
    })
})



function changeColor() {   
    var element = document.body;
    element.classList.toggle("dark-version");

    let myLogo = document.querySelector(".white01");
    let mySrc = myLogo.getAttribute('src');
    
    if(mySrc === "images/telenor-logo-white.jpg") {
        myLogo.setAttribute('src', "images/telenor-logo-black.jpg");
        } else {
            myLogo.setAttribute('src', "images/telenor-logo-white.jpg")
            }

    let myImg = document.querySelector(".white02");
    let myWatch = myImg.getAttribute('src');

    if(myWatch === "images/Huawei-Watch3Pro-black.jpg") {
        myImg.setAttribute('src', "images/Huawei-Watch3Pro.jpg");
        } else {
            myImg.setAttribute('src', "images/Huawei-Watch3Pro-black.jpg")
            }

    let myEl = document.querySelector(".white03");
    let mySpec = myEl.getAttribute('src');

    if(mySpec === "images/specification-white.png") {
        myEl.setAttribute('src', "images/specification-black.png");
            } else {
            myEl.setAttribute('src', "images/specification-white.png")
            }
}



 function langMenu() {
    var dropdownLang = document.getElementById("lang-drop");
    if (dropdownLang.style.display === "none") {
        dropdownLang.style.display = "flex";
    } else {
        dropdownLang.style.display = "none";
    }
}