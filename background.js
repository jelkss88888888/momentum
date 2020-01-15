const body = document.querySelector("body");

const IMG_NUMBER = 5;

function makeImg(randomNumber) {
    const image = new Image();
    image.src = `images/${randomNumber}.jpg`;
    image.classList.add("backgroundImg");
    body.appendChild(image);
}

function genNumber() {
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}


function init() {
    const randomNumber = genNumber();
    makeImg(randomNumber);
}
init();