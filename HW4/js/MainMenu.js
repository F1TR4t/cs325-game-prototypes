"use strict";

var p1Cnt;

GameStates.makeMainMenu = function( game, shared ) {

	var music = null;
	var playButton = null;
	var lambopic = null;
	var ferrpic = null;
	p1Cnt = 0;
    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('Game');

    }

    function chooseLambo(pointer) {
	p1Cnt = 0;
    }

    function chooseFerr(pointer) {
	p1Cnt = 1;
    }
    
    return {
    
        create: function () {
    
            //	We've already preloaded our assets, so let's kick right into the Main Menu itself.
            //	Here all we're doing is playing some music and adding a picture and button
            //	Naturally I expect you to do something significantly better :)
    
            music = game.add.audio('titleMusic');
            music.play();

    	    game.add.sprite(0, 0, 'bg');
            lambopic = game.add.button(150, 200, 'lam', chooseLambo, null);
	    ferrpic = game.add.button(450, 200, 'fer', chooseFerr, null);
    
            playButton = game.add.button( 303, 470, 'playButton', startGame, null, 'over', 'out', 'down');
    
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
        
    };
};
