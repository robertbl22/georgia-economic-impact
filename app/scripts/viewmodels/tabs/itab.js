define(["viewmodels/iviewmodel", "viewmodels/usercontrols/usercontrols"], function(IViewModel, UserControls) {"use strict";

    /* Constructor */
    function ITab(parent) {
        var self = this;
        IViewModel.call(self);

        /**************************************/
        /* Private Properties */

        self.ViewType = "ITab";
        //self.parent = parent;
        self.$ParentContainer = null;
        self.ParentContainerID = "#TabViewContainer";
        self.isSelected = ko.observable();
        self.tpl = null;
        self.RecordCount = 0;
        self.GetData = null;

        /***********************************/
        /* Public Methods */

        self.Show = function() {
            $(self).trigger("beforeshow");
            console.log("[" + self.ViewType + "] .Show() running");
            self.$ParentContainer = $(self.ParentContainerID);
            console.log("[" + self.ViewType + "] self.$ParentContainer.length = " + self.$ParentContainer.length)
            if (self.IsInView()) {
                $(self).trigger("shown");
            } else {
                self.HideContainer();
                self.isSelected('active');
                self.Render();
            }
            console.log("[" + self.ViewType + "] .Show() finished");
        };

        /**************************************/
        /* Private Methods */

        self.Render = function() {
            /*
            self.GetData({
                "UrlKeys" : self.parent.UrlKeys,
                "Callback" : function(data) {
                    $.get("templates/" + self.tpl + ".html", function(template) {
                        self.$ParentContainer.html(template);
                        var el = self.$ParentContainer.get(0);
                        ko.applyBindings(data, el);
                        self.$ParentContainer.fadeIn();
                        console.log("showTab finished");
                    });
                }
            });
            */
        };

        /**************************************/
        /* Helper Methods */

        /*
         function setTabSelection(tab) {
         self.Overview.isSelected('');
         self.Counties.isSelected('');
         self.Commodities.isSelected('');
         self.Companies.isSelected('');
         tab.isSelected('active');
         };
         */

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        ITab.prototype = Object.create(IViewModel.prototype);
    }
    return (ITab);

});
