"use strict"

GameStates.makeDesRace = function( game, shared ) {

    // General Game Assets
    var map;

    // Player Assets
    var carP, key;

    // Timers
    var looper, shift;

    // Numerical Variables
    var loop = 4000, tOff, spOff, gear;

    // Gameplay Assets
    var ps, gs, ls;
    var esh, psh, gsh, lsh;

    // Creates the shift icons (Create the separate methods)
    function displayShifts() {
	if ((esh==true) && (gsh==false) && (psh==false) && (lsh==false) ) {
	    esh = false;
	    gs = game.add.sprite(580, 200, 'gs');
	    gs.fixedToCamera = true;
	    gsh = true;
	    tOff = 0.7 * (gear - 1);
	    shift = game.time.events.add(Phaser.Timer.SECOND*(tOff+0.3), displayShifts, this);
	} else if ((esh==false) && (gsh==true) && (psh==false) && (lsh==false)) {
	    gsh = false;
	    gs.destroy();
	    ps = game.add.sprite(580, 200, 'ps');
	    ps.fixedToCamera = true;
	    psh = true;
	    tOff = 0.4 * (gear - 1);
	    shift = game.time.events.add(Phaser.Timer.SECOND*(tOff+0.05), displayShifts, this);
	} else if ((esh==false) && (gsh==false) && (psh==true) && (lsh==false) ) {
	    psh = false;
	    ps.destroy();
	    ls = game.add.sprite(580, 200, 'ls');
	    ls.fixedToCamera = true;
	    lsh = true;
	}
    }

    function reset() {
	if ( (gs == null) && (ps == null) && (ls == null) ) {
	    spoOff += 0.0002;
	}

	if ( gs != null ) { // Good Shift
	    gs.destroy();
	    spOff += 0.25;
	}

	if ( ps != null ) { // Perfect Shift
	    ps.destroy();
	    spOff += 0.5;
	}

	if ( ls != null ) { // Late Shift
	    ls.destroy();
	    spOff += 0.0001;
	}

	tOff = 1.7 + (2 * (gear - 1));
	gear++;
	esh = true, psh = false, gsh = false, lsh = false;
	shift = game.time.events.add(Phaser.Timer.SECOND*(tOff+0.2), displayShifts, this);
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
	// Destroy stuff
	carP.destroy();

	if ( gs != null ) {
	     gs.destroy();
	}

	if ( ps != null ) {
	     ps.destroy();
	}

	if ( ls != null ) {
	     ls.destroy();
	}

	// Creates results screen for who won
	
	if ( key.isDown(Phaser.KeyCode.ENTER) ) {
	     quitGame();
	}
    }

    function quitGame() {
	// Destroy more stuff
	map.destroy();
	carP.destroy();

	game.state.start('desMenu');
    }

    return {
	
	create: function() {
	     // Set Up Gameplay
	     esh = true, gsh = false, psh = false, lsh = false;
	     tOff = 0.25, spOff = 1, gear = 1;

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
	     looper = game.time.events.add(Phaser.Timer.SECOND*30, turnOffLoop, this);
	     shift = game.time.events.add(Phaser.Timer.SECOND*0.2, displayShifts, this);
	},

	update: function() {

	     loopMap();

	     carP.body.y -= spOff;

	     if ( key.isDown(Phaser.KeyCode.SHIFT) ) {
		     reset();
	     }

	     if ( carP.body.y <= -10 ) {
		results();
	     }
	}
    };
};
