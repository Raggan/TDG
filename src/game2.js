var Game = function(game){

};

Game.prototype = {

	create: function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
	  game.add.sprite(0,0,"background");
    castle1 = game.add.sprite(10,250, "castle2");
    castle2 = game.add.sprite(670,240, "castle1");

		this.minions = this.game.add.group();
		this.minions.enableBody = true;
		this.minions.physicsBodyType = Phaser.Physics.ARCADE;
		this.minions.createMultiple(50, 'dude');
		this.minions.forEach(function (minion) {
			minion.animations.add('right', [5, 6, 7, 8], 5, true);
		});

    game.physics.arcade.enable(castle1);
    game.physics.arcade.enable(castle2);


    castle1.body.moves = false;
    castle2.body.moves = false;

	  spawnButton = game.add.button(30,30, 'spawnbutton_minion_weak', this.spawnButtonClick, this);
		spawnButton.anchor.setTo(0.5,0.5);



	},
	render: function() {

		// this.minions.forEach(function (minion) {
		// 		game.debug.body(minion);
		// });
	  // game.debug.body(castle2);
},

	update: function() {

	game.physics.arcade.overlap(this.minions, castle2,this.minionStopMovement);

},

	spawnButtonClick: function() {
		var minion = this.minions.getFirstExists(false);
		minion.reset(45,320);
		this.minionMovement(minion);
	},

	minionStopMovement: function(castle, minions) {
		minions.animations.stop();
		minions.body.velocity.x = 0;
		minions.frame =4;
	},

 minionMovement: function(minion) {
  minion.body.velocity.x = 50;
 	minion.animations.play('right');
 }

};
