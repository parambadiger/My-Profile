$(document).ready(function(){

    $('aside #menu a').click(function(){
        $('aside #menu a').removeClass('active');
        $(this).addClass('active');
        $('aside').toggleClass('active');
        $('#open').toggleClass('active');
        $('#close').toggleClass('active');
    });

    $('#open').click(function(){
        $('aside').toggleClass('active');
        $('#open').toggleClass('active');
        $('#close').toggleClass('active');
    });

    $('#close').click(function(){
        $('aside').toggleClass('active');
        $('#open').toggleClass('active');
        $('#close').toggleClass('active');
    });

    $('main').scroll(function() {
        var scrollDistance = $('main').scrollTop();
        $('.section').each(function(i) {
            var top_width = $(this).position().top;
            if ($(this).position().top <= scrollDistance) {
                $('aside #menu a.active').removeClass('active');
                $('aside #menu a').eq(i).addClass('active');
            }
        });
    });
});