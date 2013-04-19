define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function CountyView() {
        var self = this;
        IView.call(self);
        
        self.Title = "Chatham County";
        self.tpl = 'County-View';
        self.GetData = datasource.GetCounty;
        self.Tabs.Overview.tpl = 'County-Overview';
        self.Tabs.Overview.GetData = datasource.GetCounty;
        
        return (self);
    }
    
    // Create inheritance
    CountyView.prototype = Object.create(IView.prototype);
    return (new CountyView());

});
