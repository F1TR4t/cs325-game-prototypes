"use strict";

var GameStates = {};

GameStates.makeBoot = function(game) {
    return {
	init: function () {
	     game.input.maxPointers = 1; // Multi-touch not needed
	     game.stage.disableVisibilityChange = true; // Pause Browser tab if leave it
	     game.scale.pageAlignHorizontally = true;
	},
	
	preload: function() {
	     // Load Maps
	     game.load.image('des', 'assets/desert.png');

	     // Load Cars
	     game.load.image('aud', 'assets/audio.png');
	     game.load.image('por', 'assets/porsche.png');

	     // Load Backgrounds

	     // Load Music
	},

	create: function() {
	     game.state.start('Menu');
	}
    }
}
