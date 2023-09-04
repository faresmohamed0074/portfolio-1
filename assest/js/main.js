let btn = document.getElementById("btn");
let nav = document.querySelector("header .mediumnav-container");
btn.addEventListener("click", function () {
    nav.classList.toggle("none");
})
setInterval(function () {
    if (window.screen.width > 768) {
        nav.classList.add("none");
    }
}, 1)
