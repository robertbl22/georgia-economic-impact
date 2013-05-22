define(["viewmodels/layouts/ilayout"], function(ILayout) {"use strict";

    function TwoColumnView() {
        var self = this;
        ILayout.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "TwoColumnView";
        self.ParentContainerID = "#ContentContainer";
        self.SearchControlContainerID = "#SearchControlContainer";
        self.StateMapControlContainerID = "#StateMapControlContainer";
        self.StateMapControl = new self.UserControls.StateMapControl();
        
        //console.log("[" + self.ViewType + "] instantiated");


        /*************************************/
        /* Private Methods */

        self.Render = function(Router_Callback) {
            $.get("templates/views/TwoColumnView.html", function(template) {

                // Get this view's parent
                var $ParentContainer = $(self.ParentContainerID);
                $ParentContainer.hide().html(template);

                // Get user control containers
                var $SearchControlContainer = $ParentContainer.find(self.SearchControlContainerID);
                var $StateMapControlContainer = $ParentContainer.find(self.StateMapControlContainerID);

                // Show user controls
                self.SearchControl.Show($SearchControlContainer);
                self.StateMapControl.Show($StateMapControlContainer);

                // Show this view
                //console.log("[" + self.ViewType + "] showing " + self.ParentContainerID);
                $ParentContainer.fadeIn();

                // Callback to router
                if (Router_Callback) {
                    Router_Callback();
                }
            });
        };

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        TwoColumnView.prototype = Object.create(ILayout.prototype);
    }
    return (TwoColumnView);

});
