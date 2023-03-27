const images = [
  "./assets/images2.jpg",
  "./assets/images/3.jpg",
  "./assets/images/4.jpg",
  "./assets/images/5.jpg",
  "./assets/images/6.jpg",
];

const slider = document.getElementById("slider");
const image = document.getElementById("image");
const buttonPrev = document.getElementById("btn-prev");
const buttonNext = document.getElementById("btn-next");
let countImage = 0;

if (countImage === 0) {
  buttonPrev.style.display = "none";
}

buttonPrev.addEventListener("click", () => {
  countImage--;
  image.src = images[countImage];
  if (countImage === 1) {
    buttonPrev.style.display = "none";
  }
  if (countImage < images.length - 1) {
    buttonNext.style.display = "block";
  }
});

buttonNext.addEventListener("click", () => {
  countImage++;
  image.src = images[countImage];
  if (countImage === images.length - 1) {
    buttonNext.style.display = "none";
  }
  if (countImage > 0) {
    buttonPrev.style.display = "block";
  }
});
