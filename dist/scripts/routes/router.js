define(["viewmodels/viewmodels", "routes/router.pageexit"], function(vm, PageExit) {"use strict";

    return $.sammy(function() {

        var self = this;
        //self.currentExit = null;
        self.use(PageExit);
        self.ViewType = "Router";
        self.HomePath = "/economicimpact-temp/"

        /**************************************/
        /* Routing Rules */

        /**************************************/
        /* SPLASH INTRO */

        self.get('#/', function(context) {
            // #/
            console.log("Rule 1");
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            context.redirect("#/intro");
        });

        self.get(/#\/intro\/{0,1}$/, function(context) {
            // NOTE: was anchored to root slash --> /^\/#\/intro\/{0,1}$/
            // #/intro
            console.log("Rule 2");
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            self.CurrentPageExit = context.SplashPageExit;
            vm.Layouts.SplashView.Show();
            // Google Analytics Event Tracking
            _gaq.push(['_trackEvent', 'Introduction', 'view', context.path]);
        });

        /**************************************/
        /* STATE */

        self.get(/#\/state\/{0,1}$/, function(context) {
            // #/state
            console.log("Rule 3");
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            context.redirect("#/state/overview");
        });

        self.get(/#\/state\/overview\/{0,1}$/, function(context) {
            // #/state/overview
            console.log("[" + self.ViewType + "] context.path = " + context.path);
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

        self.get(/#\/state\/counties\/{0,1}$/, function(context) {
            // #/state/counties
            console.log("[" + self.ViewType + "] context.path = " + context.path);
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

        self.get(/#\/state\/commodities\/{0,1}$/, function(context) {
            // #/state/commodities
            console.log("[" + self.ViewType + "] context.path = " + context.path);
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

        /**************************************/
        /* REGIONS */

        self.get(/#\/state\/(region\d{1,2})\/{0,1}$/, function(context) {
            // #/state/region##
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            var regionUrlKey = this.params['splat'][0];
            console.log("[" + self.ViewType + "] regionUrlKey = " + regionUrlKey);
            vm.Layouts.TwoColumnView.Show(function() {
                vm.Entities.RegionView.Show({
                    "UrlKeys" : {
                        "RegionUrlKey" : regionUrlKey
                    },
                    "Callback" : vm.Entities.RegionView.Tabs.Overview.Show
                })
            });
            // Google Analytics Event Tracking
            _gaq.push(['_trackEvent', 'Region Overview', 'view', context.path]);
        });

        /**************************************/
        /* COUNTIES */

        self.get(/#\/state\/region\d{1,2}\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/state/region##/county-name/tab-name
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            var countyUrlKey = this.params['splat'][0];
            console.log("[" + self.ViewType + "] countyUrlKey = " + countyUrlKey);

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
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.CountyView.Show({
                            "UrlKeys" : {
                                "CountyUrlKey" : countyUrlKey
                            },
                            "Callback" : vm.Entities.CountyView.Tabs.Overview.Show
                        });
                    });
                    // Google Analytics Event Tracking
                    _gaq.push(['_trackEvent', 'County Overview', 'view', context.path]);
            }
        });

        /**************************************/
        /* COMMODITIES */

        self.get(/#\/commodities\/{0,1}$/, function(context) {
            // #/commodities/
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            context.redirect("#/state");
        });

        self.get(/#\/commodities\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/commodities/commodity-name/tab-name
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            var commodityUrlKey = this.params['splat'][0];
            console.log("[" + self.ViewType + "] commodityUrlKey = " + commodityUrlKey);
            //vm.Entities.CommodityView.Show();

            switch(this.params.splat[1]) {
                case "counties":
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.CommodityView.Show({
                            "UrlKeys" : {
                                "CommodityUrlKey" : commodityUrlKey,
                                "PageIndex" : 0
                            },
                            "Callback" : vm.Entities.CommodityView.Tabs.Counties.Show
                        });
                    });
                    // Google Analytics Event Tracking
                    _gaq.push(['_trackEvent', 'Commodity Counties', 'view', context.path]);
                    break;
                case "companies":
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.CommodityView.Show({
                            "UrlKeys" : {
                                "CommodityUrlKey" : commodityUrlKey,
                                "PageIndex" : 0
                            },
                            "Callback" : vm.Entities.CommodityView.Tabs.Companies.Show
                        });
                    });
                    // Google Analytics Event Tracking
                    _gaq.push(['_trackEvent', 'Commodity Companies', 'view', context.path]);
                    break;
                default :
                    vm.Layouts.TwoColumnView.Show(function() {
                        vm.Entities.CommodityView.Show({
                            "UrlKeys" : {
                                "CommodityUrlKey" : commodityUrlKey
                            },
                            "Callback" : vm.Entities.CommodityView.Tabs.Overview.Show
                        });
                    });
                    // Google Analytics Event Tracking
                    _gaq.push(['_trackEvent', 'Commodity Overview', 'view', context.path]);
            }
        });

        /**************************************/
        /* DEFAULT (MUST BE THE LAST RULE) */

        self.get('', function(context) {
            // Default route
            console.log("Default Rule");
            console.log("[" + self.ViewType + "] context.path = " + context.path);
            context.redirect("#/intro");
        });

    });

});
