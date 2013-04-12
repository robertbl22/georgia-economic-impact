define(["viewmodel"], function(vm) {"use strict";

    return $.sammy(function() {
        
        var self = this;

        self.get('#/', function() {
        });

        self.get(/^\/#\/state\/{0,1}$/, function(context) {
            console.log("Running state route");
            vm.ShowView(vm.StateView);
        });

        self.get('#/state/counties', function() {
        });

        self.get('#/state/commodities', function() {
        });

        self.get(/^\/#\/state\/(region\d{1,2})\/{0,1}$/, function() {
            console.log("Running region route");
            console.log(this.params['splat'])
            vm.ShowView(vm.RegionView);
        });

    });

});
