define([], function() {"use strict";

    /* Constructor */
    function StateMapControl() {
        var self = this;

        var $stateMapControl = $("#StateMapControl");
        $stateMapControl.addClass("small").fadeIn().removeClass("small");

        self.Show = function($parentElement) {
            $.get("views/ui-controls/StateMapControl.html", function(tpl) {
                console.log("Loaded StateMapControl.html");
                
                $parentElement.append(tpl);
                var stateMapControl = $parentElement.find("#StateMapControl").get(0);
                ko.applyBindings(self, stateMapControl);
                $parentElement.trigger("ui_controls_loaded", "StateMapControl");
            });
        };
        
        /* Public interface */
        return {
            Show : self.Show
        }

    }

    //return (new StateMapControl());
    return (StateMapControl)

});
