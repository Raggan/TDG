var Game = function(game){

};

Game.prototype = {

	create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,"background");
    game.add.sprite(10,305, "castle2");
    castle1 = game.add.sprite(670,300, "castle1");
    //castle1.body.immovable = true;
    player = game.add.sprite(55, 370, 'dude');
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(castle1);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    castle1.body.moves = false;



	},

	update: function() {


    if (game.physics.arcade.collide(player, castle1)) {
      //  Stand still
    player.animations.stop();

    player.frame = 4;
    }
    else {
      //  Move to the right
    player.body.velocity.x = 150;

    player.animations.play('right');
  }

	}

};
