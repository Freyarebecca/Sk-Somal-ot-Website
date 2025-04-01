document.addEventListener("DOMContentLoaded", function () {
    // Select all navbar links
    let navLinks = document.querySelectorAll(".nav-link");

    // Function to update active link
    function updateActiveLink() {
        let scrollPos = window.scrollY;

        navLinks.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section) {
                let offset = section.offsetTop - 80; // Adjust for fixed navbar
                let height = section.offsetHeight;

                if (scrollPos >= offset && scrollPos < offset + height) {
                    navLinks.forEach(nav => nav.classList.remove("active"));
                    link.classList.add("active");
                }
            }
        });
    }

    // Add click event to links
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Listen for scroll to update active link
    window.addEventListener("scroll", updateActiveLink);
});


document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.innerWidth < 992) { // Only close menu on mobile screens
                let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
});

//JavaScript for Back to Top Button 
// Show/hide button when scrolling
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
