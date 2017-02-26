import Phaser from 'phaser'
import Minion from './Minion'

export default class SpawnButton extends Phaser.Button {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, null, null, opts.overFrame, opts.outFrame, opts.downFrame, opts.upFrame)
        this.events.onInputDown.add(this.onButtonClick, this)
        this.game = game
        game.add.existing(this)
        this.player = opts.player
        this.cost = opts.cost
        this.minionOptions = opts.minionOptions
        this.resourceText = this.game.add.text(17,0, this.cost,{font: "12px Arial Black", fill: "#fff"})
        this.addChild(this.resourceText)
    }

    onButtonClick() {
        const minion = new Minion(this.game, this.minionOptions)

        if (this.player.resources >= minion.cost) {
            this.player.resources = this.player.resources - minion.cost
            this.player.minionGroup.add(minion)
        }
        else {
            minion.kill();
        }

    }
}