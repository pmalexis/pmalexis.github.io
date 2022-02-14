let headerburger = document.querySelector('.header-containerburger');
let header = document.querySelector('.sticky-nav');

headerburger.addEventListener('click', function () {
    header.classList.toggle('style-open');
});