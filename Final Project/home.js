const slides = document.querySelectorAll('.slide');
const artistNameElement = document.querySelector('.artist-name');
let current = 0;

function updateArtistName(index) {
    const artist = slides[index].getAttribute('data-artist') || 'Unknown Artist';
    artistNameElement.textContent = artist;
}

document.addEventListener("DOMContentLoaded", () => {
    updateArtistName(current);
});

document.querySelector('.nav-btn.left').onclick = () => {
    slides[current].classList.remove('active');
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
    updateArtistName(current);
};

document.querySelector('.nav-btn.right').onclick = () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    updateArtistName(current);
};


document.addEventListener("DOMContentLoaded", function () {
    const artBox = document.querySelector(".art_box");

    let scrollAmount = 0;
    let direction = 1;

    function autoScroll() {
        if (!artBox) return;

        scrollAmount += 2 * direction;

        if (
            scrollAmount >= artBox.scrollWidth - artBox.clientWidth ||
            scrollAmount <= 0
        ) {
            direction *= -1;
        }

        artBox.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

    setInterval(autoScroll, 15);
});

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






