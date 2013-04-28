define(["viewmodels/usercontrols/iusercontrol", "datasource/datasource"], function(IUserControl, datasource) {"use strict";

    /* Constructor */
    function SearchControl() {
        var self = this;
        IUserControl.call(self);

        self.model = {
            CommoditySearchTerm : ko.observable(),
            CountySearchTerm : ko.observable(),
            CommodityTypeahead : ko.observableArray(),
            CountyTypeahead : ko.observableArray()
        }

        /**************************************/
        /* Private Properties  */

        self.ViewType = "SearchControl";
        self.ParentContainerID = "#SearchControlContainer";

        /**************************************/
        /* Private Methods  */

        // Implements interface
        self.Render = function() {
            $.get("templates/ui-controls/SearchControl.html", function(template) {
                self.$ParentContainer.html(template);
                var el = self.$ParentContainer.find("#SearchControl").get(0);
                ko.applyBindings(self.model, el);
                $(self).trigger("rendered");
                $("#btnSearchCommodities").click(self.Commodities_ClickHandler);
                $("#btnSearchCounties").click(self.Counties_ClickHandler);
            });
        };

        /**************************************/
        /* Typeahead behaviors          */
        /* with KnockoutJS Observables  */

        // Throttle typeahead activity
        self.model.throttledCommoditySearchTerm = ko.computed(function() {
            return self.model.CommoditySearchTerm();
        }).extend({
            throttle : 500
        });

        self.model.throttledCountySearchTerm = ko.computed(function() {
            return self.model.CountySearchTerm();
        }).extend({
            throttle : 500
        });

        // Watch the user as they type
        self.model.CommoditySearchTerm.subscribe(function(currValue) {

            console.log("The commodity search term is " + currValue);
            self.model.CommodityTypeahead.removeAll();
            datasource.Commodity.GetTypeahead(currValue, function(results) {

                console.log("adding typeahead results");
                console.log(results);
                for (var i = 0, j = results.length; i < j; i++) {
                    console.log("adding '" + (results[i]).Name + "'");
                    self.model.CommodityTypeahead.push((results[i]).Name);
                };

            });
        });

        // Watch the user as they type
        self.model.CountySearchTerm.subscribe(function(currValue) {

            console.log("The county search term is " + currValue);
            self.model.CountyTypeahead.removeAll();
            datasource.County.GetTypeahead(currValue, function(results) {

                console.log("adding typeahead results");
                console.log(results);
                for (var i = 0, j = results.length; i < j; i++) {
                    console.log("adding '" + (results[i]).Name + "'");
                    self.model.CountyTypeahead.push((results[i]).Name);
                };

            });
        });

        /**************************************/
        /* Event Handlers  */

        self.Commodities_ClickHandler = function(e) {
            e.preventDefault();
            var searchterm = self.model.CommoditySearchTerm();
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
            var searchterm = self.model.CountySearchTerm();
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

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        SearchControl.prototype = Object.create(IUserControl.prototype);
    }
    return (SearchControl)

});
