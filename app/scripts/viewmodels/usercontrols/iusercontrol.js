define(["viewmodels/iviewmodel"], function(IViewModel) {"use strict";

    /* Constructor */
    function IControl() {
        var self = this;
        IViewModel.call(self);

        /**************************************/
        /* Private Properties */
       
        self.ViewType = "IControl";

        /**************************************/
        /* Public interface */
       
        return {
            $ParentContainer : self.$ParentContainer,
            Show : self.Show,
            IsInView : self.IsInView
        };
    }

    // Create inheritance
    if (Object.create) {
        IControl.prototype = Object.create(IViewModel.prototype);
    }
    return (IControl);

});
