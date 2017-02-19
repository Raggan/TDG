import Phaser from 'phaser'
import Minion from './Minion'

export default class SpawnButton extends Phaser.Button {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, null, null, opts.overFrame, opts.outFrame, opts.downFrame, opts.upFrame)
        this.events.onInputDown.add(this.onButtonClick, this)
        this.game = game
        game.add.existing(this)
        this.player = opts.player

        this.resourceText = this.game.add.text(17,0, '100',{font: "12px Arial Black", fill: "#fff"})
        this.addChild(this.resourceText)
    }

    onButtonClick() {
        const minion = new Minion(this.game, {
            x: 50,
            y: 315,
            key: 'minion_weak',
            health: 200,
            maxHealth: 200,
            velocity: {
                x: 50,
                y: 0
            },
            dmg: 1/3,
            orientation: 'right',
            cost: 100
        })

        if (this.player.resources >= minion.cost) {
            this.player.resources = this.player.resources - minion.cost
            this.player.minionGroup.add(minion)
        }
        else {
            minion.kill();
        }

    }
}