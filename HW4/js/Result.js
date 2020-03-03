"use strict";

GameStates.makeResult = function( game, shared ) {

    var playButton = null;

    function backToMenu(pointer) {

        game.state.start('MainMenu');

    }

    return {
    
	preload: function() {
	   game.load.image('result', 'assets/result.png');
	   game.load.atlas('playButton', 'assets/play_button.png', 'assets/play_button.json');
	},

        create: function () {
    
            //	We've already preloaded our assets, so let's kick right into the Main Menu itself.
            //	Here all we're doing is playing some music and adding a picture and button
	    game.add.sprite(0, 0, 'result');
	    playButton = game.add.button( 303, 470, 'playButton', backToMenu, null, 'over', 'out', 'down');
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
        
    };
};
