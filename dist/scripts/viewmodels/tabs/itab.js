define(["viewmodels/ui-controls/usercontrols"], function(UserControls) {"use strict";

    /* Constructor */
    function ITab(parent) {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "ITab";
        self.parent = parent;
        var AjaxSpinner = new UserControls.AjaxSpinner();

        /***********************************/
        /* Public Methods */

        self.showTab = function(tab) {
            setTabSelection(tab);
            console.log("[" + self.ViewType + "] showTab running");
            var $ParentContainer = $("#TabViewContainer");
            AjaxSpinner.Mask($ParentContainer);
            //$ParentContainer.hide();
            tab.GetData({
                "UrlKeys" : self.parent.UrlKeys,
                "Callback" : function(data) {
                    $.get("templates/" + tab.tpl + ".html", function(template) {
                        $ParentContainer.html(template);
                        var el = $ParentContainer.get(0);
                        ko.applyBindings(data, el);
                        //AjaxSpinner.Unmask($ParentContainer);
                        $ParentContainer.hide().fadeIn();
                        console.log("[" + self.ViewType + "] showTab finished");
                    });
                }
            });
        };

        self.showPagedTab = function(tab) {
            setTabSelection(tab);
            console.log("[" + self.ViewType + "] showTabPagedDataset running");
            var $ParentContainer = $("#TabViewContainer");
            AjaxSpinner.Mask($ParentContainer);
            //$ParentContainer.hide();
            $.get("templates/" + tab.tpl + ".html", function(template) {
                $ParentContainer.html(template);
                var el = $ParentContainer.get(0);
                var pageSize = 100;
                self.pagedDataset = new UserControls.PagedDataset();
                self.pagedDataset.init(self.parent.UrlKeys, tab, tab.RecordCount, pageSize);
                ko.applyBindings(self.pagedDataset, el);
                //AjaxSpinner.Unmask($ParentContainer);
                $ParentContainer.hide().fadeIn();
                console.log("[" + self.ViewType + "] showTab finished");
            });
        };

        /*************************************/
        /* Private Methods */

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
            console.log("[" + self.ViewType + "] showOverview running");
            self.showTab(self.Overview);
        };

        self.showCounties = function() {
            console.log("[" + self.ViewType + "] showCounties running");
            self.showPagedTab(self.Counties);
        };

        self.showCommodities = function() {
            console.log("[" + self.ViewType + "] showCommodities running");
            self.showPagedTab(self.Commodities);
        };

        self.showCompanies = function() {
            console.log("[" + self.ViewType + "] showCompanies running");
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
            tpl : 'tab-gridviews/CountyGridView',
            GetData : null,
            Show : self.showCounties,
            isSelected : ko.observable(),
            RecordCount : 0
        };

        self.Commodities = {
            tpl : 'tab-gridviews/CommodityGridView',
            GetData : null,
            Show : self.showCommodities,
            isSelected : ko.observable(),
            RecordCount : 0
        };

        self.Companies = {
            tpl : 'tab-gridviews/CompanyGridView',
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

    return (ITab);

});
