$(document).ready(function(){
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
    });
    
    $('.msg-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.clients-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })


    $('.navbar-show-btn').click(() => {
        $('.pg-navbar-collapse').addClass('show-pg-navbar-collapse');
    });

    $('.navbar-hide-btn').click(() => {
        $('.pg-navbar-collapse').removeClass('show-pg-navbar-collapse');
    });

    const tabBtns = $('.tab-btn');
    const tabBodys = $('.tab-body');

    $.each(tabBtns, function(idx, tabBtn){
        $(tabBtn).click(function(){
            $.each(tabBodys, function(key, tabBody){
                if(idx == key){
                    resetActiveTabBtn();
                    resetActiveTabBody();
                    $(tabBtn).addClass('tab-btn-active');
                    $(tabBody).addClass('tab-body-active');
                }
            });
        });
    });

    function resetActiveTabBtn(){
        $.each(tabBtns, function(idx, tabBtn){
            $(tabBtn).removeClass('tab-btn-active');
        });
    }

    function resetActiveTabBody(){
        $.each(tabBodys, function(idx, tabBody){
            $(tabBody).removeClass('tab-body-active');
        });
    }

});