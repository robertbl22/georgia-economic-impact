define(["viewmodels/vm.state", "viewmodels/vm.region", "viewmodels/vm.county", "viewmodels/vm.commodity"], function(stateView, regionView, countyView, commodityView) {"use strict";

    /*
     var selectTab = function(context, e) {
     switch (e.currentTarget.hash) {
     case "#/overview":
     break;
     case "#/commodities":
     datasource.GetCommodities(commodities);
     break;
     case "#/counties":
     datasource.GetCounties(counties);
     break;
     case "#/companies":
     datasource.GetCompanies(companies);
     break;
     }
     };
     */
    
    var dataToUse = ko.observable();
    var templateToUse = ko.observable();
    

    var showView = function(vm) {
        vm.GetData(function(data) {
            document.title = vm.Title;
            templateToUse(vm.tpl);
            dataToUse(data);
            $(".view").fadeIn();
        });
    };

    var showSearchNoResults = function() {
        $(".search-no-results").fadeIn();
    };

    return {

        ShowView : showView,

        // Search controls
        CommoditySearchTerm : ko.observable(),
        CountySearchTerm : ko.observable(),
        ShowSearchNoResults : showSearchNoResults,

        // View template
        templateToUse : templateToUse,
        dataToUse : dataToUse,

        // Models
        //state : ko.observable(),
        //region : ko.observable(),
        //county : ko.observable(),
        //commodity : ko.observable(),
        //commodities : ko.observableArray([]),
        //companies : ko.observableArray([]),
        //counties : ko.observableArray([]),

        // ViewModels
        StateView : stateView,
        RegionView : regionView,
        CountyView : countyView,
        CommodityView : commodityView
    };

});

