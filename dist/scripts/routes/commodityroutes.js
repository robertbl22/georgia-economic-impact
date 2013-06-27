define(["viewmodels/viewmodels"], function(vm) {"use strict";

    function CommodityRoutes(router) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "CommodityRoutes";

        /*************************************/
        /* Routes */

        self.run = function() {

            router.get(/#\/commodities\/{0,1}$/, function(context) {
                // #/commodities/
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                context.redirect("#/state");
            });

            router.get(/#\/commodities\/([^\/]*)\/{0,1}(.*)$/, function(context) {
                // #/commodities/commodity-name/tab-name
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                var commodityUrlKey = this.params['splat'][0];
                //console.log("[" + self.ViewType + "] commodityUrlKey = " + commodityUrlKey);
                //vm.Entities.CommodityView.Show();

                switch(this.params.splat[1]) {
                    case "counties":
                        vm.Layouts.TwoColumnView().Show(function() {
                            vm.Entities.CommodityView().Show({
                                "UrlKeys" : {
                                    "CommodityUrlKey" : commodityUrlKey,
                                    "PageIndex" : 0
                                },
                                "Callback" : vm.Entities.CommodityView().Tabs.Counties.Show
                            });
                        });
                        // Google Analytics Event Tracking
                        _gaq.push(['_trackEvent', 'Commodity Counties', 'view', context.path]);
                        break;
                    case "companies":
                        vm.Layouts.TwoColumnView().Show(function() {
                            vm.Entities.CommodityView().Show({
                                "UrlKeys" : {
                                    "CommodityUrlKey" : commodityUrlKey,
                                    "PageIndex" : 0
                                },
                                "Callback" : vm.Entities.CommodityView().Tabs.Companies.Show
                            });
                        });
                        // Google Analytics Event Tracking
                        _gaq.push(['_trackEvent', 'Commodity Companies', 'view', context.path]);
                        break;
                    default :
                        context.Exit(function() {
                            vm.Layouts.TwoColumnView().Show(function() {
                                vm.Entities.CommodityView().Show({
                                    "UrlKeys" : {
                                        "CommodityUrlKey" : commodityUrlKey
                                    },
                                    "Callback" : vm.Entities.CommodityView().Tabs.Overview.Show
                                });
                            });
                        });
                        // Google Analytics Event Tracking
                        _gaq.push(['_trackEvent', 'Commodity Overview', 'view', context.path]);
                }
            });
        }

        return (self);
    }

    return (CommodityRoutes);

});
