/**
* Code relating to the visual Layout
**/
(function($){
	function resizeLayout()
	{
		var height = $(window).height();
		height = height - $('#header').height();
		height = height - $('#footer').height();
		height = height * 0.95;
		$('#middle > .column').css('height', height + 'px');
	}
	$(function(){
		$(window).on('resize', function(){
			resizeLayout();
		}).trigger('resize');
	});
}(Zepto));
