

$('.nav').on('click', 'li', function(){
	$(this).addClass('current').siblings().removeClass("current").find(".subnav").hide().end().end().find(".subnav").show();
});

