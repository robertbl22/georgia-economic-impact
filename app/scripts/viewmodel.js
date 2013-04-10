define(["datasource"], function(datasource) {"use strict";

    var county = ko.observable();
    var commodities = ko.observableArray([]);
    var companies = ko.observableArray([]);

    var selectTab = function(context, e) {
        switch (e.currentTarget.hash) {
            case "#overview":
                break;
            case "#commodities":
                datasource.getCommodities(commodities);
                break;
            case "#companies":
                datasource.getCompanies(companies);
                break;
        }
    };
    
    // init
    datasource.getCounty(county);

    return {
        selectTab : selectTab,
        county : county,
        commodities : commodities,
        companies : companies
    };

});

