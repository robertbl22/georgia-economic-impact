define(["datasource"], function(datasource) {"use strict";

    var state = ko.observable();
    var region = ko.observable();
    var county = ko.observable();
    var commodity = ko.observable();
    var commodities = ko.observableArray([]);
    var counties = ko.observableArray([]);
    var companies = ko.observableArray([]);

    var selectedCommodity = ko.observable();
    var selectedState = ko.observable();
    var selectedRegion = ko.observable();
    var selectedCounty = ko.observable();
    var selectTab = function(context, e) {
        switch (e.currentTarget.hash) {
            case "#overview":
                break;
            case "#commodities":
                datasource.GetCommodities(commodities);
                break;
            case "#counties":
                datasource.GetCounties(counties);
                break;
            case "#companies":
                datasource.GetCompanies(companies);
                break;
        }
    };
    
    // init
    datasource.GetState(state);
    datasource.GetRegion(region);
    datasource.GetCounty(county);
    datasource.GetCommodity(commodity);

    return {
        SelectedCommodity: selectedCommodity,
        SelectedRegion: selectedRegion,
        SelectedCounty: selectedCounty,
        SelectTab : selectTab,
        state : state,
        region : region,
        county : county,
        commodity : commodity,
        commodities : commodities,
        companies : companies,
        counties : counties
    };

});

