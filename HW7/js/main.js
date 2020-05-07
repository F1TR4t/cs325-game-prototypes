"use strict";

window.onload = function() {
    var game = new Phaser.Game( 800, 600, Phaser.Auto, 'game' );

    var music = null, won = 0, lost = 0;
    var shared = { music, won, lost };

    game.state.add( 'boot', GameStates.makeBoot( game ) );
    game.state.add( 'desMenu', GameStates.makeDesMenu( game, shared ) );
    game.state.add( 'desRace', GameStates.makeDesRace( game, shared ) );
	game.state.add( 'desResult', GameStates.makeDesResult( game, shared ) );
    
    game.state.start('boot');
};
