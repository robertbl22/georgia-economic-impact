define(["viewmodels/tabs/itab"], function(ITab) {"use strict";

    function OverviewTab(setTabSelection, parentView) {
        var self = this;
        ITab.call(self, setTabSelection, parentView);

        self.ViewType = "OverviewTab";
        self.tpl = null;
        self.isSelected = ko.observable();
        self.CreateCharts = null;
        self.BluePalette = ["#00274D", "#005B82", "#007DB1", "#88CBDF", "#C5E3EB"];
        self.GrayPalette = ["#15252F", "#425968", "#95A0A9", "#C5E3EB"];
        self.OrangePalette = ["#B06E0E", "#E68F20", "#FFDE65"];

        //console.log("[" + parentView.ViewType + "].[" + self.ViewType + "] instantiated");

        /*************************************/
        /* Methods */

        self.Show = function() {
            //console.log("[" + self.ViewType + "] Show running");
            self.showTab();
        };

        self.showTab = function() {
            self.setTabSelection(self);
            //console.log("[" + self.ViewType + "] showTab running");
            var $ParentContainer = $("#TabViewContainer");
            self.AjaxSpinner.Mask($ParentContainer);
            //$ParentContainer.hide();
            self.GetData(dataParams($ParentContainer));
        };

        var dataParams = function($ParentContainer) {
            return {
                "UrlKeys" : self.parentView.UrlKeys,
                "Callback" : function(data) {
                    $.get("templates/" + self.tpl + ".html", function(template) {
                        $ParentContainer.html(template);
                        var el = $ParentContainer.get(0);
                        ko.applyBindings(data, el);
                        //self.AjaxSpinner.Unmask($ParentContainer);
                        $ParentContainer.hide().fadeIn();
                        
                        self.CreateCharts($ParentContainer, data);
                        
                        //console.log("[" + self.ViewType + "] showTab finished");
                    });
                }
            }
        };

        self.getBarChartWidth = function() {
            //return $(el).parents(".span4").width() - 20;
            return $(".span7").width();
        };

        self.getPieChartWidth = function() {
            //return $(el).parents(".span4").width() - 20;
            return $(".span4").width() - 20;
        };

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        OverviewTab.prototype = Object.create(ITab.prototype);
    }
    return (OverviewTab);

});
