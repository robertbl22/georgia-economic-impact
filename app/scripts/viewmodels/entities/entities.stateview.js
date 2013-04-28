define(["viewmodels/entities/ientity", "datasource/datasource"], function(IEntity, datasource) {"use strict";

    function StateView() {
        var self = this;
        IEntity.call(self);

        /**************************************/
        /* Private Properties */

        self.ViewType = "StateView";
        self.IdKey = '';
        self.Title = "The State of Georgia";
        self.tpl = 'views/StateView';
        self.GetData = datasource.State.GetState;
        
        // Initialize tabs
        self.Tabs.Overview.tpl = 'tab-overviews/StateOverview';
        self.Tabs.Overview.GetData = datasource.State.GetState;
        self.Tabs.CountiesGridView.GetData = datasource.State.GetCounties;
        self.Tabs.CommoditiesGridView.GetData = datasource.State.GetCommodities;

        /**************************************/
        /* Event Handlers */

        $(document).on("state_data_loaded", function(e) {
            console.log("[" + self.ViewType + "] state_data_loaded fired! ----vvv");
            console.log(e.LoadedData);
            
            // Tell the gridviews number of records for paging
            self.Tabs.CountiesGridView.RecordCount = e.LoadedData.TotalCounties;
            self.Tabs.CommoditiesGridView.RecordCount = e.LoadedData.TotalCommodities;
        });

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        StateView.prototype = Object.create(IEntity.prototype);
    }
    return (new StateView());

});
