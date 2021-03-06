"use strict";

window.onload = function() {
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var keys;
    var bd;
    var sn;
    var ch;
    var oh;
    var lmt;
    var mt;
    var lt;

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'drum', 'assets/drums.png' );

	game.load.audio( 'bass', 'assets/bd.wav' );
	game.load.audio( 'snare', 'assets/sn.wav' );
	game.load.audio( 'close', 'assets/ch.wav' );
	game.load.audio( 'open', 'assets/oh.wav' );
	game.load.audio( 'lemt', 'assets/lmt.wav' );
	game.load.audio( 'ment', 'assets/mt.wav' );
	game.load.audio( 'lent', 'assets/lt.wav' );
    }
    
    var drums;
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        drums = game.add.sprite( game.world.centerX, game.world.centerY, 'drum' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        drums.anchor.setTo( 0.5, 0.4 );
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Andale Mono", fill: "#ffffff", align: "left" };
        var text = game.add.text( game.world.centerX, 10, "B for Bass Drum\t\t\t\tN for Low Tom\t\t\t\tG for Snare\n", style );
	var textTwo = game.add.text( game.world.centerX, 5, "H for Mid Tom\t\t\t\tJ for Low Mid Tom\n", style );
	var textThre = game.add.text( game.world.centerX, 35, "T for Closed Hat\t\t\t\tY for Open Hat", style );
        text.anchor.setTo( 0.5, 0.0 );
	textTwo.anchor.setTo( 0.5, -0.5);
	textThre.anchor.setTo( 0.5, -1.0);

	bd = game.sound.add('bass');
	sn = game.sound.add('snare');
	ch = game.sound.add('close');
	oh = game.sound.add('open');
	lmt = game.sound.add('lemt');
	mt = game.sound.add('ment');
	lt = game.sound.add('lent');

	keys = game.input.keyboard;
    }
    
    function update() {
	if ( keys.isDown(Phaser.KeyCode.B) ) {
		bd.play();
	}

	if ( keys.isDown(Phaser.KeyCode.G) ) {
		sn.play();
	}

	if (keys.isDown(Phaser.KeyCode.N) ) {
		lt.play();
	}

	if (keys.isDown(Phaser.KeyCode.H) ) {
		lmt.play();
	}

	if (keys.isDown(Phaser.KeyCode.J) ) {
		mt.play();
	}

	if (keys.isDown(Phaser.KeyCode.T) ) {
		ch.play();
	}

	if (keys.isDown(Phaser.KeyCode.Y) ) {
		oh.play();
	}
    }
};
