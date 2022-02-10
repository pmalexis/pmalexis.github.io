window.addEventListener("scroll", function() {
    if ( window.scrollY >= 1 ) {
        document.querySelector('#nav').classList.add('style-scroll');
    } else {
        document.querySelector('#nav').classList.remove('style-scroll');
    };
});