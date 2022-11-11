


//burger
$(".header__burger").click(function() {
    $(".header__mobile_icon img").toggleClass("dominant");
    $(".category__menu").toggleClass("active");
    $("body").toggleClass("category__menu_open");
});

//search
$(".header__mobile_search").click(function() {
    $("body").addClass("popup__active");
});

//???
$(".main__center-pages__item").click(function() {
    $(this).parent().find(".active").removeClass("active");
    $(this).addClass("active");
});

//popup 
$(".header__mobile_search").on("click", function() {
    if ($(window).width() < 768) {
        $(".popup__search").addClass("active");
        $("body").append("<div class='popup__open'></div>")
    }
});
window.addEventListener("click", function (e) {
    if($(e.target).hasClass("popup__open")) {
    $(".popup__open").remove();
    $(".popup").removeClass("active");
    $("body").removeClass("popup__active");
    }
});

$(".comment").click(function() {
    $("body").addClass("popup__active");
    $(".popup-comment").addClass("active");
    $("body").append("<div class='popup__open'></div>");
    
})


$(document).ready(function() {
    if ($(window).width() < 768) {
        
        $(".main__center .category__name").click(function() { 
            $(this).prev().toggleClass("hide");
            $(this).next().toggleClass("hide");
            $(this).toggleClass("close");
            $(this).parent().parent().parent().toggleClass("close");
            $(this).parent().parent().find(".main__center-text").slideToggle();
            $(this).parent().parent().parent().find(".main__center-bottom").slideToggle();
            $(this).parent().parent().find(".main__center-category__games").toggleClass("close");
            $(this).parent().parent().find(".main__center-category__game:nth-child(n+4)").slideToggle();
        })
        $(".categoryPage .category__name").click(function() { 
            // $(this).parent().parent().find(".categoryPage__center_mobile_wrapper").slideToggle();
            $(".ukr").slideToggle();
            $(".categoryPage").toggleClass("active");
            $(this).parent().parent().toggleClass("close");
        })
        $(".productPage__categories .category__name").click(function() { 
            // $(this).parent().parent().find(".categoryPage__center_mobile_wrapper").slideToggle();
            $(".ukr").slideToggle();
            $(".categoryPage").toggleClass("active");
            $(this).parent().parent().toggleClass("close");
        })
    } else if ($(window).width() > 768) {
        $(".main__center").last().removeClass("close");
        $(".main__center").last().find(".category__name").removeClass("close");
        $(".main__center").last().find("picture").removeClass("hide");
    }
})

$("#toTop").click(function() { 
    topFunction();
})
// Get the button:
let mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if ($(window).width() > 768) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    } else {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




   






