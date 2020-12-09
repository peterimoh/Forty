function openbtn() {
    document.querySelector('.closebtn').style.display = "block";
    document.querySelector('.closebtn').style.transition = "10s";

    document.querySelector('.navigation').style.display = 'none';
}

function closebtn() {
    document.querySelector(".closebtn").style.display = "none";
    document.querySelector(".navigation").style.display = "flex";
}