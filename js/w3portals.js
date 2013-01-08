
$(function () {
    SetHeader();
    SetContentHeight();

    bgimg = $("#bg img");
    var hash = window.location.hash;
    var idtoclick = hash + "-link";
    $(idtoclick).click();
});

$(window).load(function () {
    InitBackgroundImage();
    $(window).resize(function () {
        SetBackgroundImage();
        SetContentHeight();
    });
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

var HeaderSelect = function (clicked) {
    $("#nav ul li").removeClass("selected");
    clicked.addClass("selected");
    $("#content-main > div").hide();
    $("p#contactus-note").hide();
    $("#ourwork-note").hide();
    $('div#sidecontent').hide();
};

var bgimg;
var img_w;
var img_h;
var img_aspect;

var InitBackgroundImage = function () {
    img_w = bgimg.width();
    img_h = bgimg.height();
    img_aspect = img_w / img_h;
    SetBackgroundImage();
    bgimg.fadeIn("normal");
};

var SetBackgroundImage = function () {
    var window_w = $(window).width();
    var window_h = $(window).height();
    var window_aspect = window_w / window_h;

    if (window_aspect > img_aspect) {
        bgimg.width(window_w);
        bgimg.height(Math.round(window_w / img_aspect));
    } else {
        bgimg.width(Math.round(window_h * img_aspect));
        bgimg.height(window_h);
    }
};

var SetContentHeight = function () {
    var targetHeight = $(window).height() - 200;
	var targetwidth = $(window).width();
	if(targetwidth<400)
	  {
	    $("#imglogo").css('height', 45);
	  }
	  else {
	    $("#imglogo").css('height', '');
	  }
};
