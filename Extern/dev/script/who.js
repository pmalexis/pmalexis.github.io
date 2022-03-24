if( document.querySelector('.qui-sectionhero') ) {

    function quisectionimg(s, c, n) {
        let containerEl = s + " " + c;
        let nav = s + " " + n;
        let pos = 0;
        let maxPos = document.querySelectorAll(containerEl).length - 1;
    
        document.querySelector(nav + " div:first-child").addEventListener('click', function(){
            pos--;
            if(pos < 0) pos = maxPos;
            init(pos);
        });
    
        document.querySelector(nav + " div:last-child").addEventListener('click', function(){
            pos++;
            if(pos > maxPos) pos = 0;
            init(pos);
        });
    
        function init(pos) {
            document.querySelectorAll(containerEl).forEach(function(el, i) {
                if(i != pos) {
                    el.style.display = "none";
                } else el.style.display = "";
            });
        }
        init(0);
    }
    quisectionimg(".qui-sectionimg", ".qui-sectionimg_wrapperel", ".qui-sectionimg_containerbtn");

    //sliderCommon(nom_section, nom_containerel, nom_nav)
    sliderCommon(".qui-sectionteam", ".qui-sectionteam_el", ".qui-sectionteam_containerbtn", 6);
    sliderCommon(".qui-sectioncommunaute", ".qui-sectioncommunaute_el", ".qui-sectioncommunaute_containerbtn", 4);

}