define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function CountyView() {
        var self = this;
        IView.call(self);

        self.ViewType = "CountyView";
        self.IdKey = 'CountyUrlKey';
        self.Title = "Untitled County";
        self.tpl = 'County-View';
        self.GetData = datasource.County.GetCounty;
        self.Tabs.Overview.tpl = 'County-Overview';
        self.Tabs.Overview.GetData = datasource.County.GetCounty;
        self.Tabs.Companies.GetData = datasource.County.GetCompanies;
        self.Tabs.Commodities.GetData = datasource.County.GetCommodities;
        
        $(document).on("county_data_loaded", function(e) {
            console.log("county_data_loaded fired!");
            console.log(e.LoadedData);
            self.Tabs.Commodities.RecordCount = e.LoadedData.TotalCommodities;
            self.Tabs.Companies.RecordCount = e.LoadedData.TotalCompanies;
        });

        /*self.isTypeOf = function(obj) {
            return ( obj instanceof CountyView);
        }*/

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CountyView.prototype = Object.create(IView.prototype);
    }
    return (new CountyView());

});
