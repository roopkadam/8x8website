// add your code here
$(document).ready(function(){
	$('#close').click(function(){
		$('.ribbon-wrap').remove();
					$('.page-header').css('top','0px');
					$('.banner-img').css('margin-top','0px');
					// $('.navbar').removeClass('custom-margin');
	});
});

// $(window).scroll(function() {
// 	$(".page-header").css("max-heigth","88px");
// });