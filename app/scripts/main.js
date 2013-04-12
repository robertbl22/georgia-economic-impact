require.config({
    shim : {
    },

    paths : {
        jquery : 'vendor/jquery.min',
        ko : '//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js'
    }
});

require(['viewmodel', 'router'], function(vm, router) {"use strict";

    $("#GPALogoBanner").delay(50).slideDown();
    $("#LocationPicker").fadeIn("slow");

    //infuser.defaults.templateSuffix = ".tmpl.html";
    infuser.defaults.templateUrl = "/views";

    Modernizr.load([{
        test : Modernizr.input.placeholder,
        nope : '//cdnjs.cloudflare.com/ajax/libs/jquery-placeholder/2.0.7/jquery.placeholder.min.js',
        complete : function() {
            if (!Modernizr.input.placeholder) {
                $('input, textarea').placeholder();
            }
        }
    }, {
        test : window.JSON,
        nope : '//cdnjs.cloudflare.com/ajax/libs/json3/3.2.4/json3.min.js',
        complete : function() {
            ko.applyBindings(vm);
            router.raise_errors = true;
            router.run();
        }
    }]);
    
});
