"use strict";

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

    var shared = {}; // If want high score shown in main menu or something

    // Create Game States
    game.state.add( 'Boot', GameStates.makeBoot(game));
    game.state.add( 'Menu', GameStates.makeBoot(game));
    game.state.add( 'Game', GameStates.makeBoot(game));

    // Start Boot
    game.state.start('Boot');
}
