$("#proj1, #proj2, #proj3, #proj4, #proj5, #proj6, #proj7").hover(function(){
	$(this).find(".overlay").fadeIn(250);
}, function(){
	$(this).find(".overlay").fadeOut(250);
});


$(".fa-github, .fa-codepen, .fa-linkedin").hover(function(){
	$(this).addClass("transition");
}, function()
{
	$(this).removeClass("transition");
});



$(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
});



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
