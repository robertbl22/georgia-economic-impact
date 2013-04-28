define([], function() {"use strict";

    /* Constructor */
    function IViewModel() {
        var self = this;

        /**************************************/
        /* Private Properties */

        self.ViewType = "IViewModel";
        self.Render = null;
        self.$ParentContainer = null;
        self.ParentContainerID = "";
        
        /**************************************/
        /* Event Handlers */
       
       $(self).bind("beforeshow", function() {
            console.log("[" + self.ViewType + "] shown!");
        });

        $(self).bind("shown", function() {
            console.log("[" + self.ViewType + "] shown!");
        });
        
        $(self).bind("rendered", function() {
            console.log("[" + self.ViewType + "] rendered!");
            self.ShowContainer();
        });

        /**************************************/
        /* Public Methods */

        self.Show = function() {
            $(self).trigger("beforeshow");
            console.log("[" + self.ViewType + "] .Show() running");
            self.$ParentContainer = $(self.ParentContainerID);
            console.log("[" + self.ViewType + "] self.$ParentContainer.length = " + self.$ParentContainer.length)
            if (self.IsInView()) {
                $(self).trigger("shown");
            } else {
                self.HideContainer();
                self.Render();
            }
            console.log("[" + self.ViewType + "] .Show() finished");
        };

        /**************************************/
        /* Private Methods */

        self.IsInView = function() {
            console.log("[" + self.ViewType + "] $el length = " + $("#" + self.ViewType).length)
            if ($("#" + self.ViewType).length) {
                console.log("[" + self.ViewType + "] *** EXISTS ***");
                return true;
            }
            return false;
        };

        self.HideContainer = function() {
            console.log("[" + self.ViewType + "] .HideContainer() running");
            self.$ParentContainer.hide();
            $(self).trigger("hidden");
        };

        self.ShowContainer = function() {
            console.log("[" + self.ViewType + "] .ShowContainer() running");
            self.$ParentContainer.fadeIn(function() {
                $(self).trigger("shown");
            });
        };

        /**************************************/
        /* Public interface */
        return {
            $ParentContainer : self.$ParentContainer,
            Show : self.Show,
            IsInView : self.IsInView
        };
    }

    return (IViewModel);

});
