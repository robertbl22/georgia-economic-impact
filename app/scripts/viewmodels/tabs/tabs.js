define(["viewmodels/tabs/tabs.overview", "viewmodels/tabs/tabs.countiesgridview", "viewmodels/tabs/tabs.commoditiesgridview", "viewmodels/tabs/tabs.companiesgridview"], function(overview, countiesGridView, commoditiesGridView, companiesGridView) {"use strict";

    /***************************/
    /* Tabs Package Interface */

    return {
        Overview : overview,
        CountiesGridView : countiesGridView,
        CommoditiesGridView : commoditiesGridView,
        CompaniesGridView : companiesGridView
    };

});

