define(["viewmodels/vm.splash", "viewmodels/vm.colcontainer", "viewmodels/vm.state", "viewmodels/vm.region", "viewmodels/vm.county", "viewmodels/vm.commodity"], function(splashView, twoColumnView, stateView, regionView, countyView, commodityView) {"use strict";

    /************************/
    /* Public interface */

    return {
        SplashView : splashView,
        TwoColumnView : twoColumnView,
        StateView : stateView,
        RegionView : regionView,
        CountyView : countyView,
        CommodityView : commodityView
    };

});

