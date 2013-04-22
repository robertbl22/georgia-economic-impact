define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function CountyView() {
        var self = this;
        IView.call(self);

        self.ViewElementId = "CountyView";
        self.Title = "Untitled County";
        self.tpl = 'County-View';
        self.GetData = datasource.GetCounty;
        self.Tabs.Overview.tpl = 'County-Overview';
        self.Tabs.Overview.GetData = datasource.GetCounty;

        self.isTypeOf = function(obj) {
            return ( obj instanceof CountyView);
        }

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CountyView.prototype = Object.create(IView.prototype);
    }
    return (new CountyView());

});
