define(["viewmodels/layouts/layouts.splashview", "viewmodels/layouts/layouts.twocolumnview"], function(splashView, twoColumnView) {"use strict";

    /*****************************/
    /* Layouts Package interface */

    return {
        SplashView : splashView,
        TwoColumnView : twoColumnView
    };

});

