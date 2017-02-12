import 'pixi.js'
import 'p2'
import Phaser from 'phaser'

import Boot from  './boot.js'
import Preload from  './preload.js'
import Menu from  './menu.js'
import Maps from  './maps.js'
import Battle from  './battle.js'

var game = new Phaser.Game(800, 439, Phaser.CANVAS, '')
game.state.add('Boot', Boot)
game.state.add('Preload', Preload)
game.state.add('Menu', Menu)
game.state.add('Maps', Maps)
game.state.add('Battle', Battle)
game.state.start('Boot')

export default game
