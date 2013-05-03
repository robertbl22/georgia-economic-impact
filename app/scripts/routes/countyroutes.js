define(["viewmodels/viewmodels"], function(vm) {"use strict";

    function CountyRoutes(router) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "CountyRoutes";

        /*************************************/
        /* Routes */

        self.run = function() {

            router.get(/#\/state\/region\d{1,2}\/([^\/]*)\/{0,1}(.*)$/, function(context) {
                // #/state/region##/county-name/tab-name
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                var countyUrlKey = this.params['splat'][0];
                //console.log("[" + self.ViewType + "] countyUrlKey = " + countyUrlKey);

                switch(this.params.splat[1]) {
                    case "commodities":
                        vm.Layouts.TwoColumnView.Show(function() {
                            vm.Entities.CountyView.Show({
                                "UrlKeys" : {
                                    "CountyUrlKey" : countyUrlKey,
                                    "PageIndex" : 0
                                },
                                "Callback" : vm.Entities.CountyView.Tabs.Commodities.Show
                            });
                        });
                        // Google Analytics Event Tracking
                        _gaq.push(['_trackEvent', 'County Commodities', 'view', context.path]);
                        break;
                    case "companies":
                        vm.Layouts.TwoColumnView.Show(function() {
                            vm.Entities.CountyView.Show({
                                "UrlKeys" : {
                                    "CountyUrlKey" : countyUrlKey,
                                    "PageIndex" : 0
                                },
                                "Callback" : vm.Entities.CountyView.Tabs.Companies.Show
                            });
                        });
                        // Google Analytics Event Tracking
                        _gaq.push(['_trackEvent', 'County Companies', 'view', context.path]);
                        break;
                    default :
                        context.Exit(function() {
                            vm.Layouts.TwoColumnView.Show(function() {
                                vm.Entities.CountyView.Show({
                                    "UrlKeys" : {
                                        "CountyUrlKey" : countyUrlKey
                                    },
                                    "Callback" : vm.Entities.CountyView.Tabs.Overview.Show
                                });
                            });
                        });
                        // Google Analytics Event Tracking
                        _gaq.push(['_trackEvent', 'County Overview', 'view', context.path]);
                }
            });

        }

        return (self);
    }

    return (CountyRoutes);

});
