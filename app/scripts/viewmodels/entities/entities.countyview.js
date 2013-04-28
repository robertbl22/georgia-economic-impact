define(["viewmodels/entities/ientity", "datasource/datasource"], function(IEntity, datasource) {"use strict";

    function CountyView() {
        var self = this;
        IEntity.call(self);

        /**************************************/
        /* Private Properties */

        self.ViewType = "CountyView";
        self.IdKey = 'CountyUrlKey';
        self.Title = "Untitled County";
        self.tpl = 'views/CountyView';
        self.GetData = datasource.County.GetCounty;
        
        // Initialize tabs
        self.Tabs.Overview.tpl = 'tab-overviews/CountyOverview';
        self.Tabs.Overview.GetData = datasource.County.GetCounty;
        self.Tabs.CompaniesGridView.GetData = datasource.County.GetCompanies;
        self.Tabs.CommoditiesGridView.GetData = datasource.County.GetCommodities;
        
        /**************************************/
        /* Event Handlers */

        $(document).on("county_data_loaded", function(e) {
            console.log("county_data_loaded fired!");
            console.log(e.LoadedData);
            
            // Tell the gridviews number of records for paging
            self.Tabs.CommoditiesGridView.RecordCount = e.LoadedData.TotalCommodities;
            self.Tabs.CompaniesGridView.RecordCount = e.LoadedData.TotalCompanies;
        });

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CountyView.prototype = Object.create(IEntity.prototype);
    }
    return (new CountyView());

});
