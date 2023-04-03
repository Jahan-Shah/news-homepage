const headerBtn = document.querySelector(".header__bars");
const mobileNav = document.querySelector('.mobile-nav');
const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");

let isNavOpen = false;

headerBtn.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        bars.style.display = 'none';
        cross.style.display = "block";
    } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
        bars.style.display = "block";
        cross.style.display = "none";
    }
});