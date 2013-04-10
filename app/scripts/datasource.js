define([], function() {"use strict";

    var hasRegionData = false;
    var getRegion = function(myObservable) {
        if (!hasRegionData) {
            $.getJSON("../data/region.json", function(data) {
                myObservable(data);
            });
            hasRegionData = true;
        }
    };
    
    var hasCountyData = false;
    var getCounty = function(myObservable) {
        if (!hasCountyData) {
            $.getJSON("../data/county.json", function(data) {
                myObservable(data);
            });
            hasCountyData = true;
        }
    };
    
    var hasCommodityData = false;
    var getCommodity = function(myObservable) {
        if (!hasCommodityData) {
            $.getJSON("../data/commodity.json", function(data) {
                myObservable(data);
            });
            hasCommodityData = true;
        }
    };

    var hasCommoditiesData = false;
    var getCommodities = function(observableArray) {
        if (!hasCommoditiesData) {
            $.getJSON("data/commodities.json", function(data) {
                observableArray(data);
                //ko.utils.arrayPushAll(observableArray, data);
                //observableArray.valueHasMutated();
            });
            hasCommoditiesData = true;
        }
    };

    var hasCompaniesData = false;
    var getCompanies = function(observableArray) {
        if (!hasCompaniesData) {
            $.getJSON("data/companies.json", function(data) {
                observableArray(data);
                //ko.utils.arrayPushAll(observableArray, data);
                //observableArray.valueHasMutated();
            });
            hasCompaniesData = true;
        }
    };

    var hasCountiesData = false;
    var getCounties = function(observableArray) {
        if (!hasCountiesData) {
            $.getJSON("data/counties.json", function(data) {
                observableArray(data);
                //ko.utils.arrayPushAll(observableArray, data);
                //observableArray.valueHasMutated();
            });
            hasCountiesData = true;
        }
    };

    return {
        getRegion : getRegion,
        getCounty : getCounty,
        getCommodity : getCommodity,
        getCommodities : getCommodities,
        getCounties : getCounties,
        getCompanies : getCompanies
    };

});
