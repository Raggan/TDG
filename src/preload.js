var Preload = function(game){};

Preload.prototype = {

	preload: function(){
		this.game.load.image('background', 'assets/background3.jpg');
		this.game.load.image('castle1', 'assets/castle1_scale.png');
		this.game.load.image('castle2', 'assets/castle2_scale.png');
		this.game.load.spritesheet('minion_weak', 'assets/minion_weak.png', 32, 48);
		this.game.load.spritesheet('minion_strong', 'assets/minion_strong.png', 32, 48);
		this.game.load.image('spawnbutton_minion_weak', 'assets/spawnbutton_minion_weak.png', 40, 40);
		this.game.load.image('spawnbutton_minion_strong', 'assets/spawnbutton_minion_strong.png', 40, 40);
	},

	create: function(){
		this.game.state.start("Menu");
	}
}
