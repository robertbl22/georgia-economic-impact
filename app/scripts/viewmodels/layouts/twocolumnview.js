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
        self.isSearchControlLoaded = false;
        self.isStateMapControlLoaded = false;
        self.StateMapControl = new self.UserControls.StateMapControl();
        var $self = $(self);

        /*************************************/
        /* Private Methods */

        self.Render = function(callback) {
            $.get("templates/views/TwoColumnView.html", function(template) {
                
                // This view
                var $ParentContainer = $(self.ParentContainerID);
                $ParentContainer.hide().html(template);
                
                // Find user control containers
                var $SearchControlContainer = $ParentContainer.find(self.SearchControlContainerID);
                var $StateMapControlContainer = $ParentContainer.find(self.StateMapControlContainerID);
                self.DisplayParentContainer($self, $ParentContainer, callback);
                
                // Show user controls
                self.SearchControl.Show($self, $SearchControlContainer);
                self.StateMapControl.Show($self, $StateMapControlContainer);
            });
        }

        self.DisplayParentContainer = function($self, $ParentContainer, callback) {
            $self.bind("ui_controls_loaded", function(e, source) {
                console.log("[" + self.ViewType + "] ui_controls_loaded!");
                if (source == "SearchControl")
                    self.isSearchControlLoaded = true;
                if (source == "StateMapControl")
                    self.isStateMapControlLoaded = true;
                if (self.isSearchControlLoaded && self.isStateMapControlLoaded) {
                    console.log("[" + self.ViewType + "] showing " + self.ParentContainerID);
                    $ParentContainer.fadeIn();
                    //$ParentContainer.trigger("shown");
                    if (callback) {
                        callback();
                    }
                }
            });
        }

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        TwoColumnView.prototype = Object.create(ILayout.prototype);
    }
    return (new TwoColumnView());

});
