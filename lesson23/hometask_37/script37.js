const buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const href = btn.getAttribute("data-link");
    if (!href.startsWith("http://") && !href.startsWith("https://")) {
      location.href = `https://${href}`;
    }
    location.href = href;
  });
});
