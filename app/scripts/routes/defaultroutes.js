define(["viewmodels/viewmodels"], function(vm) {"use strict";

    function DefaultRoutes(router) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "DefaultRoutes";

        /*************************************/
        /* Routes */

        self.run = function() {

            router.get('', function(context) {
                // Default route
                console.log("Default Rule");
                console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.redirect("#/intro");
            });
        }

        return (self);
    }

    return (DefaultRoutes);

});
