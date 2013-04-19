define(["viewmodels/viewmodel", "routes/router.pageexit"], function(vm, PageExit) {"use strict";

    return $.sammy(function() {

        var self = this;
        //self.currentExit = null;
        self.use(PageExit);

        /**************************************/
        /* Routes */

        self.get(/^\/#\/intro\/{0,1}$/, function(context) {
            // #/intro
            console.log(context.path);
            self.CurrentPageExit = context.SplashPageExit;
            console.log(context);
            console.log(this);
            console.log(self);
            console.log("context.CurrentPageExit " + context.CurrentPageExit)
            $("#ContentContainer").load("views/splash.html");
        });

        self.get(/^\/#\/state\/{0,1}$/, function(context) {
            // #/state
            console.log(context.path);
            context.redirect("#/state/overview");
        });

        self.get(/^\/#\/state\/overview$/, function(context) {
            // #/state/overview
            console.log(context.path);
            context.Exit(function() {
                vm.ColContainerView.Show(function() {
                    vm.StateView.Show(vm.StateView.Tabs.Overview.Show)
                });
            });
        });

        self.get(/^\/#\/state\/counties$/, function(context) {
            // #/state/counties
            console.log(context.path);
            context.Exit(function() {
                vm.ColContainerView.Show(function() {
                    vm.StateView.Show(vm.StateView.Tabs.Counties.Show)
                });
            });
        });

        self.get(/^\/#\/state\/commodities$/, function(context) {
            // #/state/commodities
            console.log(context.path);
            context.Exit(function() {
                vm.ColContainerView.Show(function() {
                    vm.StateView.Show(vm.StateView.Tabs.Commodities.Show)
                });
            });
        });

        self.get(/^\/#\/state\/(region\d{1,2})\/{0,1}$/, function(context) {
            // #/state/region##
            console.log(context.path);
            var regionUrlKey = this.params['splat'];
            console.log(regionUrlKey);
            vm.ColContainerView.Show(function() {
                vm.RegionView.Show(vm.RegionView.Tabs.Overview.Show)
            });
        });

        self.get(/^\/#\/state\/region\d{1,2}\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/state/region##/county-name/tab-name
            console.log(context.path);
            var countyUrlKey = this.params['splat'];
            console.log(countyUrlKey);

            switch(this.params.splat[1]) {
                case "commodities":
                    vm.ColContainerView.Show(function() {
                        vm.CountyView.Show(vm.CountyView.Tabs.Commodities.Show);
                    });
                    break;
                case "companies":
                    vm.ColContainerView.Show(function() {
                        vm.CountyView.Show(vm.CountyView.Tabs.Companies.Show);
                    });
                    break;
                default :
                    vm.ColContainerView.Show(function() {
                        vm.CountyView.Show(vm.CountyView.Tabs.Overview.Show);
                    });
            }
        });

        self.get(/^\/#\/commodities\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/commodities/commodity-name/tab-name
            console.log(context.path);
            var commodityUrlKey = this.params['splat'];
            console.log(commodityUrlKey);
            //vm.CommodityView.Show();

            switch(this.params.splat[1]) {
                case "counties":
                    vm.ColContainerView.Show(function() {
                        vm.CommodityView.Show(vm.CommodityView.Tabs.Counties.Show);
                    });
                    break;
                case "companies":
                    vm.ColContainerView.Show(function() {
                        vm.CommodityView.Show(vm.CommodityView.Tabs.Companies.Show);
                    });
                    break;
                default :
                    vm.ColContainerView.Show(function() {
                        vm.CommodityView.Show(vm.CommodityView.Tabs.Overview.Show);
                    });
            }
        });

        self.get('', function(context) {
            // Default route
            console.log(context.path);
            context.redirect("#/intro");
        });

    });

});
