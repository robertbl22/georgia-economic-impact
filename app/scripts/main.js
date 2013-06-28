require.config({
    paths : {},
    shim: {}
});

require(['routes/router'], function(router) {"use strict";

    $("#GPALogoBanner").delay(50).slideDown();
    
    //infuser.defaults.templateSuffix = ".tmpl.html";
    infuser.defaults.templateUrl = "/templates";
    $(".external-link").click(function(e){
       e.stopImmediatePropagation(); 
    });

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
            router.raise_errors = true;
            router.run();
        }
    }]);

});
