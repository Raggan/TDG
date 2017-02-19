import Phaser from 'phaser'

export default class ResourcesButton extends Phaser.Button {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, null, null, opts.overFrame, opts.outFrame, opts.downFrame, opts.upFrame)
        this.anchor.setTo(0.5, 0.5)
        this.events.onInputDown.add(this.onButtonClick, this)
        this.game = game
        game.add.existing(this)
        this.player = opts.player
        this.resourcesLevel = 1
    }

    onButtonClick() {
        if (this.resourcesLevel <= this.player.resourcesMaxLevel && this.player.resources >= this.player.resourcesUpdateCost) {
            this.player.resources = this.player.resources - this.player.resourcesUpdateCost
            this.player.resourcesRefreshRate = this.player.resourcesRefreshRate * this.player.resourcesRefreshFactor
            this.player.maxResources = this.player.maxResources * this.player.maxResourcesFactor
            this.player.resourcesUpdateCost = this.player.resourcesUpdateCost * this.player.resourcesUpdateFactor
            this.resourcesLevel++
        }
    }
}