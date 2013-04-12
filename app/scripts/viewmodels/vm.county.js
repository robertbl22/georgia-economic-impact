define(["datasource", "viewmodel"], function(datasource, vm) {"use strict";

    return {
        $el : $(".region-view"),
        Show : function(isVisible) {
            $(".view").fadeOut();
            datasource.GetCounty(county);
            $el.fadeIn();
        }
    }

}); 