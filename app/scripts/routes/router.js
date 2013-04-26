define(["viewmodels/viewmodel", "routes/router.pageexit"], function(vm, PageExit) {"use strict";

    return $.sammy(function() {

        var self = this;
        //self.currentExit = null;
        self.use(PageExit);

        /**************************************/
        /* Routing Rules */

        /**************************************/
        /* INTRO */

        self.get('#/', function(context) {
            // #/
            console.log(context.path);
            context.redirect("#/intro");
        });

        self.get(/#\/intro\/{0,1}$/, function(context) {
            // NOTE: was anchored to root slash --> /^\/#\/intro\/{0,1}$/
            // #/intro
            console.log(context.path);
            self.CurrentPageExit = context.SplashPageExit;
            console.log("context.CurrentPageExit " + context.CurrentPageExit)
            $("#ContentContainer").load("views/splash.html");
        });

        /**************************************/
        /* STATE */

        self.get(/#\/state\/{0,1}$/, function(context) {
            // #/state
            console.log(context.path);
            context.redirect("#/state/overview");
        });

        self.get(/#\/state\/overview\/{0,1}$/, function(context) {
            // #/state/overview
            console.log(context.path);
            context.Exit(function() {
                vm.ColContainerView.Show(function() {
                    vm.StateView.Show({
                        "UrlKeys" : {},
                        "Callback" : vm.StateView.Tabs.Overview.Show
                    })
                });
            });
        });

        self.get(/#\/state\/counties\/{0,1}$/, function(context) {
            // #/state/counties
            console.log(context.path);
            context.Exit(function() {
                vm.ColContainerView.Show(function() {
                    vm.StateView.Show({
                        "UrlKeys" : {
                            "PageIndex" : 0
                        },
                        "Callback" : vm.StateView.Tabs.Counties.Show
                    })
                });
            });
        });

        self.get(/#\/state\/commodities\/{0,1}$/, function(context) {
            // #/state/commodities
            console.log(context.path);
            context.Exit(function() {
                vm.ColContainerView.Show(function() {
                    vm.StateView.Show({
                        "UrlKeys" : {
                            "PageIndex" : 0
                        },
                        "Callback" : vm.StateView.Tabs.Commodities.Show
                    })
                });
            });
        });

        /**************************************/
        /* REGIONS */

        self.get(/#\/state\/(region\d{1,2})\/{0,1}$/, function(context) {
            // #/state/region##
            console.log(context.path);
            var regionUrlKey = this.params['splat'][0];
            console.log(regionUrlKey);
            vm.ColContainerView.Show(function() {
                vm.RegionView.Show({
                    "UrlKeys" : {
                        "RegionUrlKey" : regionUrlKey
                    },
                    "Callback" : vm.RegionView.Tabs.Overview.Show
                })
            });
        });

        /**************************************/
        /* COUNTIES */

        self.get(/#\/state\/region\d{1,2}\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/state/region##/county-name/tab-name
            console.log(context.path);
            var countyUrlKey = this.params['splat'][0];
            console.log(countyUrlKey);

            switch(this.params.splat[1]) {
                case "commodities":
                    vm.ColContainerView.Show(function() {
                        vm.CountyView.Show({
                            "UrlKeys" : {
                                "CountyUrlKey" : countyUrlKey,
                                "PageIndex" : 0
                            },
                            "Callback" : vm.CountyView.Tabs.Commodities.Show
                        });
                    });
                    break;
                case "companies":
                    vm.ColContainerView.Show(function() {
                        vm.CountyView.Show({
                            "UrlKeys" : {
                                "CountyUrlKey" : countyUrlKey,
                                "PageIndex" : 0
                            },
                            "Callback" : vm.CountyView.Tabs.Companies.Show
                        });
                    });
                    break;
                default :
                    vm.ColContainerView.Show(function() {
                        vm.CountyView.Show({
                            "UrlKeys" : {
                                "CountyUrlKey" : countyUrlKey
                            },
                            "Callback" : vm.CountyView.Tabs.Overview.Show
                        });
                    });
            }
        });

        /**************************************/
        /* COMMODITIES */

        self.get(/#\/commodities\/{0,1}$/, function(context) {
            // #/commodities/
            console.log(context.path);
            context.redirect("#/state");
        });

        self.get(/#\/commodities\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/commodities/commodity-name/tab-name
            console.log(context.path);
            var commodityUrlKey = this.params['splat'][0];
            console.log(commodityUrlKey);
            //vm.CommodityView.Show();

            switch(this.params.splat[1]) {
                case "counties":
                    vm.ColContainerView.Show(function() {
                        vm.CommodityView.Show({
                            "UrlKeys" : {
                                "CommodityUrlKey" : commodityUrlKey,
                                "PageIndex" : 0
                            },
                            "Callback" : vm.CommodityView.Tabs.Counties.Show
                        });
                    });
                    break;
                case "companies":
                    vm.ColContainerView.Show(function() {
                        vm.CommodityView.Show({
                            "UrlKeys" : {
                                "CommodityUrlKey" : commodityUrlKey,
                                "PageIndex" : 0
                            },
                            "Callback" : vm.CommodityView.Tabs.Companies.Show
                        });
                    });
                    break;
                default :
                    vm.ColContainerView.Show(function() {
                        vm.CommodityView.Show({
                            "UrlKeys" : {
                                "CommodityUrlKey" : commodityUrlKey
                            },
                            "Callback" : vm.CommodityView.Tabs.Overview.Show
                        });
                    });
            }
        });

        /**************************************/
        /* DEFAULT (MUST BE THE LAST RULE) */

        self.get('', function(context) {
            // Default route
            console.log(context.path);
            context.redirect("#/intro");
        });

    });

});
