"use strict"

GameStates.makeDesResult = function( game, shared ) {

	var key, map, lock;

	function toMenu() {
		shared.music.stop();
		map.destroy();
		
		game.state.start('desMenu');
	}
	
	return {
		
		create: function() {
			key = game.input.keyboard;
			map = game.add.tileSprite(0, 0, 800, 8000, 'des');
			lock = 0;
		},
		
		update: function() {
			if ( (lock == 0) && key.isDown(Phaser.KeyCode.SHIFT) ) {
				lock = 1;
				toMenu();
			}
		}
	};

};