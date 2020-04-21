"use strict"

GameStates.makeDesRace = function( game, shared ) {

    var map, carP, key;
    var loop = 4000, looper;

    function loopMap() {
	if ( loop == 4000 ) {
	     if ( carP.body.y <= loop ) {
		carP.body.y = 7400;
	     }
	}
    } 

    function turnOffLoop() {
	loop = 0;
    }

    function results() {
	// Creates results screen for who won,
	

	game.state.start('desMenu');
    }

    return {
	
	create: function() {
	     // Music Plays
			
	     // Creating map
	     map = game.add.tileSprite(0, 0, 800, 8000, 'des');
	     game.world.setBounds(0, 0, 800, 8000);

	     // Turn on Physics
	     game.physics.startSystem(Phaser.Physics.ARCADE);

	     // Create Cars
	     carP = game.add.sprite(game.world.centerX-5, 7800, 'lambo');
	     game.physics.enable(carP, Phaser.Physics.ARCADE);
	     game.camera.follow(carP);

	     // Key Made
	     key = game.input.keyboard.createCursorKeys();

	     // Timers
	     looper = game.time.events.add(Phaser.Timer.SECOND*45, turnOffLoop, this);
	},

	update: function() {

	     loopMap();

	     if ( key.up.isDown ) {
		carP.body.y -= 20;
	     } else if ( key.down.isDown ) {
		carP.body.y += 20;
	     }

	     if ( carP.body.y <= -10 ) {
		results();
	     }
	}
    };
};
