"use strict"

GameStates.makeDesResult = function( game, shared ) {

	var key, map, lock, result;

	function toMenu() {
		shared.music.stop();
		map.destroy();
		result.destroy();
		
		game.state.start('desMenu');
	}
	
	return {
		
		create: function() {
			key = game.input.keyboard;
			map = game.add.tileSprite(0, 0, 800, 8000, 'des');
			result = game.add.image(0, 0, 'result');
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