const intro = document.querySelector('.intro-screen');
const sections = document.querySelectorAll('.hidden');

intro.addEventListener('click', () => {
    intro.style.opacity = "0";
    setTimeout(() => {
        intro.style.display = "none";
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }, 1500);
});
