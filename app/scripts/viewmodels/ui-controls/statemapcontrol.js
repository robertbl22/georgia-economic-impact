define([], function() {"use strict";

    /* Constructor */
    function StateMapControl() {
        var self = this;
        self.ViewType = "StateMapControl";

        /*************************************/
        /* Private Properties */

        var $stateMapControl = $("#StateMapControl");
        $stateMapControl.addClass("small").fadeIn().removeClass("small");

        /*************************************/
        /* Public Methods */

        self.Show = function($eventTarget, $parentElement) {
            $.get("templates/ui-controls/StateMapControl.html", function(tpl) {
                console.log("[" + self.ViewType + "] Loaded StateMapControl.html");
                self.RenderTemplate($eventTarget, $parentElement, tpl);
            });
        };

        /*************************************/
        /* Private Methods */

        self.RenderTemplate = function($eventTarget, $parentElement, tpl) {
            $parentElement.append(tpl);
            var stateMapControl = $parentElement.find("#StateMapControl").get(0);
            ko.applyBindings(self, stateMapControl);
            console.log("[" + self.ViewType + "] StateMapControl triggering ui_controls_loaded");
            $eventTarget.trigger("ui_controls_loaded", "StateMapControl");
        };

        /* Public interface */
        return {
            Show : self.Show
        }

    }

    //return (new StateMapControl());
    return (StateMapControl)

});
