
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.getElementById("mobileNav");

    hamburger.addEventListener("click", () => {
        if (mobileNav.classList.contains("slideDown")) {
            mobileNav.classList.remove("slideDown");
            mobileNav.style.display = "none";
        } else {
            mobileNav.style.display = "flex";
            void mobileNav.offsetWidth; // reflow
            mobileNav.classList.add("slideDown");
        }
    });
});
