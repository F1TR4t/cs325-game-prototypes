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

	     // Gameplay Assets
	     game.load.image('ps', 'assets/other/ps.png');
	     game.load.image('gs', 'assets/other/gs.png');
	     game.load.image('ls', 'assets/other/ls.png');
	     game.load.image('result', 'assets/other/results.png');

	     // Maps
	     game.load.image('des', 'assets/maps/desert.png');

	     // Menu Backgrounds
	     game.load.image('bg_des', 'assets/bg/des/bg.png');
	     game.load.image('fg_des', 'assets/bg/des/fg.png');

	     // Menu Assets
	     game.load.atlas('play_button', 'assets/other/play_butt.png', 'assets/other/play_butt.json');	     

	     // Sound Tracks
	     game.load.audio('menu1', 'assets/ost/menu.mp3');
	     game.load.audio('track1', 'assets/ost/track1.mp3');
	     game.load.audio('track2', 'assets/ost/track2.mp3');
	     game.load.audio('track3', 'assets/ost/track3.mp3');
	     game.load.audio('track4', 'assets/ost/track4.mp3');
	     game.load.audio('track5', 'assets/ost/track5.mp3');
	     game.load.audio('track6', 'assets/ost/track6.mp3');
	     game.load.audio('track7', 'assets/ost/track7.mp3');
	     game.load.audio('track8', 'assets/ost/track8.mp3');
	     game.load.audio('track9', 'assets/ost/track9.mp3');
	     game.load.audio('track10', 'assets/ost/track10.mp3');
	     game.load.audio('track11', 'assets/ost/track11.mp3');
	     game.load.audio('track12', 'assets/ost/track12.mp3');

	},

	create: function() {
	    game.state.start('desMenu'); 
	}
    };
};
