/**
 * This portion focuses on initializing the size of the game,
 * and the methods (which are called scenes).
 */
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload, // For Loading assets
        create: create, // For creating an environment
        update: update // Constantly checking and adjusting the environment
    }
};

var game = new Phaser.Game(config); // Game itself

// Going to laod audio files for the game
function preload () {
	this.load.setPath('../assets/'); // Sets path
	
	this.load.audio('BD', 'kick.ogg'); // Loads file
	this.load.audio('SN', 'snare.wav');
	this.load.audio('LT', 'tom2.ogg');
	this.load.audio('MT', 'tom3.ogg');
	this.load.audio('HT', 'tom1.ogg');
	this.load.audio('CH', 'ch.ogg');
	this.load.audio('OH', 'oh.ogg');
}

function create () { // Should utilize the assets
	var bd = this.sound.add('BD');
	var sn = this.sound.add('SN');
	var lt = this.sound.add('LT');
	var mt = this.sound.add('MT');
	var ht = this.sound.add('HT');
	var ch = this.sound.add('CH');
	var oh = this.sound.add('OH');

	this.input.keyboard.on('keydown-B', function () {
        	bd.play();
    	});

	this.input.keyboard.on('keydown-G', function () {
        	sn.play();
    	});

	this.input.keyboard.on('keydown-N', function () {
		lt.play();
	});

	this.input.keyboard.on('keydown-H', function () {
        	mt.play();
    	});

	this.input.keyboard.on('keydown-J', function () {
        	ht.play();
	});

	this.input.keyboard.on('keydown-Y', function () {
        	ch.play();
	});

	this.input.keyboard.on('keydown-U', function () {
        	oh.play();
    	});


}

function update () {

}
