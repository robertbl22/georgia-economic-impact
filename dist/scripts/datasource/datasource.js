define([], function() {"use strict";

    /***********************************/
    /* STATE */

    var State = {
        stateData : null,
        countiesData : null,
        commoditiesData : null,
        companiesData : null,
        GetState : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetState";
            var event = {
                type : "state_data_loaded"
            }
            CachedAjaxPost(url, params.UrlKeys, this.stateData, params.Callback, event);
        },
        GetCounties : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetAllCounties";
            CachedAjaxPost(url, params.UrlKeys, this.countiesData, params.Callback);
        },
        GetCommodities : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetAllCommodities";
            CachedAjaxPost(url, params.UrlKeys, this.commoditiesData, params.Callback);
        },
        GetCompanies : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetAllCompanies";
            CachedAjaxPost(url, params.UrlKeys, this.companiesData, params.Callback);
        }
    };

    /***********************************/
    /* REGION */

    var Region = {
        regionData : null,
        countiesData : null,
        commoditiesData : null,
        GetRegion : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetRegion";
            var event = {
                type : "region_data_loaded"
            }
            CachedAjaxPost(url, params.UrlKeys, this.regionData, params.Callback, event);
        },
        GetCommodities : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCommoditiesByRegion";
            CachedAjaxPost(url, params.UrlKeys, this.commoditiesData, params.Callback);
        },
        GetCounties : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCountiesByRegion";
            CachedAjaxPost(url, params.UrlKeys, this.countiesData, params.Callback);
        }
    };

    /***********************************/
    /* COUNTIES */

    var County = {
        countyData : null,
        companiesData : null,
        commoditiesData : null,
        GetCounty : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCounty";
            var event = {
                type : "county_data_loaded"
            }
            CachedAjaxPost(url, params.UrlKeys, this.countyData, params.Callback, event);
        },
        GetCommodities : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCommoditiesByCounty";
            CachedAjaxPost(url, params.UrlKeys, this.commoditiesData, params.Callback);
        },
        GetCompanies : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCompaniesByCounty";
            CachedAjaxPost(url, params.UrlKeys, this.companiesData, params.Callback);
        },
        Search : function(searchterm, Callback) {
            if (Callback)
                Callback("region1", "chatham-county");
        },
        GetTypeahead : function(searchterm, callback) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCountiesTypeahead";
            var postData = {
                'SearchTerm' : searchterm
            };
            if ($.trim(searchterm) != "") {
                AjaxPost(url, postData, callback, null);
            }
        },
        GetSearchPreview : function(searchterm, callback) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCountiesSearchPreview";
            var postData = {
                'SearchTerm' : searchterm
            };
            if ($.trim(searchterm) != "") {
                AjaxPost(url, postData, callback, null);
            }
        }
    };

    /***********************************/
    /* COMMODITIES */

    var Commodity = {
        commodityData : null,
        companiesData : null,
        countiesData : null,
        GetCommodity : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCommodity";
            var event = {
                type : "commodity_data_loaded"
            }
            CachedAjaxPost(url, params.UrlKeys, this.commodityData, params.Callback, event);
        },
        GetCounties : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCountiesByCommodity";
            CachedAjaxPost(url, params.UrlKeys, this.countiesData, params.Callback);
        },
        GetCompanies : function(params) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCompaniesByCommodity";
            CachedAjaxPost(url, params.UrlKeys, this.companiesData, params.Callback);
        },
        Search : function(searchterm, callback) {
            if (callback)
                callback(searchterm);
        },
        GetTypeahead : function(searchterm, callback) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCommoditiesTypeahead";
            var postData = {
                'SearchTerm' : searchterm
            };
            if ($.trim(searchterm) != "") {
                AjaxPost(url, postData, callback, null);
            }
        },
        GetSearchPreview : function(searchterm, callback) {
            var url = "DesktopModules/EconomicImpact/WebService.asmx/GetCommoditiesSearchPreview";
            var postData = {
                'SearchTerm' : searchterm
            };
            if ($.trim(searchterm) != "") {
                AjaxPost(url, postData, callback, null);
            }
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

    function CachedAjaxPost(url, postData, datacache, callback, event) {
        //console.log("[datasource] $.serializeJSON(postData) = " + $.serializeJSON(postData));
        if (!datacache) {
            var _decoratedCallback = function(data) {
                datacache = data;
                callback(data);
            };
            AjaxPost(url, postData, _decoratedCallback, event);
        } else {
            callback(datacache);
        }
    }

    function AjaxPost(url, postData, callback, event) {
        $.ajax({
            type : "POST",
            //url : "http://localhost/dnn614/" + url, /* DEVELOPMENT */
            url : "http://www.gaports.com/" + url, /* PRODUCTION */
            data : $.serializeJSON(postData),
            contentType : "application/json; charset=utf-8",
            dataType : "json",
            success : function(msg) {
                var data = JSON.parse(msg.d);
                //console.log("[datasource] AjaxPost was successful!");
                //datacache = data;

                if (event) {
                    event.LoadedData = data;
                    $.event.trigger(event);
                }

                //console.log("[" + self.ViewType + "] AjaxPost has notified listeners");

                callback(data);
            },
            error : function(msg) {
                //console.log("[datasource] Error! '" + msg + "'");
                //TODO: Handle ajax error condition
            }
        });
    }

});

