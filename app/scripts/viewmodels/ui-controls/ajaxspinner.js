define([], function() {"use strict";

    /* Constructor */
    function AjaxSpinner() {
        var self = this;
        self.ViewType = "AjaxSpinner";

        /*************************************/
        /* Private Properties */

        self.CssClass = "ajax-spinner";
        self.$el = null;

        /*************************************/
        /* Event Handlers */

        /*************************************/
        /* Public Methods */

        self.Mask = function($el) {
            console.log("[" + self.ViewType + "] Mask()");
            self.$el = $el;
            
            var width = $el.width();
            var height = $el.height();
            var offset = $el.offset();

            var $spinner = self.CreateWrapper();
            $spinner.offset(offset);
            $spinner.width(width);
            
            console.log("." + $el.find(self.CssClass).length)
            if ($el.find("." + self.CssClass).length === 0) {
                self.$el.prepend($spinner);
            }
        };

        //self.Unmask = function($el) {
        //console.log("[" + self.ViewType + "] Unmask()");
        //if (self.$el && self.$el.parent('.' + self.CssClass).length) {
        //self.$Spinner.remove();
        //self.$el.unwrap();
        //self.$Wrapper.remove();
        //}
        //};

        /*************************************/
        /* Private Methods */

        self.CreateWrapper = function() {
            return $('<div class="' + self.CssClass + '" />');
        };

        /* Public interface */
        return {
            Mask : self.Mask
        }

    }

    return (AjaxSpinner)

});
