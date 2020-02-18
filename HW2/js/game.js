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
