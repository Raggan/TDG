import Phaser from 'phaser'
import Castle from './Castle'

describe('Castle class', function() {
    beforeEach(function() {
        this.game = new Phaser.Game()
        this.castle = new Castle(this.game, {
            health: 100
        })
    })

    it('should get damaged and update health bar', function() {
        this.castle.damage(10)
        expect(this.castle.health).toBe(90)
        expect(this.castle.healthBar.getPercentage()).toBe(90)
    })
})
