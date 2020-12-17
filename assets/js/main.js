/*jshint esversion: 6 */
function openbtn() {
  document.querySelector(".closebtn").style.display = "block";
  document.querySelector(".closebtn").style.transition = "width 4s";
  document.querySelector(".navigation").style.display = "none";
}

function closebtn() {
  document.querySelector(".closebtn").style.display = "none";
  document.querySelector(".navigation").style.display = "flex";
}

let currentYear = document.getElementById("current_year");
currentYear.innerHTML = new Date().getFullYear();
