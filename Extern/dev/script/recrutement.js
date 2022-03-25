if( document.querySelector('.recrutement-section7') ) {
    sliderCommon(".qui-sectioncommunaute", ".qui-sectioncommunaute_el", ".qui-sectioncommunaute_containerbtn", 4);

    let section7Btn = document.querySelectorAll('.home-section7-containerbtn');
    let section7Count = 1;
    let section7NumQuote = document.querySelectorAll('.home-section7-quote').length;
    section7Btn.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            if(index == 0){
                if (section7Count > 1){
                    section7Count --;
                }
                
            } else if(index == 1) {
                
                if (section7Count < section7NumQuote){
                    section7Count ++;
                }
            }
            
            section7Quotes = document.querySelectorAll('.home-section7-quote');
            section7Quotes.forEach(function (quote) {
                quote.classList.remove('style-show');
            });

            console.log(section7Count);
            document.querySelector('.home-section7-quote:nth-child(' + section7Count + ')').classList.add('style-show'); 
        });
    });
    let section7QuoteActive = document.querySelector('.home-section7-quote:nth-child(1)');
    section7QuoteActive.classList.add('style-show'); 

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
}