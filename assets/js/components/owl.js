$('.popular__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:19,
    mouseDrag:true,
    touchDrag: true,
    pullDrag:false,
    freeDrag:false,
    URLhashListener:false,
    dots:true,
    autoplay:false,
    responsive:{
        0:{
            items:3
        },
        680:{
            items:4
        },
        
        992:{
            items:5
        },
        1300:{
            items:7
        },
        1610:{
            items:9
        }
    }
});
$(".popular__slider-nav img:first-child").on("click", ()=> {
    $(".popular__slider .owl-prev").click();
});
$(".popular__slider-nav img:last-child").on("click", ()=> {
    $(".popular__slider .owl-next").click();
});




$('.slider-category').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: false,
    asNavFor: '.slider-category-nav'
  });
  $('.slider-category-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-category',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ]
  });
  
$('.productPage__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    fade: false,
    asNavFor: '.productPage__slider-nav'
  });
  $('.productPage__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.productPage__slider',
    dots: false,
    centerMode: true,
    centerPadding: '30',
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
    ]
  });