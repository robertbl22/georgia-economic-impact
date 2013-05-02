define(["viewmodels/entities/ientity"], function(IEntity) {"use strict";

    function CountyView() {
        var self = this;
        IEntity.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "CountyView";
        self.IdKey = 'CountyUrlKey';
        self.Title = "";
        self.tpl = 'views/CountyView';
        self.GetData = self.datasource.County.GetCounty;
        
        // Init overview tab
        self.Tabs.Overview.tpl = 'tab-overviews/CountyOverview';
        self.Tabs.Overview.GetData = self.datasource.County.GetCounty;
        
        // Init gridview tabs
        self.Tabs.Companies.GetData = self.datasource.County.GetCompanies;
        self.Tabs.Commodities.GetData = self.datasource.County.GetCommodities;

        /*************************************/
        /* Event Handlers */

        $(document).on("county_data_loaded", function(e) {
            console.log("[" + self.ViewType + "] county_data_loaded fired!");
            console.log(e.LoadedData);
            self.Tabs.Commodities.RecordCount = e.LoadedData.TotalCommodities;
            self.Tabs.Companies.RecordCount = e.LoadedData.TotalCompanies;
        });

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CountyView.prototype = Object.create(IEntity.prototype);
    }
    return (new CountyView());

});
