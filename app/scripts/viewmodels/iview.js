define(["datasource/datasource"], function(datasource) {"use strict";

    /* Private members */
    var showTab = function(tabset, tab, $viewContainer) {
        console.log("showTab running");
        tab.GetData(function(data) {
            $.get("views/" + tab.tpl + ".html", function(template) {
                var $tvc = $("#tabViewContainer");
                $tvc.hide().html(template)
                var el = $tvc.get(0);
                ko.applyBindings(data, el);
                $tvc.fadeIn();
                tabset.CurrentTab = tab;
                console.log("showTab finished");
            });
        });
    };
    
    /* Constructor */
    function IView() {
        var self = this;

        self.showOverview = function() {
            console.log("showOverview running");
            showTab(self.Tabs, self.Tabs.Overview, self.$viewContainer);
        };

        self.showCounties = function() {
            console.log("showCounties running");
            showTab(self.Tabs, self.Tabs.Counties, self.$viewContainer);
        };

        self.showCommodities = function() {
            console.log("showCommodities running");
            showTab(self.Tabs, self.Tabs.Commodities, self.$viewContainer);
        };

        self.showCompanies = function() {
            console.log("showCompanies running");
            showTab(self.Tabs, self.Tabs.Companies, self.$viewContainer);
        };
        
        //self.$viewContainer = null;

        self.Show = function(callback) {
            console.log("Show running");
            //var self = this;
            /*
             if (currentView !== "undefined" && currentView === self) {
             console.log("currentView exists, do nothing");
             if (callback) {
             callback();
             }
             return self;
             }
             currentView = self;
             */
            this.GetData(function(data) {
                document.title = self.Title;
                $.get("views/" + self.tpl + ".html", function(template) {
                    var $vc = $("#viewContainer");
                    $vc.hide().html(template);
                    var el = $vc.get(0);
                    ko.applyBindings(data, el);
                    $vc.fadeIn(function() {
                        console.log("Show finished");
                        //self.$viewContainer = $vc;
                        //console.log(self.$viewContainer);
                        if (callback) {
                            callback();
                        }
                    });
                });
            });
        };

        self.Tabs = {
            CurrentTab : this.Overview,
            Overview : {
                tpl : null,
                GetData : null,
                Show : self.showOverview
            },
            Counties : {
                tpl : 'County-GridView',
                GetData : datasource.GetCounties,
                Show : self.showCounties
            },
            Commodities : {
                tpl : 'Commodity-GridView',
                GetData : datasource.GetCommodities,
                Show : self.showCommodities
            },
            Companies : {
                tpl : 'Company-GridView',
                GetData : datasource.GetCompanies,
                Show : self.showCompanies
            }
        }

        return {
            Title : "Untitled View",
            tpl : "",
            GetData : self.GetData,
            Show : self.Show,
            Tabs : self.Tabs
        };
    }

    return (IView);

});
