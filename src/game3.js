var Game = function(game){

};

Game.prototype = {

	create: function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
	  game.add.sprite(0,0,"background");
    castle1 = game.add.sprite(10,250, "castle2");
    castle2 = game.add.sprite(670,240, "castle1");

    game.physics.arcade.enable(castle1);
    game.physics.arcade.enable(castle2);

		this.createMinionsWeak();

    castle1.body.moves = false;
    castle2.body.moves = false;

		this.createSpawnButtons();



	},
	render: function() {

		// this.minionsWeak.forEach(function (minion) {
		// 		game.debug.body(minion);
		// });
	  // game.debug.body(castle2);
},

	update: function() {

	game.physics.arcade.overlap(this.minionsWeak, castle2,this.minionStopMovement);

},

	spawnButtonWeakClick: function() {
		var minion = this.minionsWeak.getFirstExists(false);
		minion.reset(45,320);
		this.minionMovement(minion);
	},

	minionStopMovement: function(castle, minion) {

		minion.body.velocity.x = 0;
		minion.animations.play('attack');
	},

 minionMovement: function(minion) {
  minion.body.velocity.x = minion.speed;
 	minion.animations.play('right');
},

 createMinionsWeak: function()
 {
	 		this.minionsWeak = this.game.add.group();
	 		this.minionsWeak.enableBody = true;
	 		this.minionsWeak.physicsBodyType = Phaser.Physics.ARCADE;
	 		this.minionsWeak.createMultiple(50, 'minion_weak');
	 		this.minionsWeak.forEach(function (minion) {
	 			minion.animations.add('right', [9, 10, 11, 12,13,14,15,16,17], 5, true);
				minion.animations.add('attack', [0,1,2,3,4,5,6,7,8], 5, true);
	 			minion.speed = 50;
	 		});
 },


 createSpawnButtons: function()
 {
	 spawnButtonWeak = game.add.button(30,30, 'spawnbutton_minion_weak', this.spawnButtonWeakClick, this);
	 spawnButtonWeak.anchor.setTo(0.5,0.5);

 }

};
