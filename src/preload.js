var Preload = function (game) {
};

Preload.prototype = {

    preload: function () {
        this.game.load.image('background', 'assets/background3.jpg')
        this.game.load.image('castle1', 'assets/castle1_scale.png')
        this.game.load.image('castle2', 'assets/castle2_scale.png')
        this.game.load.image('LevelCounter', 'assets/LevelCounter.png')
        this.game.load.image('spawnbutton_knight', 'assets/basic_spawn_button_knight.png')
        this.game.load.image('spawnbutton_AdventureGirl', 'assets/spawnbutton_AdventureGirl.png')
        this.game.load.image('spawnbutton_Jack', 'assets/spawnbutton_Jack.png')
        this.game.load.image('spawnbutton_NinjaGuy', 'assets/spawnbutton_NinjaGuy.png')
        this.game.load.image('spawnbutton_Robot', 'assets/spawnbutton_Robot.png')
        this.game.load.image('diamond', 'assets/diamond.png')
        this.game.load.image('resources', 'assets/resources_ui.png')
        this.game.load.image('resources_button', 'assets/basic_button_diamond2.png')
        this.game.load.atlasJSONHash('Knight-Right', 'assets/SpriteAtlases/Knight-Right.png', 'assets/SpriteAtlases/Knight-Right.json');
        this.game.load.atlasJSONHash('ZombieMaleLeft', 'assets/SpriteAtlases/ZombieMaleLeft.png', 'assets/SpriteAtlases/ZombieMaleLeft.json');
        this.game.load.atlasJSONHash('AdventureGirlRight', 'assets/SpriteAtlases/AdventureGirlRight.png', 'assets/SpriteAtlases/AdventureGirlRight.json');
        this.game.load.atlasJSONHash('JackRight', 'assets/SpriteAtlases/JackRight.png', 'assets/SpriteAtlases/JackRight.json');
        this.game.load.atlasJSONHash('NinjaGuyRight', 'assets/SpriteAtlases/NinjaGuyRight.png', 'assets/SpriteAtlases/NinjaGuyRight.json');
        this.game.load.atlasJSONHash('RobotRight', 'assets/SpriteAtlases/RobotRight.png', 'assets/SpriteAtlases/RobotRight.json');
    },

    create: function () {
        this.game.state.start("Menu")
    }
}

module.exports = Preload