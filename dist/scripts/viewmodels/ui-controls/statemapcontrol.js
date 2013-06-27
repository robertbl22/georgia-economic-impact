define([], function() {"use strict";

    /* Constructor */
    function StateMapControl() {
        var self = this;
        self.ViewType = "StateMapControl";

        /*************************************/
        /* Private Properties */

        //console.log("[" + self.ViewType + "] instantiated");

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

        /*
         $(window).resize(function() {
         //console.log("[" + self.ViewType + "] $(window).resize() handler fired!");
         if (resizeTimer) {
         clearTimeout(resizeTimer);
         }
         var resizeTimer = setTimeout(resizeImageMap, 50);
         });
         */

        $(window).on('resize', resizeImageMap, 50);

        /*************************************/
        /* Public Methods */

        self.Show = function($ParentContainer) {
            $.get("templates/ui-controls/StateMapControl.html", function(tpl) {
                //console.log("[" + self.ViewType + "] Loaded StateMapControl.html");
                self.RenderTemplate($ParentContainer, tpl);
            });
        };

        /*************************************/
        /* Private Methods */

        function resizeImageMap() {
            //console.log("[" + self.ViewType + "] .playResizeAnimation() running v2");
            var map = $(self.StateMapImageID);
            //map.mapster('unbind');
            /*
             map.animate("width : ''" + getMapWidth() + "px'", 500, function() {
             $(this).mapster(self.MapsterOptions);
             });
             */
            //console.log(map)
            var width = getMapWidth(); //Math.floor(map.parents("#StateMapControlContainer").width() * .9);
            map.mapster('resize', width, '', 500);
        };

        function playLoadAnimation($img) {
            var smallWidth = Math.floor(getMapWidth() * .9);
            $img.width(smallWidth);
            $img.animate({
                width : getMapWidth()
            }, 500, function() {
                $img.mapster(self.MapsterOptions);
            });
        };

        function getMapWidth() {
            // NOTE: original image width is 424px
            //var colWidth = $(".span4").width();
            var colWidth = $("#StateMapControlContainer").width();
            var newWidth = Math.floor(colWidth * .9);
            var maxWidth = 380;
            if (newWidth > maxWidth)
                newWidth = maxWidth;
            return newWidth;
        };

        self.RenderTemplate = function($ParentContainer, tpl, iLayout_Callback) {
            $ParentContainer.html(tpl);
            var stateMapControl = $ParentContainer.find(self.StateMapControlID).get(0);
            ko.applyBindings(self, stateMapControl);

            $(self.StateMapImageID).load(function() {
                //console.log("[" + self.ViewType + "] RenderTemplate() #StateMapImg loaded");
                playLoadAnimation($(this));
            });

            if (iLayout_Callback) {
                iLayout_Callback();
            }
        };

        /* Public interface */
        return {
            Show : self.Show
        }

    }

    return (StateMapControl)

});
