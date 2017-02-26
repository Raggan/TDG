import Phaser from 'phaser'


export default class Minion extends Phaser.Sprite {
    constructor(game, opts) {
        super(game, opts.x, opts.y, opts.key, opts.frame)
        this.game = game
        game.add.existing(this)
        game.physics.arcade.enable(this)
        this.health = opts.health
        this.maxHealth = opts.maxHealth
        this.anim = opts.anim
        this.velocity = opts.velocity
        this.dmg = opts.dmg
        this.orientation = opts.orientation
        this.cost = opts.cost
        this.targets = []
        this.mainPlayer = opts.mainPlayer

        this.animations.add('fight', this.anim.frameNames1, 10, true, false)
        this.animations.add('walk', this.anim.frameNames2, 10, true, false)

        this.emitter = game.add.emitter(0, 0, 100);

        this.emitter.makeParticles('diamond');
        this.emitter.gravity = 200;
    }


    update() {
        if (this.body.velocity.x !== 0) {
            this.animations.play('walk')
        }
        if (this.targets.length && this.orientation == 'right') {
            this.animations.play('fight')
        }
        else if (this.targets.length && this.orientation == 'left') {
            this.animations.play('fight')
        }

        if (!this.alive) {
            this.targets = []
        }

        if (this.targets.length) {
            this.targets.forEach((target, index) => {
                if (target.alive) {
                    target.damage(this.dmg / this.targets.length)
                } else {
                    this.targets.splice(index, 1)
                }
            })
        }
        if (!this.targets.length) {
            this.body.velocity.x = this.velocity.x
        }
      }

    attack(enemy) {
        if (this.targets.indexOf(enemy) === -1) {
            this.body.velocity.x = 0;
            this.targets.push(enemy);
        }
    }

    kill() {
        super.kill()

        if (this.mainPlayer) {
            this.emitter.x = this.position.x;
            this.emitter.y = this.position.y;
            this.emitter.start(true, 2000, null, 5);

            if (this.mainPlayer.resources < this.mainPlayer.maxResources) {
                this.mainPlayer.resources = this.mainPlayer.resources + 10
            }
         }

    }

    static collideHandler(enemy, minion) {
        minion.attack(enemy)
        if (typeof enemy.attack === 'function') {
            enemy.attack(minion)
        }
    }
}
