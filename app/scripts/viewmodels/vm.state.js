define(["viewmodels/IView", "datasource/datasource"], function(IView, datasource) {"use strict";

    function StateView() {
        var self = this;
        IView.call(self);

        self.ViewElementId = "StateView";
        self.Title = "The State of Georgia";
        self.tpl = 'State-View';
        self.GetData = datasource.GetState;
        self.Tabs.Overview.tpl = 'State-Overview';
        self.Tabs.Overview.GetData = datasource.GetState;

        self.isTypeOf = function(obj) {
            return ( obj instanceof StateView);
        }

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        StateView.prototype = Object.create(IView.prototype);
    }
    return (new StateView());

});
