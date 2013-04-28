define(["viewmodels/iviewmodel", "viewmodels/usercontrols/usercontrols"], function(IViewModel, UserControls) {"use strict";

    /* Constructor */
    function ILayout() {
        var self = this;
        IViewModel.call(self);

        /**************************************/
        /* Private Properties */
       
        self.ViewType = "ILayout";
        self.UserControls = UserControls;
        self.ParentContainerID = "#ContentContainer";

        /**************************************/
        /* Public interface */
       
        return {
            $ParentContainer : self.$ParentContainer,
            Show : self.Show,
            IsInView : self.IsInView,
            SearchControl : self.SearchControl
        };
    }

    // Create inheritance
    if (Object.create) {
        ILayout.prototype = Object.create(IViewModel.prototype);
    }
    return (ILayout);

});
