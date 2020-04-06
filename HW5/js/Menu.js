"use strict";

var p1Cnt;

GameStates.makeMenu = function( game, shared ) {
	
    return {
    
        create: function () { // Will need switch statements for a dynamic title screen
			
			// Have music Playing
			
			
    	    // Have Background ready
			game.add.sprite(0, 0, 'bg_des');
			game.add.sprite(186, 307, 'des_cl1');
			game.add.sprite(459, 402, 'des_cl2');
			game.add.sprite(550, 139, 'des_cl3');
    
            // Have Buttons Ready
			
			
        },
    
        update: function () {
    
            //	Background stuff
    
        }
        
    };
};
