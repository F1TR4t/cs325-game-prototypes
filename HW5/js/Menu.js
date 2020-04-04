"use strict";

GameStates.makeMenu = function( game, shared ) {

    var music = null;
    var bg = null;

    return {
	create: function() {
	     game.add.sprite(0, 0, 'bg');
	}
    };
};
