define(["viewmodels/viewmodels"], function(vm) {"use strict";

    function StateRoutes(router) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "StateRoutes";

        /*************************************/
        /* Routes */

        self.run = function() {

            router.get(/#\/state\/{0,1}$/, function(context) {
                // #/state
                //console.log("Rule 3");
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.redirect("#/state/overview");
            });

            router.get(/#\/state\/overview\/{0,1}$/, function(context) {
                // #/state/overview
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.Exit(function() {
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.StateView.Show({
                            "UrlKeys" : {},
                            "Callback" : vm.Entities.StateView.Tabs.Overview.Show
                        })
                    });
                });
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'State Overview', 'view', context.path]);
            });

            router.get(/#\/state\/counties\/{0,1}$/, function(context) {
                // #/state/counties
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.Exit(function() {
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.StateView.Show({
                            "UrlKeys" : {
                                "PageIndex" : 0
                            },
                            "Callback" : vm.Entities.StateView.Tabs.Counties.Show
                        })
                    });
                });
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'All Counties', 'view', context.path]);
            });

            router.get(/#\/state\/commodities\/{0,1}$/, function(context) {
                // #/state/commodities
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.Exit(function() {
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.StateView.Show({
                            "UrlKeys" : {
                                "PageIndex" : 0
                            },
                            "Callback" : vm.Entities.StateView.Tabs.Commodities.Show
                        })
                    });
                });
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'All Commodities', 'view', context.path]);
            });
        }

        return (self);
    }

    return (StateRoutes);

});
