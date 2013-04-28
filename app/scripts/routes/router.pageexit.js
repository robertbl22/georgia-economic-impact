define([], function() {"use strict";

    /*
    var SplashPageExit = function(callback) {
    console.log("[" + self.ViewType + "] about to animate");

    //var left = $('.big-slogan').offset().left;
    //var width = $('.big-slogan').width();

    var cb1 = function() {
    $("#SearchControl").fadeOut(cb2);
    };
    var cb2 = function() {
    $(".splash h4").slideUp(cb3);
    };
    var cb3 = function() {
    $(".big-slogan").css({
    //left : left,
    position : 'absolute'
    }).animate({
    "top" : -150
    }, cb4);
    };
    var cb4 = function() {
    $(".splash").fadeOut(callback);
    };

    cb1();

    console.log("[" + self.ViewType + "] animation done");
    };
    */

    // Private variable
    /*
    var cpe;
    var currentPageExit = function(pageExit) {
    if (pageExit)
    cpe = pageExit;
    return cpe;
    };
    */

    /***********************************/
    /* Sammyjs helper plugin */

    /*
     var PageExitHelper = function(app) {
     console.log("[" + self.ViewType + "] PageExitHelper running");
     app.helper("Exit", function() {
     console.log("[" + self.ViewType + "] Exit running");
     if (this.CurrentPageExit) {
     console.log("[" + self.ViewType + "] CurrentPageExit exists");
     var tmp = this.CurrentPageExit();
     this.CurrentPageExit = null;
     tmp(callback);
     console.log(this.CurrentPageExit);
     } else {
     console.log("[" + self.ViewType + "] CurrentPageExit does not exist");
     callback();
     }
     });
     }

     return PageExitHelper;
     */

    var PageExit = function(app) {
        self.ViewType = "Router";

        console.log("[" + self.ViewType + "] PageExit running");

        var exit = function(callback) {
            console.log("[" + self.ViewType + "] exit running");
            if (app.CurrentPageExit != null) {
                console.log("[" + self.ViewType + "] CurrentPageExit exists");
                var tmp = app.CurrentPageExit;
                app.CurrentPageExit = null;
                tmp(callback);
                console.log("[" + self.ViewType + "] this.CurrentPageExit ---vvv");
                console.log(this.CurrentPageExit);
            } else {
                console.log("[" + self.ViewType + "] CurrentPageExit does not exist");
                callback();
            }
        };

        var SplashPageExit = function(callback) {
            console.log("[" + self.ViewType + "] about to animate");

            //var left = $('.big-slogan').offset().left;
            //var width = $('.big-slogan').width();

            var cb1 = function() {
                $("#SearchControl").fadeOut(cb2);
            };
            var cb2 = function() {
                $(".splash h4").slideUp(cb3);
            };
            var cb3 = function() {
                $(".big-slogan").css({
                    //left : left,
                    position : 'absolute'
                }).animate({
                    "top" : -150
                }, cb4);
            };
            var cb4 = function() {
                $(".splash").fadeOut(callback);
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
