//owl2row plugin
if ($(window).width() < 768) {
    (function ($, window, document, undefined) {
        Owl2row = function (scope) {
            this.owl = scope;
            this.owl.options = $.extend({}, Owl2row.Defaults, this.owl.options);
            //link callback events with owl carousel here

            this.handlers = {
                'initialize.owl.carousel': $.proxy(function (e) {
                    if (this.owl.settings.owl2row) {
                        this.build2row(this);
                    }
                }, this)
            };

            this.owl.$element.on(this.handlers);
        };

        Owl2row.Defaults = {
            owl2row: false,
            owl2rowTarget: 'item',
            owl2rowContainer: 'owl2row-item',
            owl2rowDirection: 'utd' // ltr
        };

        //mehtods:
        Owl2row.prototype.build2row = function(thisScope){
        
            var carousel = $(thisScope.owl.$element);
            var carouselItems = carousel.find('.' + thisScope.owl.options.owl2rowTarget);

            var aEvenElements = [];
            var aOddElements = [];

            $.each(carouselItems, function (index, item) {
                if ( index % 2 === 0 ) {
                    aEvenElements.push(item);
                } else {
                    aOddElements.push(item);
                }
            });

            carousel.empty();

            switch (thisScope.owl.options.owl2rowDirection) {
                case 'ltr':
                    thisScope.leftToright(thisScope, carousel, carouselItems);
                    break;

                default :
                    thisScope.upTodown(thisScope, aEvenElements, aOddElements, carousel);
            }

        };

        Owl2row.prototype.leftToright = function(thisScope, carousel, carouselItems){

            var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
            var owlMargin = thisScope.owl.options.margin;

            var carouselItemsLength = carouselItems.length;

            var firsArr = [];
            var secondArr = [];

            //console.log(carouselItemsLength);

            if (carouselItemsLength %2 === 1) {
                carouselItemsLength = ((carouselItemsLength - 1)/2) + 1;
            } else {
                carouselItemsLength = carouselItemsLength/2;
            }

            //console.log(carouselItemsLength);

            $.each(carouselItems, function (index, item) {


                if (index < carouselItemsLength) {
                    firsArr.push(item);
                } else {
                    secondArr.push(item);
                }
            });

            $.each(firsArr, function (index, item) {
                var rowContainer = $('<div class="' + o2wContainerClass + '"/>');

                var firstRowElement = firsArr[index];
                    firstRowElement.style.marginBottom = owlMargin + 'px';

                rowContainer
                    .append(firstRowElement)
                    .append(secondArr[index]);

                carousel.append(rowContainer);
            });

        };

        Owl2row.prototype.upTodown = function(thisScope, aEvenElements, aOddElements, carousel){

            var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
            var owlMargin = thisScope.owl.options.margin;

            $.each(aEvenElements, function (index, item) {

                var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
                var evenElement = aEvenElements[index];

                evenElement.style.marginBottom = owlMargin + 'px';

                rowContainer
                    .append(evenElement)
                    .append(aOddElements[index]);

                carousel.append(rowContainer);
            });
        };

        /**
         * Destroys the plugin.
         */
        Owl2row.prototype.destroy = function() {
            var handler, property;

            for (handler in this.handlers) {
                this.owl.dom.$el.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] !== 'function' && (this[property] = null);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins['owl2row'] = Owl2row;
    })( window.Zepto || window.jQuery, window,  document );
    //end of owl2row plugin
}
///
$(document).ready( ()=> {
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
///
$('.category__slider-items').owlCarousel({
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
    owl2row: true,
    responsive:{
        0:{
            items:3,
            margin:12,
        },
        680:{
            items:3,
            margin:10
        },
        
        992:{
            margin:19,
            items:4
        },
        1200:{
            items:5
        },
        1800:{
            items:7
        }
    }
});
$(".category__slider-nav img:first-child").on("click", ()=> {
    $(".category__slider .owl-prev").click();
});
$(".category__slider-nav img:last-child").on("click", ()=> {
    $(".category__slider .owl-next").click();
});
///
// $('.productPage__slider-items').owlCarousel({
//     loop:true,
//     nav:true,
//     margin:19,
//     mouseDrag:true,
//     touchDrag: true,
//     pullDrag:false,
//     freeDrag:false,
//     URLhashListener:false,
//     dots:true,
//     autoplay:false,
//     owl2row: true,
//     items:1,
// });
// $(".productPage__slider-nav img:first-child").on("click", ()=> {
//     $(".productPage__slider .owl-prev").click();
// });
// $(".productPage__slider-nav img:last-child").on("click", ()=> {
//     $(".productPage__slider .owl-next").click();
// });


})

$('.productPage__slider-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: false,
  });
  $(".productPage__slider-nav img:first-child").on("click", ()=> {
    $(".productPage__slider .slick-prev").click();
});
$(".productPage__slider-nav img:last-child").on("click", ()=> {
    $(".productPage__slider .slick-next").click();
});
//   $('.slider-category-nav').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     asNavFor: '.slider-category',
//     dots: true,
//     centerMode: true,
//     infinite: true,
//     centerPadding: '0',
//     focusOnSelect: true,
//     responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//     ]
//   });
  
// $('.productPage__slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     infinite: false,
//     fade: false,
//     asNavFor: '.productPage__slider-nav'
//   });
//   $('.productPage__slider-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.productPage__slider',
//     dots: false,
//     centerMode: true,
//     centerPadding: '30',
//     focusOnSelect: true,
//     responsive: [
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           }
//         },
//     ]
//   });