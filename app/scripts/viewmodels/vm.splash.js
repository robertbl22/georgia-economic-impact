define(['viewmodels/icontainer'], function(IContainer) {"use strict";

    function SplashView() {
        var self = this;
        IContainer.call(self);
        self.ViewType = "SplashView";

        self.isSearchControlsLoaded = false;

        self.Render = function(callback) {
            $.get("views/view-containers/Splash-View.html", function(template) {
                var $parentContainer = $("#ContentContainer");
                $parentContainer.hide().html(template);
                var $scc = $parentContainer.find("#SearchControlContainer");
                self.DisplayParentContainer($parentContainer, callback);
                self.SearchControls.Show($scc);
            });
        };

        self.DisplayParentContainer = function($parentContainer, callback) {
            $parentContainer.bind("ui_controls_loaded", function(e, source) {
                console.log("ui_controls_loaded!");
                if (source == "SearchControls")
                    self.isSearchControlsLoaded = true;
                if (self.isSearchControlsLoaded) {
                    console.log("showing #ContentContainer");
                    $parentContainer.fadeIn();
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
