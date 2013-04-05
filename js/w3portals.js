
$(function () {
    var hash = window.location.hash;
    var idtoclick = hash + "-link";
    $(idtoclick).click();
});

var SetHeader = function () {

    $("#nav ul li").click(function () {
        HeaderSelect($(this));
    });

    $("#nav ul li#ourwork-link").click(function () {
        $("div#ourwork-section").fadeIn();
        $("#ourwork-note").fadeIn();
    });

    $("#nav ul li#contactus-link").click(function () {
        $("div#contactus").fadeIn();
        $("#contactus-note").fadeIn();
    });

    $("#nav ul li#About-info-link").click(function () {
        $("#About-info").fadeIn();
    });

};
