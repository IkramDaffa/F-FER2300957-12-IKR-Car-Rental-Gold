// *FAQ
var acc = document.getElementsByClassName("faq_pertanyaan");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeFAQ");
    var faq_jawaban = this.nextElementSibling;
    if (faq_jawaban.style.display === "block") {
      faq_jawaban.style.display = "none";
    } else {
      faq_jawaban.style.display = "block";
    }
  });
}
// *akhir FAQ

// *navbar
// var navbut = document.getElementsByClassName("navbar-toggler");
// for (i = 0; i < navbut.length; i++) {
//   navbut[i].addEventListener("click", function () {
//     var collaps = this.nextElementSibling;
//     if (collaps.style.right === "-100%") {
//       collaps.style.right = "0";
//     } else {
//       collaps.style.right = "-100%";
//     }
//   });
// }

const navbarNav = document.querySelector(".collaps_nav");
const tombol = document.querySelector(".navbar-toggler");
const exitbut = document.querySelector(".exitbut");
document.querySelector(".navbar-toggler").onclick = () => {
  // tombol.classList.toggle("activebutnav");
  navbarNav.classList.toggle("activeNAV");
  exitbut.classList.toggle("activeexit");
  // exitbut.style.display = "block";
};

document.addEventListener("click", function (e) {
  if (!tombol.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("activeNAV");
    // tombol.classList.remove("activebutnav");
    exitbut.classList.remove("activeexit");
    // exitbut.style.display = "none";
  }
});

document.querySelector(".tmblexit").onclick = () => {
  navbarNav.classList.remove("activeNAV");
  // tombol.classList.remove("activebutnav");
  exitbut.classList.remove("activeexit");
  // exitbut.style.display = "none";
};

var navcon = document.getElementsByClassName("nav-link");
console.log(navcon);
for (i = 0; i < navcon.length; i++) {
  navcon[i].addEventListener("click", function () {
    navbarNav.classList.remove("activeNAV");
    // tombol.classList.remove("activebutnav");
    exitbut.classList.remove("activeexit");
    // exitbut.style.display = "none";
  });
}
// *akhir navbar
