define(["datasource/datasource"], function(datasource) {"use strict";

    /* Constructor */
    function SearchControls() {

        var self = this;

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

        // Watch the user as they type
        self.CommoditySearchTerm.subscribe(function(currValue) {

            console.log("The commodity search term is " + currValue);
            self.CommodityTypeahead.removeAll();
            datasource.Commodity.GetTypeahead(currValue, function(results) {

                console.log("adding typeahead results");
                console.log(results);
                for (var i = 0, j = results.length; i < j; i++) {
                    console.log("adding '" + (results[i]).Name + "'");
                    self.CommodityTypeahead.push((results[i]).Name);
                };

            });
        });

        // Watch the user as they type
        self.CountySearchTerm.subscribe(function(currValue) {

            console.log("The county search term is " + currValue);
            self.CountyTypeahead.removeAll();
            datasource.County.GetTypeahead(currValue, function(results) {

                console.log("adding typeahead results");
                console.log(results);
                for (var i = 0, j = results.length; i < j; i++) {
                    console.log("adding '" + (results[i]).Name + "'");
                    self.CountyTypeahead.push((results[i]).Name);
                };

            });
        });

        self.Show = function($parentElement) {
            $.get("views/ui-controls/SearchControls.html", function(tpl) {
                console.log("Loaded SearchControls.html");
                self.RenderTemplate($parentElement, tpl);
                $("#btnSearchCommodities").click(self.Commodities_ClickHandler);
                $("#btnSearchCounties").click(self.Counties_ClickHandler);
            });
        };

        self.RenderTemplate = function($parentElement, tpl) {
            $parentElement.prepend(tpl);
            var searchTools = $parentElement.find("#SearchTools").get(0);
            ko.applyBindings(self, searchTools);
            $parentElement.trigger("ui_controls_loaded", "SearchControls");
        }

        self.Commodities_ClickHandler = function(e) {
            e.preventDefault();
            var searchterm = self.CommoditySearchTerm();
            datasource.Commodity.GetSearchPreview(searchterm, function(data) {
                console.log(data);
                if (data.length <= 1) {
                    console.log("One search result found");
                    document.location = "#/commodities/" + data[0].UrlKey;
                } else {
                    console.log("More than one result found");
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
                    console.log("One search result found");
                    document.location = "#/state/" + data[0].RegionUrlKey + "/" + data[0].UrlKey;
                } else {
                    console.log("More than one result found");
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

    //return (new SearchControls());
    return (SearchControls)

});
