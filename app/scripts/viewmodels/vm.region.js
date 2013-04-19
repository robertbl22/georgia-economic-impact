define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";
    
    function RegionView() {
        var self = this;
        IView.call(self);
        
        self.Title = "Economic Region 12";
        self.tpl = 'Region-View';
        self.GetData = datasource.GetRegion;
        self.Tabs.Overview.tpl = 'Region-Overview';
        self.Tabs.Overview.GetData = datasource.GetRegion;
        
        return (self);
    }

    // Set Overview as default tab
    /*
    RegionView.prototype.Show = function() {
        IView.prototype.Show.call(this.Tabs.Overview.Show);
    }
    */
    
    // Create inheritance
    RegionView.prototype = Object.create(IView.prototype);
    return (new RegionView());

});
