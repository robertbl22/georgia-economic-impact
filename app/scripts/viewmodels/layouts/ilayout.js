define(["viewmodels/ui-controls/usercontrols"], function(UserControls) {"use strict";

    /* Constructor */
    function ILayout() {
        var self = this;
        self.ViewType = "ILayout";

        /*************************************/
        /* Private Properties */

        self.UserControls = UserControls;
        self.SearchControl = new self.UserControls.SearchControl();

        /**************************************/
        /* Public Methods */

        self.Show = function(Router_Callback) {
            console.log("[" + self.ViewType + "] .Show() running");
            if (!self.IsInView()) {
                self.Render(Router_Callback);
            } else {
                if (Router_Callback) {
                    Router_Callback();
                }
            }
        };

        /*************************************/
        /* Private Methods */

        self.IsInView = function() {
            if ($("#" + self.ViewType).length) {
                console.log("[" + self.ViewType + "] exists ---vvv");
                console.log($(self.ViewType));
                return true;
            }
            return false;
        };

        /**************************************/
        /* Public interface */
        return {
            Show : self.Show
        };
    }

    return (ILayout);

});
