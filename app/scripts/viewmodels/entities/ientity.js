define(["viewmodels/iviewmodel", "datasource/datasource", "viewmodels/tabs/tabs", "viewmodels/usercontrols/usercontrols"], function(IViewModel, datasource, Tabs, UserControls) {"use strict";

    /* Constructor */
    function IEntity() {
        var self = this;
        IViewModel.call(self);

        /**************************************/
        /* Private Properties  */

        self.ViewType = "IEntity";
        self.IdKey = '';
        self.viewElement = null;
        self.CurrentViewID = "";
        self.GetData = null;
        self.UrlKeys = {};
        self.Tabs = Tabs;
        self.ParentContainerID = "#ViewContainer";
        self.SearchControl = new UserControls.SearchControl();

        /**************************************/
        /* Public Methods */

        // Overrides base
        self.Show = function(e) {
            $(self).trigger("beforeshow");
            console.log("[" + self.ViewType + "] .Show() running");
            self.$ParentContainer = $(self.ParentContainerID);
            console.log("[" + self.ViewType + "] self.$ParentContainer.length = " + self.$ParentContainer.length)
            document.title = self.Title;
            /*self.UrlKeys = e.data.UrlKeys;*/
            if (self.IsInView()) {
                $(self).trigger("shown");
            } else {
                self.HideContainer();
                self.Render(e);
            }
            console.log("[" + self.ViewType + "] .Show() finished");
        };

        /**************************************/
        /* Private Methods */

        self.Render = function(e) {
            console.log("[" + self.ViewType + "] .Render() running");
            
            var callback = function(data) {
                $.get("templates/" + self.tpl + ".html", function(template) {
                    console.log("[" + self.ViewType + "] .Render Callback() running");
                    console.log("[" + self.ViewType + "] $ParentContainer.length = " + self.$ParentContainer.length);
                    
                    self.$ParentContainer.html(template);
                    var el = self.$ParentContainer.get(0).firstChild;
                    data.Tabs = self.Tabs;
                    ko.applyBindings(data, el);
                    $(self).trigger("rendered");
                });
            }
            
            var payload = {
                "UrlKeys" : "",//e.data.UrlKeys,
                "Callback" : callback
            }
            
            this.GetData(payload);
            console.log("[" + self.ViewType + "] .Render() finished");
        };

        /**************************************/
        /* Keep this method around to figure
         * out how to reimplement the 
         * cache feature */

        self.LoadSingletonView = function(Show_Callback) {
            var $viewContainer = $("#ViewContainer");
            console.log(self.ViewType + ".LoadSingletonView() running");

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
                    $viewContainer.find("#TabViewContainer").empty();
                    $viewContainer.html(self.viewElement);
                    $viewContainer.fadeIn(Show_Callback);

                }
            } else {

                /***********************************/
                /* View is not cached. Create it. */
                $viewContainer.hide();
                //TODO: Ajax spinner
                $viewContainer.find("#TabViewContainer").empty();
                self.LoadView($viewContainer, function(el) {
                    el.ViewClassName = self.constructor.name;
                    el.ViewId = self.UrlKeys[self.IdKey];
                    self.viewElement = el;
                    $viewContainer.fadeIn(Show_Callback)
                });
            }
        };

        /**************************************/
        /* Public Interface */
       
        return {
            Title : "Untitled View",
            Show : self.Show,
            Tabs : self.Tabs
        };
    }

    // Create inheritance
    if (Object.create) {
        IEntity.prototype = Object.create(IViewModel.prototype);
    }
    return (IEntity);

});
