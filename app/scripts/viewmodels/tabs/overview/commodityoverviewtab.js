define(["viewmodels/tabs/overview/overviewtab"], function(OverviewTab) {"use strict";

    function CommodityOverviewTab(setTabSelection, parentView) {
        var self = this;
        OverviewTab.call(self, setTabSelection, parentView);

        self.ViewType = "CommodityOverviewTab";
        self.CreateCharts = createCharts;

        function createCharts($ParentContainer, data) {
            /*google.load("visualization", "1", {
                packages : ["corechart"],
                "callback" : drawCharts
            });*/

            //function drawCharts() {
                //drawTop5Chart($ParentContainer.find('#Top5ImportsChart').get(0), data.TopImports, "ImportEstValue");
                //drawTop5Chart($ParentContainer.find('#Top5ExportsChart').get(0), data.TopExports, "ExportEstValue");
                //drawImportVsExportChart($ParentContainer, data);
                //drawPercentOfStateChart($ParentContainer, data);
            //};
            return true;
        };

/*
        function drawTop5Chart(el, data, valueColId) {
            var lblCol = ["Value"];
            var valCol = ["Commodity"];
            for (var i = 0, j = data.length; i < j; i++) {
                lblCol.push($.normalizeWhitespace(data[i].Name));
                valCol.push(data[i][valueColId]);
            };
            var d = [lblCol, valCol];
            var data = google.visualization.arrayToDataTable(d);
            //console.log(d);
            drawBarChart(el, data);
        };
        */

/*
        function drawImportVsExportChart($ParentContainer, data) {
            var r1 = ["Direction", "Total Value"];
            var r2 = ["Import Est. Value", data.ImportEstValue];
            var r3 = ["Export Est. Value", data.ExportEstValue];
            var d = [r1, r2, r3];
            var dataTable = google.visualization.arrayToDataTable(d)

            var el = $ParentContainer.find('#ImportVsExportChart').get(0);
            drawPie(el, dataTable);
        };
        */
/*
        function drawPercentOfStateChart($ParentContainer, data) {
            var r1 = ["Direction", "Total Value"];
            var r2 = ["Commodity Est. Value", data.TotalEstValue];
            var r3 = ["State Est. Value", data.State.TotalEstValue];
            var d = [r1, r2, r3];
            var dataTable = google.visualization.arrayToDataTable(d)

            var el = $ParentContainer.find('#PercentOfStateChart').get(0);
            drawPie(el, dataTable);
        };

        function drawBarChart(el, dataTable) {
            var options = {
                axisTitlesPosition : "in",
                chartArea : {
                    left : 10,
                    top : 10,
                    height : "80%"
                },
                bar : {
                    groupWidth : "80%"
                },
                hAxis : {
                    format : '$#,###',
                    gridlines : {
                        count : 6
                    }
                },
                vAxis : {
                    textPosition : "none"
                },
                colors : self.BluePalette
            };
            var chart = new google.visualization.BarChart(el);
            chart.draw(dataTable, options);
        };

        function drawPie(el, dataTable) {
            var options = {
                chartArea : {
                    left : 0,
                    top : 10,
                    width : "100%",
                    height : "100%"
                },
                colors : [self.BluePalette[2], self.BluePalette[3]]
            };
            var chart = new google.visualization.PieChart(el);
            chart.draw(dataTable, options);
        };
        */

        return (self);
    }

    // Create inheritance
    if (Object.create) {
        CommodityOverviewTab.prototype = Object.create(OverviewTab.prototype);
    }
    return (CommodityOverviewTab);

});
