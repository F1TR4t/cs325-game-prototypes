"use strict";

GameStates.makeMainMenu = function( game, shared ) {

	var music = null;
	var playButton = null;
	var uparr = null;
	var dwnarr = null;
	var p1 = null;
	var p1Cnt = 0;
    
    function startGame(pointer) {

        //	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
        music.stop();

        //	And start the actual game
        game.state.start('Game');

    }

    function colUp() {
	
	if ( p1Cnt == 0 ) {
	    p1 = game.add.image(150, 260, 'blue');
	    p1Cnt++;
	} else if ( p1Cnt == 1 ) {
	    p1 = game.add.image(150, 260, 'gre');
	    p1Cnt++;
	} else if ( p1Cnt == 2 ) {
	    p1 = game.add.image(150, 260, 'yel');
	    p1Cnt++;
	} else if ( p1Cnt == 3 ) {
	    p1 = game.add.image(150, 260, 'ora');
	    p1Cnt++;
	} else if ( p1Cnt == 4 ) {
	    p1 = game.add.image(150, 260, 'purp');
	    p1Cnt++;
	} else {
	    p1 = game.add.image(150, 260, 'red');
	    p1Cnt = 0;
	}
    }

    function colDwn() {
	if ( p1Cnt == 1 ) {
	    p1 = game.add.image(150, 260, 'red');
	    p1Cnt--;
	} else if ( p1Cnt == 2 ) {
	    p1 = game.add.image(150, 260, 'blue');
	    p1Cnt--;
	} else if ( p1Cnt == 3 ) {
	    p1 = game.add.image(150, 260, 'gre');
	    p1Cnt--;
	} else if ( p1Cnt == 4 ) {
	    p1 = game.add.image(150, 260, 'yel');
	    p1Cnt--;
	} else if ( p1Cnt == 5 ) {
	    p1 = game.add.image(150, 260, 'ora');
	    p1Cnt--;
	} else {
	    p1 = game.add.image(150, 260, 'purp');
	    p1Cnt = 5;
	}
    }
    
    return {
    
        create: function () {
    
            //	We've already preloaded our assets, so let's kick right into the Main Menu itself.
            //	Here all we're doing is playing some music and adding a picture and button
            //	Naturally I expect you to do something significantly better :)
    
            music = game.add.audio('titleMusic');
            music.play();

    	    game.add.sprite(0, 0, 'bg');
            p1 = game.add.image(150, 260, 'red');
    
            playButton = game.add.button( 303, 470, 'playButton', startGame, null, 'over', 'out', 'down');
	    uparr = game.add.button(170, 200, 'up', colUp, null);
	    dwnarr = game.add.button(170, 370, 'dwn', colDwn, null);
    
        },
    
        update: function () {
    
            //	Do some nice funky main menu effect here
    
        }
        
    };
};
