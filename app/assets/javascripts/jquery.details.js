(function(b){var d="open"in document.createElement("details"),e;b.fn.details=function(a){"open"===a&&(d?this.prop("open",!0):this.trigger("open"));"close"===a&&(d?this.prop("open",!1):this.trigger("close"));"init"===a&&e(b(this));if(!a){if(!d)return this.hasClass("open");var c=!1;this.each(function(){if(this.open)return c=!0,!1});return c}};e=function(a){a=a.not(".details-inited").addClass("details-inited");a.filter(".animated").each(function(){var a=b(this),d=a.children("summary").remove(),e=b("<div>").addClass("details-wrapper").append(a.children());
a.append(e).prepend(d)});d||(a.each(function(){var a=b(this);a.children("summary").length||a.prepend("<summary>Details</summary>")}).children("summary").filter(":not(tabindex)").attr("tabindex",0).end().end().contents(":not(summary)").filter(function(){return 3===this.nodeType&&/[^\t\n\r ]/.test(this.data)}).wrap("<span>").end().end().filter(":not([open])").prop("open",!1).end().filter("[open]").addClass("open").prop("open",!0).end(),b.browser.msie&&9>b.browser.msie&&a.filter(":not(.open)").children().not("summary").hide())};
b(function(){b("body").on("open.details","details.animated",function(){var a=b(this),c=a.children(".details-wrapper");c.hide();setTimeout(function(){c.slideDown(a.data("animation-speed"))},0)}).on("close.details","details.animated",function(){var a=b(this),c=a.children(".details-wrapper");setTimeout(function(){a.prop("open",!0).addClass("open");c.slideUp(a.data("animation-speed"),function(){a.prop("open",!1).removeClass("open")})},0)});if(d)b("body").on("click","summary",function(){var a=b(this).parent();
a.prop("open")?a.trigger("close"):a.trigger("open")});else if(b("html").addClass("no-details"),b("head").prepend('<style>details{display:block}summary{cursor:pointer}details>summary::before{content:"\u25ba"}details.open>summary::before{content:"\u25bc"}details:not(.open)>:not(summary){display:none}</style>'),b("body").on("open.details","details",function(a){b(this).addClass("open").trigger("change.details");a.stopPropagation()}).on("close.details","details",function(a){b(this).removeClass("open").trigger("change.details");
a.stopPropagation()}).on("toggle.details","details",function(a){var c=b(this);c.hasClass("open")?c.trigger("close"):c.trigger("open");a.stopPropagation()}).on("click","summary",function(){b(this).parent().trigger("toggle")}).on("keyup","summary",function(a){(32===a.keyCode||13===a.keyCode&&!b.browser.opera)&&b(this).parent().trigger("toggle")}),b.browser.msie&&9>b.browser.msie)b("body").on("open.details","details",function(){b(this).children().not("summary").show()}).on("close.details","details",
function(){b(this).children().not("summary").hide()});e(b("details"))})})(jQuery);

/* Переключение отзывов */
$(document).ready(function() {


  $(".opinions").on("mouseenter", "#srv", function() {
  $(this).closest(".opinions").find("#rv").css("display", "block");
  $(this).closest(".opinions").find("#ia, #pg, #ig").css("display", "none")  });

  $(".opinions").on("mouseenter", "#sia", function() {
  $(this).closest(".opinions").find("#ia").css("display", "block");
  $(this).closest(".opinions").find("#rv, #pg, #ig").css("display", "none")  });

  $(".opinions").on("mouseenter", "#spg", function() {
  $(this).closest(".opinions").find("#pg").css("display", "block");
  $(this).closest(".opinions").find("#ia, #rv, #ig").css("display", "none")  });

  $(".opinions").on("mouseenter", "#sig", function() {
  $(this).closest(".opinions").find("#ig").css("display", "block");
  $(this).closest(".opinions").find("#ia, #pg, #rv").css("display", "none")  });

});

/* Калькулятор экономии*/



    $(document).ready(function() {
    $('#amount').bind('textchange', function() {
    $('#result').css('background:', '#000;')
    return true;});
    });

