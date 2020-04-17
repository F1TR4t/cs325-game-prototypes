"use strict";

GameStates.makeDesMenu = function( game, shared ) {
    
    var bg = null, fg = null, playButton = null;

    function play(pointer) {
	shared.music.stop();
	
    }

    return {
	create: function() {
	     
	     // Menu Music
	     shared.music = game.add.audio('menu1');
	     shared.music.play();

	     // Background 
	     bg = game.add.sprite(0, 0, 'bg_des');
	     fg = game.add.sprite(0, 0, 'fg_des');

	     // Menu Assets
	     playButton = game.add.button(339, 200, 'play_button', play, null, 'over', 'out', 'down');
	},

	update: function() {
	    if ( bg.x < -2200 ) {
		bg.x = 50;
	    }
	    bg.x -= 1.5; 
	}
    };
};
