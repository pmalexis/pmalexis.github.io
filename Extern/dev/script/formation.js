if( document.querySelector('.formation-section1') ) {
    let sectionhero = document.querySelectorAll('.bootcamp-sectionhero');
    sectionhero.forEach(function (section) {
        let iframe = section.querySelector('iframe');
        let player = new Vimeo.Player(iframe);
        section.querySelector('.bootcamp-sectionhero_play').addEventListener('click', function () {
            setTimeout(function(){
                section.querySelector('.bootcamp-sectionhero_containervideo').classList.add('style-video');
                player.play();
            }, 100);
        });
        section.querySelector('.bootcamp-sectionhero_containervideo').addEventListener('click', function () {
            if (this.classList.contains('style-video')) {
                this.classList.remove('style-video');
                player.pause();
            }
        });     
    });
    
    let section7BtnBis = document.querySelectorAll('.home-section7-containerbtn');
    let section7CountBis = 1;
    let section7NumQuoteBis = document.querySelectorAll('.home-section7-quote').length;
    section7BtnBis.forEach(function (btn, index) {
        document.querySelector('.home-section7-quote:nth-child(' + section7CountBis + ')').classList.add('style-show'); 
        btn.addEventListener('click', function () {
            if(index == 0){
                if (section7CountBis > 1){
                    section7CountBis --;
                }
                
            } else if(index == 1) {
                
                if (section7CountBis < section7NumQuoteBis){
                    section7CountBis ++;
                }
            }
            
            section7QuotesBis = document.querySelectorAll('.home-section7-quote');
            section7QuotesBis.forEach(function (quote) {
                quote.classList.remove('style-show');
            });

            document.querySelector('.home-section7-quote:nth-child(' + section7CountBis + ')').classList.add('style-show'); 
        });
    });

    let section8 = document.querySelectorAll('.home-section8');
    section8.forEach(function (section) {
        section.querySelectorAll('.home-section8-container').forEach(function (el) {
            let iframe = el.querySelector('iframe');
            let player = new Vimeo.Player(iframe);
            el.querySelector('.home-section8-containervideo img:nth-child(2)').addEventListener('click', function () {
                setTimeout(function(){
                    el.querySelector('.home-section8-containervideo').classList.add('style-video');
                    player.play();
                }, 100);
            });
            el.querySelector('.home-section8-containervideo').addEventListener('click', function () {
                if (this.classList.contains('style-video')) {
                    this.classList.remove('style-video');
                    player.pause();
                }
            });
        });
    });
}