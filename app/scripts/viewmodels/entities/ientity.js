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
        self.Title = "";
        self.AjaxSpinner = new UserControls.AjaxSpinner();

        /**************************************/
        /* Public Methods */

        self.Show = function(Router_params) {
            console.log("[" + self.ViewType + "] .Show() running");
            self.UrlKeys = Router_params.UrlKeys;
            self.LoadSingletonView(function() {
                console.log("[" + self.ViewType + "] .Show() finished");
                if (Router_params.Callback) {
                    Router_params.Callback();
                }
            });

        };

        /*************************************/
        /* Private Methods */

        self.LoadSingletonView = function(self_Show_Callback) {
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
                    self_Show_Callback();

                } else {

                    /******************************************/
                    /* Not current view, make it the current */
                    console.log("[" + self.ViewType + "] Not current view, make it the current");
                    $ParentContainer.hide();
                    $ParentContainer.find("#TabViewContainer").empty();
                    $ParentContainer.html(self.viewElement);
                    $ParentContainer.hide().fadeIn(self_Show_Callback);
                    document.title = self.Title;
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
                    $ParentContainer.hide().fadeIn(self_Show_Callback)
                });
            }
        };

        self.LoadView = function($ParentContainer, self_LoadSingletonView_Callback) {
            this.GetData({
                "UrlKeys" : self.UrlKeys,
                "Callback" : function(data) {
                    $.get("templates/" + self.tpl + ".html", function(template) {
                        $ParentContainer.html(template);
                        var el = $ParentContainer.get(0).firstChild;
                        data.Tabs = self.Tabs;
                        if (data.Name && data.Name != "") {
                            document.title = data.Name;
                            self.Title = data.Name;
                        }
                        ko.applyBindings(data, el);
                        //self.AjaxSpinner.Unmask($ParentContainer);
                        self_LoadSingletonView_Callback(el);
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
