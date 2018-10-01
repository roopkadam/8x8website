// add your code here
$(document).ready(function(){
	$('#close').click(function(){
		$('.ribbon-wrap').remove();
					$('.page-header').css('margin-top','0px');
					$('.page-container').css('margin-top','12px');

					// $('.navbar').removeClass('custom-margin');
	});
});

// $(window).scroll(function() {
// 	$(".page-header").css("max-heigth","88px");
// });