"use strict"

GameStates.makeDesRace = function( game, shared ) {

    var map = null, carP = null, key = null;

    return {
	
	create: function() {
	     // Creating map
	     map = game.add.tilemap('des');
	     map.addTilesetImage('road', 'tiles1');
	     map.addTilesetImage('sand', 'tiles2');
	     map.addTilesetImage('signs', 'tiles3');
	     map.addTilesetImage('destown', 'tiles4');

	     // Create Cars
	     

	     // Music Plays
	     

	     // Key Made
	     
	     
	},

	update: function() {

	}
    };
};
