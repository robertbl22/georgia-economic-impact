define(["viewmodels/icontainer", "ui-controls/statemapcontrol"], function(IContainer, StateMapControl) {"use strict";

    function TwoColumnView() {
        var self = this;
        IContainer.call(self);
        self.ViewType = "TwoColumnView";

        self.isSearchControlLoaded = false;
        self.isStateMapControlLoaded = false;
        self.StateMapControl = null;

        self.Render = function(callback) {
            $.get("templates/views/TwoColumnView.html", function(template) {
                
                // Containers
                var $parentContentContainer = $("#ContentContainer");
                $parentContentContainer.hide().html(template);
                var $eventTarget = $parentContentContainer.find("#" + self.ViewType);
                var $controlContainer = $parentContentContainer.find("#ControlContainer");
                
                // Render
                self.DisplayParentContainer($eventTarget, $parentContentContainer, callback);
                self.SearchControl.Show($eventTarget, $controlContainer);
                self.StateMapControl = new StateMapControl();
                self.StateMapControl.Show($eventTarget, $controlContainer);
            });
        }

        self.DisplayParentContainer = function($eventTarget, $parentContainer, callback) {
            $eventTarget.bind("ui_controls_loaded", function(e, source) {
                console.log(self.ViewType + " ui_controls_loaded!");
                if (source == "SearchControl")
                    self.isSearchControlLoaded = true;
                if (source == "StateMapControl")
                    self.isStateMapControlLoaded = true;
                if (self.isSearchControlLoaded && self.isStateMapControlLoaded) {
                    console.log(self.ViewType + " showing #ContentContainer");
                    $parentContainer.fadeIn();
                    //$parentContainer.trigger("shown");
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
        TwoColumnView.prototype = Object.create(IContainer.prototype);
    }
    return (new TwoColumnView());

});
