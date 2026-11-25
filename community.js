document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".Recent-activities-button-container button");
    const sections = document.querySelectorAll(".recent-activities");
    const titles = document.querySelectorAll(".Recent-activities-title .Activity");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            sections.forEach(section => section.classList.remove("active"));
            titles.forEach(title => title.classList.remove("active"));


            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.add("active");
            if (titles[index]) titles[index].classList.add("active");
        });
    });
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
            void mobileNav.offsetWidth; 
            mobileNav.classList.add("slideDown");
        }
    });
});


function toggleMobileActivity() {
    document.getElementById("mobile-activity-modal").classList.toggle("hidden");
}

document.querySelectorAll('.icon-button').forEach(btn => {
    btn.addEventListener('click', function () {
        const target = btn.dataset.target;
        document.querySelectorAll('.recent-activities').forEach(el => el.classList.remove('active'));
        document.getElementById(target).classList.add('active');
    });
});
