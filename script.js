// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
}

// NAVBAR ACTIVE
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (scrollY >= top) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// GALLERY PAGINATION
let currentPage = 0;
const imagesPerPage = 4;
const images = document.querySelectorAll("#gallery-images img");

function showPage() {
    images.forEach(img => img.style.display = "none");

    let start = currentPage * imagesPerPage;
    let end = start + imagesPerPage;

    for (let i = start; i < end && i < images.length; i++) {
        images[i].style.display = "block";
    }
}

function nextPage() {
    if ((currentPage + 1) * imagesPerPage < images.length) {
        currentPage++;
        showPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    }
}

// POPUP
function openImage(src) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

showPage();
