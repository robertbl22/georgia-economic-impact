define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function CommodityView() {
        var self = this;
        IView.call(self);

        self.Title = "ALUMINUM FOIL";
        self.tpl = 'Commodity-View';
        self.GetData = datasource.GetCommodity;
        self.Tabs.Overview.tpl = 'Commodity-Overview';
        self.Tabs.Overview.GetData = datasource.GetCommodity;

        return (self);
    }

    // Set default tab to Overview
    /*
    CommodityView.prototype.Show = function() {
        IView.prototype.Show.call(this.Tabs.Overview.Show);
    }
    */
    
    // Create inheritance
    CommodityView.prototype = Object.create(IView.prototype);
    return (new CommodityView());

});
