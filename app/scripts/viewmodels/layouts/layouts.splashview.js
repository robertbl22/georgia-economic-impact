define(['viewmodels/layouts/ilayout'], function(ILayout) {"use strict";

    function SplashView() {
        var self = this;
        ILayout.call(self);

        /**************************************/
        /* Private Properties */

        self.ViewType = "SplashView";
        self.SearchControl = new self.UserControls.SearchControl();

        /**************************************/
        /* Event handlers  */

        $(self).bind("rendered", function() {
            console.log("[" + self.ViewType + "] rendered!");
            self.$ParentContainer.removeClass("splash-startup");
            self.SearchControl.Show();
        });

        /***********************************/
        /* Private Methods */

        // Overrides interface
        self.Render = function(callback) {
            console.log("[" + self.ViewType + "] .Render() running");
            $.get("templates/views/SplashView.html", function(template) {
                self.$ParentContainer.html(template);
                $(self).trigger("rendered");
                console.log("[" + self.ViewType + "] .Render() finished");
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
