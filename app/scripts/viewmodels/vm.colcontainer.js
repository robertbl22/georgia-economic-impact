define(function() {"use strict";

    var searchView = {
        CommoditySearchTerm : ko.observable(),
        CountySearchTerm : ko.observable()
    };

    function ColContainerView() {
        console.log(this);
        var self = this;
        self.Show = function(callback) {
            console.log("ColContainerView.Show running");
            $.get("views/2-Col-Container.html", function(template) {
                var $cc = $("#ContentContainer");
                var el = $cc.get(0);
                $cc.hide().html(template);
                ko.applyBindings(searchView, $("#SearchTools").get(0));
                $cc.fadeIn(function() {
                    console.log("ColContainerView.Show finished");
                    // Mockup button behaviors
                    $("#SearchTools .btn:eq(0)").click(function(e) {
                        console.log("button 1 clicked");
                        e.preventDefault();
                        document.location = "#/commodities/aluminum-foil";
                    });
                    $("#SearchTools .btn:eq(1)").click(function(e) {
                        console.log("button 2 clicked");
                        e.preventDefault();
                        document.location = "#/state/region12/chatham-county";
                    });
                    
                    var $picker = $("#LocationPicker");
                    $picker.addClass("small").fadeIn().removeClass("small");

                    if (callback) {
                        callback();
                    }
                });
            });
        };
        return (self);
    };

    return (new ColContainerView());

});
