    // =====================================
    // HAMBURGER MENU TOGGLE
    // =====================================
    
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  hamburger.onclick = function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  };
});


    // =====================================
    // FADE-IN ANIMATION
    // =====================================

    document.addEventListener("DOMContentLoaded", function () {

        const animatedElements = document.querySelectorAll(".fade-up, .fade-in");

        if (!animatedElements.length) return;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, {
            threshold: 0.15
        });

        animatedElements.forEach(function (element) {
            observer.observe(element);
        });

    });


    // =====================================
    // QUOTE FORM EMAIL SUBMISSION
    // =====================================

    document.addEventListener("DOMContentLoaded", function () {

        const quoteForm = document.getElementById("quoteForm");

        if (!quoteForm) return;

        quoteForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name")?.value || "";
            const company = document.getElementById("company")?.value || "";
            const phone = document.getElementById("phone")?.value || "";
            const email = document.getElementById("email")?.value || "";
       const service = document.getElementById("crane-type")?.value || "";
            const date = document.getElementById("date")?.value || "";
            const message = document.getElementById("message")?.value || "";

            const subject = "Crane Rental Request";

            const body = `
    Name: ${name}

    Company: ${company}

    Mobile: ${phone}

    Email: ${email}

    Preferred Date: ${date}

    Message:
    ${message}
    `;

            const mailtoLink =
                `mailto:transfield@singnet.com.sg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

        });

    });


    // =====================================
    // CRANE IMAGE SLIDER
    // =====================================

    document.addEventListener("DOMContentLoaded", function () {

        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        if (!slides.length || !dots.length || !prevBtn || !nextBtn) return;

        let currentSlide = 0;

        function showSlide(index) {

            slides.forEach(function (slide) {
                slide.classList.remove("active");
            });

            dots.forEach(function (dot) {
                dot.classList.remove("active");
            });

            slides[index].classList.add("active");
            dots[index].classList.add("active");

        }

        nextBtn.addEventListener("click", function () {
            currentSlide++;

            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            showSlide(currentSlide);
        });

        prevBtn.addEventListener("click", function () {
            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            showSlide(currentSlide);
        });

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

    });
