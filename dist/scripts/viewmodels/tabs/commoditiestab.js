define(["viewmodels/tabs/itab"], function(ITab) {"use strict";

    function CommoditiesTab(setTabSelection, parentView) {
        var self = this;
        ITab.call(self, setTabSelection, parentView);

        self.ViewType = "CommoditiesTab";
        self.tpl = 'tab-gridviews/CommodityGridView';
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
        CommoditiesTab.prototype = Object.create(ITab.prototype);
    }
    return (CommoditiesTab);

});
