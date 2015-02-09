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
		// Bind to some key-presses
		$(document).on('keydown', function(e){
			var arena = $('#arena');
			switch (e.keyCode) {
			case Game.controls.P1.fire:
				// Player 1 Fire
				arena.trigger('reactFire', [ 1 ]);
				break;
			case Game.controls.P2.fire:
				// Player 2 Fire
				arena.trigger('reactFire', [ 2 ]);
				break;
			case Game.controls.P3.fire:
				// Player 3 Fire
				arena.trigger('reactFire', [ 3 ]);
				break;
			case Game.controls.P4.fire:
				// Player 4 Fire
				arena.trigger('reactFire', [ 4 ]);
				break;
			}
		});
		$(document).on('#player_1', 'touchstart mousedown', function(e){
			console.log("GI");
			arena.trigger('reactFire', [ 1 ]);
		});
		$(document).on('#player_2', 'touchstart mousedown', function(e){
			arena.trigger('reactFire', [ 2 ]);
		});
		$(document).on('#player_3', 'touchstart mousedown', function(e){
			arena.trigger('reactFire', [ 3 ]);
		});
		$(document).on('#player_4', 'touchstart mousedown', function(e){
			arena.trigger('reactFire', [ 4 ]);
		});
	});
}(Zepto));
