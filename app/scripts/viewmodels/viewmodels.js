define(["viewmodels/entities/entities", "viewmodels/layouts/layouts", "viewmodels/tabs/tabs", "viewmodels/usercontrols/usercontrols"], function(Entities, Layouts, Tabs, UserControls) {"use strict";

    /************************/
    /* Public interface */

    return {
        Entities : Entities,
        Layouts : Layouts,
        Tabs : Tabs,
        UserControls : UserControls
    };

});

