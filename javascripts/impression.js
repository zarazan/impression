$(function() {
	$('.tabs .tab').hide();
	$('.tabs .tab:first').show().addClass('active');
	$('.tabs ul.nav li:first').addClass('active');
	$('.tabs ul.nav li').click(function(){
		$('.tabs ul.nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab').hide();
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn().addClass('active');
		return false;
	});
});
