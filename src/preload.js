var Preload = function(game){};

Preload.prototype = {

	preload: function(){
		this.game.load.image('background', 'assets/background2.jpg');
	},

	create: function(){
		this.game.state.start("Menu");
	}
}
