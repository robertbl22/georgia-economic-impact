define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function StateView() {
        var self = this;
        IView.call(self);

        self.ViewType = "StateView";
        self.IdKey = '';
        self.Title = "The State of Georgia";
        self.tpl = 'views/StateView';
        self.GetData = datasource.State.GetState;
        self.Tabs.Overview.tpl = 'tab-overviews/StateOverview';
        self.Tabs.Overview.GetData = datasource.State.GetState;
        self.Tabs.Counties.GetData = datasource.State.GetCounties;
        self.Tabs.Commodities.GetData = datasource.State.GetCommodities;
        self.Tabs.Companies.GetData = datasource.State.GetCompanies;

        $(document).on("state_data_loaded", function(e) {
            console.log("state_data_loaded fired!");
            console.log(e.LoadedData);
            self.Tabs.Counties.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.Commodities.RecordCount = e.LoadedData.TotalCommodities;
            console.log(self.Tabs.Counties.RecordCount);
        });

        /*self.isTypeOf = function(obj) {
         return ( obj instanceof StateView);
         }*/

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        StateView.prototype = Object.create(IView.prototype);
    }
    return (new StateView());

});
