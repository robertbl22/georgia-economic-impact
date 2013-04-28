define(["viewmodels/viewmodels", "routes/router.pageexit"], function(vm, PageExit) {"use strict";

    return $.sammy(function() {

        var self = this;
        //self.currentExit = null;
        self.use(PageExit);

        $(vm.Entities.StateView.Tabs.Overview).bind("beforeshow", vm.Entities.StateView.Show);
        $(vm.Entities.StateView).bind("beforeshow", vm.Layouts.TwoColumnView.Show);
        
        $(vm.Entities.RegionView.Tabs.Overview).bind("beforeshow", vm.Entities.RegionView.Show);
        $(vm.Entities.RegionView).bind("beforeshow", vm.Layouts.TwoColumnView.Show);
        
        $(vm.Entities.CommodityView.Tabs.Overview).bind("beforeshow", vm.Entities.CommodityView.Show);
        $(vm.Entities.CommodityView).bind("beforeshow", vm.Layouts.TwoColumnView.Show);
        
        $(vm.Entities.CountyView.Tabs.Overview).bind("beforeshow", vm.Entities.CountyView.Show);
        $(vm.Entities.CountyView).bind("beforeshow", vm.Layouts.TwoColumnView.Show);
        

        /**************************************/
        /* Routing Rules */

        /**************************************/
        /* SPLASH INTRO */

        self.get('#/', function(context) {
            // #/
            console.log("[Router] context.path = " + context.path);
            context.redirect("#/intro");
        });

        self.get(/#\/intro\/{0,1}$/, function(context) {
            // NOTE: was anchored to root slash --> /^\/#\/intro\/{0,1}$/
            // #/intro
            console.log("[Router] context.path = " + context.path);
            self.CurrentPageExit = context.SplashPageExit;
            vm.Layouts.SplashView.Show();
        });

        /**************************************/
        /* STATE */

        self.get(/#\/state\/{0,1}$/, function(context) {
            // #/state
            console.log("[Router] context.path = " + context.path);
            context.redirect("#/state/overview");
        });

        self.get(/#\/state\/overview\/{0,1}$/, function(context) {
            // #/state/overview
            console.log("[Router] context.path = " + context.path);
            //context.Exit(function() {
                var params = {
                    "UrlKeys" : {},
                    "Callback" : null
                }
                //vm.Layouts.TwoColumnView.Show();
                //$(vm.Layouts.TwoColumnView).bind("shown", params, vm.Entities.StateView.Show);
                console.log("[Router] raising StateView shown event");
                vm.Entities.StateView.Tabs.Overview.Show();
            //});
        });

        self.get(/#\/state\/counties\/{0,1}$/, function(context) {
            // #/state/counties
            console.log("[Router] context.path = " + context.path);
            context.Exit(function() {
                var params = {
                    "UrlKeys" : {
                        "PageIndex" : 0
                    },
                    "Callback" : null
                }
                //vm.Layouts.TwoColumnView.Show();
                //$(vm.Layouts.TwoColumnView).bind("shown", params, vm.Entities.StateView.Show);
                vm.Entities.StateView.Tabs.CountiesGridView.Show();
            });
        });

        self.get(/#\/state\/commodities\/{0,1}$/, function(context) {
            // #/state/commodities
            console.log("[Router] context.path = " + context.path);
            context.Exit(function() {
                var params = {
                    "UrlKeys" : {
                        "PageIndex" : 0
                    },
                    "Callback" : null
                }
                //vm.Layouts.TwoColumnView.Show();
                //$(vm.Layouts.TwoColumnView).bind("shown", params, vm.Entities.StateView.Show);
                vm.Entities.StateView.Tabs.CommoditiesGridView.Show();
            });
        });

        /**************************************/
        /* REGIONS */

        self.get(/#\/state\/(region\d{1,2})\/{0,1}$/, function(context) {
            // #/state/region##
            console.log("[Router] context.path = " + context.path);
            var regionUrlKey = this.params['splat'][0];
            console.log("[Router] regionUrlKey = " + regionUrlKey);
            var params = {
                "UrlKeys" : {
                    "RegionUrlKey" : regionUrlKey
                },
                "Callback" : null
            }
            //vm.Layouts.TwoColumnView.Show();
            //$(vm.Layouts.TwoColumnView).bind("shown", params, vm.Entities.RegionView.Show);
            vm.Entities.RegionView.Tabs.Overview.Show();
        });

        /**************************************/
        /* COUNTIES */

        self.get(/#\/state\/region\d{1,2}\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/state/region##/county-name/tab-name
            console.log("[Router] context.path = " + context.path);
            var countyUrlKey = this.params['splat'][0];
            console.log("[Router] regionUrlKey = " + countyUrlKey);

            var params = {
                "UrlKeys" : {
                    "CountyUrlKey" : countyUrlKey,
                    "PageIndex" : 0
                },
                "Callback" : null
            }
            //vm.Layouts.TwoColumnView.Show();
            //$(vm.Layouts.TwoColumnView).bind("shown", params, vm.Entities.CountyView.Show);

            switch(this.params.splat[1]) {
                case "commodities":
                    vm.Entities.CountyView.Tabs.CommoditiesGridView.Show();
                    break;
                case "companies":
                    vm.Entities.CountyView.Tabs.CompaniesGridView.Show();
                    break;
                default :
                    vm.Entities.CountyView.Tabs.Overview.Show();
            }
        });

        /**************************************/
        /* COMMODITIES */

        self.get(/#\/commodities\/{0,1}$/, function(context) {
            // #/commodities/
            console.log("[Router] context.path = " + context.path);
            context.redirect("#/state");
        });

        self.get(/#\/commodities\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/commodities/commodity-name/tab-name
            console.log("[Router] context.path = " + context.path);
            var commodityUrlKey = this.params['splat'][0];
            console.log("[Router] regionUrlKey = " + commodityUrlKey);
            var params = {
                "UrlKeys" : {
                    "CommodityUrlKey" : commodityUrlKey,
                    "PageIndex" : 0
                },
                "Callback" : null
            }
            //vm.Layouts.TwoColumnView.Show();
            //$(vm.Layouts.TwoColumnView).bind("shown", params, vm.Entities.CommodityView.Show);

            switch(this.params.splat[1]) {
                case "counties":
                    vm.Entities.CommodityView.Tabs.CountiesGridView.Show();
                    break;
                case "companies":
                    vm.Entities.CommodityView.Tabs.CompaniesGridView.Show();
                    break;
                default :
                    vm.Entities.CommodityView.Tabs.Overview.Show();
            }
        });

        /**************************************/
        /* DEFAULT (MUST BE THE LAST RULE) */

        self.get('', function(context) {
            // Default route
            console.log("[Router] context.path = " + context.path);
            context.redirect("#/intro");
        });

    });

});
