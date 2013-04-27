define(["viewmodels/icontainer", "ui-controls/statemapcontrol"], function(IContainer, StateMapControl) {"use strict";

    function ColContainerView() {
        var self = this;
        IContainer.call(self);
        self.ViewType = "ColContainerView";

        self.isSearchControlsLoaded = false;
        self.isStateMapControlLoaded = false;

        self.Render = function(callback) {
            $.get("views/view-containers/ColContainerView.html", function(template) {
                var $parentContainer = $("#ContentContainer");
                $parentContainer.hide().html(template);
                var $scc = $parentContainer.find("#SearchControlContainer");
                self.DisplayParentContainer($parentContainer, callback);
                self.SearchControls.Show($scc);
                self.StateMapControl = new StateMapControl();
                self.StateMapControl.Show($scc);
            });
        }

        self.DisplayParentContainer = function($parentContainer, callback) {
            $parentContainer.bind("ui_controls_loaded", function(e, source) {
                console.log("ui_controls_loaded!");
                if (source == "SearchControls")
                    self.isSearchControlsLoaded = true;
                if (source == "StateMapControl")
                    self.isStateMapControlLoaded = true;
                if (self.isSearchControlsLoaded && self.isStateMapControlLoaded) {
                    console.log("showing #ContentContainer");
                    $parentContainer.fadeIn();
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
        ColContainerView.prototype = Object.create(IContainer.prototype);
    }
    return (new ColContainerView());

});
