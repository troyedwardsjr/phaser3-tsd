/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * [description]
 *
 * @name Phaser.Physics.Arcade.Components.Bounce
 * @since 3.0.0
 */
var Bounce = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Bounce#setBounce
     * @since 3.0.0
     *
     * @param {any} x - [description]
     * @param {any} y - [description]
     *
     * @return {any} [description]
     */
    setBounce: function (x, y)
    {
        this.body.bounce.set(x, y);

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Bounce#setBounceX
     * @since 3.0.0
     *
     * @param {any} value - [description]
     *
     * @return {any} [description]
     */
    setBounceX: function (value)
    {
        this.body.bounce.x = value;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Bounce#setBounceY
     * @since 3.0.0
     *
     * @param {any} value - [description]
     *
     * @return {any} [description]
     */
    setBounceY: function (value)
    {
        this.body.bounce.y = value;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Bounce#setCollideWorldBounds
     * @since 3.0.0
     *
     * @param {any} value - [description]
     *
     * @return {any} [description]
     */
    setCollideWorldBounds: function (value)
    {
        this.body.collideWorldBounds = value;

        return this;
    }

};

module.exports = Bounce;
