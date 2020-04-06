"use strict";

window.onload = function() {

	//	Create your Phaser game and inject it into the 'game' div.
	//	We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
	var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game' );
	
	var shared = {}; // Object to hold Shared Values
	
	game.state.add( 'Boot', GameStates.makeBoot( game ) );
	game.state.add( 'Menu', GameStates.makeMenu( game, shared ) );
	//game.state.add( 'Game', GameStates.makeGame( game, shared ) );

	game.state.start('Boot'); // Start Boot Phase

};
