define(["viewmodels/layouts/ilayout"], function(ILayout) {"use strict";

    function TwoColumnView() {
        var self = this;
        ILayout.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "TwoColumnView";
        self.SearchControl = new self.UserControls.SearchControl();
        self.StateMapControl = new self.UserControls.StateMapControl();

        /**************************************/
        /* Event handlers  */

        $(self).bind("rendered", function() {
            console.log("[" + self.ViewType + "] rendered!");
            self.$ParentContainer.removeClass("splash-startup");
            self.SearchControl.Show();
            self.StateMapControl.Show();
        });
        
        /**************************************/
        /* Private Methods */

        // Overrides interface
        self.Render = function() {
            console.log("[" + self.ViewType + "] .Render() running");
            $.get("templates/views/TwoColumnView.html", function(template) {
                self.$ParentContainer.html(template);
                $(self).trigger("rendered");
                console.log("[" + self.ViewType + "] .Render() finished");
            });
        };

        return (self);
    };

    // Create inheritance
    if (Object.create) {
        TwoColumnView.prototype = Object.create(ILayout.prototype);
    }
    return (new TwoColumnView());

});
