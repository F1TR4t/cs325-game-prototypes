"use strict";

var GameStates = {};

GameStates.makeBoot = function( game ) {

    return {
	init: function() {
	     game.input.maxPoitners = 2;
	     game.stage.disableVisibilityChange = true;
	     game.scale.pageAlignHorizontally = true;
	},

	preload: function() {
	     
	     // Cars
	     game.load.image('lambo', 'assets/cars/lamborghini.png');

	     // Maps
	     game.load.image('des', 'assets/maps/desert.png');

	     // Menu Backgrounds
	     game.load.image('bg_des', 'assets/bg/des/bg.png');
	     game.load.image('fg_des', 'assets/bg/des/fg.png');

	     // Menu Assets
	     game.load.atlas('play_button', 'assets/other/play_butt.png', 'assets/other/play_butt.json');	     

	     // Sound Tracks
	     game.load.audio('menu1', 'assets/ost/menu.mp3');
	},

	create: function() {
	    game.state.start('desMenu'); 
	}
    };
};
