define([], function() {"use strict";

    var self = this;

    /***********************************/
    /* STATE */

    var State = {
        stateData : null,
        countiesData : null,
        commoditiesData : null,
        companiesData : null,
        GetState : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetState";
            var event = {
                type : "state_data_loaded"
            }
            AjaxPost(url, params.UrlKeys, this.stateData, params.Callback, event);
        },
        GetCounties : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetAllCounties";
            AjaxPost(url, params.UrlKeys, this.countiesData, params.Callback);
        },
        GetCommodities : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetAllCommodities";
            AjaxPost(url, params.UrlKeys, this.commoditiesData, params.Callback);
        },
        GetCompanies : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetAllCompanies";
            AjaxPost(url, params.UrlKeys, this.companiesData, params.Callback);
        }
    };

    /***********************************/
    /* REGION */

    var Region = {
        regionData : null,
        GetRegion : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetRegion";
            AjaxPost(url, params.UrlKeys, this.regionData, params.Callback);
        }
    };

    /***********************************/
    /* COUNTIES */

    var County = {
        countyData : null,
        companiesData : null,
        commoditiesData : null,
        GetCounty : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCounty";
            var event = {
                type : "county_data_loaded"
            }
            AjaxPost(url, params.UrlKeys, this.countyData, params.Callback, event);
        },
        GetCommodities : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCommoditiesByCounty";
            AjaxPost(url, params.UrlKeys, this.commoditiesData, params.Callback);
        },
        GetCompanies : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCompaniesByCounty";
            AjaxPost(url, params.UrlKeys, this.companiesData, params.Callback);
        }
    };

    /***********************************/
    /* COMMODITIES */

    var Commodity = {
        commodityData : null,
        companiesData : null,
        countiesData : null,
        GetCommodity : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCommodity";
            var event = {
                type : "commodity_data_loaded"
            }
            AjaxPost(url, params.UrlKeys, this.commodityData, params.Callback, event);
        },
        GetCounties : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCountiesByCommodity";
            AjaxPost(url, params.UrlKeys, this.countiesData, params.Callback);
        },
        GetCompanies : function(params) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCompaniesByCommodity";
            AjaxPost(url, params.UrlKeys, this.companiesData, params.Callback);
        }
    };

    /***********************************/
    /* Public interface */

    return {
        State : State,
        Region : Region,
        County : County,
        Commodity : Commodity
    };

    /***********************************/
    /* Helper methods */

    function AjaxPost(url, postData, datacache, callback, event) {
        console.log($.serializeJSON(postData));
        if (!datacache) {
            $.ajax({
                type : "POST",
                url : "http://localhost" + url,
                data : $.serializeJSON(postData),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(msg) {
                    var data = JSON.parse(msg.d);
                    console.log("AjaxPost was successful!");
                    datacache = data;

                    if (event) {
                        event.LoadedData = data;
                        $.event.trigger(event);
                    }
                    
                    console.log("AjaxPost has notified listeners");

                    callback(data);
                },
                error : function(msg) {
                    console.log("Error! " + msg);
                    console.log(msg)
                    //TODO: Handle ajax error condition
                }
            });
        } else {
            callback(datacache);
        }
    }

});

