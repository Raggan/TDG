import Phaser from 'phaser'
import HealthBar from '../HealthBar.standalone'

export default class Castle extends Phaser.Sprite {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, opts.frame)
        this.game = game
        game.add.existing(this)
        game.physics.arcade.enable(this)
        this.name = opts.name
        this.body.immovable=true
        this.health = opts.health
        this.maxHealth = opts.maxHealth
        this.enemy = opts.enemy

        this.healthBar = new HealthBar(game, {
            x: opts.x + 63,
            y: opts.y - 20,
            width: 80,
            height: 10,
            bg: {
                color: '#651828'
            },
            bar: {
                color: '#ff0000'
            },
            animationDuration: 200,
            flipped: false
        })
        this.updateHealthBar()
    }

    damage(amount) {
        super.damage(amount)
        this.updateHealthBar()
    }

    updateHealthBar() {
        this.healthBar.setPercent(this.health / this.maxHealth * 100)
        if (this.health <= 0) {
            this.healthBar.kill();
            //this.game.state.start('Battle')
        }
    }
}