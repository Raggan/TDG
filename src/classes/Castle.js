import Phaser from 'phaser'
import Healthbar from '../HealthBar.standalone'

export default class Castle extends Phaser.Sprite {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, opts.frame)
        game.add.existing(this)
        this.name = opts.name
        game.physics.arcade.enable(this)
        this.body.moves = false
        this.health = opts.health
        this.maxHealth = opts.maxHealth

        this.healthbar = new Healthbar(game, {
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
        this.healthbar.setPercent(this.health / this.maxHealth * 100)
    }
}