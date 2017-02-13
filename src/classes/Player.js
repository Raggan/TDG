export default class Player {
    constructor(game, opts) {
        this.game = game
        this.minionGroup = game.add.group()
        this.spawnButtonGroup = game.add.group()
        this.name = opts.name
        this.castle = opts.castle
        this.resources = opts.resources
        this.maxResources = opts.maxResources
        this.skills = []
    }
}

