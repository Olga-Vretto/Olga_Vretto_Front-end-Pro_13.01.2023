function getRandomImg (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const random = getRandomImg(1, 10)
const image = document.getElementById("img");
image.src = "./images/" + random + ".png"
