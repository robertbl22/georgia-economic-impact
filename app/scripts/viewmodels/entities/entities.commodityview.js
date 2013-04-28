define(["viewmodels/entities/ientity", "datasource/datasource"], function(IEntity, datasource) {"use strict";

    function CommodityView() {
        var self = this;
        IEntity.call(self);

        /**************************************/
        /* Private Properties */

        self.ViewType = "CommodityView";
        self.IdKey = 'CommodityUrlKey';
        self.Title = "UNTITLED COMMODITY";
        self.tpl = 'views/CommodityView';
        self.GetData = datasource.Commodity.GetCommodity;
        
        // Initialize tabs
        self.Tabs.Overview.tpl = 'tab-overviews/CommodityOverview';
        self.Tabs.Overview.GetData = datasource.Commodity.GetCommodity;
        self.Tabs.CompaniesGridView.GetData = datasource.Commodity.GetCompanies;
        self.Tabs.CountiesGridView.GetData = datasource.Commodity.GetCounties;
        
        /**************************************/
        /* Event Handlers */

        $(document).on("commodity_data_loaded", function(e) {
            console.log("commodity_data_loaded fired!");
            console.log(e.LoadedData);
            
            // Tell the gridviews number of records for paging
            self.Tabs.CountiesGridView.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.CompaniesGridView.RecordCount = e.LoadedData.TotalCompanies;
        });
        
        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CommodityView.prototype = Object.create(IEntity.prototype);
    }
    return (new CommodityView());

});
