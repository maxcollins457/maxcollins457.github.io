document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight) {
                element.style.opacity = 1;
            }
        });
    }

    document.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);

    // Initial check when the page loads
    checkFade();
});
