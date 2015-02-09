/**
* This file created a global variable called Game which contains any settings
* or utility functions you'd like. It also contains list of assets which are loaded
* by the Loading scene before switching to the Game scene.
* The method here called load() is called from index.html and some settings are
* passed in (you could, for example, pass in game options from your webpage)
**/
(function(){
    window.Game = {
        // Most games will want these
        baseUrl: '',

        // Misc game-specific settings/stores. These are for your own use, and not
        // automatically processed.
        language: 'en-gb',
        speed: 10,

        // A handy place to store your controls for later reference (again these
        // are not used automatically by anything)
        controls: {
            pause: Crafty.keys.P,
            P1: {
                fire: Crafty.keys.Q
            },
            P2: {
                fire: Crafty.keys.P
            },
            P3: {
                fire: Crafty.keys.Z
            },
            P4: {
                fire: Crafty.keys.M
            }
        },

        // The currently loaded module name
        moduleName: 'color-name',
        // List here any assets (usually image files, I think) you wish the loader
        // to load. Add these in load() if you want to be able to use this.baseUrl
        assets: [],

        // List any audio files you'd like loaded (by the loader). The property
        // name is the audio name:
        //      audio: { 'shoot' : this.baseUrl + '/audio/shoot' + audioExtension }
        // might become
        //      Crafty.audio.add('shoot', 'mygame/audio/shoot.ogg');
        // Add these in load() if you want to be able to use this.baseUrl
        audio: {},

        data: {
            scores: {
                p1: 0,
                p2: 0,
                p3: 0,
                p4: 0,
            }
        },

        load: function(options) {
            var self = this;
            var arena = $('#arena');
            curl( [ 'js/modules/' + self.moduleName ], function ( Module ){
                var module = new Module(arena, self.language);
                var fireEvent;
                module.load();

                fireEvent = arena.on('reactFire', function(e, player) {
                    if (module.fire()) {
                        self.data.scores['p' + player]++;
                    } else {
                        self.data.scores['p' + player]--;
                    }
                });
            } );
        },

        log: function(level, message) {
            if (arguments.length == 1) {
                console.log(level);
            } else {
                console.log(level, message);
            }
        },
    };
}());
