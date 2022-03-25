function sliderCommon(s, c, n, m) {
    let containerEl = s + " " + c;
    let nav = s + " " + n;
    let pos = 0;
    let nbEl = m;
    let maxPos = document.querySelectorAll(containerEl).length;
    
    if( maxPos <= m) {
        document.querySelector(nav + " div:first-child").style.cursor = "default";
        document.querySelector(nav + " div:last-child").style.cursor = "default";
        document.querySelector(nav + " div:first-child").style.opacity = "0.2";
        document.querySelector(nav + " div:last-child").style.opacity = "0.2";
    } else {
        document.querySelector(nav + " div:first-child").addEventListener('click', function(){
            pos-=nbEl;
            if(pos < 0) pos = maxPos - nbEl;
            init(pos);
        });
        document.querySelector(nav + " div:last-child").addEventListener('click', function(){
            pos+=nbEl;
            if(pos > maxPos-1) pos = 0;
            init(pos);
        });

        function init(pos) {
            let index = 1;
            document.querySelectorAll(containerEl).forEach(function(el, i) {
                if(pos <= i && index <= nbEl) {
                    el.style.display = "";
                    index++;
                } else el.style.display = "none";
            });
        }
        init(0);
    }
}

// @codekit-prepend 'player.js'
// @codekit-prepend 'header.js'
// @codekit-prepend 'home.js'
// @codekit-prepend 'bootcamp.js'
// @codekit-prepend 'formation.js'
// @codekit-prepend 'blogmain.js'
// @codekit-prepend 'who.js'
// @codekit-prepend 'recrutement.js'