define([], function() {"use strict";

    /***********************************/
    /* Sammyjs helper plugin */

    var PageExit = function(app) {
        self.ViewType = "Router";

        console.log("[" + self.ViewType + "] PageExit running");

        var exit = function(Router_Callback) {
            console.log("[" + self.ViewType + "] exit running");
            if (app.CurrentPageExit != null) {
                console.log("[" + self.ViewType + "] CurrentPageExit exists");
                app.CurrentPageExit(Router_Callback);
            } else {
                console.log("[" + self.ViewType + "] CurrentPageExit does not exist");
                Router_Callback();
            }
        };

        var SplashPageExit = function(Router_Callback) {
            console.log("[" + self.ViewType + "] about to animate");

            //var left = $('.big-slogan').offset().left;
            //var width = $('.big-slogan').width();

            app.CurrentPageExit = null;
            function cb1() {
                $(".search-tools").fadeOut('', cb2);
            };
            function cb2() {
                $(".big-message").slideUp('', cb3);
            };
            function cb3() {
                var bigslogan = $(".big-slogan");
                bigslogan.css({
                    //left : left,
                    position : 'absolute'
                });
                bigslogan.animate({
                    "top" : -150
                }, '', '', cb4);
            };
            function cb4() {
                $("#SplashView").fadeOut('', function() {
                    Router_Callback();
                });
            };
            cb1();

            console.log("[" + self.ViewType + "] animation done");
        };

        var currentPageExit = null;

        var helper = {
            SplashPageExit : SplashPageExit,
            CurrentPageExit : currentPageExit,
            Exit : exit
        };

        this.helpers(helper);
    };

    return PageExit;

});
