define([], function() {"use strict";

    /* Constructor */
    function StateMapControl() {
        var self = this;
        self.ViewType = "StateMapControl";

        /*************************************/
        /* Private Properties */

        self.StateMapControlID = "#StateMapControl";
        self.StateMapImageID = "#StateMapImg";
        var resizeTimer = null;
        self.MapsterOptions = {
            singleSelect : true,
            fillColor : '00284C',
            stroke : true,
            strokeColor : 'FFFFFF',
            strokeWidth : 2,
            clickNavigate : true,
            showToolTip : true
        };

        /*************************************/
        /* Event Handlers */

        $(window).resize(function() {
            if (resizeTimer)
                clearTimeout(resizeTimer);
            resizeTimer = setTimeout(playResizeAnimation, 50);
        });

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

        function playResizeAnimation() {
            console.log("[" + self.ViewType + "] .playResizeAnimation() running");
            var map = $(self.StateMapImageID);
            map.mapster('unbind');
            map.animate("width : ''" + getMapWidth() + "px'", 500, function() {
                $(this).mapster(self.MapsterOptions);
            });
        };

        function playLoadAnimation(img) {
            //$(this).addClass("small").fadeIn().removeClass('small');
            //$(this).mapster(self.MapsterOptions);
            var smallWidth = Math.floor(getMapWidth() * .9);
            //$(this).width(smallWidth);
            img.width(smallWidth);
            img.animate({
                width : getMapWidth()
            }, 500, function() {
                img.mapster(self.MapsterOptions);
            });
        };

        function getMapWidth() {
            // NOTE: original image width is 424px
            var colWidth = $(".span4").width();
            var newWidth = Math.floor(colWidth * .9);
            var maxWidth = 380;
            if (newWidth > maxWidth)
                newWidth = maxWidth;
            return newWidth;
        };

        self.RenderTemplate = function($eventTarget, $parentElement, tpl) {
            $parentElement.html(tpl);
            var stateMapControl = $parentElement.find(self.StateMapControlID).get(0);
            ko.applyBindings(self, stateMapControl);
            console.log("[" + self.ViewType + "] StateMapControl triggering ui_controls_loaded");

            $(self.StateMapImageID).load(function() {
                console.log("[" + self.ViewType + "] RenderTemplate() #StateMapImg loaded");
                playLoadAnimation($(this));
            });

            $eventTarget.trigger("ui_controls_loaded", self.ViewType);
        };

        /* Public interface */
        return {
            Show : self.Show
        }

    }

    //return (new StateMapControl());
    return (StateMapControl)

});
