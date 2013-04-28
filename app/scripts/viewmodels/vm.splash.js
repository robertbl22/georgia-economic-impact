define(['viewmodels/icontainer'], function(IContainer) {"use strict";

    function SplashView() {
        var self = this;
        IContainer.call(self);
        self.ViewType = "SplashView";

        self.isSearchControlLoaded = false;

        self.Render = function(callback) {
            $.get("templates/views/SplashView.html", function(template) {
                
                // Containers
                var $parentContentContainer = $("#ContentContainer");
                $parentContentContainer.hide().html(template);
                var $eventTarget = $parentContentContainer.find("#" + self.ViewType);
                var $controlContainer = $parentContentContainer.find("#ControlContainer");
                
                // Render
                self.DisplayParentContainer($eventTarget, $parentContentContainer, callback);
                self.SearchControl.Show($eventTarget, $controlContainer);
            });
        };

        self.DisplayParentContainer = function($eventTarget, $parentContainer, callback) {
            $eventTarget.bind("ui_controls_loaded", function(e, source) {
                console.log("ui_controls_loaded!");
                if (source == "SearchControl")
                    self.isSearchControlLoaded = true;
                if (self.isSearchControlLoaded) {
                    console.log("showing #ContentContainer");
                    $parentContainer.fadeIn();
                    //$parentContainer.trigger("shown");
                    if (callback) {
                        callback();
                    }
                }
            });
        };

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        SplashView.prototype = Object.create(IContainer.prototype);
    }
    return (new SplashView());

});
