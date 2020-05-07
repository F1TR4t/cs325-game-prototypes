"use strict"

GameStates.makeDesResult = function( game, shared ) {

	var key, map, lock, result;
	
	var resTxt;

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
			result = game.add.image(0, -5, 'result');
			lock = 0;
			
			var style = { font: "30px Verdana", fill: "#ffffff", align: "center" };
			if ( shared.won == 1 ) {
				resTxt = game.add.text( game.world.centerX, 400, "You Won\n\n\n\n\nPress Shift to Continue", style );
			} else { 
				resTxt = game.add.text( game.world.centerX, 400, "You Lost\n\n\n\n\nPress Shift to Continue", style );
			}
		},
		
		update: function() {
			if ( (lock == 0) && key.isDown(Phaser.KeyCode.SHIFT) ) {
				lock = 1;
				toMenu();
			}
		}
	};

};