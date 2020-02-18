var config = 
	{
		type: Phaser.AUTO,
		width: 800,
		height: 640,
		parent: 'game',
		scene:
		{
			preload: preload,
			create: create,
			update:, update
		}
	};

var game = new Phaser.Game(config);

var keys; /// Keyboard Input

var bd; // Sounds to play
var sn;

var bg; // Temp BG

function preload() {
	this.load.image('BG', 'assets/bg.jpg');

	this.load.audio('BD', 'assets/bd.wav');
	this.load.audio('SN', 'assets/sn.wav');
}

function create() {
	keys = this.input.keyboard.addKeys("B, H");

	bg = this.add.image(800, 600, 'BG').setOrigin(1);

	bd = this.sound.add('BD');
	sn = this.sound.add('SN');
}

function update() {
	if ( keys.B.isDown ) {
		bd.play();
	}

	if ( keys.H.isDown ) {
		sn.play();
	}
}
