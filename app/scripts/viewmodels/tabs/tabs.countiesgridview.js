define(["viewmodels/tabs/itabgridview"], function(ITabGridView) {"use strict";

    function CountiesGridView() {
        var self = this;
        ITabGridView.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "CountiesGridView";
        self.tpl = 'tab-gridviews/CountyGridView';

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CountiesGridView.prototype = Object.create(ITabGridView.prototype);
    }
    return (new CountiesGridView());

});
