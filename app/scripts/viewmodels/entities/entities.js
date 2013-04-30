define(["viewmodels/entities/stateview", "viewmodels/entities/regionview", "viewmodels/entities/countyview", "viewmodels/entities/commodityview"], function(StateView, RegionView, CountyView, CommodityView) {"use strict";

    /************************/
    /* Public interface */

    return {
        StateView : StateView,
        RegionView : RegionView,
        CountyView : CountyView,
        CommodityView : CommodityView
    };

});

