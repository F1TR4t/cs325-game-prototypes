"use strict";

GameStates.makeGame = function( game, shared ) {
    // Create your own variables.
    var bouncy = null;
    var road = null;
    var cursor = null;
    var music = null;
    
    function quitGame() {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.
	music.stop();
        //  Then let's go back to the main menu.
        game.state.start('Result');

    }
    
    return {
    
        create: function () {
    
            //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
            road = game.add.tileSprite(0, 0, 800, 2000, 'road');

	    music = game.add.audio('bgmusic');
	    music.play();
	    
	    game.world.setBounds(0, 0, 800, 2000);
            // Create a sprite at the center of the screen using the 'logo' image.
	    if ( p1Cnt == 0 ) {
            	bouncy = game.add.sprite( game.world.centerX, 1800, 'lambo' );
	    } else {
		bouncy = game.add.sprite( game.world.centerX, 2000, 'ferr' );
	    }
	    // Anchor the sprite at its center, as opposed to its top-left corner.
            // so it will be truly centered.
            bouncy.anchor.setTo( -0.15, -0.30 );

	    game.physics.startSystem(Phaser.Physics.ARCADE);
            
            // Turn on the arcade physics engine for this sprite.
  	    game.physics.enable(bouncy, Phaser.Physics.ARCADE);
	    bouncy.body.drag.set(100);
    	    bouncy.body.maxVelocity.set(500);

	    cursor = game.input.keyboard.createCursorKeys();
            // Make it bounce off of the world bounds.
            
            // Add some text using a CSS style.
            // Center it in X, and position its top 15 pixels from the top of the world.
            game.camera.follow(bouncy);
            
            // When you click on the sprite, you go back to the MainMenu.
            bouncy.inputEnabled = true;
        },
    
        update: function () {
    
            //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
            
            // Accelerate the 'logo' sprite towards the cursor,
            // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
            // in X or Y.
            // This function returns the rotation angle that makes it visually match its
            // new trajectory.
            if (cursor.up.isDown) {
		game.physics.arcade.accelerationFromRotation((3 * 3.141592653589793238462643383279502884197169399375105820974944592307816406286)/2, 900, bouncy.body.acceleration);
   	    } else {
        	bouncy.body.acceleration.set(0);
  	    }

	    if ( cursor.down.isDown ) {
		quitGame();
	    }
        }
    };
};
