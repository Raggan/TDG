var Menu = function (game) {
};

Menu.prototype = {

    menu: function () {

    },

    create: function () {
        this.game.state.start("Maps");
    }
}

module.exports = Menu