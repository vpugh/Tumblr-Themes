var hoverTrigger = $(".main-nav_button"),
navMain = $(".main-nav");
hoverTrigger.mouseover(function() {
   navMain.addClass("active");
 });
 navMain.mouseleave(function() {
   navMain.removeClass("active");
 });