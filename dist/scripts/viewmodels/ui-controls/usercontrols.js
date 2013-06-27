define(["viewmodels/ui-controls/pageddataset", "viewmodels/ui-controls/searchcontrol", "viewmodels/ui-controls/statemapcontrol", "viewmodels/ui-controls/ajaxspinner"], function(PagedDataset, SearchControl, StateMapControl, AjaxSpinner) {"use strict";

    /************************/
    /* Singleton Factories */
   
   /*
    var _pagedDataset = null;
    self.PagedDataset = function() {
        if (!_pagedDataset) {
            _pagedDataset = new PagedDataset()
        }
        return _pagedDataset;
    };

    var _searchControl = null;
    self.SearchControl = function() {
        if (!_searchControl) {
            _searchControl = new SearchControl()
        }
        return _searchControl;
    };

    var _stateMapControl = null;
    self.StateMapControl = function() {
        if (!_stateMapControl) {
            _stateMapControl = new StateMapControl()
        }
        return _stateMapControl;
    };

    var _ajaxSpinner = null;
    self.AjaxSpinner = function() {
        if (!_ajaxSpinner) {
            _ajaxSpinner = new AjaxSpinner()
        }
        return _ajaxSpinner;
    };
    */

    /************************/
    /* Public interface */

    return {
        PagedDataset : PagedDataset,
        SearchControl : SearchControl,
        StateMapControl : StateMapControl,
        AjaxSpinner : AjaxSpinner
    };

});

