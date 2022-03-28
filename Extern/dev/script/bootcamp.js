if( document.querySelector('.js_extern-bootcamp') ) {
    document.querySelector('#nav').classList.add('style-scroll');
    
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
    
    let section3Quote = document.querySelectorAll('.bootcamp-section3');
    section3Quote.forEach(function (section) {
        let click = true;
        let position = 1;
        let quotes = section.querySelectorAll('.bootcamp-section3_quote')
        section.querySelector('.bootcamp-section3_btnprev').addEventListener('click', function () {
            if(click) {
                position -= 1;
                if(position === 0) position = quotes.length;
                update(position);
            }
        });
        section.querySelector('.bootcamp-section3_btnnext').addEventListener('click', function () {
            if(click) {
                position += 1;
                if(position > quotes.length) position = 1;
                update(position);
            }
        });

        function update(pos) {
            let position = pos;
            click = false;
            setTimeout(function(){
                click = true;
            }, 500);

            quotes.forEach(function (quote, index) {
                if(index+1 === position) {
                    setTimeout(function(){
                        quote.classList.remove('style-none');
                        setTimeout(function(){
                            quote.classList.remove('style-hide');
                        }, 10);
                    }, 500);
                } else {
                    quote.classList.add('style-hide');
                    setTimeout(function(){
                        quote.classList.add('style-none');
                    }, 500);
                }
            });
        }

        function init() {
            quotes.forEach(function (quote, index) {
                if(index != 0) {
                    quote.classList.add('style-hide');
                    quote.classList.add('style-none');
                }
            });
        }
        init();
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

    let section4Tab = document.querySelectorAll('.bootcamp-section4');
    section4Tab.forEach(function (section) {
        let click = true;
        let position = 0;
        
        let tabs = section.querySelectorAll('.bootcamp-section4_tab')
        let lists = section.querySelectorAll('.bootcamp-section4_contenttab')

        let numberOfWeek = parseInt(section.querySelector('.bootcamp-section4_containertab .bootcamp-section4_tab:first-child .bootcamp-section4_number').textContent)
        let NumberOfWeekTotal = parseInt(section.querySelector('.bootcamp-section4_containerprogressbar .bootcamp-section4_containerstep .bootcamp-section4_step:last-child .h6').textContent);
        let progressBar = section.querySelector('.bootcamp-section4_containerprogressbar .bootcamp-section4_progressbar .bootcamp-section4_bar');

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                if(click) {
                    click = false;
                    setTimeout(function(){
                        click = true;
                    }, 250);
                    tabs[position].classList.remove('style-active');
                    lists[position].classList.remove('style-show');
                    position = Array.prototype.slice.call(this.parentElement.children).indexOf(this);
                    this.classList.add('style-active');
                    lists[position].classList.add('style-show');

                    //update numberOfWeek
                    numberOfWeek = 0;
                    for (let i = 0; i <= position; i++) {
                        numberOfWeek += parseInt(tabs[i].querySelector('.bootcamp-section4_number').textContent)
                    }
                    
                    let slideData = -100 + ( numberOfWeek * 100 / NumberOfWeekTotal );
                    progressBar.style.webkitTransfoprogressBarrm = 'translateX(' + slideData + '%' + ') translateZ(0)';
                    progressBar.style.MozTransform = 'translateX(' + slideData + '%' + ') translateZ(0)';
                    progressBar.style.msTransform = 'translateX(' + slideData + '%' + ') translateZ(0)';
                    progressBar.style.OTransform = 'translateX(' + slideData + '%' + ') translateZ(0)';
                    progressBar.style.transform = 'translateX(' + slideData + '%' + ') translateZ(0)';
                }
            });
        });

        function update(pos) {
            
        }

        function init() {
            tabs[0].classList.add('style-active');
            lists[0].classList.add('style-show');

            let slideData = -100 + ( numberOfWeek * 100 / NumberOfWeekTotal );
            progressBar.style.webkitTransfoprogressBarrm = 'translateX(' + slideData + '%' + ') translateZ(0)';
            progressBar.style.MozTransform = 'translateX(' + slideData + '%' + ') translateZ(0)';
            progressBar.style.msTransform = 'translateX(' + slideData + '%' + ') translateZ(0)';
            progressBar.style.OTransform = 'translateX(' + slideData + '%' + ') translateZ(0)';
            progressBar.style.transform = 'translateX(' + slideData + '%' + ') translateZ(0)';
        }
        init();
    });

    let section6Card = document.querySelectorAll('.bootcamp-section6');
    section6Card.forEach(function (section) {
        let click = true;
        let position = 1;
        let quotes = section.querySelectorAll('.bootcamp-section6_listcard')
        section.querySelector('.bootcamp-section6_btnprev').addEventListener('click', function () {
            if(click) {
                position -= 1;
                if(position === 0) position = quotes.length;
                update(position);
            }
        });
        section.querySelector('.bootcamp-section6_btnnext').addEventListener('click', function () {
            if(click) {
                position += 1;
                if(position > quotes.length) position = 1;
                update(position);
            }
        });

        function update(pos) {
            let position = pos;
            click = false;
            setTimeout(function(){
                click = true;
            }, 500);

            quotes.forEach(function (quote, index) {
                if(index+1 === position) {
                    setTimeout(function(){
                        quote.classList.remove('style-none');
                        setTimeout(function(){
                            quote.classList.remove('style-hide');
                        }, 10);
                    }, 500);
                } else {
                    quote.classList.add('style-hide');
                    setTimeout(function(){
                        quote.classList.add('style-none');
                    }, 500);
                }
            });
        }

        function init() {
            quotes.forEach(function (quote, index) {
                if(index != 0) {
                    quote.classList.add('style-hide');
                    quote.classList.add('style-none');
                }
            });
        }
        init();
    });

    let section6 = document.querySelectorAll('.home-section6');
    section6.forEach(function (section) {
        section.querySelectorAll('.home-section6-el').forEach(function (el, index) {
            if(index != 0) {
                let iframe = el.querySelector('iframe');
                let player = new Vimeo.Player(iframe);
                el.querySelector('.home-section6-elbtn').addEventListener('click', function () {
                    setTimeout(function(){
                        section.querySelectorAll('.home-section6-el').forEach(function (r) {
                            r.classList.remove('style-video');
                        });
                        el.classList.add('style-video');
                        player.play();
                    }, 100);
                });
                el.addEventListener('click', function () {
                    if (this.classList.contains('style-video')) {
                        this.classList.remove('style-video');
                        player.pause();
                    }
                });
            }
        });  
    });

}