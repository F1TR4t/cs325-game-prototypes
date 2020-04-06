"use strict";

GameStates.makeMenu = function( game, shared ) {
	
    var cl1 = null, cl2 = null, cl3 = null;
    var classButton = null, playButton = null;

    function play(pointer) {
	cl1.kill();
	cl2.kill();
	cl3.kill();

	game.state.start('Game');
    }

    return {
    
        create: function () { // Will need switch statements for a dynamic title screen
			
	    // Have music Playing		
	    
	    
    	    // Have Background ready
	    game.add.sprite(0, 0, 'bg_des');
	    cl1 = game.add.sprite(112, 154, 'des_cl1');
	    cl2 = game.add.sprite(459, 352, 'des_cl2');
	    cl3 = game.add.sprite(550, 2, 'des_cl3');
    
            // Have Buttons Ready
	    playButton = game.add.button(300, 300, 'play', play, null);
			
        },
    
        update: function () {
	    cl1.centerX += 0.07;
	    cl2.centerX -= 0.09;
	    cl3.centerX += 0.06;
    
            if ( cl1.centerX >= 900 ) {
		cl1.centerX = -100;
	    }

	    if ( cl2.centerX <= -300 ) {
		cl2.centerX = 900;
	    }

	    if ( cl3.centerX >= 1100 ) {
		cl3.centerX = -250;
	    }
    
        }
        
    };
};
