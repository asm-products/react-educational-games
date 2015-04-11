/**
* Code relating to the visual Layout
**/
var Layout = {
	resizeLayout: function()
	{
		var height = Zepto(window).height();
		height = height - Zepto('#header').height();
		height = height - Zepto('#footer').height();
		height = height * 0.90;
		$('#middle > .column').css('height', height + 'px');
	}
};

(function($){
	$(function(){
		$(window).on('resize', function(){
			Layout.resizeLayout();
		});
	});
}(Zepto));
