define(["routes/splashroutes", "routes/stateroutes", "routes/regionroutes", "routes/countyroutes", "routes/commodityroutes", "routes/defaultroutes"], function(SplashRoutes, StateRoutes, RegionRoutes, CountyRoutes, CommodityRoutes, DefaultRoutes) {"use strict";

    /************************/
    /* Public interface */

    return {
        SplashRoutes : SplashRoutes,
        StateRoutes : StateRoutes,
        RegionRoutes : RegionRoutes,
        CountyRoutes : CountyRoutes,
        CommodityRoutes : CommodityRoutes,
        DefaultRoutes : DefaultRoutes
    };

});

