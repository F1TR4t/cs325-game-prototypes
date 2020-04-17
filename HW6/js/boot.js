var boot = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize: function boot() { Phaser.Scene.class(this, {key: "boot"}); },

    preload: function() {

	// Menu Backgrounds
	this.load.image('bg_des', 'assets/bg/des/bg.png');
	this.load.image('fg_des', 'assets/bg/des/fg.png');

	// Menu Assets
	this.load.image('play_button', 'assets/others/play_butt.png');
	this.load.json('play_butt', 'assets/others/play_butt.json');
	this.load.audio('menu', 'assets/ost/menu.mp3');

	
    }

    create: function() {

	this.scene.start('desMenu', 0);
	this.sound.add('menu').play({loop: true});
    }

});
