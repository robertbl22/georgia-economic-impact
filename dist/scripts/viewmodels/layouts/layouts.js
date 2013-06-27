define(["viewmodels/layouts/splashview", "viewmodels/layouts/twocolumnview"], function(SplashView, TwoColumnView) {"use strict";

    /************************/
    /* Singleton Factories */
   
   var _splashView = null;
    self.SplashView = function() {
        if (!_splashView) {
            _splashView = new SplashView()
        }
        return _splashView;
    };

    var _twoColumnView = null;
    self.TwoColumnView = function() {
        if (!_twoColumnView) {
            _twoColumnView = new TwoColumnView()
        }
        return _twoColumnView;
    };

    /************************/
    /* Public interface */
   
    return {
        SplashView : self.SplashView,
        TwoColumnView : self.TwoColumnView
    };

});

