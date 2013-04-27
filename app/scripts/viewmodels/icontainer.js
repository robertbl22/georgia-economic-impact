define(["ui-controls/searchcontrols"], function(SearchControls) {"use strict";

    /* Constructor */
    function IContainer() {
        var self = this;
        self.ViewType = "IContainer";

        self.SearchControls = new SearchControls();

        /**************************************/
        /* Display logic */
        self.Show = function(callback) {
            console.log(self.ViewType + ".Show running");
            if (!self.IsInView(callback)) {
                self.Render(callback);
            }
        };

        self.IsInView = function(callback) {
            if ($("#" + self.ViewType).length) {
                console.log(self.ViewType + " exists");
                console.log($(self.ViewType));
                if (callback) {
                    callback();
                    return true;
                }
            }
            return false;
        }
        /**************************************/
        /* Public interface */
        return {
            Show : self.Show
        };
    }

    return (IContainer);

});
