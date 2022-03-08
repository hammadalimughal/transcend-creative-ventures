AOS.init({
    once: true
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});
let bannerBrands = $('#banner-brands')
$(bannerBrands).owlCarousel({
    loop: true,
    margin: 50,
    autoplay: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        767: {
            items: 2
        },
        991: {
            items: 3
        },
        1199: {
            items: 3
        },
        1399: {
            items: 3
        }
    }
})

$(bannerBrands).on('translated.owl.carousel', async () => {
    $("#banner-brands .owl-item").css("opacity","0")
    $("#banner-brands .owl-item.active").css("opacity","0.5")
    $("#banner-brands .owl-item.active").first().css("opacity","1")    
    $("#banner-brands .owl-item.active").last().css("opacity","0.3")
    await new Promise(resolve => setTimeout(resolve, 1000))
})
