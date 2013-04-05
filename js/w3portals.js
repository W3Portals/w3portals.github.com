
$(function () {
    SetHeader();
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
        $("div#contactus-section").fadeIn();
        $("#contactus-note").fadeIn();
    });

    $("#nav ul li#About-info-link").click(function () {
        $("#About-section").fadeIn();
    });

};

var HeaderSelect = function (clicked) {
    $("#nav ul li").removeClass("selected");
    clicked.addClass("selected");
    $("#content-main > div").hide();
    $("p#contactus-note").hide();
    $("#ourwork-note").hide();
    $('div#sidecontent').hide();
};
