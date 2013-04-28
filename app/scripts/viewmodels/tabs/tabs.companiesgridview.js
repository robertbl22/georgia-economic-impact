define(["viewmodels/tabs/itabgridview"], function(ITabGridView) {"use strict";

    function CompaniesGridView() {
        var self = this;
        ITabGridView.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "CompaniesGridView";
        self.tpl = 'tab-gridviews/CompanyGridView';

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CompaniesGridView.prototype = Object.create(ITabGridView.prototype);
    }
    return (new CompaniesGridView());

});
