if( document.querySelector('.js_extern-blogmain') ) {

    function sliderHorizontalScrollBlogmain() {
        let section = document.querySelector('.blogmain-sectionlist');
        let containerEl = document.querySelector('.blogmain-sectionlist_slider');
        let el = document.querySelector('.blogmain-sectionlist_elwrapper:nth-child(1)');
        let grid = document.querySelector('.blogmain-sectionlist .wrapper-12');
        console.log(section)
        /* INIT HEIGHT SECTION */
        section.style.height = (containerEl.clientWidth - (grid.clientWidth - el.clientHeight) + 'px');
    
        /* ON SCROLL */
        window.addEventListener('scroll', function() {
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
        });
    }

    window.addEventListener('load', function() {
        if( document.querySelector('.home-sectionhero') ) {
            let sectionHero = document.querySelector('.home-sectionhero');
            sectionHero.classList.add('style-ready');
        }

        if (window.matchMedia("(min-width: 767px)").matches) {
            sliderHorizontalScrollBlogmain();
        }
    });

}