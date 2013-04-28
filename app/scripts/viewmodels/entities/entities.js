define(["viewmodels/entities/entities.stateview", "viewmodels/entities/entities.regionview", "viewmodels/entities/entities.countyview", "viewmodels/entities/entities.commodityview"], function(stateView, regionView, countyView, commodityView) {"use strict";

    /*************************************/
    /* Entities Package Public interface */

    return {
        StateView : stateView,
        RegionView : regionView,
        CountyView : countyView,
        CommodityView : commodityView
    };

});

