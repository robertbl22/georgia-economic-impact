define([], function() {"use strict";

    var stateData;
    var getState = function(callback) {
        if (!stateData) {
            $.getJSON("../data/state.json", function(data) {
                stateData = data;
                callback(data);
            });
        }
        callback(stateData);
    };

    var regionData;
    var getRegion = function(callback) {
        if (!regionData) {
            $.getJSON("../data/region.json", function(data) {
                regionData = data;
                callback(data);
            });
        }
        callback(regionData);
    };

    var hasCountyData = false;
    var getCounty = function(callback) {
        if (!hasCountyData) {
            $.getJSON("../data/county.json", function(data) {
                callback(data);
            });
            hasCountyData = true;
        }
    };

    var hasCommodityData = false;
    var getCommodity = function(callback) {
        if (!hasCommodityData) {
            $.getJSON("../data/commodity.json", function(data) {
                callback(data);
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
        GetState : getState,
        GetRegion : getRegion,
        GetCounty : getCounty,
        GetCommodity : getCommodity,
        GetCommodities : getCommodities,
        GetCounties : getCounties,
        GetCompanies : getCompanies
    };

});
