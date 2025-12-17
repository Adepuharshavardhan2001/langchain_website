
document.addEventListener('DOMContentLoaded', () => {
    // Simple fade-in for elements as they scroll into view
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Add a class to sections that are not the hero to be observed
        if (section.id !== 'hero') {
            section.classList.add('fade-in-element');
            observer.observe(section);
        }
    });

    // Add specific animation class for hero section to be applied after initial load
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }

    // Handle smooth scrolling for internal links (optional, but good practice)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effect to project cards for "View Details" button
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const button = card.querySelector('.view-details-btn');
        button.addEventListener('click', () => {
            // In a real app, this would navigate to a project detail page
            // or open a modal. For this example, we'll just log it.
            console.log(`View details clicked for: ${card.querySelector('h3').textContent}`);
            alert('Viewing details is a placeholder action. In a live site, this would navigate or show more info.');
        });
    });
});
