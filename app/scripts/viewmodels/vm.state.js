define(["datasource"], function(datasource) {"use strict";

    return {
        Title : "The State of Georgia",
        tpl : 'State-View',
        GetData : function(callback) {
            datasource.GetState(function(data) {
                callback(data)
            });
        }
        
        /*
        ,
        Overview : {
            Show : function(isVisible) {
                //showStateOverview(isVisible || true);
            }
        },
        Show : function(vm, isVisible) {

            datasource.GetState(function(data) {

                //document.title = 'The State of Georgia';
                var observableData = ko.observable(data);
                //vm.dataToUse(observableData);
                //vm.templateToUse('State-View');
                //$(".view").fadeIn();

            });
        }
        */
    };

});
