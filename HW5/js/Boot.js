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
	     game.load.image('desBG', 'assets/BGP1.jpg');

	     // Load Music

	     // Load Misc
	     game.load.image('cl1', 'assets/cl1.png');
	     game.load.image('cl2', 'assets/cl2.png');
	     game.load.image('cl3', 'assets/cl3.png');
	},

	create: function() {
	     game.state.start('Menu');
	}
    };
};
