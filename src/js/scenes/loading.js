(function(){
	Crafty.scene('Loading', function(){
		Crafty.init(Game.width, Game.height);
		Crafty.background('black');
		var modules = {};
		// Grunt concatinates all our javascript files into one
		// but we still load it here so we can get our Loading screen up
		// as soon as possible.
		modules[Game.baseUrl + '/js/all.js'] = 'release';

		Crafty.modules(modules , function(){
			var audioExtention;
			var assets = Game.assets;
			Crafty.load(assets,
				function(){
					// Setup the Audio
					var audioAssets = Object.keys(Game.audio);
					for (var audioKey in audioAssets) {
						audioKey = audioAssets[audioKey];
						Crafty.audio.add(audioKey, Game.audio[audioKey]);
					}

					// Setup the Sprites
					Crafty.sprite(20, Game.baseUrl + "/img/missiles.png", {
						sprite_blue: [0,0],
						sprite_red: [1,0],
					});

					// Done
					Crafty.scene('Menu');
				},
				function(e){
					// Progress
					console.log("Loading " + e.percent + "% " + e.src);
				},
				function(e) {
					// Error!
					console.log(e);
				}
			);
		});
	});
}());
