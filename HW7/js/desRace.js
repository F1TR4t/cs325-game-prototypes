"use strict"

GameStates.makeDesRace = function( game, shared ) {

    // General Game Assets
    var map, carAI, spOffAI;

    // Player Assets
    var carP, key;

    // Timers
    var looper, shift;

    // Numerical Variables
    var loop, tOff, spOff, gear;

    // Gameplay Assets
    var ps, gs, ls;
    var esh, psh, gsh, lsh;
	
	// Security Checks
	var resLock, quitLock;
	
	function decLock() {
		resLock = 0;
	}

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
	    spoOff += 5;
	    spOffAI += 10;
	}

	if ( gs != null ) { // Good Shift
	    gs.destroy();
	    spOff += 15;
	    spOffAI += 10;
	}

	if ( ps != null ) { // Perfect Shift
	    ps.destroy();
	    spOff += 20;
	    spOffAI += 5;
	}

	if ( ls != null ) { // Late Shift
	    ls.destroy();
	    spOff += 5;
	    spOffAI += 15;
	}

	tOff = 1.7 + (2 * (gear - 1));
	gear++;
	esh = true, psh = false, gsh = false, lsh = false;
	shift = game.time.events.add(Phaser.Timer.SECOND*(tOff+0.2), displayShifts, this);
	game.time.events.add(Phaser.Timer.SECOND*(tOff/2), decLock, this);
    }

    // Forces map to loop at a certain point to
    // mimic having a longer map.
    function loopMap() {
	if ( loop == 4000 ) {
	     if ( carP.body.y <= loop ) {
		var diff = carP.body.y - carAI.body.y;
		carP.body.y = 7400;
		carAI.body.y = 7400 - diff;
	     }
	}
    } 

    // Disables looping so player can finish game.
    function turnOffLoop() {
	loop = 0;
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
	shared.music.play();
    }

    function pickAICar() {
	var no = Math.floor(Math.random()*12);

	switch(no) {
	     case 0:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'merce');
		break;
	    case 1:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'aston');
		break;
	    case 2:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'audi');
		break;
	    case 3:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'bugat');
		break;
	    case 4:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'corve');
		break;
	    case 5:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'dodge');
		break;
	    case 6:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'ferra');
		break;
	    case 7:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'lambo');
		break;
	    case 8:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'porsc');
		break;
	    case 9:
		carAI = game.add.sprite(game.world.centerX-95, 7900, 'supra');
		break;
	}
    }

    function quitGame() {
	// Destroy more stuff
	map.destroy();
	shared.music.stop();
	carP.destroy();
	carAI.destroy();

	game.state.start('desMenu');
    }

    return {
	
	create: function() {
	     // Set Up Gameplay
	     esh = true, gsh = false, psh = false, lsh = false;
	     tOff = 0.25, spOff = 1, gear = 1;
	     loop = 4000;

	     // Music Plays
	     pickMusic();

	     // Creating map
	     map = game.add.tileSprite(0, 0, 800, 8000, 'des');
	     game.world.setBounds(0, 0, 800, 8000);

	     // Turn on Physics
	     game.physics.startSystem(Phaser.Physics.ARCADE);

	     // Create Cars
	     pickAICar();
	     carP = game.add.sprite(game.world.centerX-5, 7900, 'lambo');
	     game.physics.enable(carP, Phaser.Physics.ARCADE);
	     game.physics.enable(carAI, Phaser.Physics.ARCADE);
	     game.camera.follow(carP);

	     // Key Made
	     key = game.input.keyboard;
		 
		 // Security
		 resLock = 0, quitLock = 0;

	     // Timers
	     looper = game.time.events.add(Phaser.Timer.SECOND*30, turnOffLoop, this);
	     shift = game.time.events.add(Phaser.Timer.SECOND*0.2, displayShifts, this);
	},

	update: function() {
		loopMap();

	    carP.body.y -= spOff;
		carAI.body.y -= spOff

	    if ( (resLock == 0 ) && key.isDown(Phaser.KeyCode.SHIFT) ) {
			resLock = 1;
			reset();
	    }

	    if ( (quitLock == 0 ) && carP.body.y <= -10 ) {
			quitLock = 1;
			quitGame();
	    }
	}
  };
};
