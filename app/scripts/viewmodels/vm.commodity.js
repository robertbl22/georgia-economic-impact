define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function CommodityView() {
        var self = this;
        IView.call(self);

        self.ViewType = "CommodityView";
        self.IdKey = 'CommodityUrlKey';
        self.Title = "UNTITLED COMMODITY";
        self.tpl = 'Commodity-View';
        self.GetData = datasource.Commodity.GetCommodity;
        self.Tabs.Overview.tpl = 'Commodity-Overview';
        self.Tabs.Overview.GetData = datasource.Commodity.GetCommodity;
        self.Tabs.Companies.GetData = datasource.Commodity.GetCompanies;
        self.Tabs.Counties.GetData = datasource.Commodity.GetCounties;
        
        $(document).on("commodity_data_loaded", function(e) {
            console.log("commodity_data_loaded fired!");
            console.log(e.LoadedData);
            self.Tabs.Counties.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.Companies.RecordCount = e.LoadedData.TotalCompanies;
        });

        /*self.isTypeOf = function(obj) {
            return ( obj instanceof CommodityView);
        }*/

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CommodityView.prototype = Object.create(IView.prototype);
    }
    return (new CommodityView());

});
