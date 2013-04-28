/****************************************************************************/
/* TwoColumnLayout */

TwoColumnLayout.Show() {
    if (IsCurrentView) {
        $self.trigger("rendered");
        $self.trigger("shown");
    } else {
        HideContainer();
        Render() {
            $self.trigger("rendered");
        }
    }
}
$self.bind("rendered", data, SearchControl.Show);
$self.bind("rendered", data, MapControl.Show);
$self.bind("rendered", data, ShowContainer);
ShowContainer() {
    $container.fadeIn();
    $self.trigger("shown");
}

/****************************************************************************/
/* StateView */

$TwoColumnLayout.bind("rendered", {
    UrlKeys : {
        PageIndex : 0,
        RegionUrlKey : "region1",
        CountyUrlKey : "chatham-county",
        CommodityUrlKey : "silver-bars"
    }
}, StateView.Show);

StateView.Show(UrlKeys) {
    if (IsCurrentView) {
        $self.trigger("rendered");
        $self.trigger("shown");
    } else {
        HideContainer();
        Render() {
            $self.trigger("rendered");
        }
    }
}
$self.bind("rendered", data, ShowContainer);
ShowContainer() {
    $container.fadeIn();
    $self.trigger("shown");
}

/****************************************************************************/
/* StateOverview */

$StateView.bind("rendered", null, StateOverview.Show);

StateOverview.Show() {
    if (IsCurrentView) {
        $self.trigger("rendered");
        $self.trigger("shown");
    } else {
        HideContainer();
        Render() {
            $self.trigger("rendered");
        }
    }
}
$self.bind("rendered", data, ShowContainer);
ShowContainer() {
    $container.fadeIn();
    $self.trigger("shown");
}

