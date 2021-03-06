"use strict";

var GameStates = {};

GameStates.makeBoot = function( game ) { // Potentially create global variables here
    return {
        init: function () { // Desktop game only
    
            //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
            game.input.maxPointers = 1;
    
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            game.stage.disableVisibilityChange = true;
	    game.scale.pageAlignHorizontally = true;
        },
    
        preload: function () { // Preparing assets
    
            // Backgrounds
	    game.load.image('bg_des', 'assets/bg/des.jpg');
	    game.load.image('des_cl1', 'assets/bg/des_cl1.png');
	    game.load.image('des_cl2', 'assets/bg/des_cl2.png');
	    game.load.image('des_cl3', 'assets/bg/des_cl3.png');		
			
	    // Maps
	    game.load.image('road_des', 'assets/maps/des.png');
	    
	    // Cars
	    game.load.image('aston', 'assets/cars/aston.png');
	    game.load.image('audi', 'assets/cars/audi.png');
	    game.load.image('bugatti', 'assets/cars/bugatti.png');
	    game.load.image('corvette', 'assets/cars/corvette.png');
	    game.load.image('dodge', 'assets/cars/dodge.png');
	    game.load.image('ferrari', 'assets/cars/ferrari.png');
	    game.load.image('lambo', 'assets/cars/lamborghini.png');
	    game.load.image('mercedes', 'assets/cars/mercedes.png');
	    game.load.image('porsche', 'assets/cars/porsche.png');
	    game.load.image('supra', 'assets/cars/supra.png');

	    // OST
	    game.load.audio('orgy', 'assets/OST/blue_monday-orgy.mp3');
	    
	    // Other Assets
	    game.load.image('class', 'assets/classic.png');
	    game.load.atlas('play', 'assets/play.png', 'assets/play.json');
	    game.load.image('ps', 'assets/ps.png');
	    game.load.image('pst', 'assets/pstxt.png');
 	    game.load.image('gs', 'assets/gs.png');
	    game.load.image('gst', 'assets/gstxt.png');
	    game.load.image('ls', 'assets/ls.png');
	    game.load.image('lst', 'assets/lstxt.png');
        },
    
        create: function () {
    
            // Go to Menu State
            game.state.start('Menu');
    
        }
    };
};
