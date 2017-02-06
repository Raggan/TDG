var Preload = function(game){};

Preload.prototype = {

	preload: function(){
		this.game.load.image('background', 'assets/background2.jpg');
		this.game.load.image('castle1', 'assets/castle1_scale.png');
		this.game.load.image('castle2', 'assets/castle2_scale.png');
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	},

	create: function(){
		this.game.state.start("Menu");
	}
}
