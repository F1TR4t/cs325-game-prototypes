"use strict";

GameStates.makeGame = function( game, shared ) {
    
    var car1 = null, car2 = null;
    var road = null;
    var key1 = null, key2 = null;
    var music = null;
    
    function quitGame() {
	// Delete unused objects and show results

        // Go back to Menu State
        game.state.start('Menu');

    }
    
    return {
    
        create: function () {
	    // Have Music Load
	    
   	    // Have Map Load
	    road = game.add.tileSprite(0, -5400, 800, 6000, 'road_des');

	    game.world.setBounds(0, 0, 800, 2000);

	    // Have Cars Load
	    car1 = game.add.sprite(390, 440, 'lambo');

	    // Set Cars  up
	    

	    // Start Game Physics
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    // Enable physics for the cars and set up speeds
	    

	    
        },
    
        update: function () {
    
            // if Keyboard is pressed down
	}       
    };
};
