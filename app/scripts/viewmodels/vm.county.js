define(["datasource"], function(datasource) {"use strict";

    var showTab = function(tabName) {
        console.log("showTab running 2");
    };

    return {
        Title : "Chatham County",
        tpl : 'County-View',
        GetData : datasource.GetCounty
    };

});
