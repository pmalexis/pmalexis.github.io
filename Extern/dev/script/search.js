if( document.querySelector('.js_extern-search') ) {
    window.addEventListener('load', function() {
        if( document.querySelector('.home-sectionhero') ) {
            let sectionHero = document.querySelector('.home-sectionhero');
            sectionHero.classList.add('style-ready');
        }
    });
}