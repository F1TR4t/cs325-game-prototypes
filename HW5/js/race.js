"use strict";

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

    // Dynamic variables
    var car1 = null, car2 = null;
    var road = null;
    var music = null;

    // Static Variables
    var key1 = null, key2 = null;

    
    /* Not used function quit() {

    }*/

    /* Temp */ function preload() {
	// Maps 
	game.load.image('des', 'assets/desert.png');

	// Vehicles
	

	// Music
    }

    function create() {
	// Map Loading
	road = game.add.tileSprite(0, 0, 800, 6000, 'des');
	game.world.setBounds(0, 0, 800, 6000);

	// Car Loading

	// Music Loading

    }

    function update() {
	
    }    
}
