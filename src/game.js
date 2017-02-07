var Game = function(game){

};

Game.prototype = {

	create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
	  game.add.sprite(0,0,"background");
    castle1 = game.add.sprite(10,250, "castle2");
    castle2 = game.add.sprite(670,240, "castle1");
    //castle1.body.immovable = true;
    player1 = game.add.sprite(55, 320, 'dude');
    player2 = game.add.sprite(715, 320, 'dude');
		player1.health=100;
		player2.health=50;
    game.physics.arcade.enable(player1);
    game.physics.arcade.enable(player2);
    game.physics.arcade.enable(castle1);
    game.physics.arcade.enable(castle2);
    player1.animations.add('right', [5, 6, 7, 8], 5, true);
    player2.animations.add('left', [0, 1, 2, 3], 5, true);
    castle1.body.moves = false;
    castle2.body.moves = false;



	},
	render: function() {
	game.debug.body(player1);
	game.debug.body(player2);
	game.debug.body(castle1);
	game.debug.body(castle2);
},

	update: function() {


	if (game.physics.arcade.overlap(player1, castle2)){

		this.playerStopMovement(player1);

	}
	else {
		this.playerMovement(player1);
	}

	if (game.physics.arcade.overlap(player2, castle1)){

		this.enemyStopMovement(player2);

	}
	else {
		this.enemyMovement(player2);
	}

	if (game.physics.arcade.overlap(player1, player2)){

		this.playerStopMovement(player1);
		this.enemyStopMovement(player2);
		player2.kill();
	}


},

playerHit: function(player1, player2)
{
	game.time.events.loop(1000, player2.damage(1), this);

},
playerStopMovement: function(player) {
	player.animations.stop();
	player.body.velocity.x = 0;
	player.frame =4;
},

playerMovement: function(player) {
	player1.body.velocity.x = 50;
	player1.animations.play('right');
},

enemyStopMovement: function(enemy) {
	enemy.animations.stop();
	enemy.body.velocity.x = 0;
	enemy.frame =4;
},

enemyMovement: function(enemy) {
	enemy.body.velocity.x = -50;
	enemy.animations.play('left');
}


};
