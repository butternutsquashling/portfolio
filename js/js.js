$("#proj1, #proj2, #proj3, #proj4, #proj5, #proj6").hover(function(){
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
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});








