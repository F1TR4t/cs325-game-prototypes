"use strict"

GameStates.makeDesRace = function( game, shared ) {

    // General Game Assets
    var map, results;

    // Text Assets
    var res, eS, gS, pS, lS;

    // Counters
    var esc, gsc, psc, lsc;

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
	results = game.add.image(0, -10, 'result');
	var style = { font: "64px Courier", fill: "#fff", tabs: 132, boundsAlignV: "middle" };
	res = game.add.text(215, 25, "You Won\n\n\n\n\nPress Enter", style);
	res.anchor.x = 0.5;

	if ( key.isDown(Phaser.KeyCode.ENTER) ) {
	     quitGame();
	}
    }

    function quitGame() {
	// Destroy more stuff
	map.destroy();
	carP.destroy();
	music.stop();

	game.state.start('desMenu');
    }

    function pickMusic() {
	var no = Math.floor(Math.random()*12);

	switch(no) {
	     case 0:
		shared.music = game.add.audio('track1');
		break;
	    case 1:
		shared.music = game.add.audio('track2');
		break;
	    case 2:
		shared.music = game.add.audio('track3');
		break;
	    case 3:
		shared.music = game.add.audio('track4');
		break;
	    case 4:
		shared.music = game.add.audio('track5');
		break;
	    case 5:
		shared.music = game.add.audio('track6');
		break;
	    case 6:
		shared.music = game.add.audio('track7');
		break;
	    case 7:
		shared.music = game.add.audio('track8');
		break;
	    case 8:
		shared.music = game.add.audio('track9');
		break;
	    case 9:
		shared.music = game.add.audio('track10');
		break;
	    case 10:
		shared.music = game.add.audio('track11');
		break;
	    case 11:
		shared.music = game.add.audio('track12');
		break;
	}
    }

    return {
	
	create: function() {
	     // Set Up Gameplay
	     esh = true, gsh = false, psh = false, lsh = false;
	     tOff = 0.25, spOff = 1, gear = 1;
	     esc = 0, gsc = 0, psc = 0, lsc = 0;

	     // Music Plays
	     pickMusic();
	     shared.music.play();

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
