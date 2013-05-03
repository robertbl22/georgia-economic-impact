define(["viewmodels/viewmodels"], function(vm) {"use strict";

    function RegionRoutes(router) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "RegionRoutes";
        self.RegionUrlKey = null;

        /*************************************/
        /* Routes */

        self.run = function() {

            router.get(/#\/state\/(region\d{1,2})\/counties$/, function(context) {
                // #/state/region##/counties
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                
                self.RegionUrlKey = this.params['splat'][0];
                
                //console.log("[" + self.ViewType + "] regionUrlKey = " + self.RegionUrlKey);
                //console.log("[" + self.ViewType + "] this.params.splat[1] = " + this.params.splat[1]);
                
                self.ShowCountiesTab();
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'Region Counties', 'view', context.path]);
            });

            router.get(/#\/state\/(region\d{1,2})\/commodities$/, function(context) {
                // #/state/region##/commodities
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                
                self.RegionUrlKey = this.params['splat'][0];
                
                //console.log("[" + self.ViewType + "] regionUrlKey = " + self.RegionUrlKey);
                //console.log("[" + self.ViewType + "] this.params.splat[1] = " + this.params.splat[1]);
                
                self.ShowCommoditiesTab();
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'Region Commodities', 'view', context.path]);
            });

            router.get(/#\/state\/(region\d{1,2})\/companies$/, function(context) {
                // #/state/region##/companies
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                
                self.RegionUrlKey = this.params['splat'][0];
                
                //console.log("[" + self.ViewType + "] regionUrlKey = " + self.RegionUrlKey);
                //console.log("[" + self.ViewType + "] this.params.splat[1] = " + this.params.splat[1]);
                
                self.ShowCompaniesTab();
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'Region Companies', 'view', context.path]);
            });

            router.get(/#\/state\/(region\d{1,2})\/{0,1}(overview){0,1}$/, function(context) {
                // #/state/region##/overview
                //console.log("[" + self.ViewType + "] context.path = " + context.path);
                
                self.RegionUrlKey = this.params['splat'][0];
                
                //console.log("[" + self.ViewType + "] regionUrlKey = " + self.RegionUrlKey);
                //console.log("[" + self.ViewType + "] this.params.splat[1] = " + this.params.splat[1]);
                
                self.ShowOverviewTab();
                // Google Analytics Event Tracking
                _gaq.push(['_trackEvent', 'Region Overview', 'view', context.path]);
            });
        }

        /*************************************/
        /* Private Methods */

        self.ShowCountiesTab = function() {
            vm.Layouts.TwoColumnView.Show(function() {
                vm.Entities.RegionView.Show({
                    "UrlKeys" : {
                        "RegionUrlKey" : self.RegionUrlKey,
                        "PageIndex" : 0
                    },
                    "Callback" : vm.Entities.RegionView.Tabs.Counties.Show
                });
            });
        }

        self.ShowCommoditiesTab = function() {
            vm.Layouts.TwoColumnView.Show(function() {
                vm.Entities.RegionView.Show({
                    "UrlKeys" : {
                        "RegionUrlKey" : self.RegionUrlKey,
                        "PageIndex" : 0
                    },
                    "Callback" : vm.Entities.RegionView.Tabs.Commodities.Show
                });
            });
        }

        self.ShowCompaniesTab = function() {
            vm.Layouts.TwoColumnView.Show(function() {
                vm.Entities.RegionView.Show({
                    "UrlKeys" : {
                        "RegionUrlKey" : self.RegionUrlKey,
                        "PageIndex" : 0
                    },
                    "Callback" : vm.Entities.RegionView.Tabs.Companies.Show
                });
            });
        }

        self.ShowOverviewTab = function() {
            vm.Layouts.TwoColumnView.Show(function() {
                vm.Entities.RegionView.Show({
                    "UrlKeys" : {
                        "RegionUrlKey" : self.RegionUrlKey
                    },
                    "Callback" : vm.Entities.RegionView.Tabs.Overview.Show
                });
            });
        }

        return (self);
    }

    return (RegionRoutes);

});
