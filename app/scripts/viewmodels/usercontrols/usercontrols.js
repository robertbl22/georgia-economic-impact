define(["viewmodels/usercontrols/usercontrols.searchcontrol", "viewmodels/usercontrols/usercontrols.statemapcontrol", "viewmodels/usercontrols/usercontrols.pageddataset"], function(SearchControl, StateMapControl, PagedDataset) {"use strict";

    /*****************************/
    /* Layouts Package interface */

    return {
        SearchControl : SearchControl,
        StateMapControl : StateMapControl,
        PagedDataset : PagedDataset
    };

});

