$(window).on('load', function () {
    $("#loader").delay(1000).fadeOut(500);
})

new WOW().init();

$('.u-nav-search').on('keyup', function () {
    var input = $(this);
    if (input.val().length === 0) {
        input.addClass('u-input-icon');
    } else {
        input.removeClass('u-input-icon');
    }
});

var readMore = document.getElementsByClassName('read-more-section')[0];
if(readMore){readMore.addEventListener('click', function (event) {

    if (event.target.classList.contains('read-more-btn')) {
        let btn = event.target;
        btn.classList.toggle('d-none');
        let content = event.target.previousElementSibling;
        content.classList.toggle('d-none');
        let dots = content.previousElementSibling;
        dots.classList.toggle('d-none');
    }
})}


/*-------------------------------------
      OwlCarousel
  -------------------------------------*/
$('.u-carousel').each(function () {
    var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        xlDeviceNav = owlCarousel.data('xl-device-nav'),
        xlDevice = owlCarousel.data('xl-device'),
        xlDeviceDots = owlCarousel.data('xl-device-dots');
    owlCarousel.owlCarousel({
        loop: (loop ? true : false),
        items: (items ? items : 4),
        lazyLoad: true,
        center: (centerMode ? true : false),
        autoplayHoverPause: (HoverPause ? true : false),
        margin: (margin ? margin : 0),
        //stagePadding: (stagePadding ? stagePadding : 0),
        autoplay: (autoplay ? true : false),
        autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
        smartSpeed: (smartSpeed ? smartSpeed : 250),
        dots: (dots ? true : false),
        nav: (nav ? true : false),
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navSpeed: (navSpeed ? true : false),
        responsiveClass: true,
        responsive: {
            0: {
                items: (xsDevice ? xsDevice : 1),
                nav: (xsDeviceNav ? true : false),
                dots: (xsDeviceDots ? true : false),
                center: false,
            },
            576: {
                items: (smDevice2 ? smDevice2 : 2),
                nav: (smDeviceNav2 ? true : false),
                dots: (smDeviceDots2 ? true : false),
                center: false,
            },
            768: {
                items: (smDevice ? smDevice : 3),
                nav: (smDeviceNav ? true : false),
                dots: (smDeviceDots ? true : false),
                center: false,
            },
            992: {
                items: (mdDevice ? mdDevice : 4),
                nav: (mdDeviceNav ? true : false),
                dots: (mdDeviceDots ? true : false),
            },
            1296: {
                items: (xlDevice ? xlDevice : 4),
                nav: (xlDeviceNav ? true : false),
                dots: (xlDeviceDots ? true : false),
            }
        }
    });
});

// View Course
$('.course-view-part .view-icons .view-grid').on('click',function(e){
    e.preventDefault();
    $('.rs-popular-courses').removeClass('list-view');
});
$('.course-view-part .view-icons .view-list').on('click',function(e){
    e.preventDefault();
    $('.rs-popular-courses').addClass('list-view');
});


