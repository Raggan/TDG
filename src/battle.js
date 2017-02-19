import Phaser from 'phaser'

import Castle from './classes/Castle'
import Player from './classes/Player'
import Minion from './classes/Minion'
import SpawnButton from './classes/SpawnButton'
import ResourcesButton from './classes/ResourcesButton'

var Battle = function (game) {
    this.game = game
};

Battle.prototype = {

    create: function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.game.add.sprite(0, 0, "background")
        this.monsterSpawnTimer =
            this.monsterSpawnTime = this.game.rnd.integerInRange(2500, 10000)

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
                maxResources: 500,
                maxResourcesFactor: 1.05,
                resourcesRefreshRate: 1/6,
                resourcesRefreshFactor: 1.1,
                resourcesMaxLevel: 8,
                resourcesUpdateCost: 100,
                resourcesUpdateFactor: 1.25
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
            x: 150,
            y: 20,
            key: 'spawnbutton_knight',
            player: this.players[0]
        }))

        this.players[0].spawnButtonGroup.add(new SpawnButton(this.game, {
            x: 220,
            y: 20,
            key: 'spawnbutton_knight',
            player: this.players[0]
        }))

        this.players[0].spawnButtonGroup.add(new SpawnButton(this.game, {
            x: 290,
            y: 20,
            key: 'spawnbutton_knight',
            player: this.players[0]
        }))

        this.players[0].spawnButtonGroup.add(new SpawnButton(this.game, {
            x: 360,
            y: 20,
            key: 'spawnbutton_knight',
            player: this.players[0]
        }))

        this.players[0].spawnButtonGroup.add(new SpawnButton(this.game, {
            x: 430,
            y: 20,
            key: 'spawnbutton_knight',
            player: this.players[0]
        }))

        this.game.add.image(645,20, 'resources')
        this.resourcesText = this.add.text(697,32,this.players[0].resources + ' / ' + this.players[0].maxResources, {
            font: '16px Arial Black',
            fill: '#fff',
            strokeThickness: 4
        })

        this.resourcesButton = new ResourcesButton(this.game, {
            x: 540,
            y: 20,
            key: 'resources_button',
            player: this.players[0]
        })


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

        if (this.players[0].resources < this.players[0].maxResources) {
            this.players[0].resources = this.players[0].resources + this.players[0].resourcesRefreshRate
            this.resourcesText.text = Math.round(this.players[0].resources) + ' / ' + Math.round(this.players[0].maxResources)
        }
        this.monsterSpawnTimer += this.time.elapsed
        if (this.monsterSpawnTimer > this.monsterSpawnTime) {
            this.monsterSpawnTimer = 0

            const minion = new Minion(this.game, {
                x: 670,
                y: 315,
                key: 'enemy_weak',
                health: 200,
                maxHealth: 200,
                velocity: {
                    x: -50,
                    y: 0
                },
                dmg: 1/12,
                orientation: 'left',
                cost: 100,
                mainPlayer: this.players[0]
            })
            this.players[1].minionGroup.add(minion)
            this.monsterSpawnTime = this.game.rnd.integerInRange(2500, 10000)
        }
    }
}

export default Battle