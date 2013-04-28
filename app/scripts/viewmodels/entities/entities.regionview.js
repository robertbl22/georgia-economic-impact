define(["viewmodels/entities/ientity", "datasource/datasource"], function(IEntity, datasource) {"use strict";

    function RegionView() {
        var self = this;
        IEntity.call(self);

        /**************************************/
        /* Private Properties */

        self.ViewType = "RegionView";
        self.IdKey = 'RegionUrlKey';
        self.Title = "Untitled Region";
        self.tpl = 'views/RegionView';
        self.GetData = datasource.Region.GetRegion;
        
        // Initialize tabs
        self.Tabs.Overview.tpl = 'tab-overviews/RegionOverview';
        self.Tabs.Overview.GetData = datasource.Region.GetRegion;

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        RegionView.prototype = Object.create(IEntity.prototype);
    }
    return (new RegionView());

});
