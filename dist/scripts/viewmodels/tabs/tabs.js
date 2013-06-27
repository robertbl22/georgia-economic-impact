define([
    "viewmodels/tabs/commoditiestab", 
    "viewmodels/tabs/companiestab", 
    "viewmodels/tabs/countiestab", 
    "viewmodels/tabs/overview/overviewtab", 
    "viewmodels/tabs/overview/stateoverviewtab", 
    "viewmodels/tabs/overview/regionoverviewtab", 
    "viewmodels/tabs/overview/countyoverviewtab", 
    "viewmodels/tabs/overview/commodityoverviewtab"
    ], 
function(
    CommoditiesTab, 
    CompaniesTab, 
    CountiesTab, 
    OverviewTab, 
    StateOverviewTab, 
    RegionOverviewTab, 
    CountyOverviewTab, 
    CommodityOverviewTab) {"use strict";

    function Tabs(parentView) {

        var self = this;

        self.setTabSelection = function(selectedTab) {
            //self.Overview.isSelected('');
            self.StateOverview.isSelected('');
            self.RegionOverview.isSelected('');
            self.CountyOverview.isSelected('');
            self.CommodityOverview.isSelected('');
            
            self.Counties.isSelected('');
            self.Commodities.isSelected('');
            self.Companies.isSelected('');
            selectedTab.isSelected('active');
        };

        self.Commodities = new CommoditiesTab(self.setTabSelection, parentView);
        self.Companies = new CompaniesTab(self.setTabSelection, parentView);
        self.Counties = new CountiesTab(self.setTabSelection, parentView);

        //self.Overview = new OverviewTab(self.setTabSelection, parentView);
        self.StateOverview = new StateOverviewTab(self.setTabSelection, parentView);
        self.RegionOverview = new RegionOverviewTab(self.setTabSelection, parentView);
        self.CountyOverview = new CountyOverviewTab(self.setTabSelection, parentView);
        self.CommodityOverview = new CommodityOverviewTab(self.setTabSelection, parentView);

        /************************/
        /* Public interface */

        return {
            Commodities : self.Commodities,
            Companies : self.Companies,
            Counties : self.Counties,
            Overview : null, //self.Overview,

            StateOverview : self.StateOverview,
            RegionOverview : self.RegionOverview,
            CountyOverview : self.CountyOverview,
            CommodityOverview : self.CommodityOverview
        };
    }

    return Tabs;

});

