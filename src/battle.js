import Phaser from 'phaser';

import { MinionKnightRight } from './minionConfig.js';
import { ZombieMaleLeft } from './minionConfig.js';
import { AdventureGirlRight } from './minionConfig.js';
import { JackRight } from './minionConfig.js';
import { NinjaGuyRight } from './minionConfig.js';
import { RobotRight } from './minionConfig.js';
import Castle from './classes/Castle';
import Player from './classes/Player';
import Minion from './classes/Minion';
import SpawnButton from './classes/SpawnButton';
import ResourcesButton from './classes/ResourcesButton';

var Battle = function(game) {
  this.game = game;
};

Battle.prototype = {
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.add.sprite(0, 0, 'background');
    this.monsterSpawnTimer = 0;
    this.monsterSpawnTime = this.game.rnd.integerInRange(2500, 10000);

    // players
    this.players = [
      new Player(this.game, {
        name: 'P1',
        castle: new Castle(this.game, {
          name: 'castle1',
          key: 'castle2',
          x: 10,
          y: 290,
          health: this.game.global.castleHealth,
          maxHealth: this.game.global.castleMaxHealth,
          enemy: false
        }),
        resources: 100,
        maxResources: 500,
        maxResourcesFactor: 1.05,
        resourcesRefreshRate: 1 / 6,
        resourcesRefreshFactor: 1.1,
        resourcesMaxLevel: 8,
        resourcesUpdateCost: 100,
        resourcesUpdateFactor: 1.25
      }),
      new Player(this.game, {
        name: 'P2',
        castle: new Castle(this.game, {
          name: 'castle2',
          key: 'castle1',
          x: 670,
          y: 280,
          health:
            this.game.global.castleMaxHealth +
            (this.game.global.level - 1) * 100,
          maxHealth:
            this.game.global.castleMaxHealth +
            (this.game.global.level - 1) * 100,
          enemy: true
        })
      })
    ];

    this.players[0].spawnButtonGroup.add(
      new SpawnButton(this.game, {
        x: 150,
        y: 20,
        key: 'spawnbutton_knight',
        player: this.players[0],
        cost: MinionKnightRight.cost,
        minionOptions: MinionKnightRight
      })
    );

    this.players[0].spawnButtonGroup.add(
      new SpawnButton(this.game, {
        x: 220,
        y: 20,
        key: 'spawnbutton_AdventureGirl',
        player: this.players[0],
        cost: AdventureGirlRight.cost,
        minionOptions: AdventureGirlRight
      })
    );

    this.players[0].spawnButtonGroup.add(
      new SpawnButton(this.game, {
        x: 290,
        y: 20,
        key: 'spawnbutton_Jack',
        player: this.players[0],
        cost: JackRight.cost,
        minionOptions: JackRight
      })
    );

    this.players[0].spawnButtonGroup.add(
      new SpawnButton(this.game, {
        x: 360,
        y: 20,
        key: 'spawnbutton_NinjaGuy',
        player: this.players[0],
        cost: NinjaGuyRight.cost,
        minionOptions: NinjaGuyRight
      })
    );

    this.players[0].spawnButtonGroup.add(
      new SpawnButton(this.game, {
        x: 430,
        y: 20,
        key: 'spawnbutton_Robot',
        player: this.players[0],
        cost: RobotRight.cost,
        minionOptions: RobotRight
      })
    );

    this.game.add.image(645, 20, 'resources');
    this.resourcesText = this.add.text(
      697,
      32,
      this.players[0].resources + ' / ' + this.players[0].maxResources,
      {
        font: '16px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      }
    );

    this.resourcesButton = new ResourcesButton(this.game, {
      x: 540,
      y: 20,
      key: 'resources_button',
      player: this.players[0]
    });

    this.LevelCounter = this.game.add.image(
      this.game.width / 2,
      this.game.height - 20,
      'LevelCounter'
    );
    this.LevelCounter.anchor.setTo(0.5, 0.5);
    this.add.text(
      this.game.width / 2 - 28,
      this.game.height - 32,
      'LVL ' + this.game.global.level,
      {
        font: '12px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      }
    );

    this.healthText1 = this.game.add.text(
      10 + 37,
      270 - 27,
      this.players[0].castle.health + ' / ' + this.players[0].castle.maxHealth,
      {
        font: '7px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      }
    );

    this.healthText2 = this.game.add.text(
      670 + 37,
      260 - 27,
      this.players[1].castle.health + ' / ' + this.players[1].castle.maxHealth,
      {
        font: '7px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      }
    );
    if (this.game.global.level > 1) {
      this.newLevelText = this.add.text(
        this.game.width / 2 - 300,
        this.game.height / 2,
        'Your enemy becomes stronger',
        {
          font: '40px Arial Black',
          fill: '#fff',
          strokeThickness: 4
        }
      );
      this.newLevelText.tween = this.game.add.tween(this.newLevelText).to(
        {
          alpha: 1,
          y: 0,
          x: this.game.width / 2 - 300
        },
        2000,
        Phaser.Easing.Cubic.Out
      );
      this.newLevelText.tween.onComplete.add(function(text, tween) {
        text.kill();
      });
      this.newLevelText.tween.start();
    } else {
      this.newLevelText = this.add.text(
        this.game.width / 2 - 100,
        this.game.height / 2,
        'New try',
        {
          font: '40px Arial Black',
          fill: '#fff',
          strokeThickness: 4
        }
      );
      this.newLevelText.tween = this.game.add.tween(this.newLevelText).to(
        {
          alpha: 1,
          y: 0,
          x: this.game.width / 2 - 100
        },
        2000,
        Phaser.Easing.Cubic.Out
      );
      this.newLevelText.tween.onComplete.add(function(text, tween) {
        text.kill();
      });
      this.newLevelText.tween.start();
    }
  },

  // render: function() {
  //     this.players[0].minionGroup.forEach(function (minion) {
  //       		this.game.debug.body(minion)
  //     }, this)
  //     this.game.debug.body(this.players[1].castle)
  // },

  update: function() {
    this.game.physics.arcade.collide(
      this.players[0].minionGroup,
      this.players[1].castle,
      Minion.collideHandler
    );
    this.game.physics.arcade.collide(
      this.players[1].minionGroup,
      this.players[0].castle,
      Minion.collideHandler
    );
    this.game.physics.arcade.overlap(
      this.players[0].minionGroup,
      this.players[1].minionGroup,
      Minion.collideHandler
    );

    if (this.players[0].resources < this.players[0].maxResources) {
      this.players[0].resources =
        this.players[0].resources + this.players[0].resourcesRefreshRate;
      this.resourcesText.text =
        Math.round(this.players[0].resources) +
        ' / ' +
        Math.round(this.players[0].maxResources);
    }
    this.monsterSpawnTimer += this.time.elapsed;
    if (this.monsterSpawnTimer > this.monsterSpawnTime) {
      this.monsterSpawnTimer = 0;

      const minion = new Minion(this.game, ZombieMaleLeft, {
        //mainPlayer: this.players[0]
      });
      minion.mainPlayer = this.players[0];
      minion.dmg = minion.dmg + (this.game.global.level - 1) / 50;
      minion.health = minion.health + (this.game.global.level - 1) * 10;
      this.players[1].minionGroup.add(minion);
      this.monsterSpawnTime = this.game.rnd.integerInRange(
        2500,
        10000 - (this.game.global.level - 1) * 100
      );
    }

    this.game.global.castleHealth = this.players[0].castle.health;
    this.healthText1.text =
      Math.round(this.players[0].castle.health) +
      ' / ' +
      Math.round(this.players[0].castle.maxHealth);
    this.healthText2.text =
      Math.round(this.players[1].castle.health) +
      ' / ' +
      Math.round(this.players[1].castle.maxHealth);
  }
};

export default Battle;
