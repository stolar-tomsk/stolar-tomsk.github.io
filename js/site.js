//jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    //if ($(".navbar").offset().top > 50) {
    //    $(".navbar-fixed-top").addClass("top-nav-collapse");
    //} else {
    //    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeOutSine');
        event.preventDefault();
    });
});

$(function () {

    var createGrid = function (template, data) {

        var parent = template.parent();
        var clones = [];
        template.remove();

        for (var i = 0, n = data.length; i < n; i++) {
            var clone = template.clone();
            clone.find('img').attr('src', data[i].thumb);
            clone.find('a').attr('href', data[i].src);
            clones.push(clone);
        }

        parent.append(clones);
    };

    createGrid($('#stairs-section').find('.grid-template'), site.data.stairs);
    createGrid($('#doors-section').find('.grid-template'), site.data.doors);
});
