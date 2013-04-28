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
       
        self.Show = function(callback) {
            console.log("[" + self.ViewType + "] .Show() running");
            if (!self.IsInView(callback)) {
                self.Render(callback);
            }
        };

        /*************************************/
        /* Private Methods */

        self.IsInView = function(callback) {
            if ($("#" + self.ViewType).length) {
                console.log("[" + self.ViewType + "] exists ---vvv");
                console.log($(self.ViewType));
                if (callback) {
                    callback();
                    return true;
                }
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
