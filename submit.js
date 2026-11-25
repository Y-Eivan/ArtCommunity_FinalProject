document.getElementById("submissionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = "";

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const email = document.getElementById("email").value.trim();
    const ai = document.querySelector('input[name="ai"]:checked');
    const file = document.getElementById("fileUpload").files[0];

    if (!title || !description || !email) {
        errors += "All fields must be filled.<br>";
    }

    if (title.length > 50) {
        errors += "Title too long (max 50 characters).<br>";
    }

    if (description.length > 300) {
        errors += "Description too long (max 300 characters).<br>";
    }

    if (selectedTags.length < 1 || selectedTags.length > 3) {
        errors += "Select 1 to 3 tags.<br>";
    }

    if (!ai) {
        errors += "Please choose if this is AI-generated.<br>";
    } else if (ai.value.toLowerCase() === "yes") {
        errors += "You cannot submit an AI Art!<br>";
    }

    if (!file) {
        errors += "Please upload a file.<br>";
    } else {
        const types = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
        if (!types.includes(file.type)) {
            errors += "Invalid file format.<br>";
        }
        if (file.size > 10 * 1024 * 1024) {
            errors += "File too large (max 10MB).<br>";
        }
    }

    const errorMsg = document.getElementById("errorMsg");
    if (errors) {
        errorMsg.innerHTML = errors;
    } else {
        errorMsg.innerHTML = "";
        alert("Submission successful!");
        this.reset();
        document.getElementById("preview").style.display = "none";

        document.querySelectorAll('.tag.active').forEach(tag => tag.classList.remove('active'));
        selectedTags.length = 0;
    }
});

document.getElementById("fileUpload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById("preview");
            img.src = e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});


const selectedTags = [];

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const value = tag.getAttribute('data-tag');
        const isActive = tag.classList.contains('active');

        if (!isActive) {
            if (selectedTags.length < 3) {
                tag.classList.add('active');
                selectedTags.push(value);
            } else {
                alert("You can only select up to 3 tags.");
            }
        } else {
            tag.classList.remove('active');
            const index = selectedTags.indexOf(value);
            if (index !== -1) selectedTags.splice(index, 1);
        }
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

