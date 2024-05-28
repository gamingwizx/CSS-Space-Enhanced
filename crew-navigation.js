const dotList = document.querySelector('[role="dotList"]')
const dots = document.querySelectorAll('[role="dot"]')
let tabIndex = 0;

dotList.addEventListener("keydown", (e) => {
    const leftClick = 37
    const rightClick = 39

    if (e.keyCode === rightClick) {
        tabIndex++;
        if (tabIndex >= dots.length) {tabIndex = 0}
    }
    if (e.keyCode === leftClick) {
        tabIndex--;
        if (tabIndex < 0) {tabIndex = dots.length - 1}
    }
    dots[tabIndex].focus();

})