define(["ui-controls/pageddataset"], function(PagedDataset) {"use strict";

    /* Constructor */
    function ITabs(parent) {
        var self = this;
        self.parent = parent;

        /***********************************/
        /* Display logic */

        self.showTab = function(tab) {
            setTabSelection(tab);
            console.log("showTab running");
            var $tvc = $("#tabViewContainer");
            $tvc.hide();
            tab.GetData({
                "UrlKeys" : self.parent.UrlKeys,
                "Callback" : function(data) {
                    $.get("views/" + tab.tpl + ".html", function(template) {
                        $tvc.html(template);
                        var el = $tvc.get(0);
                        ko.applyBindings(data, el);
                        $tvc.fadeIn();
                        console.log("showTab finished");
                    });
                }
            });
        };

        self.showPagedTab = function(tab) {
            setTabSelection(tab);
            console.log("showTabPagedDataset running");
            var $tvc = $("#tabViewContainer");
            $tvc.hide();
            $.get("views/" + tab.tpl + ".html", function(template) {
                $tvc.html(template);
                var el = $tvc.get(0);
                var pageSize = 100;
                self.pagedDataset = new PagedDataset();
                self.pagedDataset.init(self.parent.UrlKeys, tab, tab.RecordCount, pageSize);
                ko.applyBindings(self.pagedDataset, el);
                $tvc.fadeIn();
                console.log("showTab finished");
            });
        };

        function setTabSelection(tab) {
            self.Overview.isSelected('');
            self.Counties.isSelected('');
            self.Commodities.isSelected('');
            self.Companies.isSelected('');
            tab.isSelected('active');
        };

        /***********************************/
        /* Pairing methods with tabs */

        self.showOverview = function() {
            console.log("showOverview running");
            self.showTab(self.Overview);
        };

        self.showCounties = function() {
            console.log("showCounties running");
            self.showPagedTab(self.Counties);
        };

        self.showCommodities = function() {
            console.log("showCommodities running");
            self.showPagedTab(self.Commodities);
        };

        self.showCompanies = function() {
            console.log("showCompanies running");
            self.showPagedTab(self.Companies);
        };

        /*********************************/
        /* The tab objects */

        self.Overview = {
            tpl : null,
            GetData : null,
            Show : self.showOverview,
            isSelected : ko.observable()
        };

        self.Counties = {
            tpl : 'tab-gridviews/County-GridView',
            GetData : null,
            Show : self.showCounties,
            isSelected : ko.observable(),
            RecordCount : 0
        };

        self.Commodities = {
            tpl : 'tab-gridviews/Commodity-GridView',
            GetData : null,
            Show : self.showCommodities,
            isSelected : ko.observable(),
            RecordCount : 0
        };

        self.Companies = {
            tpl : 'tab-gridviews/Company-GridView',
            GetData : null,
            Show : self.showCompanies,
            isSelected : ko.observable(),
            RecordCount : 0
        };

        /**************************************/
        /* Public interface */
        return {
            Overview : self.Overview,
            Counties : self.Counties,
            Commodities : self.Commodities,
            Companies : self.Companies
        };

    }

    return (ITabs);

});
