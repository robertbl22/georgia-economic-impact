define(["datasource"], function(datasource) {"use strict";

    var currentTabView = "";

    var tabs = {
        Overview : {
            tpl : 'Region-Overview',
            GetData : datasource.GetRegion
        }
    }

    return {
        Title : "Economic Region 12",
        tpl : 'Region-View',
        GetData : datasource.GetRegion
    };

});
