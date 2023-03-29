const emoji = document.querySelectorAll('.emoji');

    emoji.forEach(elem => {
        let count = 1;
        elem.addEventListener('click', (event) => {
            event.target.nextElementSibling.innerText = count++;
        });
}); 