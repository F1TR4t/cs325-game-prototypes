"use strict";

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 640,
    parent: 'game',
    physics: { default: 'arcade', arcade: { debug: false } },
    scene: [boot, desMenu, desRace],
    render: {
	roundPixels: true,
	antialias: false,
	antialisGL: false
    },
    fps: { min: 30, target: 60, smoothstep: false }
};

var game = new Phaser.Game(config);
