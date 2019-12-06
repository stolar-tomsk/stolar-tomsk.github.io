$(function () {

    // var balanceGridColumns = function ($grid) {
    //     var $columns = $grid.find('.column');
    //     if ($columns.length < 2) {
    //         return;
    //     }
    //     var maxIterations = 10;
    //     while (maxIterations > 0) {
    //         maxIterations--;
    //
    //         var precision = 10;
    //         var $lowestColumn = null;
    //         var $highestColumn = null;
    //         var lowColumnHeight = Number.MAX_VALUE;
    //         var highColumnHeight = 0;
    //         var hasMoreThanOneItem = false;
    //
    //         $columns.each(function () {
    //             var $column = $(this);
    //             if ($column.children().length > 1) {
    //                 hasMoreThanOneItem = true;
    //             }
    //             var columnHeight = $column.outerHeight();
    //             if (lowColumnHeight > columnHeight) {
    //                 lowColumnHeight = columnHeight;
    //                 $lowestColumn = $column;
    //             }
    //             if (highColumnHeight < columnHeight) {
    //                 highColumnHeight = columnHeight;
    //                 $highestColumn = $column;
    //             }
    //         });
    //         if (!hasMoreThanOneItem ||
    //             !$lowestColumn || !$highestColumn ||
    //             !$lowestColumn[0] || !$highestColumn[0] ||
    //             $lowestColumn[0] === $highestColumn[0]) {
    //             return;
    //         }
    //         var compensatingHeight = highColumnHeight - lowColumnHeight;
    //         if (compensatingHeight < precision) {
    //             return;
    //         }
    //         var $compensatingItem = $highestColumn.children().eq(-1);
    //         if ($compensatingItem.outerHeight() < compensatingHeight - precision) {
    //             $lowestColumn.append($compensatingItem);
    //         } else {
    //             return;
    //         }
    //     }
    // };
    //
    // var balanceGridTimeout = 0;
    // var balanceGrids = function () {
    //     clearTimeout(balanceGridTimeout);
    //     balanceGridTimeout = setTimeout(function () {
    //         $('.grid').each(function () {
    //             balanceGridColumns($(this));
    //         });
    //     }, 40); // Salvattore has 30ms update delay
    // };
    //
    // $('.grid').each(function () {
    //
    //     var $grid = $(this);
    //     var n = $grid.data('items');
    //     var exclude = ($grid.data('exclude') || '').split(',');
    //     var template = $(this).find('script[type=template]').text();
    //
    //     var loadedImages = n - exclude.length;
    //     var imgLoadHandler = function () {
    //         loadedImages--;
    //         if (loadedImages <= 0) {
    //             var $grid = $(this).closest('.grid');
    //             salvattore.recreateColumns($grid.get(0));
    //             balanceGrids();
    //         }
    //     };
    //
    //     var items = [];
    //     for (var i = 0; i < n; i++) {
    //         if (exclude.indexOf(i.toString()) >= 0) {
    //             continue;
    //         }
    //         var item = template.replace(/\{index\}/g, i < 10 ? '0' + i.toString() : i.toString());
    //         var $item = $(item);
    //         $item.find('img').on('load', imgLoadHandler);
    //         items.push($item.get(0));
    //     }
    //
    //     salvattore.appendElements($grid.get(0), items);
    // });
    //
    // $(window).resize(function () {
    //     balanceGrids();
    // });
});
