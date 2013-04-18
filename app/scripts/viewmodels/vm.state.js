define(["datasource"], function(datasource) {"use strict";

    var currentTabView = "";

    var tabs = {
        Overview : {
            tpl : 'State-Overview',
            GetData : datasource.GetState
        },
        Counties : {
            tpl : 'County-GridView',
            GetData : datasource.GetCounties
        },
        Commodities : {
            tpl : 'Commodity-GridView',
            GetData : datasource.GetCommodities
        }
    }

    return {
        
        Title : "The State of Georgia",
        Tabs : tabs,
        GetData : datasource.GetState,
        tpl : 'State-View'
        
        //tplOverview : 'State-Overview',
        //tplCounties : 'County-GridView',
        //tplCommodity : 'Commodity-GridView',
        //GetCommoditiesData : datasource.GetCommodities,
        //GetCountiesData : datasource.GetCounties
    };

});
