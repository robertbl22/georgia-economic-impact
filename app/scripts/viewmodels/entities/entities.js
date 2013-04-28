define(["viewmodels/entities/entities.state", "viewmodels/entities/entities.region", "viewmodels/entities/entities.county", "viewmodels/entities/entities.commodity"], function(StateView, RegionView, CountyView, CommodityView) {"use strict";

    /************************/
    /* Public interface */

    return {
        StateView : StateView,
        RegionView : RegionView,
        CountyView : CountyView,
        CommodityView : CommodityView
    };

});

