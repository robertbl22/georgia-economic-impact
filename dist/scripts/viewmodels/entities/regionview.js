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
        self.Tabs.Overview = self.Tabs.RegionOverview;
        self.Tabs.Overview.tpl = 'tab-overviews/RegionOverview';
        self.Tabs.Overview.GetData = self.datasource.Region.GetRegion;
        
        // Init gridview tabs
        self.Tabs.Counties.GetData = self.datasource.Region.GetCounties;
        self.Tabs.Commodities.GetData = self.datasource.Region.GetCommodities;
        //self.Tabs.Companies.GetData = self.datasource.Region.GetCompanies;

        /*************************************/
        /* Event Handlers */

        $(document).on("region_data_loaded", function(e) {
            //console.log("[" + self.ViewType + "] region_data_loaded fired! ---vvv");
            //console.log(e.LoadedData);
            self.Tabs.Counties.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.Commodities.RecordCount = e.LoadedData.TotalCommodities;
            //console.log("[" + self.ViewType + "] self.Tabs.Counties.RecordCount = " + self.Tabs.Counties.RecordCount);
        });

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        RegionView.prototype = Object.create(IEntity.prototype);
    }
    return RegionView;

});
