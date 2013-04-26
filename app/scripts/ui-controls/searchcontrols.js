define(["datasource/datasource"], function(datasource) {"use strict";

    /* Constructor */
    function SearchControls() {
        var self = this;
        self.CommoditySearchTerm = ko.observable();
        self.CountySearchTerm = ko.observable();

        self.Show = function($parentElement) {
            $.get("views/ui-controls/SearchControls.html", function(tpl) {
                console.log("Loaded SearchControls.html");

                $parentElement.prepend(tpl);
                var searchTools = $parentElement.find("#SearchTools").get(0);
                ko.applyBindings(self, searchTools);
                $parentElement.trigger("ui_controls_loaded", "SearchControls");

                $("#tbxSearchCommodities").keypress(function(e) {
                    e.preventDefault();
                    var searchterm = $("#tbxSearchCommodities").val();
                    datasource.Commodity.Search(searchterm, function(UrlKey) {
                        document.location = "#/commodities/" + UrlKey;
                    });
                });

                $("#btnSearchCommodities").click(function(e) {
                    e.preventDefault();
                    var searchterm = $("#tbxSearchCommodities").val();
                    datasource.Commodity.Search(searchterm, function(CommodityUrlKey) {
                        document.location = "#/commodities/" + CommodityUrlKey;
                    });
                });

                $("#btnSearchCounties").click(function(e) {
                    e.preventDefault();
                    var searchterm = $("#tbxSearchCounties").val();
                    datasource.County.Search(searchterm, function(RegionUrlKey, CountyUrlKey) {
                        document.location = "#/state/" + RegionUrlKey + "/" + CountyUrlKey;
                    });
                });

            });
        };

        /* Public interface */
        return {
            CommoditySearchTerm : self.CommoditySearchTerm,
            CountySearchTerm : self.CountySearchTerm,
            Show : self.Show
        }

    }

    return (new SearchControls());

});
