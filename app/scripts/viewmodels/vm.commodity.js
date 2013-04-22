define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function CommodityView() {
        var self = this;
        IView.call(self);

        self.ViewElementId = "CommodityView";
        self.Title = "UNTITLED COMMODITY";
        self.tpl = 'Commodity-View';
        self.GetData = datasource.GetCommodity;
        self.Tabs.Overview.tpl = 'Commodity-Overview';
        self.Tabs.Overview.GetData = datasource.GetCommodity;

        self.isTypeOf = function(obj) {
            return ( obj instanceof CommodityView);
        }

        return (self);
    }

    // Set default tab to Overview
    /*
    CommodityView.prototype.Show = function() {
    IView.prototype.Show.call(this.Tabs.Overview.Show);
    }
    */

    // Create inheritance
    if (Object.create) {
        CommodityView.prototype = Object.create(IView.prototype);
    }
    return (new CommodityView());

});
