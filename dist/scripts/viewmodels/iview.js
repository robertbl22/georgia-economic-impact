define(["datasource/datasource"], function(datasource) {"use strict";

    /* Constructor */
    function IView() {
        var self = this;
        self.viewElement = null;

        self.showOverview = function() {
            console.log("showOverview running");
            self.showTab(self.Tabs.Overview);
        };

        self.showCounties = function() {
            console.log("showCounties running");
            self.showTab(self.Tabs.Counties);
        };

        self.showCommodities = function() {
            console.log("showCommodities running");
            self.showTab(self.Tabs.Commodities);
        };

        self.showCompanies = function() {
            console.log("showCompanies running");
            self.showTab(self.Tabs.Companies);
        };

        self.Show = function(callback) {
            console.log("Show running");
            document.title = self.Title;
            self.LoadSingletonView(function() {
                console.log("Show finished");
                if (callback) {
                    callback();
                }
            });

        };

        self.LoadSingletonView = function(Show_Callback) {
            var $viewContainer = $("#viewContainer");
            if (self.viewElement && self.viewElement.innerHTML != "") {
                /*****************/
                /* View exists   */
                console.log("self.viewElement exists");
                var el = $viewContainer.get(0).firstChild;
                if (!el || el.id !== self.ViewElementId) {
                    /********************/
                    /* Not current view */
                    console.log("self.viewElement not current view");
                    $viewContainer.hide();
                    //TODO: Ajax spinner
                    $viewContainer.find("#tabViewContainer").empty();
                    $viewContainer.html(self.viewElement);
                    $viewContainer.fadeIn(Show_Callback);
                } else {
                    /*******************/
                    /* Is current view */
                    console.log("self.viewElement is current view");
                    Show_Callback();
                }
            } else {
                /***********************/
                /* View does not exist */
                $viewContainer.hide();
                //TODO: Ajax spinner
                $viewContainer.find("#tabViewContainer").empty();
                self.LoadView($viewContainer, function(el) {
                    self.viewElement = el;
                    $viewContainer.fadeIn(Show_Callback)
                });
            }
        };

        self.LoadView = function($viewContainer, LoadSingletonView_Callback) {
            this.GetData(function(data) {
                $.get("views/" + self.tpl + ".html", function(template) {
                    $viewContainer.html(template);
                    var el = $viewContainer.get(0).firstChild;
                    data.Tabs = self.Tabs;
                    ko.applyBindings(data, el);
                    LoadSingletonView_Callback(el);
                });
            });
        };

        self.showTab = function(tab) {
            setTabSelection(tab);
            console.log("showTab running");
            var $tvc = $("#tabViewContainer");
            $tvc.hide();
            tab.GetData(function(data) {
                $.get("views/" + tab.tpl + ".html", function(template) {
                    $tvc.html(template);
                    var el = $tvc.get(0);
                    ko.applyBindings(data, el);
                    $tvc.fadeIn();
                    console.log("showTab finished");
                });
            });
        };

        function setTabSelection(tab) {
            self.Tabs.Overview.isSelected('');
            self.Tabs.Counties.isSelected('');
            self.Tabs.Commodities.isSelected('');
            self.Tabs.Companies.isSelected('');
            tab.isSelected('active');
        };

        self.Tabs = {
            Overview : {
                tpl : null,
                GetData : null,
                Show : self.showOverview,
                isSelected : ko.observable()
            },
            Counties : {
                tpl : 'County-GridView',
                GetData : datasource.GetCounties,
                Show : self.showCounties,
                isSelected : ko.observable()
            },
            Commodities : {
                tpl : 'Commodity-GridView',
                GetData : datasource.GetCommodities,
                Show : self.showCommodities,
                isSelected : ko.observable()
            },
            Companies : {
                tpl : 'Company-GridView',
                GetData : datasource.GetCompanies,
                Show : self.showCompanies,
                isSelected : ko.observable()
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
