define([], function() {"use strict";

    /* Constructor */
    function SearchControls() {
        var self = this;

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

    }

    return (SearchControls);

});
