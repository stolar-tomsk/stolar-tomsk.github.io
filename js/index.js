$(function () {

    $('.grid').each(function () {

        var $grid = $(this);
        var n = $grid.data('items');
        var exclude = ($grid.data('exclude') || '').split(',');
        var template = $(this).find('script[type=template]').text();

        for (var i = 0; i < n; i++) {
            if (exclude.indexOf(i.toString()) >= 0) {
                continue;
            }
            var item = template.replace(/\{index\}/g, i < 10 ? '0' + i.toString() : i.toString());
            $grid.append(item);
        }

        $grid.masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            resize: false
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });
        $(window).resize(function () {
            $grid.masonry('layout');
        });
    });
});
