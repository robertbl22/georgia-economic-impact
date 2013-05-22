define(["viewmodels/tabs/itab"], function(ITab) {"use strict";

    function CompaniesTab(setTabSelection, parentView) {
        var self = this;
        ITab.call(self, setTabSelection, parentView);

        self.ViewType = "CompaniesTab";
        self.tpl = 'tab-gridviews/CompanyGridView';
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
        CompaniesTab.prototype = Object.create(ITab.prototype);
    }
    return (CompaniesTab);

});
