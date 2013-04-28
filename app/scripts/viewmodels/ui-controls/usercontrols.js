define(["viewmodels/ui-controls/pageddataset", "viewmodels/ui-controls/searchcontrol", "viewmodels/ui-controls/statemapcontrol"], function(PagedDataset, SearchControl, StateMapControl) {"use strict";

    /************************/
    /* Public interface */

    return {
        PagedDataset : PagedDataset,
        SearchControl : SearchControl,
        StateMapControl : StateMapControl
    };

});

