document.addEventListener('DOMContentLoaded', () => {


    const accountTrigger = document.getElementById('account-dropdown-trigger');
    const accountMenu = document.getElementById('account-dropdown-menu');

    if (accountTrigger && accountMenu) {
        accountTrigger.addEventListener('mouseenter', () => {
            accountMenu.classList.add('visible');
        });
        accountTrigger.addEventListener('mouseleave', () => {
            accountMenu.classList.remove('visible');
        });
    }

    const track = document.querySelector('.carousel-track');

    const slides = track ? Array.from(track.children) : [];
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    if (track && slides.length > 0 && nextButton && prevButton) {
        let currentIndex = 0;

        const moveToSlide = (targetIndex) => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        };

        nextButton.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            moveToSlide(nextIndex);
        });

        prevButton.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                prevIndex = slides.length - 1;
            }
            moveToSlide(prevIndex);
        });

        window.addEventListener('resize', () => {
            moveToSlide(currentIndex);
        });
    }

    const hamburgerTrigger = document.querySelector('.hamburger-menu-trigger');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const sidebarClose = document.querySelector('.sidebar-close-button');

    const openSidebar = () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    };

    if (hamburgerTrigger && sidebar && sidebarOverlay && sidebarClose) {
        hamburgerTrigger.addEventListener('click', (event) => {
            event.preventDefault();
            openSidebar();
        });

        sidebarClose.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
});