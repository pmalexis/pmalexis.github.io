if( document.querySelector('.blogmain-sectionarticles') ) {

    window.addEventListener('load', function() {
        let sectionHero = document.querySelector('.home-sectionhero');
        sectionHero.classList.add('style-ready');
    });
    
    function sliderHorizontalScroll(){
        let section = document.querySelector('.blogmain-sectionlist');
        let containerEl = document.querySelector('.blogmain-sectionlist_slider');
        let el = document.querySelector('.blogmain-sectionlist_elwrapper:nth-child(1)');
        let grid = document.querySelector('.blogmain-sectionlist .wrapper-12');
    
        /* INIT HEIGHT SECTION */
        section.style.height = (containerEl.clientWidth - (grid.clientWidth - el.clientHeight) + 'px');
    
        /* ON SCROLL */
        window.addEventListener('scroll', function(){
            let a = section.offsetTop;
            let b = 200;
            let c = window.pageYOffset;
            let scrollValue = c - a + b;
    
            if(scrollValue > 0 && scrollValue <= (containerEl.clientWidth - grid.clientWidth)){
                containerEl.style.transform = "translateX(-" + scrollValue + "px" + ")";
            } else if (scrollValue < 0){
                containerEl.style.transform = "translateX(0px)";
            } else if (scrollValue > (containerEl.clientWidth - grid.clientWidth)){
                containerEl.style.transform = "translateX(calc(-100% + " + grid.clientWidth + 'px))';
            };
        })
    }
    if (window.matchMedia("(min-width: 767px)").matches) {
        window.addEventListener('load', function() {
            sliderHorizontalScroll();
        })
    }

    
}

if( document.querySelector('.home-sectionhero') ) {
    document.querySelector('.jetboost-dropdown').classList.add('style-hidden');
    document.querySelector('.home-sectionhero form:first-child input').setAttribute('autocomplete', 'off');

    document.querySelector('.home-sectionhero form:first-child input').addEventListener("keyup", event => {
        if( document.querySelector('.home-sectionhero form:first-child input').value.length > 0 ) {
            document.querySelector('.jetboost-dropdown').classList.remove('style-hidden');
        } else document.querySelector('.jetboost-dropdown').classList.add('style-hidden');
    });
}