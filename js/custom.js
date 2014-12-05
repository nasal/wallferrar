$(document).ready(function () {

    $('#mainContent').height($('#topSlide').height()-77);

    $('#moreScroller').click(function (e) {
        $('html, body').animate({
            scrollTop: $("#mainContent").offset().top
        }, 1000);
    });

    $('.flyoutNav').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) return;
        $('.flyoutNav').removeClass('active');
        $(this).addClass('active');
        loadBackground('.parallax-slider', $(this).data('bg'));
        loadContent('#leftFlyoutContent', $(this).data('template'));
    });

    $('#topSlide').parallax({ imageSrc: 'http://www.eighthaveadvisors.com/wp-content/uploads/2013/07/iStock_business-girl-Medium.jpg' });
    loadContent('#leftFlyoutContent', 'business-optimization');

    function loadBackground(element, background) {
        $(element).fadeOut('fast', function() {
            $(element).attr('src', background);
            $(element).fadeIn('fast');
        });
    }

    function loadContent(element, template) {
        $(element).fadeOut('fast', function() {
            $(element).load('templates/' + template + '.html', function() {
                $(element).fadeIn('fast');
            });
        });
    }

});