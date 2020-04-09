"use strict";

GameStates.makeGame = function( game, shared ) {
    
    // General Stuff
    var car1, car2;
    var road;
    var key1, key2;
    var music;

    // Player 1 Focused
    var currentSpeed1 = 0;
    var maxVeloc1 = 300;

    var pShift1 = null, gShift1 = null, lShift1 = null;
    var gtime1, ptime1, ltime1;
    var gt1 = 0, pt1 = 0, lt1 = 0, et1 = 1;
    var timeOff1 = 1;
    
    // Player 2 Focused
    var currentSpeed2 = 0;
    var maxVeloc2 = 300;

    var pShift2 = null, gShift2 = null, lShift2 = null;
    var gtime2, ptime2, ltime2;
    var gt2 = 0, pt2 = 0, lt2 = 0, et2 = 1;
    var timeOff2 = 1;
   
    function quitGame() {
	// Delete unused objects and show results
	currentSpeed1 = 0;
	gt1 = 0, pt1 = 0; lt1 = 0, et1 = 0;
	timeOff1 = 0, maxVeloc1 = 0;
	if ( gShift1 != null ) {
	    gShift1.destroy();
	}
	if ( pShift1 != null ) {
	    pShift1.destroy();
	}
	if ( lShift1 != null ) {
	    lShift1.destroy();
	}
	car1.destroy();
	key1.destroy();
	game.time.events.remove(gtime1);
	game.time.events.remove(ptime1);
	game.time.events.remove(ltime1);
	
	currentSpeed2 = 0;
	gt2 = 0, pt2 = 0; lt2 = 0, et2 = 0, timeOff2 = 0;
	timeOff2 = 0, maxVeloc2 = 0;
	if ( gShift2 != null ) {
	    gShift2.destroy();
	}
	if ( pShift2 != null ) {
	    pShift2.destroy();
	}
	if ( lShift2 != null ) {
	    lShift2.destroy();
	}
	car2.destroy();
	key2.destroy();
	game.time.events.remove(gtime2);
	game.time.events.remove(ptime2);
	game.time.events.remove(ltime2);

	road.destroy();
        // Go back to Menu State
        game.state.start('Menu');

    }

    function disGoodP1() {
	et1 = 0;
	gShift1 = game.add.sprite(520, 200, 'gs');
	gShift1.fixedToCamera = true;
	gt1 = 1;
    }

    function disPerfP1() {
	gt1 = 0;
	gShift1.destroy();
	pShift1 = game.add.sprite(520, 200, 'ps');
	pShift1.fixedToCamera = true;
	pt1 = 1;
    }

    function disLateP1() {
	pt1 = 0;
	pShift1.destroy();
	lShift1 = game.add.sprite(520,200,'ls');
	lShift1.fixedToCamera = true;
	lt1 = 1;
    }

    function resetP1() {
	if ( gShift1 != null ) {
	    gShift1.destroy();
	}
	if ( pShift1 != null ) {
	    pShift1.destroy();
	}
	if ( lShift1 != null ) {
	    lShift1.destroy();
	}
	game.time.events.remove(gtime1);
	game.time.events.remove(ptime1);
	game.time.events.remove(ltime1);
	et1 = 1, gt1 = 0, pt1 = 0, lt1 = 0;
	timeOff1 += 2;
	gtime1 = game.time.events.add(Phaser.Timer.SECOND*(timeOff1+1), disGoodP1, this);
	ptime1 = game.time.events.add(Phaser.Timer.SECOND*(timeOff1+2), disPerfP1, this);
	ltime1 = game.time.events.add(Phaser.Timer.SECOND*(timeOff1+4), disLateP1, this);
    }

    function disGoodP2() {
	et2 = 0;
	gShift2 = game.add.sprite(280, 200, 'gs');
	gShift2.fixedToCamera = true;
	gt2 = 1;
    }

    function disPerfP2() {
	gt2 = 0;
	gShift2.destroy();
	pShift2 = game.add.sprite(280, 200, 'ps');
	pShift2.fixedToCamera = true;
	pt2 = 1;
    }

    function disLateP2() {
	pt2 = 0;
	pShift2.destroy();
	lShift2 = game.add.sprite(280,200,'ls');
	lShift2.fixedToCamera = true;
	lt2 = 1;
    }

    function resetP2() {
	if ( gShift2 != null ) {
	    gShift2.destroy();
	}
	if ( pShift2 != null ) {
	    pShift2.destroy();
	}
	if ( lShift2 != null ) {
	    lShift2.destroy();
	}
	game.time.events.remove(gtime2);
	game.time.events.remove(ptime2);
	game.time.events.remove(ltime2);
	et2 = 1, gt2 = 0, pt2 = 0, lt2 = 0;
	timeOff2 += 2;
	gtime2 = game.time.events.add(Phaser.Timer.SECOND*(timeOff2+1), disGoodP2, this);
	ptime2 = game.time.events.add(Phaser.Timer.SECOND*(timeOff2+2), disPerfP2, this);
	ltime2 = game.time.events.add(Phaser.Timer.SECOND*(timeOff2+4), disLateP2, this);
    }

    
    return {
    
        create: function () {
	    // Have Assets Load
	    gtime1 = game.time.events.add(Phaser.Timer.SECOND*(timeOff1+1), disGoodP1, this);
	    ptime1 = game.time.events.add(Phaser.Timer.SECOND*(timeOff1+2), disPerfP1, this);
	    ltime1 = game.time.events.add(Phaser.Timer.SECOND*(timeOff1+4), disLateP1, this);

	    gtime2 = game.time.events.add(Phaser.Timer.SECOND*(timeOff2+1), disGoodP2, this);
	    ptime2 = game.time.events.add(Phaser.Timer.SECOND*(timeOff2+2), disPerfP2, this);
	    ltime2 = game.time.events.add(Phaser.Timer.SECOND*(timeOff2+4), disLateP2, this);

	    // Have Music Load
	    
   	    // Have Map Load
	    road = game.add.tileSprite(0, 0, 800, 24000, 'road_des');

	    game.world.setBounds(0, 0, 800, 24000);

	    // Have Cars Load
	    car1 = game.add.sprite(game.world.centerX, 23800, 'lambo');
	    car1.anchor.setTo(0.05, -0.30);
	    car2 = game.add.sprite(game.world.centerX, 23800, 'ferrari');
	    car2.anchor.setTo(1.15, -0.30);

	    // Start Game Physics
	    game.physics.startSystem(Phaser.Physics.ARCADE);

	    // Enable physics for the cars and set up speeds
	    game.physics.enable(car1, Phaser.Physics.ARCADE);

	    // Create Controls
	    key1 = game.input.keyboard;
	    key2 = game.input.keyboard;

	    // Camera follow Car 1 for now
	    game.camera.follow(car1);
	    
        },
    
        update: function () {
	   if ( (et1 == 1) && (gt1 == 0) && (pt1 == 0) && (lt1 == 0) && key1.isDown(Phaser.KeyCode.UP) ) {
		resetP1();
		maxVeloc1 += 120;
	   } else if ( (et1 == 0) && (gt1 == 1) && (pt1 == 0) && (lt1 == 0) && key1.isDown(Phaser.KeyCode.UP) ) {
		resetP1();
		maxVeloc1 += 200;
	   } else if ( (et1 == 0) && (gt1 == 0) && (pt1 == 1) && (lt1 == 0) && key1.isDown(Phaser.KeyCode.UP) ) {
		resetP1();
		maxVeloc1 += 250;
	   } else if ( (et1 == 0) && (gt1 == 0) && (pt1 == 0) && (lt1 == 1) && key1.isDown(Phaser.KeyCode.UP) ) {
		resetP1();
		maxVeloc1 += 180;
	   }

	   if ( currentSpeed1 < maxVeloc1 ) {
		currentSpeed1++;
	   }
	   
	   game.physics.arcade.velocityFromRotation(game.physics.arcade.angleToXY(car1, 390, -5400), currentSpeed1, car1.body.velocity);

	   if ( car1.body.y <= 0 ) {
		quitGame();
	   }
	   
	   if ( (et2 == 1) && (gt2 == 0) && (pt2 == 0) && (lt2 == 0) && key2.isDown(Phaser.KeyCode.W) ) {
		resetP2();
		maxVeloc2 += 120;
	   } else if ( (et2 == 0) && (gt2 == 1) && (pt2 == 0) && (lt2 == 0) && key2.isDown(Phaser.KeyCode.W) ) {
		resetP2();
		maxVeloc2 += 200;
	   } else if ( (et2 == 0) && (gt2 == 0) && (pt2 == 1) && (lt2 == 0) && key2.isDown(Phaser.KeyCode.W) ) {
		resetP2();
		maxVeloc2 += 250;
	   } else if ( (et2 == 0) && (gt2 == 0) && (pt2 == 0) && (lt2 == 1) && key2.isDown(Phaser.KeyCode.W) ) {
		resetP2();
		maxVeloc2 += 180;
	   }

	   if ( currentSpeed2 < maxVeloc2 ) {
		currentSpeed2++;
	   }
	   
	   game.physics.arcade.velocityFromRotation(game.physics.arcade.angleToXY(car2, 340, -5400), currentSpeed2, car2.body.velocity);

	   if ( car2.body.y <= 0 ) {
		quitGame();
	   }

	}       
    };
};
