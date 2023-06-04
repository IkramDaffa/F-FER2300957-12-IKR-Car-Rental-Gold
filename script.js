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

var navbut = document.getElementsByClassName("navbar-toggler");
console.log(navbut);

for (i = 0; i < navbut.length; i++) {
  navbut[i].addEventListener("click", function () {
    var collaps = this.nextElementSibling;
    console.log(collaps);
    if (collaps.style.display === "none") {
      collaps.style.display = "block";
    } else {
      collaps.style.display = "none";
    }
  });
}
