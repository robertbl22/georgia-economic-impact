define(["viewmodels/vm.colcontainer", "viewmodels/vm.state", "viewmodels/vm.region", "viewmodels/vm.county", "viewmodels/vm.commodity"], function(colContainerView, stateView, regionView, countyView, commodityView) {"use strict";

    return {
        StateView : stateView,
        RegionView : regionView,
        CountyView : countyView,
        CommodityView : commodityView,
        ColContainerView : colContainerView
    };

});

