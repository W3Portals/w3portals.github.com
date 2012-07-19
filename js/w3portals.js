
$(document).ready(function () {
    SetHeader();
    SetContentHeight();

    bgimg = $("#bg img");
    var hash = window.location.hash;
    var idtoclick = hash + "-link";
    $(idtoclick).click();
    $("body").scrollTop(0);
   
});

$(window).load(function () {
    InitBackgroundImage();
    $(window).resize(function () {
        SetBackgroundImage();
        SetContentHeight();
    });
});

var allNav = $("#nav ul li");
var contentitems = $("#content-main > div");
var contactusinfo = $("p#contactus-note");
var ourworkinfo = $("#ourwork-note");

var SetHeader = function () {

    $("#nav ul li").click(function () {
        HeaderSelect($(this));
    });

    var ourworklink = $("#nav ul li#ourwork-link");
    ourworklink.click(function () {
        $("div#ourwork-section").fadeIn();
        ourworkinfo.fadeIn();
    });

    var contactuslink = $("#nav ul li#contactus-link");
    contactuslink.click(function () {
        $("div#contactus").fadeIn();
        contactusinfo.fadeIn();
    });

    $("a.contactus").click(function () {
        contactuslink.click();
    });

    var Aboutinfolink = $("#nav ul li#About-info-link");
    Aboutinfolink.click(function () {
        $("div#About-info").fadeIn();
    });

};

var HeaderSelect = function (clicked) {
    allNav.removeClass("selected");
    clicked.addClass("selected");
    contentitems.hide();
    contactusinfo.hide();
    ourworkinfo.hide();
  //  $('div#sidecontent').animate({ width: '200px' });
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
  //  $("#About-info .form-content").css('max-height', targetHeight);
    $("#ourwork-section .form-content").css('max-height', targetHeight);
};