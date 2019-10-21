import HealthBar from './HealthBar.standalone';
import Phaser from 'phaser';

import Castle from './classes/Castle';
import Player from './classes/Player';
import Minion from './classes/Minion';
import SpawnButton from './classes/SpawnButton';

var Battle = function(game) {
  this.game = game;
};

Battle.prototype = {
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.sprite(0, 0, 'background');

    // players
    this.players = [
      new Player(this.game, {
        name: 'P1',
        castle: new Castle(this.game, {
          name: 'castle1',
          key: 'castle2',
          x: 10,
          y: 250,
          health: 1000,
          maxHealth: 1000
        })
      }),
      new Player(this.game, {
        name: 'P2',
        castle: new Castle(this.game, {
          name: 'castle2',
          key: 'castle1',
          x: 670,
          y: 240,
          health: 1000,
          maxHealth: 1000
        })
      })
    ];
    this.players[0].spawnButtonGroup.add(
      new SpawnButton(this.game, {
        x: 10,
        y: 10,
        key: 'spawnbutton_minion_weak',
        player: this.players[0]
      })
    );
    //this.enemySpawnTimer = this.time.events.loop(5000, this.spawnEnemys, this);
  },
  render: function() {
    // this.minionsWeak.forEach(function (minion) {
    //  		game.debug.body(minion);
    // });
    // game.debug.body(castle2);
    // this.enemysWeak.forEach(function (enemy) {
    // 		game.debug.body(enemy);
    // });
  },

  update: function() {
    this.game.physics.arcade.collide(
      this.players[0].minionGroup,
      this.players[1].castle,
      Minion.overlapHandler
    );
    //game.physics.arcade.overlap(this.minionsWeak, castle2, this.minionStartFightWithCastle, null, this);
    //game.physics.arcade.overlap(this.minionsWeak, this.enemysWeak,this.minionStartFight, null, this);
  },

  // spawnEnemys: function(){
  // 	var enemy = this.enemysWeak.getFirstExists(false);
  // 	enemy.reset(640,320);
  // 	this.enemyMovement(enemy);
  // },

  // minionStartFight: function(minion, enemy) {
  //
  // 	minion.body.velocity.x = 0;
  // 	enemy.body.velocity.x = 0;
  // 	minion.animations.play('attack');
  // 	enemy.animations.play('attack');
  // 	if (!minion.fights == true) {this.game.time.events.loop(1000, function(obj1, obj2){    this.minionDamage(minion, enemy);}, this); minion.fights = true;}
  //
  // },

  minionStartFightWithCastle: function(castle, minion) {
    minion.body.velocity.x = 0;
    minion.animations.play('attack');
    if (!minion.fights == true) {
      this.game.time.events.loop(
        1000,
        function(obj1, obj2) {
          this.minionDamageCastle(castle, minion);
        },
        this
      );
      minion.fights = true;
    }
    this.updateCastleHealthBar(castle);
  },

  // enemyMovement: function(enemy) {
  //  enemy.body.velocity.x = -enemy.speed;
  //  enemy.animations.play('left');
  // },

  // createEnemysWeak: function()
  // {
  // 	 this.enemysWeak = this.game.add.group();
  // 	 this.enemysWeak.enableBody = true;
  // 	 this.enemysWeak.physicsBodyType = Phaser.Physics.ARCADE;
  // 	 this.enemysWeak.createMultiple(50, 'enemy_weak');
  // 	 this.enemysWeak.forEach(function (enemy) {
  // 		 enemy.animations.add('left', [8,9,10,11,12,13,14,15], 5, true);
  // 		 enemy.animations.add('attack', [0,1,2,3,4,5,6,7], 5, true);
  // 		 enemy.health = enemy.maxHealth = 50;
  // 		 enemy.speed = 20;
  // 		 enemy.dmg = 0;
  // 		 enemy.fights = false;
  // 	 });
  // },

  // minionDamage: function(minion, enemy) {
  //
  //  if (enemy.alive) {
  // 	 enemy.damage(minion.dmg);
  //  }
  //  else {
  // 	 this.minionMovement(minion);
  //  }
  //
  // },

  minionDamageCastle: function(castle, minion) {},

  createSpawnButtons: function() {
    //spawnButtonWeak = game.add.button(30, 30, 'spawnbutton_minion_weak', this.spawnButtonWeakClick, this);
    //spawnButtonWeak.anchor.setTo(0.5, 0.5);
  }
};

export default Battle;
