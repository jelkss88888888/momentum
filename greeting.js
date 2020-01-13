const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");


const USER_LS = "currentUser";

function paintName(name) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${name}`;
}

function submitHandler() {
    event.preventDefault();
    const submitValue = input.value;
    paintName(submitValue);
    localStorage.setItem(USER_LS, submitValue);
}

function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit", submitHandler);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser !== null) {
        paintName(currentUser);
        //유저가 있으면 폼을 숨기고 이름 띄우고 색칠
    } else {
        askForName();
        //유저가 없으면 폼을 생성
    }
}

function init() {
    loadName();
}
init();