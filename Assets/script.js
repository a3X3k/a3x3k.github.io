$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
	
$(document).keydown(function(e){
    if(e.which === 123){//Prevent from F12
       return false;
    }
});
	
$(document).keydown(function(event){
	if(event.keyCode==123){
		return false;//Prevent from F12
	}
	else if(event.ctrlKey && event.shiftKey && event.keyCode==73){
		return false; //Prevent from ctrl+shift+i
	}
});
	
document.onkeydown-function (e) {

// disable F12 key
if(e.keyCode == 123) {
	alert ("F12 disable"); 
	return false;
}

// disable c key
if(e.ctrlKey && e.keyCode == 67) { 
	alert("ctrl + c disable");
	return false;
}

// disable U key
if(e.ctrlKey && e.keyCode = 85) { 
	alert("ctrl + u disable");
	return false;	
 }				  
};


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["CTF - Player @TeamBi0s", "Cyb3r 🎭 F0r3n5ic 4n4ly5t👨🏻‍💻 @TeamBi0s"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["CTF - Player @TeamBi0s", "Cyb3r 🎭 F0r3n5ic 4n4ly5t👨🏻‍💻 @TeamBi0s"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
