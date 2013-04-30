define(["datasource/datasource"], function(datasource) {"use strict";

    /* Constructor */
    function SearchControl() {
        var self = this;
        self.ViewType = "SearchControl";

        /*************************************/
        /* Private Properties */

        self.CommoditySearchTerm = ko.observable();
        self.CountySearchTerm = ko.observable();

        self.CommodityTypeahead = ko.observableArray();
        self.CountyTypeahead = ko.observableArray();

        // Throttle typeahead activity
        self.throttledCommoditySearchTerm = ko.computed(function() {
            return self.CommoditySearchTerm();
        }).extend({
            throttle : 500
        });

        self.throttledCountySearchTerm = ko.computed(function() {
            return self.CountySearchTerm();
        }).extend({
            throttle : 500
        });

        /*************************************/
        /* Event Handlers */

        // Watch the user as they type
        self.CommoditySearchTerm.subscribe(function(currValue) {

            console.log("[" + self.ViewType + "] The commodity search term is " + currValue);
            self.CommodityTypeahead.removeAll();
            datasource.Commodity.GetTypeahead(currValue, function(results) {

                console.log("[" + self.ViewType + "] adding typeahead results");
                console.log(results);
                for (var i = 0, j = results.length; i < j; i++) {
                    console.log("[" + self.ViewType + "] adding '" + (results[i]).Name + "'");
                    self.CommodityTypeahead.push((results[i]).Name);
                };

            });
        });

        // Watch the user as they type
        self.CountySearchTerm.subscribe(function(currValue) {

            console.log("[" + self.ViewType + "] The county search term is " + currValue);
            self.CountyTypeahead.removeAll();
            datasource.County.GetTypeahead(currValue, function(results) {

                console.log("[" + self.ViewType + "] adding typeahead results");
                console.log(results);
                for (var i = 0, j = results.length; i < j; i++) {
                    console.log("[" + self.ViewType + "] adding '" + (results[i]).Name + "'");
                    self.CountyTypeahead.push((results[i]).Name);
                };

            });
        });

        /*************************************/
        /* Public Methods */

        self.Show = function($eventTarget, $parentElement) {
            $.get("templates/ui-controls/SearchControl.html", function(tpl) {
                console.log("[" + self.ViewType + "] Loaded SearchControl.html");
                self.RenderTemplate($eventTarget, $parentElement, tpl);
                $("#btnSearchCommodities").click(self.Commodities_ClickHandler);
                $("#btnSearchCounties").click(self.Counties_ClickHandler);
            });
        };

        /*************************************/
        /* Private Methods */

        self.RenderTemplate = function($eventTarget, $parentElement, tpl) {
            $parentElement.html(tpl);
            var searchControl = $parentElement.find("#SearchControl").get(0);
            ko.applyBindings(self, searchControl);
            console.log("[" + self.ViewType + "] SearchControl triggering ui_controls_loaded");
            $eventTarget.trigger("ui_controls_loaded", "SearchControl");
        };

        self.Commodities_ClickHandler = function(e) {
            e.preventDefault();
            var searchterm = self.CommoditySearchTerm();
            datasource.Commodity.GetSearchPreview(searchterm, function(data) {
                console.log(data);
                if (data.length <= 1) {
                    console.log("[" + self.ViewType + "] One search result found");
                    document.location = "#/commodities/" + data[0].UrlKey;
                } else {
                    console.log("[" + self.ViewType + "] More than one result found");
                    // #/state/counties?search=Calhoun+County
                    //document.location = "#/state/counties?search=" + encodeURIComponent(searchterm);
                }
            });
        };

        self.Counties_ClickHandler = function(e) {
            e.preventDefault();
            var searchterm = self.CountySearchTerm();
            datasource.County.GetSearchPreview(searchterm, function(data) {
                console.log(data);
                if (data.length <= 1) {
                    console.log("[" + self.ViewType + "] One search result found");
                    document.location = "#/state/" + data[0].RegionUrlKey + "/" + data[0].UrlKey;
                } else {
                    console.log("[" + self.ViewType + "] More than one result found");
                    // #/state/counties?search=Calhoun+County
                    //document.location = "#/state/counties?search=" + encodeURIComponent(searchterm);
                }
            });
        };

        // Public interface
        return {
            CommoditySearchTerm : self.CommoditySearchTerm,
            CountySearchTerm : self.CountySearchTerm,
            Show : self.Show
        }

    }

    //return (new SearchControl());
    return (SearchControl)

});
