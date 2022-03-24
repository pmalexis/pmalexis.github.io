if( document.querySelector('.header-containerburger') ) {
    let headerburger = document.querySelector('.header-containerburger');
    let header = document.querySelector('.sticky-nav');

    headerburger.addEventListener('click', function () {
        header.classList.toggle('style-open');
    });

    window.addEventListener('load', function() {
        document.querySelector('#nav').classList.remove('style-scroll');
    });
    window.addEventListener("scroll", function() {
        if ( window.scrollY >= 10 ) {
            document.querySelector('#nav').classList.add('style-scroll');
        } else {
            document.querySelector('#nav').classList.remove('style-scroll');
        };
    });
}