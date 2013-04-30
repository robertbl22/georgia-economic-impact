define(["datasource/datasource", "viewmodels/tabs/tabs", "viewmodels/ui-controls/usercontrols"], function(datasource, Tabs, UserControls) {"use strict";

    /* Constructor */
    function IEntity() {
        var self = this;

        /*************************************/
        /* Private Properties */

        self.ViewType = "IEntity";
        self.IdKey = '';
        self.viewElement = null;
        self.CurrentViewID = "";
        self.GetData = null;
        self.UrlKeys = {};
        self.Tabs = new Tabs.Tabs(self);
        self.datasource = datasource;
        self.AjaxSpinner = new UserControls.AjaxSpinner();;

        /**************************************/
        /* Public Methods */

        self.Show = function(params) {
            console.log("[" + self.ViewType + "] .Show() running");
            document.title = self.Title;
            self.UrlKeys = params.UrlKeys;
            self.LoadSingletonView(function() {
                console.log("[" + self.ViewType + "] .Show() finished");
                if (params.Callback) {
                    params.Callback();
                }
            });

        };

        /*************************************/
        /* Private Methods */

        self.LoadSingletonView = function(Show_Callback) {
            var $ParentContainer = $("#ViewContainer");
            console.log("[" + self.ViewType + "] .LoadSingletonView() running");

            /***************************************************/
            /* Is view cached? Is it the one that we want? */
            if (self.viewElement && self.viewElement.innerHTML != "" && self.viewElement.ViewId === self.UrlKeys[self.IdKey]) {
                console.log("[" + self.ViewType + "] A view is cached, and is the one we want.")
                // Get the current view from the DOM
                var el = $ParentContainer.get(0).firstChild;

                // Are they the same?
                if (el && el.id === self.ViewType) {

                    /********************************/
                    /* This is the current view     */
                    console.log("[" + self.ViewType + "] This view is already the current view.");
                    Show_Callback();

                } else {

                    /******************************************/
                    /* Not current view, make it the current */
                    console.log("[" + self.ViewType + "] Not current view, make it the current");
                    $ParentContainer.hide();
                    $ParentContainer.find("#TabViewContainer").empty();
                    $ParentContainer.html(self.viewElement);
                    $ParentContainer.hide().fadeIn(Show_Callback);

                }
            } else {

                /***********************************/
                /* View is not cached. Create it. */
                self.AjaxSpinner.Mask($ParentContainer);
                //$ParentContainer.hide();
                //$ParentContainer.find("#TabViewContainer").empty();
                self.LoadView($ParentContainer, function(el) {
                    el.ViewClassName = self.constructor.name;
                    el.ViewId = self.UrlKeys[self.IdKey];
                    self.viewElement = el;
                    $ParentContainer.hide().fadeIn(Show_Callback)
                });
            }
        };

        self.LoadView = function($ParentContainer, LoadSingletonView_Callback) {
            this.GetData({
                "UrlKeys" : self.UrlKeys,
                "Callback" : function(data) {
                    $.get("templates/" + self.tpl + ".html", function(template) {
                        $ParentContainer.html(template);
                        var el = $ParentContainer.get(0).firstChild;
                        data.Tabs = self.Tabs;
                        ko.applyBindings(data, el);
                        //self.AjaxSpinner.Unmask($ParentContainer);
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

    return (IEntity);

});