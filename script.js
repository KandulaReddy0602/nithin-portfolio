// ========================================
// NITHIN REDDY PORTFOLIO
// JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // Smooth navigation
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = this.getAttribute("href");

            if (target && target.startsWith("#")) {

                event.preventDefault();

                const section = document.querySelector(target);

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    // Reveal sections while scrolling
    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .timeline-content"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

});