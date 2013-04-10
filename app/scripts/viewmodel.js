define(["datasource"], function(datasource) {"use strict";

    var SelectedCommodity = ko.observable();
    var SelectedRegion = ko.observable();
    var SelectedCounty = ko.observable();

    var region = ko.observable();
    var county = ko.observable();
    var commodity = ko.observable();
    var commodities = ko.observableArray([]);
    var counties = ko.observableArray([]);
    var companies = ko.observableArray([]);

    var selectTab = function(context, e) {
        switch (e.currentTarget.hash) {
            case "#overview":
                break;
            case "#commodities":
                datasource.getCommodities(commodities);
                break;
            case "#counties":
                datasource.getCounties(counties);
                break;
            case "#companies":
                datasource.getCompanies(companies);
                break;
        }
    };
    
    // init
    datasource.getRegion(region);
    datasource.getCounty(county);
    datasource.getCommodity(commodity);

    return {
        selectTab : selectTab,
        region : region,
        county : county,
        commodity : commodity,
        commodities : commodities,
        companies : companies,
        counties : counties
    };

});

