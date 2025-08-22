document.addEventListener('DOMContentLoaded', () => {

    // 1. Fade-in/Fade-out Animation for the Title
    const animatedTitle = document.querySelector('.animated-title');
    const titles = ["Backend Developer", "UI/UX Designer", "BI Analyst", "Project Developer & Manager"];
    let titleIndex = 0;

    function animateTitle() {
        // Fade out the current title
        animatedTitle.style.opacity = '0';

        setTimeout(() => {
            // Change the text content after it has faded out
            animatedTitle.textContent = titles[titleIndex];

            // Fade the new title in
            animatedTitle.style.opacity = '1';

            // Move to the next title in the array
            titleIndex = (titleIndex + 1) % titles.length;
        }, 700); // This delay should match the CSS transition duration

        // Set a timer for the next animation cycle
        setTimeout(animateTitle, 3500); // Delay before the next title starts to fade out
    }

    // Start the animation
    animateTitle();

    // 2. Fade-in Effect for the Hero Section
    const heroSection = document.querySelector('.hero');
    heroSection.style.opacity = '0';
    heroSection.style.transition = 'opacity 1s ease-in';

    setTimeout(() => {
        heroSection.style.opacity = '1';
    }, 100);

    // 3. Smooth Scrolling for Navigation Links and new accessibility buttons
    document.querySelectorAll('nav a[href^="#"], .cta-buttons a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Functionality for accessibility buttons
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const scrollDownBtn = document.getElementById('scrollDownBtn');

    if (scrollUpBtn && scrollDownBtn) {
        scrollUpBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        scrollDownBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }

});