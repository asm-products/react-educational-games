/**
* Create one file for each Component, they will be concatinated by the build
* script into one big file.
* 
**/
(function(){
	Crafty.c("Actor", {
		init: function(){
			this.addComponent('2D, DOM');
		}
	});
}());
