const container = document.getElementById('trendingSlider');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

function updateScrollButtons() {
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    btnLeft.style.display = container.scrollLeft > 10 ? 'block' : 'none';
    btnRight.style.display = container.scrollLeft < maxScrollLeft - 10 ? 'block' : 'none';
}

function scrollTrending(direction) {
    const scrollAmount = container.clientWidth / 1.2;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });

    // Delay check until after scroll animation
    setTimeout(updateScrollButtons, 400); // same as scroll time
}

// Initial button visibility check
updateScrollButtons();

// Also run when user scrolls manually (touchpad/mobile)
container.addEventListener('scroll', () => {
    setTimeout(updateScrollButtons, 200);
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});