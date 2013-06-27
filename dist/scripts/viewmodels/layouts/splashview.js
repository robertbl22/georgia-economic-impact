define(['viewmodels/layouts/ilayout'], function(ILayout) {"use strict";

    function SplashView() {
        var self = this;
        ILayout.call(self);

        /*************************************/
        /* Private Properties */

        self.ViewType = "SplashView";
        self.isSearchControlLoaded = false;
        self.ParentContainerID = "#ContentContainer";
        self.SearchControlContainerID = "#ControlContainer";
        
        //console.log("[" + self.ViewType + "] instantiated");

        /*************************************/
        /* Private Methods */

        self.Render = function(Router_Callback) {
            document.title = self.Title;
            $.get("templates/views/SplashView.html", function(template) {

                // Containers
                var $ParentContainer = $(self.ParentContainerID);
                $ParentContainer.hide().html(template);
                var $ControlContainer = $ParentContainer.find(self.SearchControlContainerID);

                // Render
                self.SearchControl.Show($ControlContainer);
                //console.log("[" + self.ViewType + "] .DisplayParentContainer() running");
                //console.log("[" + self.ViewType + "] showing #ContentContainer");
                $ParentContainer.fadeIn();
                
                // Event handlers
                $(".btn-see-state").click(function() {
                    document.location = "#/state/overview";
                });
                
                // Callback to router
                if (Router_Callback) {
                    Router_Callback();
                }
                //console.log("[" + self.ViewType + "] .DisplayParentContainer() finished");
            });
        };

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        SplashView.prototype = Object.create(ILayout.prototype);
    }
    return (SplashView);

});
