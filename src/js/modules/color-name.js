define(
    [ 'require', 'underscore' ],
    function ( require, _ ) {
        var reactModule = function(arena, language){
            self = this;
            var colors = [
                {
                    name: 'Red',
                    hex: '#FF0000',
                },
                {
                    name: 'Green',
                    hex: '#00FF00',
                },
                {
                    name: 'Blue',
                    hex: '#0000FF',
                },
                {
                    name: 'Grey',
                    hex: '#C9C9C9',
                },
                {
                    name: 'Purple',
                    hex: '#FF00FF',
                },
                {
                    name: 'Turquoise',
                    hex: '#00FFFF',
                }
            ];

            self.currentColor = undefined;
            self.colorMatches = false;
            self.load = function(){
                setInterval(function(){
                    arena.children().remove();
                    self.currentColor = _.sample(colors);
                    if (_.random(0, 6) == 0) {
                        textColor = self.currentColor;
                    } else {
                        textColor = _.sample(colors);
                    }
                    self.colorMatches = (textColor.name === self.currentColor.name);
                    var text = $('<div>');
                    text.css({
                        'color': textColor.hex,
                        'fontSize': '10em',
                        'textAlign' : 'center',
                        'textShadow': 'white 0.2em'
                    });
                    text.text(self.currentColor.name);
                    text.appendTo(arena);
                }, 2000);
            };
            self.unload = function(){
                console.log('Bye Bye');
            };
            self.fire = function(){
                return this.colorMatches;
            };
        }
    return reactModule;
});
