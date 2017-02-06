var Game = function(game){

};

Game.prototype = {

	create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,"background");
    castle2 = game.add.sprite(10,305, "castle2");
    castle1 = game.add.sprite(670,300, "castle1");
    //castle1.body.immovable = true;
    player1 = game.add.sprite(55, 370, 'dude');
    player2 = game.add.sprite(715, 370, 'dude');
    game.physics.arcade.enable(player1);
    game.physics.arcade.enable(player2);
    game.physics.arcade.enable(castle1);
    game.physics.arcade.enable(castle2);
    player1.animations.add('right', [5, 6, 7, 8], 5, true);
    player2.animations.add('left', [0, 1, 2, 3], 5, true);
    castle1.body.moves = false;
    castle2.body.moves = false;


	},

	update: function() {



    if (!game.physics.arcade.collide(player1, player2)){
      //  Move to the right
    player1.body.velocity.x = 50;
    player2.body.velocity.x = -50;

    player1.animations.play('right');
    player2.animations.play('left');
  }

  else  {
    //  Stand still
  player1.animations.stop();
  player2.animations.stop();
  player1.frame = 4;
  player2.frame = 4;

  }

	}

};
