define(["viewmodels/tabs/itab"], function(ITab) {"use strict";

    function CountiesTab(setTabSelection, parentView) {
        var self = this;
        ITab.call(self, setTabSelection, parentView);

        self.ViewType = "CountiesTab";
        self.tpl = 'tab-gridviews/CountyGridView';
        self.isSelected = ko.observable();
        
        //console.log("[" + parentView.ViewType + "].[" + self.ViewType + "] instantiated");
        
        /*************************************/
        /* Methods */
       
        self.Show = function() {
            //console.log("[" + self.ViewType + "] Show running");
            self.showPagedTab();
        };

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CountiesTab.prototype = Object.create(ITab.prototype);
    }
    return (CountiesTab);

});
