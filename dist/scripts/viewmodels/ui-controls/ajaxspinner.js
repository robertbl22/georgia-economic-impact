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
        /* Public Methods */

        self.Mask = function($el) {
            //console.log("[" + self.ViewType + "] Mask()");
            self.$el = $el;
            
            var width = $el.width();
            var height = $el.height();
            var offset = $el.offset();

            var $spinner = self.CreateWrapper();
            $spinner.offset(offset);
            $spinner.width(width);
            
            if ($el.find("." + self.CssClass).length === 0) {
                self.$el.prepend($spinner);
            }
        };

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
