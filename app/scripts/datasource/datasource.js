define([], function() {"use strict";

    var stateData;
    var getState = function(callback) {
        if (!stateData) {
            $.getJSON("data/state.json", function(data) {
                stateData = data;
                callback(data);
            });
        } else {
            callback(stateData);
        }

    };

    var regionData;
    var getRegion = function(callback) {
        if (!regionData) {
            $.getJSON("data/region.json", function(data) {
                regionData = data;
                callback(data);
            });
        } else {
            callback(regionData);
        }

    };

    var countyData;
    var getCounty = function(callback) {
        if (!countyData) {
            $.getJSON("data/county.json", function(data) {
                countyData = data;
                callback(data);
            });
        } else {
            callback(countyData);
        }
    };

    var commodityData;
    var getCommodity = function(callback) {
        if (!commodityData) {
            $.getJSON("data/commodity.json", function(data) {
                commodityData = data;
                callback(data);
            });
        } else {
            callback(commodityData);
        }
    };

    var commoditiesData;
    var getCommodities = function(callback) {
        if (!commoditiesData) {
            $.getJSON("data/commodities.json", function(data) {
                commoditiesData = data;
                callback(data);
            });
        } else {
            callback(commoditiesData);
        }
    };

    var companiesData;
    var getCompanies = function(callback) {
        if (!companiesData) {
            $.getJSON("data/companies.json", function(data) {
                companiesData = data;
                callback(data);
            });
        } else {
            callback(companiesData);
        }
    };

    var countiesData;
    var getCounties = function(callback) {
        if (!countiesData) {
            $.getJSON("data/counties.json", function(data) {
                countiesData = data;
                callback(data);
            });
        } else {
            callback(countiesData);
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
