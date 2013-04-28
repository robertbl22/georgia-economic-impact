define(["viewmodels/tabs/itabgridview"], function(ITabGridView) {"use strict";

    function CommoditiesGridView() {
        var self = this;
        ITabGridView.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "CommoditiesGridView";
        self.tpl = 'tab-gridviews/CommodityGridView';

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CommoditiesGridView.prototype = Object.create(ITabGridView.prototype);
    }
    return (new CommoditiesGridView());

});
