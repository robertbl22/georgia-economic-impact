define(['viewmodels/layouts/ilayout'], function(ILayout) {"use strict";

    function SplashView() {
        var self = this;
        ILayout.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "SplashView";
        self.isSearchControlLoaded = false;

        /*************************************/
        /* Private Methods */

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
                console.log("[" + self.ViewType + "] ui_controls_loaded!");
                if (source == "SearchControl")
                    self.isSearchControlLoaded = true;
                if (self.isSearchControlLoaded) {
                    console.log("[" + self.ViewType + "] showing #ContentContainer");
                    $parentContainer.fadeIn();

                    $("button.btn-primary").click(function() {
                        document.location = "#/state/overview";
                    });
                    
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
        SplashView.prototype = Object.create(ILayout.prototype);
    }
    return (new SplashView());

});
