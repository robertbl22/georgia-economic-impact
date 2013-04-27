define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function RegionView() {
        var self = this;
        IView.call(self);

        self.ViewType = "RegionView";
        self.IdKey = 'RegionUrlKey';
        self.Title = "Untitled Region";
        self.tpl = 'views/RegionView';
        self.GetData = datasource.Region.GetRegion;
        self.Tabs.Overview.tpl = 'tab-overviews/RegionOverview';
        self.Tabs.Overview.GetData = datasource.Region.GetRegion;

        self.viewElement

        /*self.isTypeOf = function(obj) {
            return ( obj instanceof RegionView);
        }*/

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
