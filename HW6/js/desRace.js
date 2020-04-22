"use strict"

GameStates.makeDesRace = function( game, shared ) {

    // General Game Assets
    var map;

    // Player Assets
    var carP, key;

    // Timers
    var looper, shift;

    // Numerical Variables
    var loop = 4000, tOff = 0.25;
    var spOff = 1;

    // Gameplay Assets
    var ps, gs, ls;
    var esh, psh, gsh, lsh;

    // Creates the shift icons (Create the separate methods)
    function displayShifts() {
	if ((esh==true) && (gsh==false)) {
	    esh = false;
	    gs = game.add.sprite(580, 200, 'gs');
	    gs.fixedToCamera = true;
	    gsh = true;
	} else if ( (gsh==true) && (psh==false)) {
	    gsh = false;
	    gs.destroy();
	    ps = game.add.sprite(580, 200, 'ps');
	    ps.fixedToCamera = true;
	    psh = true;
	} else if ( (psh==true) && (lsh==false)) {
	    psh = false;
	    ps.destroy();
	    ls = game.add.sprite(580, 200, 'ls');
	    ls.fixedToCamera = true;
	    lsh = true;
	} else {
	    ls.destroy();
	    lsh = false;
	    esh = true;
	}
    }

    function reset() {
	if ( gs != null ) {
	    gs.destroy();
	}

	if ( ps != null ) {
	    ps.destroy();
	}

	if ( ls != null ) {
	    ls.destroy();
	}

	esh = true, psh = false, gsh = false, lsh = false;
	shift = game.time.events.add(Phaser.Timer.SECOND*tOff, displayShifts, this);
    }

    // Forces map to loop at a certain point to
    // mimic having a longer map.
    function loopMap() {
	if ( loop == 4000 ) {
	     if ( carP.body.y <= loop ) {
		carP.body.y = 7400;
	     }
	}
    } 

    // Disables looping so player can finish game.
    function turnOffLoop() {
	loop = 0;
    }

    // Displays results of the game.
    function results() {
	// Creates results screen for who won
	
	
	quitGame();
    }

    function quitGame() {
	// Destroy stuff
	map.destroy();
	carP.destroy();
	key.destroy();

	game.state.start('desMenu');
    }

    return {
	
	create: function() {
	     // Set Up Gameplay
	     esh = true, gsh = false, psh = false, lsh = false;

	     // Music Plays
	     

	     // Creating map
	     map = game.add.tileSprite(0, 0, 800, 8000, 'des');
	     game.world.setBounds(0, 0, 800, 8000);

	     // Turn on Physics
	     game.physics.startSystem(Phaser.Physics.ARCADE);

	     // Create Cars
	     carP = game.add.sprite(game.world.centerX-5, 7900, 'lambo');
	     game.physics.enable(carP, Phaser.Physics.ARCADE);
	     game.camera.follow(carP);

	     // Key Made
	     key = game.input.keyboard;

	     // Timers
	     looper = game.time.events.add(Phaser.Timer.SECOND*45, turnOffLoop, this);
	     shift = game.time.events.add(Phaser.Timer.SECOND*tOff, displayShifts, this);
	},

	update: function() {

	     loopMap();

	     carP.body.y -= spOff;

	     if ( esh && !gsh && !psh && !lsh && key.isDown(Phaser.KeyCode.SHIFT) ) {
		     reset();
	     } else if ( !esh && gsh && !psh && !lsh && key.isDown(Phaser.KeyCode.SHIFT) ) {
		     reset();
	     } else if ( !esh && !gsh && psh && !lsh && key.isDown(Phaser.KeyCode.SHIFT) ) {
		     reset();
	     } else if ( !esh && !gsh && !psh && lsh && key.isDown(Phaser.KeyCode.SHIFT) ) {
		     reset();
	     }

	     if ( carP.body.y <= -10 ) {
		results();
	     }
	}
    };
};
