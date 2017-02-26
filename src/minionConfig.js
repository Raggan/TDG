export const MinionKnightRight = {
    x: 50,
    y: 315,
    key: 'Knight-Right',
    health: 200,
    maxHealth: 200,
    velocity: {
        x: 50,
        y: 0
    },
    dmg: 1/3,
    orientation: 'right',
    cost: 100,
    anim: {
        frameNames1: [
            'Attack_(1)',
            'Attack_(2)',
            'Attack_(3)',
            'Attack_(4)',
            'Attack_(5)',
            'Attack_(6)',
            'Attack_(7)',
            'Attack_(8)',
            'Attack_(9)',
            'Attack_(10)'
        ],
        frameNames2: [
            'Walk_(1)',
            'Walk_(2)',
            'Walk_(3)',
            'Walk_(4)',
            'Walk_(5)',
            'Walk_(6)',
            'Walk_(7)',
            'Walk_(8)',
            'Walk_(9)',
            'Walk_(10)'
        ]

    }
}

export const AdventureGirlRight = {
    x: 50,
    y: 315,
    key: 'AdventureGirlRight',
    health: 300,
    maxHealth: 300,
    velocity: {
        x: 75,
        y: 0
    },
    dmg: 1/2,
    orientation: 'right',
    cost: 200,
    anim: {
        frameNames1: [
            'Melee_(1)',
            'Melee_(2)',
            'Melee_(3)',
            'Melee_(4)',
            'Melee_(5)',
            'Melee_(6)',
            'Melee_(7)'
        ],
        frameNames2: [
            'Run_(1)',
            'Run_(2)',
            'Run_(3)',
            'Run_(4)',
            'Run_(5)',
            'Run_(6)',
            'Run_(7)',
            'Run_(8)'
        ]

    }
}

export const ZombieMaleLeft = {
    x: 670,
    y: 315,
    key: 'ZombieMaleLeft',
    health: 200,
    maxHealth: 200,
    velocity: {
        x: -50,
        y: 0
    },
    dmg: 1 / 12,
    orientation: 'left',
    cost: 100,
    anim: {
        frameNames1: [
            'Attack_(1)',
            'Attack_(2)',
            'Attack_(3)',
            'Attack_(4)',
            'Attack_(5)',
            'Attack_(6)',
            'Attack_(7)',
            'Attack_(8)'

        ],
        frameNames2: [
            'Walk_(1)',
            'Walk_(2)',
            'Walk_(3)',
            'Walk_(4)',
            'Walk_(5)',
            'Walk_(6)',
            'Walk_(7)',
            'Walk_(8)'

        ]
    },
}