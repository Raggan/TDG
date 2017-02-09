var Game = function(game){

};

Game.prototype = {

	create: function() {
		var self = this;
    game.physics.startSystem(Phaser.Physics.ARCADE);
	  game.add.sprite(0,0,"background");
    castle1 = game.add.sprite(10,250, "castle2");
    castle2 = game.add.sprite(670,240, "castle1");

    game.physics.arcade.enable(castle1);
    game.physics.arcade.enable(castle2);

		this.createMinionsWeak();
	//	this.createEnemysWeak();
		this.createCastleHealthbar();
    castle1.body.moves = false;
    castle2.body.moves = false;
		castle1.health = castle2.health = castle2.maxHealth = 1000;
		this.createSpawnButtons();
		var once = false;
		//this.enemySpawnTimer = this.time.events.loop(5000, this.spawnEnemys, this);


	},
	render: function() {

		this.minionsWeak.forEach(function (minion) {
		 		game.debug.body(minion);
		});
	  game.debug.body(castle2);
		// this.enemysWeak.forEach(function (enemy) {
		// 		game.debug.body(enemy);
		// });

},

	update: function() {

	game.physics.arcade.overlap(this.minionsWeak, castle2,this.minionStartFightWithCastle, null, this);
	//game.physics.arcade.overlap(this.minionsWeak, this.enemysWeak,this.minionStartFight, null, this);

},

	spawnButtonWeakClick: function() {
		var minion = this.minionsWeak.getFirstExists(false);
		minion.reset(45,320);
		this.minionMovement(minion);
	},

	// spawnEnemys: function(){
	// 	var enemy = this.enemysWeak.getFirstExists(false);
	// 	enemy.reset(640,320);
	// 	this.enemyMovement(enemy);
	// },

	// minionStartFight: function(minion, enemy) {
	//
	// 	minion.body.velocity.x = 0;
	// 	enemy.body.velocity.x = 0;
	// 	minion.animations.play('attack');
	// 	enemy.animations.play('attack');
	// 	if (!minion.fights == true) {this.game.time.events.loop(1000, function(obj1, obj2){    this.minionDamage(minion, enemy);}, this); minion.fights = true;}
	//
	// },

	minionStartFightWithCastle: function(castle, minion) {

		minion.body.velocity.x = 0;
		minion.animations.play('attack');
		if (!minion.fights == true) {this.game.time.events.loop(1000, function(obj1, obj2){    this.minionDamageCastle(castle, minion);}, this); minion.fights = true;}
		this.updateCastleHealthBar(castle);

	},

 minionMovement: function(minion) {
  minion.body.velocity.x = minion.speed;
 	minion.animations.play('right');
	minion.fights = false;
},

// enemyMovement: function(enemy) {
//  enemy.body.velocity.x = -enemy.speed;
//  enemy.animations.play('left');
// },

 createMinionsWeak: function()
 {
	 		this.minionsWeak = this.game.add.group();
	 		this.minionsWeak.enableBody = true;
	 		this.minionsWeak.physicsBodyType = Phaser.Physics.ARCADE;
	 		this.minionsWeak.createMultiple(50, 'minion_weak');
	 		this.minionsWeak.forEach(function (minion) {
	 			minion.animations.add('right', [9, 10, 11, 12,13,14,15,16,17], 5, true);
				minion.animations.add('attack', [0,1,2,3,4,5,6,7,8], 5, true);
	 			minion.speed = 50;
				minion.dmg = 10;
				minion.fights = false;
			});
 },

 // createEnemysWeak: function()
 // {
 // 	 this.enemysWeak = this.game.add.group();
 // 	 this.enemysWeak.enableBody = true;
 // 	 this.enemysWeak.physicsBodyType = Phaser.Physics.ARCADE;
 // 	 this.enemysWeak.createMultiple(50, 'enemy_weak');
 // 	 this.enemysWeak.forEach(function (enemy) {
 // 		 enemy.animations.add('left', [8,9,10,11,12,13,14,15], 5, true);
 // 		 enemy.animations.add('attack', [0,1,2,3,4,5,6,7], 5, true);
 // 		 enemy.health = enemy.maxHealth = 50;
 // 		 enemy.speed = 20;
 // 		 enemy.dmg = 0;
 // 		 enemy.fights = false;
 // 	 });
 // },

 // minionDamage: function(minion, enemy) {
 //
 //  if (enemy.alive) {
 // 	 enemy.damage(minion.dmg);
 //  }
 //  else {
 // 	 this.minionMovement(minion);
 //  }
 //
 // },

 minionDamageCastle: function(castle, minion) {


	castle.damage(minion.dmg);
	if (castle.health <=0) { castleHealthBar.kill();minion.animations.stop(null, true);minion.fights=false;}
 },


 createSpawnButtons: function()
 {
	 spawnButtonWeak = game.add.button(30,30, 'spawnbutton_minion_weak', this.spawnButtonWeakClick, this);
	 spawnButtonWeak.anchor.setTo(0.5,0.5);

 },

 createCastleHealthbar: function()
 {
	 var barConfigCastle = {x: 733,
		 y: 220,
		 width: 80,
		 height: 10,
		 bg: {
				 color: '#651828'
				 },
		 bar: {
				 color: '#ff0000'
				 },
		 animationDuration: 200,
		 flipped: false
	 };
	 castleHealthBar = new HealthBar(this.game, barConfigCastle);
 },

 updateCastleHealthBar: function(castle){
	 castleHealthBar.setPercent(castle.health/castle.maxHealth*100);

 }

};
