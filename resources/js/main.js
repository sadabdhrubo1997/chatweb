$(document).ready(function () {

    $("#hambarger").click(function () {
        $(this).toggleClass("active");
        $("#menu").toggleClass("active");
    })

    $("#menu nav ul li").click(function () {
        $("#hambarger").removeClass("active");
        $("#menu").removeClass("active");
    });


    const wiw = window.innerWidth;

    if (wiw <= 768) {
        $("#testimonial_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: false,
            draggable: false,
        });
    }

    window.addEventListener("scroll", function (event) {
        // var scroll = this.scrollY;

        if (window.scrollY > 200) {
            $('#scroll_top_button').css({
                'bottom': '5rem'
            });
        } else {
            $('#scroll_top_button').css({
                'bottom': '-15rem'
            });
        }
    });

});