define([], function() {"use strict";

    var hasCountyData = false;
    var getCounty = function(myObservable) {
        if (!hasCountyData) {
            $.getJSON("../data/county.json", function(data) {
                myObservable(data);
            });
            hasCountyData = true;
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

    return {
        getCounty : getCounty,
        getCommodities : getCommodities,
        getCompanies : getCompanies
    };

});
