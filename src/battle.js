import HealthBar from './HealthBar.standalone'
import Phaser from 'phaser'

import Castle from './classes/Castle'
import Player from './classes/Player'
import Minion from './classes/Minion'
import SpawnButton from './classes/SpawnButton'

var Battle = function (game) {
    this.game = game
};

Battle.prototype = {

    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.add.sprite(0, 0, "background");

        // players
        this.players = [
            new Player(this.game, {
                name: 'Erk',
                castle: new Castle(this.game, {
                    name: 'castle1',
                    key: 'castle2',
                    x: 10,
                    y: 250,
                    health: 1000,
                    maxHealth: 1000
                }),
                resources: 100,
                maxResources: 500
            }),
            new Player(this.game, {
                name: 'Simon',
                castle: new Castle(this.game, {
                    name: 'castle2',
                    key: 'castle1',
                    x: 670,
                    y: 240,
                    health: 1000,
                    maxHealth: 1000
                })
            })
        ]

        this.players[0].spawnButtonGroup.add(new SpawnButton(this.game, {
            x: this.game.width-500,
            y: this.game.height-20,
            key: 'spawnbutton_minion_weak',
            player: this.players[0]
        }))

        var resourcesText = this.add.text(450,30, 'Ressourcen: ' + this.players[0].resources + ' / ' + this.players[0].maxResources, {
            font: '24px Arial Black',
            fill: '#fff',
            strokeThickness: 4
        });

        this.time.events.loop(500, function() {
            if (this.players[0].resources < this.players[0].maxResources) {
                this.players[0].resources++
                resourcesText.text = 'Ressourcen: ' + this.players[0].resources + ' / ' + this.players[0].maxResources
            }
        }, this)

        this.time.events.loop(5000, function() {
            const minion = new Minion(this.game, {
                x: 670,
                y: 315,
                key: 'enemy_weak',
                health: 100,
                maxHealth: 100,
                velocity: {
                    x: -50,
                    y: 0
                },
                dmg: 1/12,
                orientation: 'left',
                cost: 100
            })
            this.players[1].minionGroup.add(minion)
        }, this)
    },

    // render: function() {
    //     this.players[0].minionGroup.forEach(function (minion) {
    //       		this.game.debug.body(minion)
    //     }, this)
    //     this.game.debug.body(this.players[1].castle)
    // },

    update: function() {
        this.game.physics.arcade.collide(this.players[0].minionGroup, this.players[1].castle, Minion.collideHandler)
        this.game.physics.arcade.collide(this.players[1].minionGroup, this.players[0].castle, Minion.collideHandler)
        this.game.physics.arcade.overlap(this.players[0].minionGroup, this.players[1].minionGroup, Minion.collideHandler)
     }
};

export default Battle