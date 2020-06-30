const menuWrap = document.querySelector('#menu-wrap');
let menuOpen = false;
menuWrap.addEventListener('click', () => {
    if (!menuOpen) {
        menuWrap.classList.add('open');
        menuOpen = true;
    } else {
        menuWrap.classList.remove('open');
        menuOpen = false;
    }
});