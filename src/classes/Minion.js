import Phaser from 'phaser'
import Healthbar from '../HealthBar.standalone'

export default class Minion extends Phaser.Sprite {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, opts.frame)
        this.game = game
        game.add.existing(this)
        game.physics.arcade.enable(this)
        this.health = opts.health
        this.maxHealth = opts.maxHealth
        this.animations.add('right', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true)
        this.animations.add('left', [8, 9, 10, 11, 12, 13, 14, 15, 16], 5, true)
        this.animations.add('attack-right', [0, 1, 2, 3, 4, 5, 6, 7], 10, true)
        this.animations.add('attack-left', [0, 1, 2, 3, 4, 5, 6, 7], 10, true)
        this.velocity = opts.velocity
        this.dmg = opts.dmg;
        this.orientation = opts.orientation
        this.cost = opts.cost
        this.targets = []
    }


    update() {
        if (this.body.velocity.x < 0) {
            this.animations.play('left')
        }
        else if (this.body.velocity.x > 0) {
            this.animations.play('right')
        }
        if (this.targets.length && this.orientation == 'right') {
            this.animations.play('attack-right')
        }
        else if (this.targets.length && this.orientation == 'left') {
            this.animations.play('attack-left')
        }

        if (!this.alive) {
            this.targets = []
        }

        if (this.targets.length) {
            this.targets.forEach((target, index) => {
                if (target.alive) {
                    target.damage(this.dmg)
                } else {
                    this.targets.splice(index, 1)
                }
            })
        }
        if (!this.targets.length) {
            this.body.velocity.x = this.velocity.x
        }
        // if (this.targets.length) {
        //     console.log(this.health, this.targets.health)
        // }
    }

    attack(enemy) {
        if (this.targets.indexOf(enemy) === -1) {
            this.body.velocity.x = 0;
            this.targets.push(enemy);
        }
    }

    static collideHandler(enemy, minion) {
        minion.attack(enemy)
        if (typeof enemy.attack === 'function') {
            enemy.attack(minion)
        }
    }
}
