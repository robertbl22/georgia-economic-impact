(function($) {
    /*
     var app = $.sammy('#Main', function() {

     this.use(Sammy.Title);

     this.swap = function(content, callback) {
     var context = this;
     context.$element().fadeOut('slow', function() {
     context.$element().html(content);
     context.$element().fadeIn('slow', function() {
     if (callback) {
     callback.apply();
     }
     });
     });
     };

     this.get(/\#\!?\/$/, function(context) {

     context.title("The State of Georgia");
     function AppViewModel() {
     this.firstName = "Bert";
     this.lastName = "Bertington";
     }

     ko.applyBindings(new AppViewModel());
     context.app.swap($("#State"));
     });

     this.get(/\#\!?\/region\/(.*)/i, function(context) {
     context.title(this.params['splat']);
     context.app.swap($("#Region"));
     context.$element().append(this.params['splat']);
     });

     this.get(/\#\!?\/county\/(.*)/i, function(context) {
     context.title(this.params['splat'] + " County");
     context.app.swap($("#County"));
     context.$element().append(this.params['splat']);
     console.log(context)
     });
     });

     $(function() {
     app.run('#/');
     });
     */

    function KoViewModel() {
        var self = this;
        self.chosenStateData = ko.observable();
        self.chosenCountyData = ko.observable();
        self.companies = [{
            Company : "Acme",
            ImportTEU : 5
        }, {
            Company : "Petco",
            ImportTEU : 3
        }];
        $.sammy(function() {
            this.use(Sammy.Title);
            this.get('#/', function(context_) {
                self.chosenCountyData(false);
                self.chosenStateData(true);
            });
            this.get('#/county', function(context_) {
                self.chosenStateData(false);
                self.chosenCountyData(true);
            });
        }).run();
    };
    ko.applyBindings(new KoViewModel());

})(jQuery);

define([], function() {

    $("#GPALogoBanner").delay(50).slideDown();
    $("#LocationPicker").fadeIn("slow");

    return "App has finished loading";
});

