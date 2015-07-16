$(document).ready(function() {
    $(window).resize(function() {
        var footerHeight = $('footer').outerHeight();
        $('body').css({'marginBottom':'-' + footerHeight + 'px'});
    });
    $(window).resize();
});
