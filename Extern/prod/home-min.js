window.addEventListener("scroll",(function(){window.scrollY>=1?document.querySelector("#nav").classList.add("style-scroll"):document.querySelector("#nav").classList.remove("style-scroll")}));let section1Tabs=document.querySelectorAll(".home-section1-tab"),section1Bar=document.querySelector(".home-section1-slider");function slideHorizontalScroll(){let e=document.querySelector(".home-section2"),t=(document.querySelector(".home-section2 .wrapper"),document.querySelector(".home-section2-container")),o=document.querySelector(".home-section2-slider");!function(){let e=window.innerWidth-1200;t.style.height=o.clientWidth-e+"px"}(),window.addEventListener("scroll",(function(){let t=e.offsetTop,c=window.innerHeight/100*25,s=(e.clientHeight,window.pageYOffset),n=(window.clientWidth,s-t+c);n>0&&n<1200&&(o.style.transform="translateX(-"+n+"px)")}))}section1Tabs.forEach((function(e,t){e.addEventListener("click",(function(){document.querySelectorAll(".home-section1-content").forEach((function(e){e.classList.remove("style-show"),document.querySelector(".home-section1-content:nth-child("+(t+1)+")").classList.add("style-show")})),document.querySelectorAll(".home-section1-illu").forEach((function(e){e.classList.remove("style-show"),document.querySelector(".home-section1-illu:nth-child("+(t+1)+")").classList.add("style-show")})),section1Bar.classList.remove("style-active1"),section1Bar.classList.remove("style-active2"),section1Bar.classList.add("style-active"+(t+1)),section1Tabs.forEach((function(e){e.classList.remove("style-active")})),e.classList.add("style-active")}))})),slideHorizontalScroll();let section7Btn=document.querySelectorAll(".home-section7-containerbtn"),section7Count=1,section7NumQuote=document.querySelectorAll(".home-section7-quote").length;section7Btn.forEach((function(e,t){e.addEventListener("click",(function(){0==t?section7Count>1&&section7Count--:1==t&&section7Count<section7NumQuote&&section7Count++,section7Quotes=document.querySelectorAll(".home-section7-quote"),section7Quotes.forEach((function(e){e.classList.remove("style-show")})),console.log(section7Count),document.querySelector(".home-section7-quote:nth-child("+section7Count+")").classList.add("style-show")}))}));let section9Tabs=document.querySelectorAll(".home-section9-tab"),section9Bar=document.querySelector(".home-section9-slider");section9Tabs.forEach((function(e,t){e.addEventListener("click",(function(){document.querySelectorAll(".home-section9-list").forEach((function(e){e.classList.remove("style-show"),document.querySelector(".home-section9-list:nth-child("+(t+2)+")").classList.add("style-show")})),section9Bar.classList.remove("style-active1"),section9Bar.classList.remove("style-active2"),section9Bar.classList.add("style-active"+(t+1)),section9Tabs.forEach((function(e){e.classList.remove("style-active")})),e.classList.add("style-active")}))})),window.addEventListener("load",(function(){let e=document.querySelector(".home-sectionhero"),t=document.querySelector(".home-section1-tab:nth-child(1)"),o=document.querySelector(".home-section7-quote:nth-child(1)"),c=document.querySelector(".home-section9-tab:nth-child(1)");e.classList.add("style-ready"),t.click(),o.classList.add("style-show"),c.click(),setTimeout((function(){e.querySelectorAll(".home-sectionhero-elimg").forEach((function(e){e.classList.add("style-ready")}))}),1200);let s=window.scrollY,n=document.querySelector(".home-section3"),i=n.offsetTop,l=window.innerHeight;window.addEventListener("scroll",(function(){s=window.scrollY,s>i-l/2?n.classList.add("style-black"):n.classList.remove("style-black")}))}));