define(["ui-controls/searchcontrols", "ui-controls/statemapcontrol"], function(SearchControls, StateMapControl) {"use strict";

    function ColContainerView() {
        var self = this;
        self.isSearchControlsLoaded = false;
        self.isStateMapControlLoaded = false;
        var $parentContainer;

        self.Show = function(callback) {
            console.log("ColContainerView.Show running");

            if ($("#ColContainerView").length) {
                console.log("#ColContainerView exists");
                console.log($("#ColContainerView"));
                if (callback) {
                    callback();
                    return;
                }
            }

            $.get("views/view-containers/ColContainerView.html", function(template) {
                $parentContainer = $("#ContentContainer");
                $parentContainer.hide().html(template);
                var $scc = $parentContainer.find("#SearchControlContainer");

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
                
                SearchControls.Show($scc);
                StateMapControl.Show($scc);
            });
        };

        return {
            Show : self.Show
        };
    };

    return (new ColContainerView());

});
