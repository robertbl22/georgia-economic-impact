define(["datasource"], function(datasource) {"use strict";

    return {
        Title : "Economic Region 12",
        tpl : 'Region-View',
        GetData : function(callback) {
            datasource.GetRegion(function(data) {
                callback(data)
            });
        }
    };

}); 