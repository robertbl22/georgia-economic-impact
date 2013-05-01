define(["viewmodels/entities/ientity"], function(IEntity) {"use strict";

    function CommodityView() {
        var self = this;
        IEntity.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "CommodityView";
        self.IdKey = 'CommodityUrlKey';
        self.Title = "";
        self.tpl = 'views/CommodityView';
        self.GetData = self.datasource.Commodity.GetCommodity;
        
        // Init overview tab
        self.Tabs.Overview.tpl = 'tab-overviews/CommodityOverview';
        self.Tabs.Overview.GetData = self.datasource.Commodity.GetCommodity;
        
        // Init gridview tabs
        self.Tabs.Companies.GetData = self.datasource.Commodity.GetCompanies;
        self.Tabs.Counties.GetData = self.datasource.Commodity.GetCounties;
        
        /*************************************/
        /* Event Handlers */

        $(document).on("commodity_data_loaded", function(e) {
            console.log("[" + self.ViewType + "] commodity_data_loaded fired! ---vvv");
            console.log(e.LoadedData);
            self.Tabs.Counties.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.Companies.RecordCount = e.LoadedData.TotalCompanies;
        });

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CommodityView.prototype = Object.create(IEntity.prototype);
    }
    return (new CommodityView());

});
