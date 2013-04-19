define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function StateView() {
        var self = this;
        IView.call(self);
        
        self.Title = "The State of Georgia";
        self.tpl = 'State-View';
        self.GetData = datasource.GetState;
        self.Tabs.Overview.tpl = 'State-Overview';
        self.Tabs.Overview.GetData = datasource.GetState;
        
        return (self);
    }
    
    // Create inheritance
    StateView.prototype = Object.create(IView.prototype);
    return (new StateView());
    
});
