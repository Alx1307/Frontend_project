function showMessage(str) {
    console.log(str);
}
showMessage("Скрипт загружен!");

function changeBackgroundColor(color) {
    const body = document.querySelector("body");
    body.style.background = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);

    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    }
    else {
        console.error("Такого элемента нет на странице!");
    }
}

function getUtmTerm() {
    const url = window.location.href;
    const urlObj = new URL(url);
    const utmTerm = urlObj.searchParams.get('utm_term');

    const header1 = document.querySelector("h1");
    if (utmTerm) {
        header1.textContent = utmTerm;
    }
}
getUtmTerm();

function logCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutues = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutues}:${seconds}`;
    console.log(currentTime);
}

function resetBackgroundColor() {
    const body = document.querySelector("body");
    body.style.background = "white";
}

document.addEventListener("DOMContentLoaded", function(){
    logCurrentTime();
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility('.message');
});