define(["viewmodels/ui-controls/usercontrols"], function(UserControls) {"use strict";

    /* Constructor */
    function ITab(setTabSelection, parentView) {
        var self = this;

        self.ViewType = "ITab";
        self.GetData = null;
        self.RecordCount = 0;
        self.AjaxSpinner = new UserControls.AjaxSpinner();
        self.setTabSelection = setTabSelection;
        self.parentView = parentView;

        /***********************************/
        /* Public Methods */

        self.showPagedTab = function() {
            self.setTabSelection(self);
            //console.log("[" + self.ViewType + "] showTabPagedDataset running");
            var $ParentContainer = $("#TabViewContainer");
            self.AjaxSpinner.Mask($ParentContainer);
            //$ParentContainer.hide();
            $.get("templates/" + self.tpl + ".html", function(template) {
                $ParentContainer.html(template);
                var el = $ParentContainer.get(0);
                var pageSize = 100;
                self.pagedDataset = new UserControls.PagedDataset();
                self.pagedDataset.init(self.parentView.UrlKeys, self, self.RecordCount, pageSize);
                ko.applyBindings(self.pagedDataset, el);
                //self.AjaxSpinner.Unmask($ParentContainer);
                $ParentContainer.hide().fadeIn();
                //console.log("[" + self.ViewType + "] showTab finished");
            });
        };

        return self;

    }

    return (ITab);

});
