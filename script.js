document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Переключити на світлу тему';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = 'Переключити на темну тему';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.textContent = 'Переключити на темну тему';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'Переключити на світлу тему';
            localStorage.setItem('theme', 'dark');
        }
    });

    document.addEventListener('scroll', function() {
        var footer = document.querySelector('footer');
        if (window.scrollY > 100) { // Змініть значення 100 за бажанням
            footer.style.transform = 'translateY(100%)';
        } else {
            footer.style.transform = 'translateY(0)';
        }
    });
});