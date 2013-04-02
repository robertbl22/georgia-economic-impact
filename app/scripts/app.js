define([], function() {

    $("#GPALogoBanner").delay(50).slideDown();
    $("#LocationPicker").fadeIn("slow");

    /*
     $('.tabs').bind('change', function(e) {'use strict'
     alert("change!");
     var activeTab = e.target;
     var divId = $(activeTab).attr('href').substr(1);

     $.getJSON('xxx.php').success(function(data) {
     $("#" + divId).text(data.msg);
     });
     });
     */

    /*
     $('#TabSet a[data-toggle="tab"]').on('shown', function(e) {
     // e.target is activated tab
     // e.relatedTarget is previous tab

     var tabPanelId = $(e.target).attr("data-target");
     var tabPanel = $("#" + tabPanelId);
     tabPanel.append("<strong>hello world!</strong>");
     $(".tab-content .active").removeClass(".active");
     tabPanel.addClass(".active").slideDown();
     });
     */

    return "App has finished loading";
});
