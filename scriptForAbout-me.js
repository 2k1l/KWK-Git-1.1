function openFunFact(id) {
  document.getElementById(id).style.display = "block";
}

function closeFunFact(id) {
  document.getElementById(id).style.display = "none";
}

let currentSlide = 0;
const images = document.querySelectorAll(".cowboyPhoto");

function showSlide(index) {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
