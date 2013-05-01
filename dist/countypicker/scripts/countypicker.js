$(document).ready(function() {

    var $GeorgiaMap = $('#GeorgiaMap');

    var options = {
        fillOpacity : 0.4,
        fillColor : "d42e16",
        fade : true,
        fadeDuration : 250,
        stroke : true,
        strokeColor : "3320FF",
        strokeOpacity : 1.0,
        strokeWidth : 2,
        singleSelect : true,
        mapKey : 'name',
        listKey : 'name',
        onClick : Area_Click,
        areas : areas
    };

    $GeorgiaMap.mapster(options);
    
    /*
    $(window).bind("load resize", function(){
        $('img').mapster('resize', $(window).width(), 2000);
    });
    */

    var xref = {
        region1 : "<b>Region 1</b> is here",
        region2 : "<b>Region 2</b> is here"
    };

    var areas = [{
        key : "region1",
        fillColor : "ffffff"
    }, {
        key : "region2",
        fillColor : "000000",
        strokeColor : "FFFFFF"
    }];

    $(".btn.closable").click(function() {
        var region = $(this).parent(".region1");
        var mask = $(".countypicker-mask");
        hideBackgroundMask();
        hideRegion(region);
    });

    function Area_Click(e) {
        var region1 = $(".region1");
        showRegion(region1);
        showBackgroundMask(region1);
        showFeedback(e);
    }

    function hideRegion(region) {
        region.fadeOut().attr('style', '');
    }

    function showRegion(region) {
        var left = getLeftPosition(region);
        var top = getTopPosition(region);
        region.stop().show().animate({
            "width" : "60%",
            "top" : top,
            "left" : left
        }, 500, 'easeOutQuart');
    }

    function getLeftPosition(region) {
        var gmWidth = Math.floor($GeorgiaMap.width() / 2);
        var rWidth = Math.floor((region.width() * 1.6) / 2);
        var width = gmWidth - rWidth;
        return width;
    }

    function getTopPosition($region) {
        var gmHeight = Math.floor($GeorgiaMap.height() / 2);
        var rHeight = Math.floor(($region.height() * 1.6) / 2);
        var height = gmHeight - rHeight;
        return height;
    }

    function showBackgroundMask(region) {
        var mask = $(".countypicker-mask");
        mask.show();
        mask.click(function(e) {
            hideRegion(region, mask);
        });
    }

    function hideBackgroundMask() {
        var mask = $(".countypicker-mask");
        mask.hide();
        mask.unbind('click');
    }

    function showFeedback(area) {
        $('#selections').html(xref[area.key]);
    }

});
