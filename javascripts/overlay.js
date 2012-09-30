$(function() {

window.toggle_overlay = function() {
	content = $('.overlay-content');
	if(content.hasClass('overlayShowing')) {
		$('.overlay').hide();
		content.css('opacity', 0);
		$('.overlay-bg').fadeTo('opacity', 0);
	} else {
		overlay_resize();
		$('.overlay').show();
		content.fadeTo("fast", 1);
		$('.overlay-bg').fadeTo("fast", 1);
	}
	content.toggleClass('overlayShowing');
}

overlay_resize = function() {
	maskHeight = $(document).height();
	maskWidth = $(window).width();
	$('.overlay-bg').css({ 'width':maskWidth,'height':maskHeight });
}

$('.overlay-content .destroy').live('click', function() { toggle_overlay(); });

$('.overlay-bg').live('click', function() { toggle_overlay(); });

$(window).resize(function() { overlay_resize() });

});
