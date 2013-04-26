define(["datasource/datasource", "viewmodels/itabs"], function(datasource, ITabs) {"use strict";

    /* Constructor */
    function IView() {
        var self = this;

        self.ViewType = "IView";
        self.IdKey = '';
        self.viewElement = null;
        self.CurrentViewID = "";
        self.GetData = null;
        self.UrlKeys = {};
        self.Tabs = new ITabs(self);

        /**************************************/
        /* Display logic */

        self.Show = function(params) {
            console.log("Show running");
            document.title = self.Title;
            self.UrlKeys = params.UrlKeys;
            self.LoadSingletonView(function() {
                console.log("Show finished");
                if (params.Callback) {
                    params.Callback();
                }
            });

        };

        self.LoadSingletonView = function(Show_Callback) {
            var $viewContainer = $("#viewContainer");
            console.log("LoadSingletonView running");

            /***************************************************/
            /* Is view cached? Is it the one that we want? */
            if (self.viewElement && self.viewElement.innerHTML != "" && self.viewElement.ViewId === self.UrlKeys[self.IdKey]) {
                console.log("A view is cached, and is the one we want.")
                // Get the current view from the DOM
                var el = $viewContainer.get(0).firstChild;

                // Are they the same?
                if (el && el.id === self.ViewType) {

                    /********************************/
                    /* This is the current view     */
                    console.log("This view is already the current view.");
                    Show_Callback();

                } else {

                    /******************************************/
                    /* Not current view, make it the current */
                    console.log("Not current view, make it the current");
                    $viewContainer.hide();
                    //TODO: Ajax spinner
                    $viewContainer.find("#tabViewContainer").empty();
                    $viewContainer.html(self.viewElement);
                    $viewContainer.fadeIn(Show_Callback);

                }
            } else {

                /***********************************/
                /* View is not cached. Create it. */
                $viewContainer.hide();
                //TODO: Ajax spinner
                $viewContainer.find("#tabViewContainer").empty();
                self.LoadView($viewContainer, function(el) {
                    el.ViewClassName = self.constructor.name;
                    el.ViewId = self.UrlKeys[self.IdKey];
                    self.viewElement = el;
                    $viewContainer.fadeIn(Show_Callback)
                });
            }
        };

        self.LoadView = function($viewContainer, LoadSingletonView_Callback) {
            this.GetData({
                "UrlKeys" : self.UrlKeys,
                "Callback" : function(data) {
                    $.get("views/" + self.tpl + ".html", function(template) {
                        $viewContainer.html(template);
                        var el = $viewContainer.get(0).firstChild;
                        data.Tabs = self.Tabs;
                        ko.applyBindings(data, el);
                        LoadSingletonView_Callback(el);
                    });
                }
            });
        };

        /**************************************/
        /* Public interface */
        return {
            Title : "Untitled View",
            tpl : "",
            GetData : self.GetData,
            Show : self.Show,
            Tabs : self.Tabs
        };
    }

    return (IView);

});
