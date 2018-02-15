/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * [description]
 *
 * @name Phaser.Physics.Arcade.Components.Size
 * @since 3.0.0
 */
var Size = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Size#setOffset
     * @since 3.0.0
     *
     * @param {any} x - [description]
     * @param {any} y - [description]
     *
     * @return {any} [description]
     */
    setOffset: function (x, y)
    {
        this.body.setOffset(x, y);

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Size#setSize
     * @since 3.0.0
     *
     * @param {any} width - [description]
     * @param {any} height - [description]
     * @param {any} center - [description]
     *
     * @return {any} [description]
     */
    setSize: function (width, height, center)
    {
        this.body.setSize(width, height, center);

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Arcade.Components.Size#setCircle
     * @since 3.0.0
     *
     * @param {any} radius - [description]
     * @param {any} offsetX - [description]
     * @param {any} offsetY - [description]
     *
     * @return {any} [description]
     */
    setCircle: function (radius, offsetX, offsetY)
    {
        this.body.setCircle(radius, offsetX, offsetY);

        return this;
    }

};

module.exports = Size;
