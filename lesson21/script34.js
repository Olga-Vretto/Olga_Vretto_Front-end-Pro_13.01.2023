const input = document.getElementById("focus");
const text = document.getElementById("ghost-text");
const img = document.getElementById("ghost-pic");

input.addEventListener("mouseover", function () {
  text.innerHTML = "A Ghost? A GHooOST!  Run... Do not stooop!!!";
  img.style.visibility = "visible";
});

input.addEventListener("mouseout", function () {
  text.innerHTML = "";
  img.style.visibility = "hidden";
});
