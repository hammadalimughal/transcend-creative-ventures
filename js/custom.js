// AOS.init({
//     once: true
// });
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});
const bannerBrands = $('#banner-brands')
$(bannerBrands).owlCarousel({
    loop: true,
    margin: 50,
    autoplay: true,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
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

function bannerBrandsSliderOpac() {
    $("#banner-brands .owl-item").css("opacity","0")
    $("#banner-brands .owl-item.active").css("opacity","0.5")
    $("#banner-brands .owl-item.active").first().css("opacity","1")    
    $("#banner-brands .owl-item.active").last().css("opacity","0.3")
}
$(document).ready(function(){
    bannerBrandsSliderOpac();
})
$(bannerBrands).on('translated.owl.carousel', async () => {
    bannerBrandsSliderOpac();
    await new Promise(resolve => setTimeout(resolve, 1000))
})
$(".portfolio-tabs li a").click(function(){
    let anc = $(this)
    $(".portfolio-tabs li a").removeClass("active")
    $(this).addClass("active")
    if ($(this).data("target-port") == "all") {
        $(`.portfolio-content *[data-portfolio-type]`).fadeOut("500")
        $(`.portfolio-content *[data-portfolio-type]`).fadeIn("500")
    }
    else{
        $(`.portfolio-content *[data-portfolio-type]`).fadeOut("500")
        $(`.portfolio-content *[data-portfolio-type]`).each(function(ind,elem){
            if ($(elem).data("portfolio-type").includes($(anc).data("target-port"))) {
                $(elem).fadeIn("500")
            }
        })
        // $(`.portfolio-content *[data-portfolio-type=${$(this).data("target-port")}]`).fadeIn("500")
    }
})
$("#businessStartupImages").owlCarousel({
    loop: true,
    margin: 50,
    autoplay: true,
    nav: false,
    dots: true,
    items: 1,
    responsiveClass: true,
    responsive: {
        0: {
            margin: 10,
        },
        575: {
            margin: 50,
        },
        767: {
            margin: 50,
        },
        991: {
            margin: 50,
        },
        1199: {
            margin: 50,
        },
        1399: {
            margin: 50,
        }
    }
})
const serviceSlider = $(".service-slider")
serviceSlider.owlCarousel({
    loop: true,
    margin: 0,
    autoWidth:true,
    autoplay: false,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            autoWidth:false,
        },
        575: {
            items: 1,
            autoWidth:false,
        },
        767: {
            // items: 2
        },
        991: {
            // items: 3
        },
        1199: {
            // items: 3
        },
        1399: {
            // items: 3
        }
    }
})
$(document).ready(function(){
    serviceSliderHeight();
})
$(serviceSlider).on('translated.owl.carousel', async () => {
    serviceSliderHeight();
    await new Promise(resolve => setTimeout(resolve, 1000))
})
$(".packages-sec .nav-pills .nav-item .nav-link").click(function(){
    setTimeout(() => {
        serviceSliderHeight()
    }, 700);
    
})

function serviceSliderHeight(){
    $(".service-slider .owl-item").removeClass("first")
    $(".service-slider").each(function(){
        $($(this)[0].querySelectorAll(".owl-item.active")).first().addClass("first")
    })
    // $(".service-slider .owl-item.active").first().addClass("first")
}


$("#lvly-prtnr-slider").owlCarousel({
    loop: true,
    margin: 180,
    autoplay: false,
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
            items: 3
        },
        991: {
            items: 4
        },
        1199: {
            items: 5
        },
        1399: {
            items: 5
        }
    }
})