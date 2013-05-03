define(["viewmodels/viewmodels"], function(vm) {"use strict";

    function SplashRoutes(router) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "SplashRoutes";

        /*************************************/
        /* Routes */

        self.run = function() {

            router.get('#/', function(context) {
                // #/
                //console.log("Rule 1");
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.redirect("#/intro");
            });

            router.get(/#\/intro\/{0,1}$/, function(context) {
                // NOTE: was anchored to root slash --> /^\/#\/intro\/{0,1}$/
                // #/intro
                //console.log("Rule 2");
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                router.CurrentPageExit = context.SplashPageExit;
                vm.Layouts.SplashView.Show();
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'Introduction', 'view', context.path]);
            });
        }

        return (self);
    }

    return (SplashRoutes);

});
