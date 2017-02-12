var Game = function (game) {

};

Game.prototype = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, "background");
        castle1 = game.add.sprite(10, 250, "castle2");
        castle2 = game.add.sprite(670, 240, "castle1");
        //castle1.body.immovable = true;
        player = game.add.sprite(55, 315, 'dude');
        enemy = game.add.sprite(715, 315, 'enemy');

        player.health = 100;
        enemy.health = 50;
        game.physics.arcade.enable(player);
        game.physics.arcade.enable(enemy);
        game.physics.arcade.enable(castle1);
        game.physics.arcade.enable(castle2);
        player.animations.add('right', [5, 6, 7, 8], 5, true);
        enemy.animations.add('left', [0, 1, 2, 3], 5, true);
        castle1.body.moves = false;
        castle2.body.moves = false;

        //player.body.setSize(200,60,0,0);

    },
    render: function () {
        // game.debug.body(player);
        // game.debug.body(enemy);
        // game.debug.body(castle1);
        // game.debug.body(castle2);
    },

    update: function () {

        if (game.physics.arcade.overlap(player, castle2)) {

            this.playerStopMovement(player);

        }
        else {
            this.playerMovement(player);
        }

        if (game.physics.arcade.overlap(enemy, castle1)) {

            this.enemyStopMovement(enemy);

        }
        else {
            this.enemyMovement(enemy);
        }

        if (game.physics.arcade.overlap(player, enemy)) {

            this.playerStopMovement(player);
            //this.enemyStopMovement(enemy);
            //player.kill();
        }

    },

    playerHit: function (player, enemy) {
        game.time.events.loop(1000, enemy.damage(1), this);

    },
    playerStopMovement: function (player) {
        player.animations.stop();
        player.body.velocity.x = 0;
        player.frame = 4;
    },

    playerMovement: function (player) {
        player.body.velocity.x = 50;
        player.animations.play('right');
    },

    enemyStopMovement: function (enemy) {
        enemy.animations.stop();
        enemy.body.velocity.x = 0;
        enemy.frame = 4;
    },

    enemyMovement: function (enemy) {
        enemy.body.velocity.x = -50;
        enemy.animations.play('left');
    }

};