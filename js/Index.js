$(document).ready(function() {

    const burgerIcon = $('#burgerIcon');
    const navUl = $('nav ul');
    const barsIcon = $('.fa-bars');
    const timesIcon = $('.fa-times');
    
    timesIcon.hide();

    function handleResponsiveNav() {
        const windowWidth = $(window).width();

        if (windowWidth <= 768) {
            burgerIcon.show();
            navUl.hide();

            barsIcon.show();
            timesIcon.hide();
        } else {
            burgerIcon.hide();
            navUl.show();
        }
    }

    function toggleMenu() {
        navUl.toggle();
        barsIcon.toggle();
        timesIcon.toggle();
    }

    handleResponsiveNav();

    $(window).resize(function() {
        handleResponsiveNav();
    });

    burgerIcon.click(function() {
        toggleMenu();
    });
    
    $('nav ul li a').click(function() {
        if ($(window).width() <= 768) {
            navUl.hide();
            barsIcon.show();
            timesIcon.hide();
        }
    });
});