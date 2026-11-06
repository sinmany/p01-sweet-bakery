document.addEventListener('DOMContentLoaded', () => {

    // 1. Active Navigation Link on Scroll
    const navLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section[id], footer[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // 2. Countdown Timer
    const timerSpans = document.querySelectorAll('.timer .timer-number span:first-child');
    if (timerSpans.length === 4) {
        // Set end date (6 days, 18 hours, 34 mins from now)
        const now = new Date();
        const countdownEnd = new Date(
            now.getTime() +
            (6 * 24 * 60 * 60 * 1000) +
            (18 * 60 * 60 * 1000) +
            (34 * 60 * 1000) +
            (55 * 1000)
        );

        function updateCountdown() {
            const diff = countdownEnd - new Date();
            if (diff <= 0) return;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            timerSpans[0].textContent = String(days).padStart(2, '0');
            timerSpans[1].textContent = String(hours).padStart(2, '0');
            timerSpans[2].textContent = String(minutes).padStart(2, '0');
            timerSpans[3].textContent = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // 3. Newsletter Subscription Form
    const subscribeForm = document.querySelector('.subscribe');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = subscribeForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim() !== '') {
                alert(`Thank you for joining our Sweet Club, ${emailInput.value}! 🧁💕`);
                emailInput.value = '';
            }
        });
    }

});

