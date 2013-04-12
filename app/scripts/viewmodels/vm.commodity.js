define(["datasource", "viewmodel"], function(datasource, vm) {"use strict";

    return {
        $el : $(".commodity-view"),
        Show : function(isVisible) {
            $(".view").fadeOut();
            datasource.GetCommodity(commodity);
            $el.fadeIn();
        }
    };

});
