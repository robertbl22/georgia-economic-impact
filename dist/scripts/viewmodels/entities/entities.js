define(["viewmodels/entities/stateview", "viewmodels/entities/regionview", "viewmodels/entities/countyview", "viewmodels/entities/commodityview"], function(StateView, RegionView, CountyView, CommodityView) {"use strict";

    /************************/
    /* Singleton Factories */

    var _stateView = null;
    self.StateView = function() {
        if (!_stateView) {
            _stateView = new StateView()
        }
        return _stateView;
    };

    var _regionView = null;
    self.RegionView = function() {
        if (!_regionView) {
            _regionView = new RegionView()
        }
        return _regionView;
    };

    var _countyView = null;
    self.CountyView = function() {
        if (!_countyView) {
            _countyView = new CountyView()
        }
        return _countyView;
    };

    var _commodityView = null;
    self.CommodityView = function() {
        if (!_commodityView) {
            _commodityView = new CommodityView()
        }
        return _commodityView;
    };

    /************************/
    /* Public interface */

    return {
        StateView : self.StateView,
        RegionView : self.RegionView,
        CountyView : self.CountyView,
        CommodityView : self.CommodityView
    };

});

