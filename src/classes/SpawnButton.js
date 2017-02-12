import Phaser from 'phaser'
import Minion from './Minion'

export default class SpawnButton extends Phaser.Button {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, null, null, opts.overFrame, opts.outFrame, opts.downFrame, opts.upFrame)
        this.anchor.setTo(0.5, 0.5)
        this.events.onInputDown.add(this.onButtonClick, this)
        this.game = game
        game.add.existing(this)
        this.player = opts.player
    }

    onButtonClick() {
        const minion = new Minion(this.game, {
            x: 20,
            y: 220,
            key: 'minion_weak',
            health: 100,
            maxHealth: 100,
            velocity: {
                x: 50,
                y: 0
            },
            dmg: 10
        })
        this.player.minionGroup.add(minion)
    }
}