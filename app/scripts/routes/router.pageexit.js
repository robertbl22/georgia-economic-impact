define([], function() {"use strict";

/*
    var SplashPageExit = function(callback) {
        console.log("about to animate");

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

        console.log("animation done");
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
     console.log("PageExitHelper running");
     app.helper("Exit", function() {
     console.log("Exit running");
     if (this.CurrentPageExit) {
     console.log("CurrentPageExit exists");
     var tmp = this.CurrentPageExit();
     this.CurrentPageExit = null;
     tmp(callback);
     console.log(this.CurrentPageExit);
     } else {
     console.log("CurrentPageExit does not exist");
     callback();
     }
     });
     }

     return PageExitHelper;
     */

    var PageExit = function(app) {
        console.log("PageExit running");
        //n.Application
        console.log(this);
        //n.Application
        console.log(app);

        var exit = function(callback) {
            console.log("exit running");
            //context_prototype <-- __proto__.Exit
            console.log(this);
            //n.Application
            console.log(app);
            if (app.CurrentPageExit != null) {
                console.log("CurrentPageExit exists");
                var tmp = app.CurrentPageExit;
                app.CurrentPageExit = null;
                tmp(callback);
                console.log(this.CurrentPageExit);
            } else {
                console.log("CurrentPageExit does not exist");
                callback();
            }
        };

        var SplashPageExit = function(callback) {
            console.log("about to animate");

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

            console.log("animation done");
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
