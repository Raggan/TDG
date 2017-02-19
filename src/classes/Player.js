export default class Player {
    constructor(game, opts) {
        this.game = game
        this.minionGroup = game.add.group()
        this.spawnButtonGroup = game.add.group()
        this.name = opts.name
        this.castle = opts.castle
        this.resources = opts.resources
        this.maxResources = opts.maxResources
        this.maxResourcesFactor = opts.maxResourcesFactor
        this.resourcesRefreshRate = opts.resourcesRefreshRate
        this.resourcesRefreshFactor = opts.resourcesRefreshFactor
        this.resourcesMaxLevel = opts.resourcesMaxLevel
        this.resourcesUpdateCost = opts.resourcesUpdateCost
        this.resourcesUpdateFactor = opts.resourcesUpdateFactor
        this.skills = []
    }
}

