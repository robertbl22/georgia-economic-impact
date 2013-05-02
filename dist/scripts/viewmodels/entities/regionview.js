define(["viewmodels/entities/ientity"], function(IEntity) {"use strict";

    function RegionView() {
        var self = this;
        IEntity.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "RegionView";
        self.IdKey = 'RegionUrlKey';
        self.Title = "";
        self.tpl = 'views/RegionView';
        self.GetData = self.datasource.Region.GetRegion;
        
        // Init overview tab
        self.Tabs.Overview.tpl = 'tab-overviews/RegionOverview';
        self.Tabs.Overview.GetData = self.datasource.Region.GetRegion;

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        RegionView.prototype = Object.create(IEntity.prototype);
    }
    return (new RegionView());

});
