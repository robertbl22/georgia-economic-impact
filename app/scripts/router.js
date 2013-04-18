define(["viewmodel"], function(vm) {"use strict";

    return $.sammy(function() {

        var self = this;

        self.get(/^\/#\/state\/{0,1}$/, function(context) {
            // #/state
            $("#ContentContainer").load("views/2-Col-Container.html");
            console.log(context.path);
            context.redirect("#/state/overview");
        });

        self.get(/^\/#\/state\/overview$/, function(context) {
            // #/state/overview
            console.log(context.path);
            vm.StateView.Show(function() {
                vm.StateView.ShowOverview();
            });
        });

        self.get(/^\/#\/state\/counties$/, function(context) {
            // #/state/counties
            console.log(context.path);
            vm.StateView.Show(function() {
                vm.StateView.ShowCounties();
            });
        });

        self.get(/^\/#\/state\/commodities$/, function(context) {
            // #/state/commodities
            console.log(context.path);
            vm.StateView.Show(function() {
                vm.StateView.ShowCommodities();
            });
        });

        self.get(/^\/#\/state\/(region\d{1,2})\/{0,1}$/, function(context) {
            // #/state/region##
            console.log(context.path);
            var regionUrlKey = this.params['splat'];
            vm.RegionView.Show();
        });

        self.get(/^\/#\/state\/region\d{1,2}\/([^\/]*)\/{0,1}(.*)$/, function(context) {
            // #/state/region##/county-name/tab-name
            console.log(context.path);
            var countyUrlKey = this.params['splat'];
            console.log(countyUrlKey);
            vm.CountyView.Show();
            switch(this.params.splat[1]) {
                case "overview":
                    break;
                case "commodities":
                    break;
                case "companies":
                    break;
            }
        });

        self.get(/^\/#\/commodities\/(.*)$/, function(context) {
            // #/commodities/commodity-name
            console.log(context.path);
            var commodityUrlKey = this.params['splat'];
            console.log(commodityUrlKey);
            vm.CommodityView.Show();
        });

        self.get('', function(context) {
            // Default route
            $("#ContentContainer").load("views/splash.html");
            console.log(context.path);
            context.redirect("#/intro");
        });

    });

});
