define(["viewmodels/vm.search", "viewmodels/vm.state", "viewmodels/vm.region", "viewmodels/vm.county", "viewmodels/vm.commodity"], function(searchView, stateView, regionView, countyView, commodityView) {"use strict";

    ko.applyBindings(searchView, $("#SearchTools").get(0));

    ko.observableArray.fn.selectedTab = function(propName, matchValue) {
        return ko.computed(function() {
            var allItems = this(), matchingItems = [];
            for (var i = 0; i < allItems.length; i++) {
                var current = allItems[i];
                if (ko.utils.unwrapObservable(current[propName]) === matchValue)
                    matchingItems.push(current);
            }
            return matchingItems;
        }, this);
    }

    stateView.Show = showView;
    stateView.ShowOverview = showOverview;
    stateView.ShowCounties = showCounties;
    stateView.ShowCommodities = showCommodities;

    regionView.Show = showView;
    regionView.ShowOverview = showOverview;

    countyView.Show = showView;
    commodityView.Show = showView;

    var currentView;
    function showView(callback) {
        console.log("showView running");
        var self = this;
        if (currentView === self) {
            console.log("currentView exists, do nothing");
            if (callback) {
                callback();
            }
            return self;
        }
        currentView = self;
        self.GetData(function(data) {
            document.title = self.Title;
            $.get("views/" + self.tpl + ".html", function(template) {
                var $vc = $("#viewContainer");
                $vc.hide().html(template);
                ko.applyBindings(data, $vc.get(0));
                $vc.fadeIn();
                if (callback) {
                    callback();
                }
            });
        });
    }

    function showOverview() {
        console.log("showOverView running");
        var self = this;

        self.Tabs.Overview.GetData(function(data) {
            $.get("views/" + self.Tabs.Overview.tpl + ".html", function(template) {
                var $tvc = $("#tabViewContainer");
                $tvc.hide().html(template)
                ko.applyBindings(data, $tvc.get(0));
                $tvc.fadeIn();
            });
        });
    }

    function showETOverview() {
        console.log("showOverView running");

        var self = this;

        self.Tabs.Overview.GetData(function(data) {
            $.get("views/" + self.Tabs.Overview.tpl + ".html", function(template) {
                var $tvc = $("#tabViewContainer");
                $tvc.hide().html(template)
                ko.applyBindings(data, $tvc.get(0));
                $tvc.fadeIn();
            });
        });
    }

    function showCounties() {
        console.log("showCounties running");
        var self = this;

        self.Tabs.Counties.GetData(function(data) {
            $.get("views/" + self.Tabs.Counties.tpl + ".html", function(template) {
                var $tvc = $("#tabViewContainer");
                $tvc.hide().html(template)
                ko.applyBindings(data, $tvc.get(0));
                $tvc.fadeIn();
            });
        });
    }

    function showCommodities() {
        console.log("showCommodities running");
        var self = this;

        self.Tabs.Commodities.GetData(function(data) {
            $.get("views/" + self.Tabs.Commodities.tpl + ".html", function(template) {
                var $tvc = $("#tabViewContainer");
                $tvc.hide().html(template);
                ko.applyBindings(data, $tvc.get(0));
                $tvc.fadeIn();
            });
        });
    }

    // Mockup button behaviors

    $($(".form-search button.btn")[0]).click(function(e) {
        e.preventDefault();
        document.location = "#/commodities/aluminum-foil";
    });

    $($(".form-search button.btn")[1]).click(function(e) {
        e.preventDefault();
        document.location = "#/state/region12/chatham-county";
    });

    return {

        // ViewModels
        SearchTools : searchView,
        StateView : stateView,
        RegionView : regionView,
        CountyView : countyView,
        CommodityView : commodityView
    };

});

