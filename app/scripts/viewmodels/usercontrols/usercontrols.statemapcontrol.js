define(["viewmodels/usercontrols/iusercontrol"], function(IUserControl) {"use strict";

    /* Constructor */
    function StateMapControl() {
        var self = this;
        IUserControl.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "StateMapControl";
        self.ParentContainerID = "#StateMapControlContainer";

        /**************************************/
        /* Public Methods */

        // Overrides interface
        self.ShowContainer = function($ParentContainer) {
            self.$ParentContainer.show();
            self.IntroAnimation();
        };

        /**************************************/
        /* Private Methods  */

        self.IntroAnimation = function() {
            console.log("[" + self.ViewType + "] .IntroAnimation() running");
            var $el = $("#" + self.ViewType);
            $el.hide();
            setTimeout(function() {
                $el.addClass("small").fadeIn(function() {
                    $(self).trigger("shown");
                }).removeClass("small");
            }, 500);

        };

        // Implements interface
        self.Render = function() {
            $.get("templates/ui-controls/StateMapControl.html", function(template) {
                self.$ParentContainer.html(template);
                var el = self.$ParentContainer.find("#StateMapControl").get(0);
                ko.applyBindings(self, el);
                $(self).trigger("rendered");
            });
        };

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        StateMapControl.prototype = Object.create(IUserControl.prototype);
    }
    return (StateMapControl)

});
