define(["viewmodels/tabs/itab"], function(ITab) {"use strict";

    function Overview() {
        var self = this;
        ITab.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "Overview";
        self.tpl = 'tab-overviews/';
        
        return (self);
    }

    // Create inheritance
    if (Object.create) {
        Overview.prototype = Object.create(ITab.prototype);
    }
    return (new Overview());

});
