define(["viewmodels/vm.colcontainer", "viewmodels/vm.state", "viewmodels/vm.region", "viewmodels/vm.county", "viewmodels/vm.commodity"], function(colContainerView, stateView, regionView, countyView, commodityView) {"use strict";

    /*
     ko.observableArray.fn.selectedTab = function(propName, matchValue) {
     return ko.computed(function() {
     var allItems = this(), matchingItems = [];
     for (var i = 0, j = allItems.length; i < j; i++) {
     var current = allItems[i];
     if (ko.utils.unwrapObservable(current[propName]) === matchValue)
     matchingItems.push(current);
     };
     return matchingItems;
     }, this);
     }
     */

    return {
        StateView : stateView,
        RegionView : regionView,
        CountyView : countyView,
        CommodityView : commodityView,
        ColContainerView : colContainerView
    };

});

