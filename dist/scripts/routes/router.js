define(["routes/routes", "routes/router.pageexit"], function(Routes, PageExit) {"use strict";

    return $.sammy(function() {

        var self = this;
        //self.currentExit = null;
        self.use(PageExit);
        self.ViewType = "Router";
        self.HomePath = "/moreimpact/"
        
        self.SplashRoutes = new Routes.SplashRoutes(self);
        self.StateRoutes = new Routes.StateRoutes(self);
        self.RegionRoutes = new Routes.RegionRoutes(self);
        self.CountyRoutes = new Routes.CountyRoutes(self);
        self.CommodityRoutes = new Routes.CommodityRoutes(self);
        self.DefaultRoutes = new Routes.DefaultRoutes(self);

        self.SplashRoutes.run();
        self.StateRoutes.run();
        self.RegionRoutes.run();
        self.CountyRoutes.run();
        self.CommodityRoutes.run();
        self.DefaultRoutes.run();

    });

});
