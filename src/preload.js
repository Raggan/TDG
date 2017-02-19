var Preload = function (game) {
};

Preload.prototype = {

    preload: function () {
        this.game.load.image('background', 'assets/background3.jpg')
        this.game.load.image('castle1', 'assets/castle1_scale.png')
        this.game.load.image('castle2', 'assets/castle2_scale.png')
        this.game.load.spritesheet('minion_weak', 'assets/Knight_Spritesheet_walk.png', 40, 48)
        this.game.load.spritesheet('enemy_weak', 'assets/Zombie_Spritesheet.png', 40, 48)
        this.game.load.image('spawnbutton_knight', 'assets/basic_spawn_button_knight.png')
        this.game.load.image('diamond', 'assets/diamond.png')
        this.game.load.image('resources', 'assets/resources_ui.png')
        this.game.load.image('resources_button', 'assets/basic_button_diamond2.png')
    },

    create: function () {
        this.game.state.start("Menu")
    }
}

module.exports = Preload