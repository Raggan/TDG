import Phaser from 'phaser'

export default class ResourcesButton extends Phaser.Button {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, null, null, opts.overFrame, opts.outFrame, opts.downFrame, opts.upFrame)
        this.events.onInputDown.add(this.onButtonClick, this)
        this.game = game
        game.add.existing(this)
        this.player = opts.player
        this.resourcesLevel = 1
        this.resourcesLevelText = this.game.add.text(28,44, 'LV. ' + String(this.resourcesLevel),{font: "12px Arial Black", fill: "#f4f442"})
        this.resourceText = this.game.add.text(17,0, this.player.resourcesUpdateCost,{font: "12px Arial Black", fill: "#fff"})
        this.addChild(this.resourceText)
        this.addChild(this.resourcesLevelText)
    }

    onButtonClick() {
        if (this.resourcesLevel <= this.player.resourcesMaxLevel && this.player.resources >= this.player.resourcesUpdateCost) {
            this.player.resources = this.player.resources - this.player.resourcesUpdateCost
            this.player.resourcesRefreshRate = this.player.resourcesRefreshRate * this.player.resourcesRefreshFactor
            this.player.maxResources = this.player.maxResources * this.player.maxResourcesFactor
            this.player.resourcesUpdateCost = this.player.resourcesUpdateCost * this.player.resourcesUpdateFactor
            this.resourceText.text = Math.round(this.player.resourcesUpdateCost)
            this.resourcesLevel++
            if (this.resourcesLevel < this.player.resourcesMaxLevel) {
                this.resourcesLevelText.text = 'LV. ' + String(this.resourcesLevel)
            } else {
                this.resourcesLevelText.text = 'MAX'
            }
        }
    }
}