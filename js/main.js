$(function(){


    $('.slider__inner').slick({
    autoplay: true,
        arrows: false,
        dots: true
    });

    $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
        prevArrow:'<button class="slick-arrow slick-prev"><img src="images/works/arrow-left.svg" alt=""></button>',
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/works/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.header__menu-btn').on('click', function(){
       $('.header__menu > ul').slideToggle();
    });

    $('.header__drop-down.drop-down').on('click', function(){
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });




});

