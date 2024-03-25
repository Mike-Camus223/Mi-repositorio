// movimiento de los botones carousel //

document.addEventListener('DOMContentLoaded', function () {
    var carouselEl = document.getElementById('carouselExampleInterval');
    carouselEl.addEventListener('slide.bs.carousel', function (event) {
        var activeIndex = event.to;

        var prevArrow = carouselEl.querySelector('.carousel-control-prev');
        var nextArrow = carouselEl.querySelector('.carousel-control-next');

        prevArrow.classList.remove('active', 'active-sec', 'active-ter');
        nextArrow.classList.remove('active', 'active-sec', 'active-ter');

        if (activeIndex === 0) {
            prevArrow.classList.add('active');
            nextArrow.classList.add('active');
        } else if (activeIndex === 1) {
            prevArrow.classList.add('active-sec');
            nextArrow.classList.add('active-sec');
        } else if (activeIndex === 2) {
            prevArrow.classList.add('active-ter');
            nextArrow.classList.add('active-ter');
        }
    });
});

// movimiento de la decoracion del carousel //

document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.getElementById('carouselExampleInterval');

    carousel.addEventListener('slid.bs.carousel', function () {
        var slideIndex = $('.carousel-item.active').index();

        if (slideIndex === 0) {
            document.getElementById('colorStop1').setAttribute('stop-color', '#43234C');
            document.getElementById('colorStop2').setAttribute('stop-color', '#FFCCCC');
        } else if (slideIndex === 1) {
            document.getElementById('colorStop1').setAttribute('stop-color', '#04364A');
            document.getElementById('colorStop2').setAttribute('stop-color', '#CCCCFF');
        } else if (slideIndex === 2) {
            document.getElementById('colorStop1').setAttribute('stop-color', '#8F1537');
            document.getElementById('colorStop2').setAttribute('stop-color', '#FFCCFF');
        }
    });
});


// animacion fadeup //

var animationActivated = false;

window.addEventListener('scroll', function() {
    var element = document.querySelector('.sec-productos ');
    var position = element.getBoundingClientRect();

    if (!animationActivated && position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('fade-in'); 
        animationActivated = true; 
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-up');

    function checkFadeUp() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight) {
                section.classList.add('fade-up-show');
            }
        });
    }

    checkFadeUp();

    window.addEventListener('scroll', checkFadeUp);
});







