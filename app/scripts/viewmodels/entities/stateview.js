define(["viewmodels/entities/ientity"], function(IEntity) {"use strict";

    function StateView() {
        var self = this;
        IEntity.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "StateView";
        self.IdKey = '';
        self.Title = "The State of Georgia";
        self.tpl = 'views/StateView';
        self.GetData = self.datasource.State.GetState;
        
        // Init overview tab
        self.Tabs.Overview.tpl = 'tab-overviews/StateOverview';
        self.Tabs.Overview.GetData = self.datasource.State.GetState;
        
        // Init gridview tabs
        self.Tabs.Counties.GetData = self.datasource.State.GetCounties;
        self.Tabs.Commodities.GetData = self.datasource.State.GetCommodities;
        //self.Tabs.Companies.GetData = self.datasource.State.GetCompanies;

        /*************************************/
        /* Event Handlers */

        $(document).on("state_data_loaded", function(e) {
            console.log("[" + self.ViewType + "] state_data_loaded fired! ---vvv");
            console.log(e.LoadedData);
            self.Tabs.Counties.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.Commodities.RecordCount = e.LoadedData.TotalCommodities;
            console.log("[" + self.ViewType + "] self.Tabs.Counties.RecordCount = " + self.Tabs.Counties.RecordCount);
        });

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        StateView.prototype = Object.create(IEntity.prototype);
    }
    return (new StateView());

});
