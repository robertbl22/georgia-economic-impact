define(["viewmodels/tabs/itab", "viewmodels/usercontrols/usercontrols"], function(ITab, UserControls) {"use strict";

    /* Constructor */
    function ITabGridView(parent) {
        var self = this;
        ITab.call(self);
        
        /**************************************/
        /* Private Properties */
       
        self.ViewType = "ITabGridView";

        /**************************************/
        /* Private Methods */
        
        // Override for paging
        self.Render = function() {
            $.get("templates/" + self.tpl + ".html", function(template) {
                self.$ParentContainer.html(template);
                var el = self.$ParentContainer.get(0);
                var pageSize = 100;
                self.pagedDataset = new UserControls.PagedDataset();
                /*
                self.pagedDataset.init(self.parent.UrlKeys, self, self.RecordCount, pageSize);
                */
                ko.applyBindings(self.pagedDataset, el);
                self.$ParentContainer.fadeIn();
                console.log("showTab finished");
            });
        };
        
        return (self);
    }

    // Create inheritance
    if (Object.create) {
        ITabGridView.prototype = Object.create(ITab.prototype);
    }
    return (ITabGridView);

});
