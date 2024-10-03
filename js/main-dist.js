//@prepros-append ibg.js
//@prepros-append buttons.js

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


let active = document.querySelector(".active");
let activeB = document.querySelector(".active-red");
let changed = document.querySelector(".change-button");
console.log("HERERE");
function Change(active) {
    active.style.background = "none";
    active.style.paddingLeft = "0";
    active.style.paddingRight = "0";
    active.style.color = "rgb(235, 87, 87)";
}

function Unchange(active) {
    active.style.background = "rgb(242, 201, 76)";
    active.style.paddingLeft = "54px";
    active.style.paddingRight = "54px";
    active.style.color = "rgb(51, 51, 51)";
}
function ChangeB(active) {
    active.style.background = "none";
    active.style.paddingLeft = "0";
    active.style.paddingRight = "0";
    active.style.color = "rgb(235, 87, 87)";
}
function UnchangeB(active) {
    active.style.background = "rgb(242, 201, 76)";
    active.style.paddingLeft = "54px";
    active.style.paddingRight = "54px";
    active.style.color = "rgb(51, 51, 51)";
}


