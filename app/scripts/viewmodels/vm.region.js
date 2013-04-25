define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function RegionView() {
        var self = this;
        IView.call(self);

        self.ViewElementId = "RegionView";
        self.Title = "Untitled Region";
        self.tpl = 'Region-View';
        self.GetData = datasource.Region.GetRegion;
        self.Tabs.Overview.tpl = 'Region-Overview';
        self.Tabs.Overview.GetData = datasource.Region.GetRegion;

        self.viewElement

        self.isTypeOf = function(obj) {
            return ( obj instanceof RegionView);
        }

        return (self);
    }

    // Set Overview as default tab
    /*
    RegionView.prototype.Show = function() {
    IView.prototype.Show.call(this.Tabs.Overview.Show);
    }
    */

    // Create inheritance
    if (Object.create) {
        RegionView.prototype = Object.create(IView.prototype);
    }
    return (new RegionView());

});
