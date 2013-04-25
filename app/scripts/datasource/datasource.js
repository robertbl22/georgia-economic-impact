define([], function() {"use strict";

    /***********************************/
    /* STATE */

    var State = {
        stateData : null,
        countiesData : null,
        commoditiesData : null,
        companiesData : null,
        GetState : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetState";
            AjaxPost(url, '{}', this.stateData, callback);
        },
        GetCounties : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetAllCounties";
            AjaxPost(url, "{}", this.countiesData, callback);
        },
        GetCommodities : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetAllCommodities";
            var pageIndex = '{"PageIndex":0}';
            AjaxPost(url, pageIndex, this.commoditiesData, callback);
        },
        GetCompanies : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetAllCompanies";
            var pageIndex = '{"PageIndex":0}';
            AjaxPost(url, pageIndex, this.companiesData, callback);
        }
    };

    /***********************************/
    /* REGION */

    var Region = {
        regionData : null,
        GetRegion : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetRegion";
            //TODO: get urlkey from url
            var urlKey = '{"RegionUrlKey" : "region1"}';
            AjaxPost(url, urlKey, this.regionData, callback);
        }
    };

    /***********************************/
    /* COUNTIES */

    var County = {
        countyData : null,
        companiesData : null,
        commoditiesData : null,
        GetCounty : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCounty";
            //TODO: get urlkey from url
            var urlKey = '{"CountyUrlKey" : "chatham-county"}';
            AjaxPost(url, urlKey, this.countyData, callback);
        },
        GetCommodities : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCommoditiesByCounty";
            //TODO: get urlkey from url
            var urlKey = '{"CountyUrlKey" : "chatham-county"}';
            AjaxPost(url, urlKey, this.commoditiesData, callback);
        },
        GetCompanies : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCompaniesByCounty";
            //TODO: get urlkey from url
            var urlKey = '{"CountyUrlKey" : "chatham-county"}';
            AjaxPost(url, urlKey, this.companiesData, callback);
        }
    };

    /***********************************/
    /* COMMODITIES */

    var Commodity = {
        commodityData : null,
        companiesData : null,
        countiesData : null,
        GetCommodity : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCommodity";
            //TODO: get urlkey from url
            var urlKey = '{"CommodityUrlKey" : "silver-bars"}';
            AjaxPost(url, urlKey, this.commodityData, callback);
        },
        GetCounties : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCountiesByCommodity";
            //TODO: get urlkey from url
            var urlKey = '{"CommodityUrlKey" : "silver-bars"}';
            AjaxPost(url, urlKey, this.countiesData, callback);
        },
        GetCompanies : function(callback) {
            var url = "/dnn614/DesktopModules/EconomicImpact/WebService.asmx/GetCompaniesByCommodity";
            //TODO: get urlkey from url
            var urlKey = '{"CommodityUrlKey" : "silver-bars"}';
            AjaxPost(url, urlKey, this.companiesData, callback);
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

    function AjaxPost(url, data, datacache, callback) {
        if (!datacache) {
            $.ajax({
                type : "POST",
                url : "http://localhost" + url,
                data : data,
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(msg) {
                    var data = JSON.parse(msg.d);
                    console.log(data);
                    datacache = data;
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
