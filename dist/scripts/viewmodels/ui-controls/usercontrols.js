define(["viewmodels/ui-controls/pageddataset", "viewmodels/ui-controls/searchcontrol", "viewmodels/ui-controls/statemapcontrol", "viewmodels/ui-controls/ajaxspinner"], function(PagedDataset, SearchControl, StateMapControl, AjaxSpinner) {"use strict";

    /************************/
    /* Public interface */

    return {
        PagedDataset : PagedDataset,
        SearchControl : SearchControl,
        StateMapControl : StateMapControl,
        AjaxSpinner : AjaxSpinner
    };

});

