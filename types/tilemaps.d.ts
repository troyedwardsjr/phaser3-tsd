/**
 * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
 * faces are used internally for optimizing collisions against tiles. This method is mostly used
 * internally to optimize recalculating faces when only one tile has been changed.
 * @param tileX - The x coordinate.
 * @param tileY - The y coordinate.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function CalculateFacesAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
 * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
 * is mostly used internally.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function CalculateFacesWithin(tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Copies the tiles in the source rectangular area to a new destination (all specified in tile
 * coordinates) within the layer. This copies all tile properties & recalculates collision
 * information in the destination region.
 * @param srcTileX - [description]
 * @param srcTileY - [description]
 * @param width - [description]
 * @param height - [description]
 * @param destTileX - [description]
 * @param destTileY - [description]
 * @param destTileY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function Copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, destTileY: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Creates a Sprite for every object matching the given tile indexes in the layer. You can
 * optionally specify if each tile will be replaced with a new tile after the Sprite has been
 * created. This is useful if you want to lay down special tiles in a level that are converted to
 * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
 * @param indexes - The tile index, or array of indexes, to create Sprites from.
 * @param replacements - The tile index, or array of indexes, to change a converted
 * tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a
 * one-to-one mapping with the indexes array.
 * @param spriteConfig - The config object to pass into the Sprite creator (i.e.
 * scene.make.sprite).
 * @param [scene=scene the map is within] - The Scene to create the Sprites within.
 * @param [camera=main camera] - The Camera to use when determining the world XY
 * @param layer - The Tilemap Layer to act upon.
 */
declare function CreateFromTiles(indexes: number | any, replacements: number | any, spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.GameObjects.Sprite[];

/**
 * Returns the tiles in the given layer that are within the camera's viewport. This is used
 * internally.
 * @param layer - The Tilemap Layer to act upon.
 * @param [camera] - The Camera to run the cull check against.
 * @param [outputArray] - [description]
 */
declare function CullTiles(layer: Phaser.Tilemaps.LayerData, camera?: Phaser.Cameras.Scene2D.Camera, outputArray?: any): Phaser.Tilemaps.Tile[];

/**
 * Sets the tiles in the given rectangular area (in tile coordinates) of the layer with the
 * specified index. Tiles will be set to collide if the given index is a colliding index.
 * Collision information in the region will be recalculated.
 * @param index - [description]
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function Fill(index: number, tileX?: number, tileY?: number, width?: number, height?: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
 * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter. The callback should return true for tiles that pass the
 * filter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function FilterTiles(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: FilterTiles_filteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

declare interface FilterTiles_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide
     * on at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Searches the entire map layer for the first tile matching the given index, then returns that Tile
 * object. If no match is found, it returns null. The search starts from the top-left tile and
 * continues horizontally until it hits the end of the row, then it drops down to the next column.
 * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
 * the top-left.
 * @param index - The tile index value to search for.
 * @param [skip=0] - The number of times to skip a matching tile before returning.
 * @param [reverse=false] - If true it will scan the layer in reverse, starting at the
 * bottom-right. Otherwise it scans from the top-left.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function FindByIndex(index: number, skip?: number, reverse?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
 * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
 * true. Similar to Array.prototype.find in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function FindTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: FindTile_filteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

declare interface FindTile_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide
     * on at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * callback. Similar to Array.prototype.forEach in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function ForEachTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: ForEachTile_filteringOptions, layer: Phaser.Tilemaps.LayerData): void;

declare interface ForEachTile_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide
     * on at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Gets a tile at the given tile coordinates from the given layer.
 * @param tileX - X position to get the tile from (given in tile units, not pixels).
 * @param tileY - Y position to get the tile from (given in tile units, not pixels).
 * @param [nonNull=false] - If true getTile won't return null for empty tiles, but a Tile
 * object with an index of -1.
 * @param layer - The Tilemap Layer to act upon.
 * were invalid.
 */
declare function GetTileAt(tileX: number, tileY: number, nonNull?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

/**
 * Gets a tile at the given world coordinates from the given layer.
 * @param worldX - X position to get the tile from (given in pixels)
 * @param worldY - Y position to get the tile from (given in pixels)
 * @param [nonNull=false] - If true, function won't return null for empty tiles, but a Tile
 * object with an index of -1.
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 * were invalid.
 */
declare function GetTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

/**
 * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function GetTilesWithin(tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: GetTilesWithin_filteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

declare interface GetTilesWithin_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide on
     * at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
 * Line, Rectangle or Triangle. The shape should be in world coordinates.
 * @param shape - A shape in world (pixel) coordinates
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function GetTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: GetTilesWithinShape_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

declare interface GetTilesWithinShape_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide on
     * at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param width - [description]
 * @param height - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function GetTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: GetTilesWithinWorldXY_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[];

declare interface GetTilesWithinWorldXY_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide on
     * at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function HasTileAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

/**
 * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function HasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): boolean;

declare namespace Components {
}

/**
 * Checks if the given tile coordinates are within the bounds of the layer.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function IsInLayerBounds(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean;

/**
 * Puts a tile at the given tile coordinates in the specified layer. You can pass in either an index
 * or a Tile object. If you pass in a Tile, all attributes will be copied over to the specified
 * location. If you pass in an index, only the index at the specified location will be changed.
 * Collision information will be recalculated at the specified location.
 * @param tile - The index of this tile to set or a Tile object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function PutTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

/**
 * Puts a tile at the given world coordinates (pixels) in the specified layer. You can pass in either
 * an index or a Tile object. If you pass in a Tile, all attributes will be copied over to the
 * specified location. If you pass in an index, only the index at the specified location will be
 * changed. Collision information will be recalculated at the specified location.
 * @param tile - The index of this tile to set or a Tile object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function PutTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

/**
 * Puts an array of tiles or a 2D array of tiles at the given tile coordinates in the specified
 * layer. The array can be composed of either tile indexes or Tile objects. If you pass in a Tile,
 * all attributes will be copied over to the specified location. If you pass in an index, only the
 * index at the specified location will be changed. Collision information will be recalculated
 * within the region tiles were changed.
 * @param tile - A row (array) or grid (2D array) of Tiles
 * or tile indexes to place.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function PutTilesAt(tile: number[] | Array.<number[] | Phaser.Tilemaps.Tile[] | Array.<Phaser.Tilemaps.Tile[], tileX: number, tileY: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
 * specified layer. Each tile will receive a new index. If an array of indexes is passed in, then
 * those will be used for randomly assigning new tile indexes. If an array is not provided, the
 * indexes found within the region (excluding -1) will be used for randomly assigning new tile
 * indexes. This method only modifies tile indexes and does not change collision information.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [indexes] - An array of indexes to randomly draw from during randomization.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function Randomize(tileX?: number, tileY?: number, width?: number, height?: number, indexes?: number[], layer: Phaser.Tilemaps.LayerData): void;

/**
 * Removes the tile at the given tile coordinates in the specified layer and updates the layer's
 * collision information.
 * @param tile - The index of this tile to set or a Tile object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param [recalculateFaces=true] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function RemoveTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

/**
 * Removes the tile at the given world coordinates in the specified layer and updates the layer's
 * collision information.
 * @param tile - The index of this tile to set or a Tile object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param [recalculateFaces=true] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function RemoveTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile;

/**
 * Draws a debug representation of the layer to the given Graphics. This is helpful when you want to
 * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
 * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
 * wherever you want on the screen.
 * @param graphics - The target Graphics object to draw upon.
 * @param styleConfig - An object specifying the colors to use for the debug drawing.
 * @param [styleConfig.tileColor=blue] - Color to use for drawing a filled rectangle at
 * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
 * @param [styleConfig.collidingTileColor=orange] - Color to use for drawing a filled
 * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
 * @param [styleConfig.faceColor=grey] - Color to use for drawing a line at interesting
 * tile faces. If set to null, interesting tile faces will not be drawn.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function RenderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig?: RenderDebug_styleConfig, layer: Phaser.Tilemaps.LayerData): void;

declare interface RenderDebug_styleConfig {
    /**
     * Color to use for drawing a filled rectangle at
     * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
     */
    tileColor: Color | null;
    /**
     * Color to use for drawing a filled
     * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
     */
    collidingTileColor: Color | null;
    /**
     * Color to use for drawing a line at interesting
     * tile faces. If set to null, interesting tile faces will not be drawn.
     */
    faceColor: Color | null;
}

/**
 * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
 * `findIndex` and updates their index to match `newIndex`. This only modifies the index and does
 * not change collision information.
 * @param findIndex - [description]
 * @param newIndex - [description]
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function ReplaceByIndex(findIndex: number, newIndex: number, tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
 * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
 * collision will be enabled (true) or disabled (false).
 * @param indexes - Either a single tile index, or an array of tile indexes.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetCollision(indexes: number | any, collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
 * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
 * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
 * enabled (true) or disabled (false).
 * @param start - The first index of the tile to be set for collision.
 * @param stop - The last index of the tile to be set for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetCollisionBetween(start: number, stop: number, collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
 * the given array. The `collides` parameter controls if collision will be enabled (true) or
 * disabled (false).
 * @param indexes - An array of the tile indexes to not be counted for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetCollisionByExclusion(indexes: number[], collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
 * that matches the given properties object, its collision flag will be set. The `collides`
 * parameter controls if collision will be enabled (true) or disabled (false). Passing in
 * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
 * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
 * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
 * "types" property that matches any of those values, its collision flag will be updated.
 * @param properties - An object with tile properties and corresponding values that should
 * be checked.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Sets collision on the tiles within a layer by checking each tile's collision group data
 * (typically defined in Tiled within the tileset collision editor). If any objects are found within
 * a tile's collision group, the tile's colliding information will be set. The `collides` parameter
 * controls if collision will be enabled (true) or disabled (false).
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Internally used method to keep track of the tile indexes that collide within a layer. This
 * updates LayerData.collideIndexes to either contain or not contain the given `tileIndex`.
 * @param tileIndex - [description]
 * @param [collides=true] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetLayerCollisionIndex(tileIndex: number, collides?: boolean, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Internally used method to set the colliding state of a tile. This does not recalculate
 * interesting faces.
 * @param tile - [description]
 * @param [collides=true] - [description]
 */
declare function SetTileCollision(tile: Phaser.Tilemaps.Tile, collides?: boolean): void;

/**
 * Sets a global collision callback for the given tile index within the layer. This will affect all
 * tiles on this layer that have the same index. If a callback is already set for the tile index it
 * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
 * at a specific location on the map then see setTileLocationCallback.
 * @param indexes - Either a single tile index, or an array of tile indexes to have a
 * collision callback set for.
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetTileIndexCallback(indexes: number | any, callback: Function, callbackContext: object, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Sets a collision callback for the given rectangular area (in tile coordinates) within the layer.
 * If a callback is already set for the tile index it will be replaced. Set the callback to null to
 * remove it.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SetTileLocationCallback(tileX?: number, tileY?: number, width?: number, height?: number, callback: Function, callbackContext: object, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
 * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
 * appear to have changed! This method only modifies tile indexes and does not change collision
 * information.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function Shuffle(tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
 * `indexA` and swaps then with `indexB`. This only modifies the index and does not change collision
 * information.
 * @param tileA - First tile index.
 * @param tileB - Second tile index.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function SwapByIndex(tileA: number, tileB: number, tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): void;

/**
 * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
 * layer's position, scale and scroll.
 * @param tileX - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function TileToWorldX(tileX: number, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

/**
 * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
 * layer's position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [point] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function TileToWorldXY(tileX: number, tileY: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

/**
 * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
 * layer's position, scale and scroll.
 * @param tileY - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function TileToWorldY(tileY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

/**
 * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
 * specified layer. Each tile will recieve a new index. New indexes are drawn from the given
 * weightedIndexes array. An example weighted array:
 * [
 * { index: 6, weight: 4 },    // Probability of index 6 is 4 / 8
 * { index: 7, weight: 2 },    // Probability of index 7 would be 2 / 8
 * { index: 8, weight: 1.5 },  // Probability of index 8 would be 1.5 / 8
 * { index: 26, weight: 0.5 }  // Probability of index 27 would be 0.5 / 8
 * ]
 * The probability of any index being choose is (the index's weight) / (sum of all weights). This
 * method only modifies tile indexes and does not change collision information.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [weightedIndexes] - An array of objects to randomly draw from during
 * randomization. They should be in the form: { index: 0, weight: 4 } or
 * { index: [0, 1], weight: 4 } if you wish to draw from multiple tile indexes.
 * @param layer - The Tilemap Layer to act upon.
 */
declare function WeightedRandomize(tileX?: number, tileY?: number, width?: number, height?: number, weightedIndexes?: object[], layer: Phaser.Tilemaps.LayerData): void;

/**
 * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
 * layer's position, scale and scroll.
 * @param worldX - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function WorldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

/**
 * Converts from world XY coordinates (pixels) to tile XY coordinates (tile units), factoring in the
 * layer's position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [point] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function WorldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2;

/**
 * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
 * layer's position, scale and scroll.
 * @param worldY - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 * @param layer - The Tilemap Layer to act upon.
 */
declare function WorldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number;

/**
 * A DynamicTilemapLayer is a game object that renders LayerData from a Tilemap. A
 * DynamicTilemapLayer can only render tiles from a single tileset.
 * 
 * A DynamicTilemapLayer trades some speed for being able to apply powerful effects. Unlike a
 * StaticTilemapLayer, you can apply per-tile effects like tint or alpha, and you can change the
 * tiles in a DynamicTilemapLayer. Use this over a StaticTilemapLayer when you need those
 * features.
 */
declare class DynamicTilemapLayer {
    /**
     * @param scene - [description]
     * @param tilemap - The Tilemap this layer is a part of.
     * @param layerIndex - The index of the LayerData associated with this layer.
     * @param tileset - The tileset used to render the tiles in this layer.
     * @param [x=0] - The world x position where the top left of this layer will be placed.
     * @param [y=0] - The world y position where the top left of this layer will be placed.
     */
    constructor(scene: Phaser.Scene, tilemap: Phaser.Tilemaps.Tilemap, layerIndex: number, tileset: Phaser.Tilemaps.Tileset, x?: number, y?: number);

}

/**
 * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
 * faces are used internally for optimizing collisions against tiles. This method is mostly used
 * internally to optimize recalculating faces when only one tile has been changed.
 * @param tileX - The x coordinate.
 * @param tileY - The y coordinate.
 */
declare function calculateFacesAt(tileX: number, tileY: number): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
 * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
 * is mostly used internally.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 */
declare function calculateFacesWithin(tileX?: number, tileY?: number, width?: number, height?: number): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Creates a Sprite for every object matching the given tile indexes in the layer. You can
 * optionally specify if each tile will be replaced with a new tile after the Sprite has been
 * created. This is useful if you want to lay down special tiles in a level that are converted to
 * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
 * @param indexes - The tile index, or array of indexes, to create Sprites from.
 * @param replacements - The tile index, or array of indexes, to change a converted
 * tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a
 * one-to-one mapping with the indexes array.
 * @param spriteConfig - The config object to pass into the Sprite creator (i.e.
 * scene.make.sprite).
 * @param [scene=scene the map is within] - The Scene to create the Sprites within.
 * @param [camera=main camera] - The Camera to use when determining the world XY
 */
declare function createFromTiles(indexes: number | any, replacements: number | any, spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.Sprite[];

/**
 * Returns the tiles in the given layer that are within the cameras viewport.
 * This is used internally.
 * @param [camera] - The Camera to run the cull check against.
 */
declare function cull(camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

/**
 * Copies the tiles in the source rectangular area to a new destination (all specified in tile
 * coordinates) within the layer. This copies all tile properties & recalculates collision
 * information in the destination region.
 * @param srcTileX - [description]
 * @param srcTileY - [description]
 * @param width - [description]
 * @param height - [description]
 * @param destTileX - [description]
 * @param destTileY - [description]
 * @param destTileY - [description]
 * @param [recalculateFaces=true] - [description]
 */
declare function copy(srcTileX: number, srcTileY: number, width: number, height: number, destTileX: number, destTileY: number, destTileY: number, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Destroys this DynamicTilemapLayer and removes its link to the associated LayerData.
 */
declare function destroy(): void;

/**
 * Sets the tiles in the given rectangular area (in tile coordinates) of the layer with the
 * specified index. Tiles will be set to collide if the given index is a colliding index.
 * Collision information in the region will be recalculated.
 * @param index - [description]
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [recalculateFaces=true] - [description]
 */
declare function fill(index: number, tileX?: number, tileY?: number, width?: number, height?: number, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
 * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter. The callback should return true for tiles that pass the
 * filter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function filterTiles(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: filterTiles_filteringOptions): Phaser.Tilemaps.Tile[];

declare interface filterTiles_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide
     * on at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Searches the entire map layer for the first tile matching the given index, then returns that Tile
 * object. If no match is found, it returns null. The search starts from the top-left tile and
 * continues horizontally until it hits the end of the row, then it drops down to the next column.
 * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
 * the top-left.
 * @param index - The tile index value to search for.
 * @param [skip=0] - The number of times to skip a matching tile before returning.
 * @param [reverse=false] - If true it will scan the layer in reverse, starting at the
 * bottom-right. Otherwise it scans from the top-left.
 */
declare function findByIndex(index: number, skip?: number, reverse?: boolean): Phaser.Tilemaps.Tile;

/**
 * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
 * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
 * true. Similar to Array.prototype.find in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function findTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: findTile_filteringOptions): Phaser.Tilemaps.Tile | null;

declare interface findTile_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide
     * on at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * callback. Similar to Array.prototype.forEach in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function forEachTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: forEachTile_filteringOptions): Phaser.Tilemaps.DynamicTilemapLayer;

declare interface forEachTile_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide
     * on at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Gets a tile at the given tile coordinates from the given layer.
 * @param tileX - X position to get the tile from (given in tile units, not pixels).
 * @param tileY - Y position to get the tile from (given in tile units, not pixels).
 * @param [nonNull=false] - If true getTile won't return null for empty tiles, but a Tile
 * object with an index of -1.
 */
declare function getTileAt(tileX: number, tileY: number, nonNull?: boolean): Phaser.Tilemaps.Tile;

/**
 * Gets a tile at the given world coordinates from the given layer.
 * @param worldX - X position to get the tile from (given in pixels)
 * @param worldY - Y position to get the tile from (given in pixels)
 * @param [nonNull=false] - If true, function won't return null for empty tiles, but a Tile
 * object with an index of -1.
 * @param [camera=main camera] - [description]
 * were invalid.
 */
declare function getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

/**
 * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function getTilesWithin(tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: getTilesWithin_filteringOptions): Phaser.Tilemaps.Tile[];

declare interface getTilesWithin_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide on
     * at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
 * Line, Rectangle or Triangle. The shape should be in world coordinates.
 * @param shape - A shape in world (pixel) coordinates
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 */
declare function getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: getTilesWithinShape_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

declare interface getTilesWithinShape_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide on
     * at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param width - [description]
 * @param height - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 */
declare function getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: getTilesWithinWorldXY_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

declare interface getTilesWithinWorldXY_filteringOptions {
    /**
     * If true, only return tiles that don't have
     * -1 for an index.
     */
    isNotEmpty: boolean;
    /**
     * If true, only return tiles that collide on
     * at least one side.
     */
    isColliding: boolean;
    /**
     * If true, only return tiles that
     * have at least one interesting face.
     */
    hasInterestingFace: boolean;
}

/**
 * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * @param tileX - [description]
 * @param tileY - [description]
 */
declare function hasTileAt(tileX: number, tileY: number): boolean;

/**
 * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [camera=main camera] - [description]
 */
declare function hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera): boolean;

/**
 * Puts a tile at the given tile coordinates in the specified layer. You can pass in either an index
 * or a Tile object. If you pass in a Tile, all attributes will be copied over to the specified
 * location. If you pass in an index, only the index at the specified location will be changed.
 * Collision information will be recalculated at the specified location.
 * @param tile - The index of this tile to set or a Tile object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [recalculateFaces=true] - [description]
 */
declare function putTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

/**
 * Puts a tile at the given world coordinates (pixels) in the specified layer. You can pass in either
 * an index or a Tile object. If you pass in a Tile, all attributes will be copied over to the
 * specified location. If you pass in an index, only the index at the specified location will be
 * changed. Collision information will be recalculated at the specified location.
 * @param tile - The index of this tile to set or a Tile object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param [camera] - [description]
 */
declare function putTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

/**
 * Puts an array of tiles or a 2D array of tiles at the given tile coordinates in the specified
 * layer. The array can be composed of either tile indexes or Tile objects. If you pass in a Tile,
 * all attributes will be copied over to the specified location. If you pass in an index, only the
 * index at the specified location will be changed. Collision information will be recalculated
 * within the region tiles were changed.
 * @param tile - A row (array) or grid (2D array) of Tiles
 * or tile indexes to place.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [recalculateFaces=true] - [description]
 */
declare function putTilesAt(tile: number[] | Array.<number[] | Phaser.Tilemaps.Tile[] | Array.<Phaser.Tilemaps.Tile[], tileX: number, tileY: number, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
 * specified layer. Each tile will receive a new index. If an array of indexes is passed in, then
 * those will be used for randomly assigning new tile indexes. If an array is not provided, the
 * indexes found within the region (excluding -1) will be used for randomly assigning new tile
 * indexes. This method only modifies tile indexes and does not change collision information.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [indexes] - An array of indexes to randomly draw from during randomization.
 */
declare function randomize(tileX?: number, tileY?: number, width?: number, height?: number, indexes?: number[]): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Removes the tile at the given tile coordinates in the specified layer and updates the layer's
 * collision information.
 * @param tile - The index of this tile to set or a Tile object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param [recalculateFaces=true] - [description]
 */
declare function removeTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, replaceWithNull?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

/**
 * Removes the tile at the given world coordinates in the specified layer and updates the layer's
 * collision information.
 * @param tile - The index of this tile to set or a Tile object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param [recalculateFaces=true] - [description]
 * @param [camera=main camera] - [description]
 */
declare function removeTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

/**
 * Draws a debug representation of the layer to the given Graphics. This is helpful when you want to
 * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
 * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
 * wherever you want on the screen.
 * @param graphics - The target Graphics object to draw upon.
 * @param styleConfig - An object specifying the colors to use for the debug drawing.
 * @param [styleConfig.tileColor=blue] - Color to use for drawing a filled rectangle at
 * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
 * @param [styleConfig.collidingTileColor=orange] - Color to use for drawing a filled
 * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
 * @param [styleConfig.faceColor=grey] - Color to use for drawing a line at interesting
 * tile faces. If set to null, interesting tile faces will not be drawn.
 */
declare function renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig?: renderDebug_styleConfig): Phaser.Tilemaps.DynamicTilemapLayer;

declare interface renderDebug_styleConfig {
    /**
     * Color to use for drawing a filled rectangle at
     * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
     */
    tileColor: Color | null;
    /**
     * Color to use for drawing a filled
     * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
     */
    collidingTileColor: Color | null;
    /**
     * Color to use for drawing a line at interesting
     * tile faces. If set to null, interesting tile faces will not be drawn.
     */
    faceColor: Color | null;
}

/**
 * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
 * `findIndex` and updates their index to match `newIndex`. This only modifies the index and does
 * not change collision information.
 * @param findIndex - [description]
 * @param newIndex - [description]
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 */
declare function replaceByIndex(findIndex: number, newIndex: number, tileX?: number, tileY?: number, width?: number, height?: number): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
 * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
 * collision will be enabled (true) or disabled (false).
 * @param indexes - Either a single tile index, or an array of tile indexes.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollision(indexes: number | any, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
 * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
 * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
 * enabled (true) or disabled (false).
 * @param start - The first index of the tile to be set for collision.
 * @param stop - The last index of the tile to be set for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionBetween(start: number, stop: number, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
 * that matches the given properties object, its collision flag will be set. The `collides`
 * parameter controls if collision will be enabled (true) or disabled (false). Passing in
 * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
 * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
 * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
 * "types" property that matches any of those values, its collision flag will be updated.
 * @param properties - An object with tile properties and corresponding values that should
 * be checked.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
 * the given array. The `collides` parameter controls if collision will be enabled (true) or
 * disabled (false).
 * @param indexes - An array of the tile indexes to not be counted for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionByExclusion(indexes: number[], collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets collision on the tiles within a layer by checking each tiles collision group data
 * (typically defined in Tiled within the tileset collision editor). If any objects are found within
 * a tiles collision group, the tile's colliding information will be set. The `collides` parameter
 * controls if collision will be enabled (true) or disabled (false).
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets a global collision callback for the given tile index within the layer. This will affect all
 * tiles on this layer that have the same index. If a callback is already set for the tile index it
 * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
 * at a specific location on the map then see setTileLocationCallback.
 * @param indexes - Either a single tile index, or an array of tile indexes to have a
 * collision callback set for.
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 */
declare function setTileIndexCallback(indexes: number | any, callback: Function, callbackContext: object): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Sets a collision callback for the given rectangular area (in tile coordinates) within the layer.
 * If a callback is already set for the tile index it will be replaced. Set the callback to null to
 * remove it.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 */
declare function setTileLocationCallback(tileX?: number, tileY?: number, width?: number, height?: number, callback: Function, callbackContext: object): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
 * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
 * appear to have changed! This method only modifies tile indexes and does not change collision
 * information.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 */
declare function shuffle(tileX?: number, tileY?: number, width?: number, height?: number): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
 * `indexA` and swaps then with `indexB`. This only modifies the index and does not change collision
 * information.
 * @param tileA - First tile index.
 * @param tileB - Second tile index.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 */
declare function swapByIndex(tileA: number, tileB: number, tileX?: number, tileY?: number, width?: number, height?: number): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
 * layers position, scale and scroll.
 * @param tileX - [description]
 * @param [camera=main camera] - [description]
 */
declare function tileToWorldX(tileX: number, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
 * layers position, scale and scroll.
 * @param tileY - [description]
 * @param [camera=main camera] - [description]
 */
declare function tileToWorldY(tileY: number, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
 * layers position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [point] - [description]
 * @param [camera=main camera] - [description]
 */
declare function tileToWorldXY(tileX: number, tileY: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

/**
 * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
 * specified layer. Each tile will recieve a new index. New indexes are drawn from the given
 * weightedIndexes array. An example weighted array:
 * [
 * { index: 6, weight: 4 },    // Probability of index 6 is 4 / 8
 * { index: 7, weight: 2 },    // Probability of index 7 would be 2 / 8
 * { index: 8, weight: 1.5 },  // Probability of index 8 would be 1.5 / 8
 * { index: 26, weight: 0.5 }  // Probability of index 27 would be 0.5 / 8
 * ]
 * The probability of any index being choose is (the index's weight) / (sum of all weights). This
 * method only modifies tile indexes and does not change collision information.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [weightedIndexes] - An array of objects to randomly draw from during
 * randomization. They should be in the form: { index: 0, weight: 4 } or
 * { index: [0, 1], weight: 4 } if you wish to draw from multiple tile indexes.
 */
declare function weightedRandomize(tileX?: number, tileY?: number, width?: number, height?: number, weightedIndexes?: object[]): Phaser.Tilemaps.DynamicTilemapLayer;

/**
 * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
 * layers position, scale and scroll.
 * @param worldX - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 */
declare function worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
 * layers position, scale and scroll.
 * @param worldY - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 */
declare function worldToTileXY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Renders this Game Object with the Canvas Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 * @param renderer - A reference to the current active Canvas renderer.
 * @param src - The Game Object being rendered in this call.
 * @param interpolationPercentage - Reserved for future use and custom pipelines.
 * @param camera - The Camera that is rendering the Game Object.
 */
declare function renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.Tilemaps.DynamicTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

/**
 * Renders this Game Object with the WebGL Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 * @param renderer - A reference to the current active WebGL renderer.
 * @param src - The Game Object being rendered in this call.
 * @param interpolationPercentage - Reserved for future use and custom pipelines.
 * @param camera - The Camera that is rendering the Game Object.
 */
declare function renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.Tilemaps.DynamicTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

declare namespace Formats {
}

/**
 * An Image Collection is a special Tile Set containing multiple images, with no slicing into each image.
 * 
 * Image Collections are normally created automatically when Tiled data is loaded.
 */
declare class ImageCollection {
    /**
     * @param name - The name of the image collection in the map data.
     * @param firstgid - The first image index this image collection contains.
     * @param [width=32] - Width of widest image (in pixels).
     * @param [height=32] - Height of tallest image (in pixels).
     * @param [margin=0] - The margin around all images in the collection (in pixels).
     * @param [spacing=0] - The spacing between each image in the collection (in pixels).
     * @param [properties={}] - Custom Image Collection properties.
     */
    constructor(name: string, firstgid: number, width?: number, height?: number, margin?: number, spacing?: number, properties?: object);

}

/**
 * Returns true if and only if this image collection contains the given image index.
 * @param imageIndex - The image index to search for.
 */
declare function containsImageIndex(imageIndex: number): boolean;

/**
 * Add an image to this Image Collection.
 * @param gid - The gid of the image in the Image Collection.
 * @param image - The the key of the image in the Image Collection and in the cache.
 */
declare function addImage(gid: number, image: string): Phaser.Tilemaps.ImageCollection;

declare namespace Tilemaps {
}

/**
 * A class for representing data about about a layer in a map. Maps are parsed from CSV, Tiled,
 * etc. into this format. Tilemap, StaticTilemapLayer and DynamicTilemapLayer have a reference
 * to this data and use it to look up and perform operations on tiles.
 */
declare class LayerData {
    /**
     * @param [config] - [description]
     */
    constructor(config?: object);

}

/**
 * A class for representing data about a map. Maps are parsed from CSV, Tiled, etc. into this
 * format. A Tilemap object get a copy of this data and then unpacks the needed properties into
 * itself.
 */
declare class MapData {
    /**
     * @param [config] - [description]
     */
    constructor(config?: object);

}

/**
 * A class for representing a Tiled object layer in a map. This mirrors the structure of a Tiled
 * object layer, except:
 *  - "x" & "y" properties are ignored since these cannot be changed in Tiled.
 *  - "offsetx" & "offsety" are applied to the individual object coordinates directly, so they
 *    are ignored as well.
 *  - "draworder" is ignored.
 */
declare class ObjectLayer {
    /**
     * @param [config] - [description]
     */
    constructor(config?: object);

}

/**
 * [description]
 * @param json - [description]
 * @param insertNull - [description]
 */
declare function ParseTileLayers(json: object, insertNull: boolean): any;

/**
 * [description]
 * @param json - [description]
 */
declare function ParseTilesets(json: object): any;

/**
 * Parses a Weltmeister JSON object into a new MapData object.
 * @param name - The name of the tilemap, used to set the name on the MapData.
 * @param json - The Weltmeister JSON object.
 * @param insertNull - Controls how empty tiles, tiles with an index of -1, in the map
 * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function ParseWeltmeister(name: string, json: object, insertNull: boolean): object | null;

declare namespace Parsers {
}

/**
 * Parses raw data of a given Tilemap format into a new MapData object. If no recognized data format
 * is found, returns `null`. When loading from CSV or a 2D array, you should specify the tileWidth &
 * tileHeight. When parsing from a map from Tiled, the tileWidth & tileHeight will be pulled from
 * the map data.
 * @param name - The name of the tilemap, used to set the name on the MapData.
 * @param mapFormat - See ../Formats.js.
 * @param data - 2D array, CSV string or Tiled JSON object.
 * @param tileWidth - The width of a tile in pixels. Required for 2D array and CSV, but
 * ignored for Tiled JSON.
 * @param tileHeight - The height of a tile in pixels. Required for 2D array and CSV, but
 * ignored for Tiled JSON.
 * @param insertNull - Controls how empty tiles, tiles with an index of -1, in the map
 * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function Parse(name: string, mapFormat: number, data: Array.<number[] | string | object, tileWidth: number, tileHeight: number, insertNull: boolean): any;

/**
 * Parses a 2D array of tile indexes into a new MapData object with a single layer.
 * @param name - The name of the tilemap, used to set the name on the MapData.
 * @param data - 2D array, CSV string or Tiled JSON object.
 * @param tileWidth - The width of a tile in pixels.
 * @param tileHeight - The height of a tile in pixels.
 * @param insertNull - Controls how empty tiles, tiles with an index of -1, in the map
 * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function Parse2DArray(name: string, data: Array.<number[], tileWidth: number, tileHeight: number, insertNull: boolean): any;

/**
 * Parses a CSV string of tile indexes into a new MapData object with a single layer.
 * @param name - The name of the tilemap, used to set the name on the MapData.
 * @param data - CSV string of tile indexes.
 * @param tileWidth - The width of a tile in pixels.
 * @param tileHeight - The height of a tile in pixels.
 * @param insertNull - Controls how empty tiles, tiles with an index of -1, in the map
 * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function ParseCSV(name: string, data: string, tileWidth: number, tileHeight: number, insertNull: boolean): any;

/**
 * Copy properties from tileset to tiles.
 * @param mapData - [description]
 */
declare function AssignTileProperties(mapData: Phaser.Tilemaps.MapData): void;

/**
 * [description]
 * @param data - [description]
 */
declare function Base64Decode(data: object): any;

/**
 * Master list of tiles -> x, y, index in tileset.
 * @param mapData - [description]
 */
declare function BuildTilesetIndex(mapData: Phaser.Tilemaps.MapData): any;

/**
 * See Tiled documentation on tile flipping:
 * http://docs.mapeditor.org/en/latest/reference/tmx-map-format/
 * @param gid - [description]
 */
declare function ParseGID(gid: number): object;

/**
 * [description]
 * @param json - [description]
 */
declare function ParseImageLayers(json: object): any;

/**
 * Parses a Tiled JSON object into a new MapData object.
 * @param name - The name of the tilemap, used to set the name on the MapData.
 * @param json - The Tiled JSON object.
 * @param insertNull - Controls how empty tiles, tiles with an index of -1, in the map
 * data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function ParseJSONTiled(name: string, json: object, insertNull: boolean): Phaser.Tilemaps.MapData | null;

/**
 * [description]
 * @param tiledObject - [description]
 * @param [offsetX=0] - [description]
 * @param [offsetY=0] - [description]
 */
declare function ParseObject(tiledObject: object, offsetX?: number, offsetY?: number): object;

/**
 * [description]
 * @param json - [description]
 */
declare function ParseObjectLayers(json: object): any;

/**
 * [description]
 * @param json - [description]
 * @param insertNull - [description]
 */
declare function ParseTileLayers(json: object, insertNull: boolean): any;

/**
 * Tilesets & Image Collections
 * @param json - [description]
 */
declare function ParseTilesets(json: object): object;

/**
 * [description]
 * @param object - [description]
 * @param keys - [description]
 */
declare function Pick(object: object, keys: any): object;

/**
 * Create a Tilemap from the given key or data. If neither is given, make a blank Tilemap. When
 * loading from CSV or a 2D array, you should specify the tileWidth & tileHeight. When parsing from
 * a map from Tiled, the tileWidth, tileHeight, width & height will be pulled from the map data. For
 * an empty map, you should specify tileWidth, tileHeight, width & height.
 * @param scene - The Scene to which this Tilemap belongs.
 * @param [key] - The key in the Phaser cache that corresponds to the loaded tilemap data.
 * @param [tileWidth=32] - The width of a tile in pixels.
 * @param [tileHeight=32] - The height of a tile in pixels.
 * @param [width=10] - The width of the map in tiles.
 * @param [height=10] - The height of the map in tiles.
 * @param [data] - Instead of loading from the cache, you can also load directly from
 * a 2D array of tile indexes.
 * @param [insertNull=false] - Controls how empty tiles, tiles with an index of -1, in the
 * map data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function ParseToTilemap(scene: Phaser.Scene, key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number, data?: Array.<number[], insertNull?: boolean): Phaser.Tilemaps.Tilemap;

/**
 * A StaticTilemapLayer is a game object that renders LayerData from a Tilemap. A
 * StaticTilemapLayer can only render tiles from a single tileset.
 * 
 * A StaticTilemapLayer is optimized for speed over flexibility. You cannot apply per-tile
 * effects like tint or alpha. You cannot change the tiles in a StaticTilemapLayer. Use this
 * over a DynamicTilemapLayer when you don't need either of those features.
 */
declare class StaticTilemapLayer {
    /**
     * @param scene - [description]
     * @param tilemap - The Tilemap this layer is a part of.
     * @param layerIndex - The index of the LayerData associated with this layer.
     * @param tileset - The tileset used to render the tiles in this layer.
     * @param [x=0] - The world x position where the top left of this layer will be placed.
     * @param [y=0] - The world y position where the top left of this layer will be placed.
     */
    constructor(scene: Phaser.Scene, tilemap: Phaser.Tilemaps.Tilemap, layerIndex: number, tileset: Phaser.Tilemaps.Tileset, x?: number, y?: number);

}

/**
 * @param renderer - The renderer instance.
 */
declare function contextRestore(renderer: Phaser.Renderer.WebGLRenderer): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Upload the tile data to a VBO.
 * @param camera - The camera to render to.
 */
declare function upload(camera: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
 * faces are used internally for optimizing collisions against tiles. This method is mostly used
 * internally to optimize recalculating faces when only one tile has been changed.
 * @param tileX - The x coordinate.
 * @param tileY - The y coordinate.
 */
declare function calculateFacesAt(tileX: number, tileY: number): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
 * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
 * is mostly used internally.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 */
declare function calculateFacesWithin(tileX?: number, tileY?: number, width?: number, height?: number): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Creates a Sprite for every object matching the given tile indexes in the layer. You can
 * optionally specify if each tile will be replaced with a new tile after the Sprite has been
 * created. This is useful if you want to lay down special tiles in a level that are converted to
 * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
 * @param indexes - The tile index, or array of indexes, to create Sprites from.
 * @param replacements - The tile index, or array of indexes, to change a converted
 * tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a
 * one-to-one mapping with the indexes array.
 * @param spriteConfig - The config object to pass into the Sprite creator (i.e.
 * scene.make.sprite).
 * @param [scene=scene the map is within] - The Scene to create the Sprites within.
 * @param [camera=main camera] - The Camera to use when determining the world XY
 */
declare function createFromTiles(indexes: number | any, replacements: number | any, spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.GameObjects.Sprite[];

/**
 * Returns the tiles in the given layer that are within the cameras viewport.
 * This is used internally.
 * @param [camera] - The Camera to run the cull check against.
 */
declare function cull(camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

/**
 * Destroys this StaticTilemapLayer and removes its link to the associated LayerData.
 */
declare function destroy(): void;

/**
 * Searches the entire map layer for the first tile matching the given index, then returns that Tile
 * object. If no match is found, it returns null. The search starts from the top-left tile and
 * continues horizontally until it hits the end of the row, then it drops down to the next column.
 * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
 * the top-left.
 * @param index - The tile index value to search for.
 * @param [skip=0] - The number of times to skip a matching tile before returning.
 * @param [reverse=false] - If true it will scan the layer in reverse, starting at the
 * bottom-right. Otherwise it scans from the top-left.
 */
declare function findByIndex(index: number, skip?: number, reverse?: boolean): Phaser.Tilemaps.Tile;

/**
 * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
 * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
 * true. Similar to Array.prototype.find in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function findTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: findTile_filteringOptions): Phaser.Tilemaps.Tile | null;

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
 * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter. The callback should return true for tiles that pass the
 * filter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function filterTiles(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: filterTiles_filteringOptions): Phaser.Tilemaps.Tile[];

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * callback. Similar to Array.prototype.forEach in vanilla JS.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function forEachTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: forEachTile_filteringOptions): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Gets a tile at the given tile coordinates from the given layer.
 * @param tileX - X position to get the tile from (given in tile units, not pixels).
 * @param tileY - Y position to get the tile from (given in tile units, not pixels).
 * @param [nonNull=false] - If true getTile won't return null for empty tiles, but a Tile
 * object with an index of -1.
 */
declare function getTileAt(tileX: number, tileY: number, nonNull?: boolean): Phaser.Tilemaps.Tile;

/**
 * Gets a tile at the given world coordinates from the given layer.
 * @param worldX - X position to get the tile from (given in pixels)
 * @param worldY - Y position to get the tile from (given in pixels)
 * @param [nonNull=false] - If true, function won't return null for empty tiles, but a Tile
 * object with an index of -1.
 * @param [camera=main camera] - [description]
 * were invalid.
 */
declare function getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile;

/**
 * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 */
declare function getTilesWithin(tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: getTilesWithin_filteringOptions): Phaser.Tilemaps.Tile[];

/**
 * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param width - [description]
 * @param height - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 */
declare function getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: getTilesWithinWorldXY_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

/**
 * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
 * Line, Rectangle or Triangle. The shape should be in world coordinates.
 * @param shape - A shape in world (pixel) coordinates
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 */
declare function getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: getTilesWithinShape_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Tilemaps.Tile[];

/**
 * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * @param tileX - [description]
 * @param tileY - [description]
 */
declare function hasTileAt(tileX: number, tileY: number): boolean;

/**
 * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [camera=main camera] - [description]
 */
declare function hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera): boolean;

/**
 * Draws a debug representation of the layer to the given Graphics. This is helpful when you want to
 * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
 * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
 * wherever you want on the screen.
 * @param graphics - The target Graphics object to draw upon.
 * @param styleConfig - An object specifying the colors to use for the debug drawing.
 * @param [styleConfig.tileColor=blue] - Color to use for drawing a filled rectangle at
 * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
 * @param [styleConfig.collidingTileColor=orange] - Color to use for drawing a filled
 * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
 * @param [styleConfig.faceColor=grey] - Color to use for drawing a line at interesting
 * tile faces. If set to null, interesting tile faces will not be drawn.
 */
declare function renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig?: renderDebug_styleConfig): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
 * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
 * collision will be enabled (true) or disabled (false).
 * @param indexes - Either a single tile index, or an array of tile indexes.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollision(indexes: number | any, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
 * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
 * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
 * enabled (true) or disabled (false).
 * @param start - The first index of the tile to be set for collision.
 * @param stop - The last index of the tile to be set for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionBetween(start: number, stop: number, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
 * that matches the given properties object, its collision flag will be set. The `collides`
 * parameter controls if collision will be enabled (true) or disabled (false). Passing in
 * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
 * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
 * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
 * "types" property that matches any of those values, its collision flag will be updated.
 * @param properties - An object with tile properties and corresponding values that should
 * be checked.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
 * the given array. The `collides` parameter controls if collision will be enabled (true) or
 * disabled (false).
 * @param indexes - An array of the tile indexes to not be counted for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionByExclusion(indexes: number[], collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets a global collision callback for the given tile index within the layer. This will affect all
 * tiles on this layer that have the same index. If a callback is already set for the tile index it
 * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
 * at a specific location on the map then see setTileLocationCallback.
 * @param indexes - Either a single tile index, or an array of tile indexes to have a
 * collision callback set for.
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 */
declare function setTileIndexCallback(indexes: number | any, callback: Function, callbackContext: object): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets collision on the tiles within a layer by checking each tiles collision group data
 * (typically defined in Tiled within the tileset collision editor). If any objects are found within
 * a tiles collision group, the tile's colliding information will be set. The `collides` parameter
 * controls if collision will be enabled (true) or disabled (false).
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 */
declare function setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Sets a collision callback for the given rectangular area (in tile coordinates) within the layer.
 * If a callback is already set for the tile index it will be replaced. Set the callback to null to
 * remove it.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 */
declare function setTileLocationCallback(tileX?: number, tileY?: number, width?: number, height?: number, callback: Function, callbackContext: object): Phaser.Tilemaps.StaticTilemapLayer;

/**
 * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
 * layers position, scale and scroll.
 * @param tileX - [description]
 * @param [camera=main camera] - [description]
 */
declare function tileToWorldX(tileX: number, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
 * layers position, scale and scroll.
 * @param tileY - [description]
 * @param [camera=main camera] - [description]
 */
declare function tileToWorldY(tileY: number, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
 * layers position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [point] - [description]
 * @param [camera=main camera] - [description]
 */
declare function tileToWorldXY(tileX: number, tileY: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera): Phaser.Math.Vector2;

/**
 * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
 * layers position, scale and scroll.
 * @param worldX - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 */
declare function worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
 * layers position, scale and scroll.
 * @param worldY - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 */
declare function worldToTileXY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Renders this Game Object with the Canvas Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 * @param renderer - A reference to the current active Canvas renderer.
 * @param src - The Game Object being rendered in this call.
 * @param interpolationPercentage - Reserved for future use and custom pipelines.
 * @param camera - The Camera that is rendering the Game Object.
 */
declare function renderCanvas(renderer: Phaser.Renderer.CanvasRenderer, src: Phaser.Tilemaps.StaticTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

/**
 * Renders this Game Object with the WebGL Renderer to the given Camera.
 * The object will not render if any of its renderFlags are set or it is being actively filtered out by the Camera.
 * This method should not be called directly. It is a utility function of the Render module.
 * @param renderer - A reference to the current active WebGL renderer.
 * @param src - The Game Object being rendered in this call.
 * @param interpolationPercentage - Reserved for future use and custom pipelines.
 * @param camera - The Camera that is rendering the Game Object.
 */
declare function renderWebGL(renderer: Phaser.Renderer.WebGLRenderer, src: Phaser.Tilemaps.StaticTilemapLayer, interpolationPercentage: number, camera: Phaser.Cameras.Scene2D.Camera): void;

/**
 * A Tile is a representation of a single tile within the Tilemap. This is a lightweight data
 * representation, so it's position information is stored without factoring in scroll, layer
 * scale or layer position.
 */
declare class Tile {
    /**
     * @param layer - The LayerData object in the Tilemap that this tile belongs to.
     * @param index - The unique index of this tile within the map.
     * @param x - The x coordinate of this tile in tile coordinates.
     * @param y - The y coordinate of this tile in tile coordinates.
     * @param width - Width of the tile in pixels.
     * @param height - Height of the tile in pixels.
     * @param baseWidth - The base width a tile in the map (in pixels). Tiled maps support
     * multiple tileset sizes within one map, but they are still placed at intervals of the base
     * tile width.
     * @param baseHeight - The base height of the tile in pixels (in pixels). Tiled maps
     * support multiple tileset sizes within one map, but they are still placed at intervals of the
     * base tile height.
     */
    constructor(layer: Phaser.Tilemaps.LayerData, index: number, x: number, y: number, width: number, height: number, baseWidth: number, baseHeight: number);

}

/**
 * Check if the given x and y world coordinates are within this Tile. This does not factor in
 * camera scroll, layer scale or layer position.
 * @param x - The x coordinate to test.
 * @param y - The y coordinate to test.
 */
declare function containsPoint(x: number, y: number): boolean;

/**
 * The collision group for this Tile, defined within the Tileset. This returns a reference to
 * the collision group stored within the Tileset, so any modification of the returned object
 * will impact all tiles that have the same index as this tile.
 */
declare function getCollisionGroup(): object | null;

/**
 * The tile data for this Tile, defined within the Tileset. This typically contains Tiled
 * collision data, tile animations and terrain information. This returns a reference to the tile
 * data stored within the Tileset, so any modification of the returned object will impact all
 * tiles that have the same index as this tile.
 */
declare function getTileData(): object | null;

/**
 * Gets the world X position of the left side of the tile, factoring in the layers position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 */
declare function getLeft(camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Gets the world X position of the right side of the tile, factoring in the layer's position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 */
declare function getRight(camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Gets the world Y position of the top side of the tile, factoring in the layer's position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 */
declare function getTop(camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Gets the world Y position of the bottom side of the tile, factoring in the layer's position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 */
declare function getBottom(camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Gets the world rectangle bounding box for the tile, factoring in the layers position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 * @param [output] - [description]
 */
declare function getBounds(camera?: Phaser.Cameras.Scene2D.Camera, output?: object): Phaser.Geom.Rectangle | object;

/**
 * Gets the world X position of the center of the tile, factoring in the layer's position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 */
declare function getCenterX(camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Gets the world Y position of the center of the tile, factoring in the layer's position,
 * scale and scroll.
 * @param [camera] - The Camera to use to perform the check.
 */
declare function getCenterY(camera?: Phaser.Cameras.Scene2D.Camera): number;

/**
 * Clean up memory.
 */
declare function destroy(): void;

/**
 * Check for intersection with this tile. This does not factor in camera scroll, layer scale or
 * layer position.
 * @param x - The x axis in pixels.
 * @param y - The y axis in pixels.
 * @param right - The right point.
 * @param bottom - The bottom point.
 */
declare function intersects(x: number, y: number, right: number, bottom: number): boolean;

/**
 * Checks if the tile is interesting.
 * @param collides - If true, will consider the tile interesting if it collides on any side.
 * @param faces - If true, will consider the tile interesting if it has an interesting face.
 */
declare function isInteresting(collides: boolean, faces: boolean): boolean;

/**
 * Reset collision status flags.
 * @param [recalculateFaces=true] - Whether or not to recalculate interesting faces for this tile and its neighbors.
 */
declare function resetCollision(recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

/**
 * Reset faces.
 */
declare function resetFaces(): Phaser.Tilemaps.Tile;

/**
 * Sets the collision flags for each side of this tile and updates the interesting faces list.
 * @param left - Indicating collide with any object on the left.
 * @param [right] - Indicating collide with any object on the right.
 * @param [up] - Indicating collide with any object on the top.
 * @param [down] - Indicating collide with any object on the bottom.
 * @param [recalculateFaces=true] - Whether or not to recalculate interesting faces
 * for this tile and its neighbors.
 */
declare function setCollision(left: boolean, right?: boolean, up?: boolean, down?: boolean, recalculateFaces?: boolean): Phaser.Tilemaps.Tile;

/**
 * Set a callback to be called when this tile is hit by an object. The callback must true for
 * collision processing to take place.
 * @param callback - Callback function.
 * @param context - Callback will be called within this context.
 */
declare function setCollisionCallback(callback: Function, context: object): Phaser.Tilemaps.Tile;

/**
 * Sets the size of the tile and updates its pixelX and pixelY.
 * @param tileWidth - The width of the tile in pixels.
 * @param tileHeight - The height of the tile in pixels.
 * @param baseWidth - The base width a tile in the map (in pixels).
 * @param baseHeight - The base height of the tile in pixels (in pixels).
 */
declare function setSize(tileWidth: number, tileHeight: number, baseWidth: number, baseHeight: number): Phaser.Tilemaps.Tile;

/**
 * Used internally. Updates the tile's world XY position based on the current tile size.
 */
declare function updatePixelXY(): Phaser.Tilemaps.Tile;

/**
 * A Tilemap is a container for Tilemap data. This isn't a display object, rather, it holds data
 * about the map and allows you to add tilesets and tilemap layers to it. A map can have one or
 * more tilemap layers (StaticTilemapLayer or DynamicTilemapLayer), which are the display
 * objects that actually render tiles.
 * 
 * The Tilemap data be parsed from a Tiled JSON file, a CSV file or a 2D array. Tiled is a free
 * software package specifically for creating tile maps, and is available from:
 * http://www.mapeditor.org
 * 
 * A Tilemap has handy methods for getting & manipulating the tiles within a layer. You can only
 * use the methods that change tiles (e.g. removeTileAt) on a DynamicTilemapLayer.
 * 
 * Note that all Tilemaps use a base tile size to calculate dimensions from, but that a
 * StaticTilemapLayer or DynamicTilemapLayer may have its own unique tile size that overrides
 * it.
 */
declare class Tilemap {
    /**
     * @param scene - The Scene to which this Tilemap belongs.
     * @param mapData - A MapData instance containing Tilemap data.
     */
    constructor(scene: Phaser.Scene, mapData: Phaser.Tilemaps.MapData);

}

/**
 * Adds an image to the map to be used as a tileset. A single map may use multiple tilesets.
 * Note that the tileset name can be found in the JSON file exported from Tiled, or in the Tiled
 * editor.
 * @param tilesetName - The name of the tileset as specified in the map data.
 * @param [key] - The key of the Phaser.Cache image used for this tileset. If
 * `undefined` or `null` it will look for an image with a key matching the tileset parameter.
 * @param [tileWidth] - The width of the tile (in pixels) in the Tileset Image. If not
 * given it will default to the map's tileWidth value, or the tileWidth specified in the Tiled
 * JSON file.
 * @param [tileHeight] - The height of the tiles (in pixels) in the Tileset Image. If
 * not given it will default to the map's tileHeight value, or the tileHeight specified in the
 * Tiled JSON file.
 * @param [tileMargin] - The margin around the tiles in the sheet (in pixels). If not
 * specified, it will default to 0 or the value specified in the Tiled JSON file.
 * @param [tileSpacing] - The spacing between each the tile in the sheet (in pixels).
 * If not specified, it will default to 0 or the value specified in the Tiled JSON file.
 * @param [gid=0] - If adding multiple tilesets to a blank map, specify the starting
 * GID this set will use here.
 * failed.
 */
declare function addTilesetImage(tilesetName: string, key?: string, tileWidth?: number, tileHeight?: number, tileMargin?: number, tileSpacing?: number, gid?: number): Phaser.Tilemaps.Tileset | null;

/**
 * Turns the StaticTilemapLayer associated with the given layer into a DynamicTilemapLayer. If
 * no layer specified, the map's current layer is used. This is useful if you want to manipulate
 * a map at the start of a scene, but then make it non-manipulable and optimize it for speed.
 * Note: the DynamicTilemapLayer passed in is destroyed, so make sure to store the value
 * returned from this method if you want to manipulate the new StaticTilemapLayer.
 * @param [layer] - The name of the layer from Tiled, the
 * index of the layer in the map, or a DynamicTilemapLayer.
 * failed.
 */
declare function convertLayerToStatic(layer?: string | number | Phaser.Tilemaps.DynamicTilemapLayer): Phaser.Tilemaps.StaticTilemapLayer | null;

/**
 * See component documentation. If no layer specified, the map's current layer is used. This
 * cannot be applied to StaticTilemapLayers.
 */
declare function copy(): Phaser.Tilemaps.Tilemap | null;

/**
 * Creates a new and empty DynamicTilemapLayer. The currently selected layer in the map is set
 * to this new layer.
 * @param name - The name of this layer. Must be unique within the map.
 * @param tileset - The tileset the new layer will use.
 * @param width - The width of the layer in tiles. If not specified, it will default
 * to the map's width.
 * @param height - The height of the layer in tiles. If not specified, it will default
 * to the map's height.
 * @param tileWidth - The width of the tiles the layer uses for calculations. If not
 * specified, it will default to the map's tileWidth.
 * @param tileHeight - The height of the tiles the layer uses for calculations. If not
 * specified, it will default to the map's tileHeight.
 */
declare function createBlankDynamicLayer(name: string, tileset: Phaser.Tilemaps.Tileset, width: number, height: number, tileWidth: number, tileHeight: number): Phaser.Tilemaps.DynamicTilemapLayer | null;

/**
 * Creates a new DynamicTilemapLayer that renders the LayerData associated with the given
 * `layerID`. The currently selected layer in the map is set to this new layer.
 * The `layerID` is important. If you've created your map in Tiled then you can get this by
 * looking in Tiled and looking at the layer name. Or you can open the JSON file it exports and
 * look at the layers[].name value. Either way it must match.
 * Unlike a static layer, a dynamic layer can be modified. See DynamicTilemapLayer for more
 * information.
 * @param layerID - The layer array index value, or if a string is given, the
 * layer name from Tiled.
 * @param tileset - The tileset the new layer will use.
 * @param x - The x position to place the layer in the world. If not specified, it will
 * default to the layer offset from Tiled or 0.
 * @param y - The y position to place the layer in the world. If not specified, it will
 * default to the layer offset from Tiled or 0.
 */
declare function createDynamicLayer(layerID: number | string, tileset: Phaser.Tilemaps.Tileset, x: number, y: number): Phaser.Tilemaps.DynamicTilemapLayer | null;

/**
 * Creates a Sprite for every object matching the given gid in the map data. All properties from
 * the map data objectgroup are copied into the `spriteConfig`, so you can use this as an easy
 * way to configure Sprite properties from within the map editor. For example giving an object a
 * property of alpha: 0.5 in the map editor will duplicate that when the Sprite is created.
 * @param name - The name of the object layer (from Tiled) to create Sprites from.
 * @param id - Either the id (object), gid (tile object) or name (object or
 * tile object) from Tiled. Ids are unique in Tiled, but a gid is shared by all tile objects
 * with the same graphic. The same name can be used on multiple objects.
 * @param spriteConfig - The config object to pass into the Sprite creator (i.e.
 * scene.make.sprite).
 * @param [scene=the scene the map is within] - The Scene to create the Sprites within.
 */
declare function createFromObjects(name: string, id: number | string, spriteConfig: object, scene?: Phaser.Scene): Phaser.GameObjects.Sprite[];

/**
 * Creates a Sprite for every object matching the given tile indexes in the layer. You can
 * optionally specify if each tile will be replaced with a new tile after the Sprite has been
 * created. This is useful if you want to lay down special tiles in a level that are converted to
 * Sprites, but want to replace the tile itself with a floor tile or similar once converted.
 * @param indexes - The tile index, or array of indexes, to create Sprites from.
 * @param replacements - The tile index, or array of indexes, to change a converted
 * tile to. Set to `null` to leave the tiles unchanged. If an array is given, it is assumed to be a
 * one-to-one mapping with the indexes array.
 * @param spriteConfig - The config object to pass into the Sprite creator (i.e.
 * scene.make.sprite).
 * @param [scene=scene the map is within] - The Scene to create the Sprites within.
 * @param [camera=main camera] - The Camera to use when determining the world XY
 * @param layer - [description]
 */
declare function createFromTiles(indexes: number | any, replacements: number | any, spriteConfig: object, scene?: Phaser.Scene, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.GameObjects.Sprite[] | null;

/**
 * Creates a new StaticTilemapLayer that renders the LayerData associated with the given
 * `layerID`. The currently selected layer in the map is set to this new layer.
 * The `layerID` is important. If you've created your map in Tiled then you can get this by
 * looking in Tiled and looking at the layer name. Or you can open the JSON file it exports and
 * look at the layers[].name value. Either way it must match.
 * It's important to remember that a static layer cannot be modified. See StaticTilemapLayer for
 * more information.
 * @param layerID - The layer array index value, or if a string is given, the
 * layer name from Tiled.
 * @param tileset - The tileset the new layer will use.
 * @param x - The x position to place the layer in the world. If not specified, it will
 * default to the layer offset from Tiled or 0.
 * @param y - The y position to place the layer in the world. If not specified, it will
 * default to the layer offset from Tiled or 0.
 */
declare function createStaticLayer(layerID: number | string, tileset: Phaser.Tilemaps.Tileset, x: number, y: number): Phaser.Tilemaps.StaticTilemapLayer | null;

/**
 * Removes all layer data from this Tilemap and nulls the scene reference. This will destroy any
 * StaticTilemapLayers or DynamicTilemapLayers that have been linked to LayerData.
 */
declare function destroy(): void;

/**
 * Sets the tiles in the given rectangular area (in tile coordinates) of the layer with the
 * specified index. Tiles will be set to collide if the given index is a colliding index.
 * Collision information in the region will be recalculated.
 * If no layer specified, the map's current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param index - [description]
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - [description]
 */
declare function fill(index: number, tileX?: number, tileY?: number, width?: number, height?: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * For each object in the given object layer, run the given filter callback function. Any
 * objects that pass the filter test (i.e. where the callback returns true) will returned as a
 * new array. Similar to Array.prototype.Filter in vanilla JS.
 * @param [objectLayer] - The name of an object layer (from Tiled) or an
 * ObjectLayer instance.
 * @param callback - The callback. Each object in the given area will be passed to
 * this callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * given was invalid.
 */
declare function filterObjects(objectLayer?: Phaser.Tilemaps.ObjectLayer | string, callback: Function, context?: object): object[] | null;

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * filter callback function. Any tiles that pass the filter test (i.e. where the callback returns
 * true) will returned as a new array. Similar to Array.prototype.Filter in vanilla JS.
 * If no layer specified, the map's current layer is used.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter. The callback should return true for tiles that pass the
 * filter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - [description]
 */
declare function filterTiles(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: filterTiles_filteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[] | null;

/**
 * Searches the entire map layer for the first tile matching the given index, then returns that Tile
 * object. If no match is found, it returns null. The search starts from the top-left tile and
 * continues horizontally until it hits the end of the row, then it drops down to the next column.
 * If the reverse boolean is true, it scans starting from the bottom-right corner traveling up to
 * the top-left.
 * If no layer specified, the map's current layer is used.
 * @param index - The tile index value to search for.
 * @param [skip=0] - The number of times to skip a matching tile before returning.
 * @param [reverse=false] - If true it will scan the layer in reverse, starting at the
 * bottom-right. Otherwise it scans from the top-left.
 * @param layer - [description]
 */
declare function findByIndex(index: number, skip?: number, reverse?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Find the first object in the given object layer that satisfies the provided testing function.
 * I.e. finds the first object for which `callback` returns true. Similar to
 * Array.prototype.find in vanilla JS.
 * @param [objectLayer] - The name of an object layer (from Tiled) or an
 * ObjectLayer instance.
 * @param callback - The callback. Each object in the given area will be passed to
 * this callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 */
declare function findObject(objectLayer?: Phaser.Tilemaps.ObjectLayer | string, callback: Function, context?: object): object | null;

/**
 * Find the first tile in the given rectangular area (in tile coordinates) of the layer that
 * satisfies the provided testing function. I.e. finds the first tile for which `callback` returns
 * true. Similar to Array.prototype.find in vanilla JS.
 * If no layer specified, the maps current layer is used.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - [description]
 */
declare function findTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: findTile_filteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * For each tile in the given rectangular area (in tile coordinates) of the layer, run the given
 * callback. Similar to Array.prototype.forEach in vanilla JS.
 * If no layer specified, the map's current layer is used.
 * @param callback - The callback. Each tile in the given area will be passed to this
 * callback as the first and only parameter.
 * @param [context] - The context under which the callback should be run.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide
 * on at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - [description]
 */
declare function forEachTile(callback: Function, context?: object, tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: forEachTile_filteringOptions, layer: LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Gets the image layer index based on its name.
 * @param name - The name of the image to get.
 */
declare function getImageIndex(name: string): number;

/**
 * Internally used. Returns the index of the object in one of the Tilemaps arrays whose name
 * property matches the given `name`.
 * @param location - The Tilemap array to search.
 * @param name - The name of the array element to get.
 */
declare function getIndex(location: any, name: string): number;

/**
 * Gets the LayerData from this.layers that is associated with `layer`, or null if an invalid
 * `layer` is given.
 * @param [layer] - The name of the
 * layer from Tiled, the index of the layer in the map, a DynamicTilemapLayer or a
 * StaticTilemapLayer. If not given will default to the maps current layer index.
 */
declare function getLayer(layer?: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.LayerData;

/**
 * Gets the ObjectLayer from this.objects that has the given `name`, or null if no ObjectLayer
 * is found with that name.
 * @param [name] - The name of the object layer from Tiled.
 */
declare function getObjectLayer(name?: string): Phaser.Tilemaps.ObjectLayer | null;

/**
 * Gets the LayerData index of the given `layer` within this.layers, or null if an invalid
 * `layer` is given.
 * @param [layer] - The name of the
 * layer from Tiled, the index of the layer in the map, a DynamicTilemapLayer or a
 * StaticTilemapLayer. If not given will default to the map's current layer index.
 */
declare function getLayerIndex(layer?: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): number;

/**
 * Gets the index of the LayerData within this.layers that has the given `name`, or null if an
 * invalid `name` is given.
 * @param name - The name of the layer to get.
 */
declare function getLayerIndexByName(name: string): number;

/**
 * Gets a tile at the given tile coordinates from the given layer.
 * If no layer specified, the map's current layer is used.
 * @param tileX - X position to get the tile from (given in tile units, not pixels).
 * @param tileY - Y position to get the tile from (given in tile units, not pixels).
 * @param [nonNull=false] - If true getTile won't return null for empty tiles, but a Tile
 * object with an index of -1.
 * @param layer - [description]
 */
declare function getTileAt(tileX: number, tileY: number, nonNull?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Gets a tile at the given world coordinates from the given layer.
 * If no layer specified, the map's current layer is used.
 * @param worldX - X position to get the tile from (given in pixels)
 * @param worldY - Y position to get the tile from (given in pixels)
 * @param [nonNull=false] - If true, function won't return null for empty tiles, but a Tile
 * object with an index of -1.
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function getTileAtWorldXY(worldX: number, worldY: number, nonNull?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Gets the tiles in the given rectangular area (in tile coordinates) of the layer.
 * If no layer specified, the maps current layer is used.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param layer - [description]
 */
declare function getTilesWithin(tileX?: number, tileY?: number, width?: number, height?: number, filteringOptions?: getTilesWithin_filteringOptions, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[] | null;

/**
 * Gets the tiles that overlap with the given shape in the given layer. The shape must be a Circle,
 * Line, Rectangle or Triangle. The shape should be in world coordinates.
 * If no layer specified, the maps current layer is used.
 * @param shape - A shape in world (pixel) coordinates
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function getTilesWithinShape(shape: Phaser.Geom.Circle | Phaser.Geom.Line | Phaser.Geom.Rectangle | Phaser.Geom.Triangle, filteringOptions?: getTilesWithinShape_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[] | null;

/**
 * Gets the tiles in the given rectangular area (in world coordinates) of the layer.
 * If no layer specified, the maps current layer is used.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param width - [description]
 * @param height - [description]
 * @param [filteringOptions] - Optional filters to apply when getting the tiles.
 * @param [filteringOptions.isNotEmpty=false] - If true, only return tiles that don't have
 * -1 for an index.
 * @param [filteringOptions.isColliding=false] - If true, only return tiles that collide on
 * at least one side.
 * @param [filteringOptions.hasInterestingFace=false] - If true, only return tiles that
 * have at least one interesting face.
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function getTilesWithinWorldXY(worldX: number, worldY: number, width: number, height: number, filteringOptions?: getTilesWithinWorldXY_filteringOptions, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile[] | null;

/**
 * Gets the index of the Tileset within this.tilesets that has the given `name`, or null if an
 * invalid `name` is given.
 * @param name - The name of the Tileset to get.
 */
declare function getTilesetIndex(name: string): number;

/**
 * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * If no layer specified, the map's current layer is used.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param layer - [description]
 */
declare function hasTileAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): boolean | null;

/**
 * Checks if there is a tile at the given location (in world coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 * If no layer specified, the maps current layer is used.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function hasTileAtWorldXY(worldX: number, worldY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): boolean | null;

/**
 * Puts a tile at the given tile coordinates in the specified layer. You can pass in either an index
 * or a Tile object. If you pass in a Tile, all attributes will be copied over to the specified
 * location. If you pass in an index, only the index at the specified location will be changed.
 * Collision information will be recalculated at the specified location.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param tile - The index of this tile to set or a Tile object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - [description]
 */
declare function putTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Puts a tile at the given world coordinates (pixels) in the specified layer. You can pass in either
 * an index or a Tile object. If you pass in a Tile, all attributes will be copied over to the
 * specified location. If you pass in an index, only the index at the specified location will be
 * changed. Collision information will be recalculated at the specified location.
 * If no layer specified, the maps current layer is used. This
 * cannot be applied to StaticTilemapLayers.
 * @param tile - The index of this tile to set or a Tile object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function putTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Puts an array of tiles or a 2D array of tiles at the given tile coordinates in the specified
 * layer. The array can be composed of either tile indexes or Tile objects. If you pass in a Tile,
 * all attributes will be copied over to the specified location. If you pass in an index, only the
 * index at the specified location will be changed. Collision information will be recalculated
 * within the region tiles were changed.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param tile - A row (array) or grid (2D array) of Tiles
 * or tile indexes to place.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [recalculateFaces=true] - [description]
 * @param layer - [description]
 */
declare function putTilesAt(tile: number[] | Array.<number[] | Phaser.Tilemaps.Tile[] | Array.<Phaser.Tilemaps.Tile[], tileX: number, tileY: number, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
 * specified layer. Each tile will recieve a new index. If an array of indexes is passed in, then
 * those will be used for randomly assigning new tile indexes. If an array is not provided, the
 * indexes found within the region (excluding -1) will be used for randomly assigning new tile
 * indexes. This method only modifies tile indexes and does not change collision information.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [indexes] - An array of indexes to randomly draw from during randomization.
 * @param layer - [description]
 */
declare function randomize(tileX?: number, tileY?: number, width?: number, height?: number, indexes?: number[], layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Calculates interesting faces at the given tile coordinates of the specified layer. Interesting
 * faces are used internally for optimizing collisions against tiles. This method is mostly used
 * internally to optimize recalculating faces when only one tile has been changed.
 * If no layer specified, the maps current layer is used.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param layer - [description]
 */
declare function calculateFacesAt(tileX: number, tileY: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Calculates interesting faces within the rectangular area specified (in tile coordinates) of the
 * layer. Interesting faces are used internally for optimizing collisions against tiles. This method
 * is mostly used internally.
 * If no layer specified, the map's current layer is used.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - [description]
 */
declare function calculateFacesWithin(tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Removes all layers from this Tilemap and destroys any associated StaticTilemapLayers or
 * DynamicTilemapLayers.
 */
declare function removeAllLayers(): Phaser.Tilemaps.Tilemap;

/**
 * Removes the tile at the given tile coordinates in the specified layer and updates the layer's
 * collision information.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param tile - The index of this tile to set or a Tile object.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param [recalculateFaces=true] - [description]
 * @param layer - [description]
 */
declare function removeTileAt(tile: number | Phaser.Tilemaps.Tile, tileX: number, tileY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Removes the tile at the given world coordinates in the specified layer and updates the layer's
 * collision information.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param tile - The index of this tile to set or a Tile object.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [replaceWithNull=true] - If true, this will replace the tile at the specified
 * location with null instead of a Tile with an index of -1.
 * @param [recalculateFaces=true] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function removeTileAtWorldXY(tile: number | Phaser.Tilemaps.Tile, worldX: number, worldY: number, replaceWithNull?: boolean, recalculateFaces?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tile | null;

/**
 * Draws a debug representation of the layer to the given Graphics. This is helpful when you want to
 * get a quick idea of which of your tiles are colliding and which have interesting faces. The tiles
 * are drawn starting at (0, 0) in the Graphics, allowing you to place the debug representation
 * wherever you want on the screen.
 * If no layer specified, the maps current layer is used.
 * @param graphics - The target Graphics object to draw upon.
 * @param styleConfig - An object specifying the colors to use for the debug drawing.
 * @param [styleConfig.tileColor=blue] - Color to use for drawing a filled rectangle at
 * non-colliding tile locations. If set to null, non-colliding tiles will not be drawn.
 * @param [styleConfig.collidingTileColor=orange] - Color to use for drawing a filled
 * rectangle at colliding tile locations. If set to null, colliding tiles will not be drawn.
 * @param [styleConfig.faceColor=grey] - Color to use for drawing a line at interesting
 * tile faces. If set to null, interesting tile faces will not be drawn.
 * @param layer - [description]
 */
declare function renderDebug(graphics: Phaser.GameObjects.Graphics, styleConfig?: renderDebug_styleConfig, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
 * `findIndex` and updates their index to match `newIndex`. This only modifies the index and does
 * not change collision information.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param findIndex - [description]
 * @param newIndex - [description]
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - [description]
 */
declare function replaceByIndex(findIndex: number, newIndex: number, tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets collision on the given tile or tiles within a layer by index. You can pass in either a
 * single numeric index or an array of indexes: [2, 3, 15, 20]. The `collides` parameter controls if
 * collision will be enabled (true) or disabled (false).
 * If no layer specified, the map's current layer is used.
 * @param indexes - Either a single tile index, or an array of tile indexes.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - [description]
 */
declare function setCollision(indexes: number | any, collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets collision on a range of tiles in a layer whose index is between the specified `start` and
 * `stop` (inclusive). Calling this with a start value of 10 and a stop value of 14 would set
 * collision for tiles 10, 11, 12, 13 and 14. The `collides` parameter controls if collision will be
 * enabled (true) or disabled (false).
 * If no layer specified, the map's current layer is used.
 * @param start - The first index of the tile to be set for collision.
 * @param stop - The last index of the tile to be set for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - [description]
 */
declare function setCollisionBetween(start: number, stop: number, collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets collision on the tiles within a layer by checking tile properties. If a tile has a property
 * that matches the given properties object, its collision flag will be set. The `collides`
 * parameter controls if collision will be enabled (true) or disabled (false). Passing in
 * `{ collides: true }` would update the collision flag on any tiles with a "collides" property that
 * has a value of true. Any tile that doesn't have "collides" set to true will be ignored. You can
 * also use an array of values, e.g. `{ types: ["stone", "lava", "sand" ] }`. If a tile has a
 * "types" property that matches any of those values, its collision flag will be updated.
 * If no layer specified, the map's current layer is used.
 * @param properties - An object with tile properties and corresponding values that should
 * be checked.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - [description]
 */
declare function setCollisionByProperty(properties: object, collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets collision on all tiles in the given layer, except for tiles that have an index specified in
 * the given array. The `collides` parameter controls if collision will be enabled (true) or
 * disabled (false).
 * If no layer specified, the map's current layer is used.
 * @param indexes - An array of the tile indexes to not be counted for collision.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - [description]
 */
declare function setCollisionByExclusion(indexes: number[], collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets collision on the tiles within a layer by checking each tile's collision group data
 * (typically defined in Tiled within the tileset collision editor). If any objects are found within
 * a tile's collision group, the tile's colliding information will be set. The `collides` parameter
 * controls if collision will be enabled (true) or disabled (false).
 * If no layer specified, the map's current layer is used.
 * @param [collides=true] - If true it will enable collision. If false it will clear
 * collision.
 * @param [recalculateFaces=true] - Whether or not to recalculate the tile faces after the
 * update.
 * @param layer - [description]
 */
declare function setCollisionFromCollisionGroup(collides?: boolean, recalculateFaces?: boolean, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets a global collision callback for the given tile index within the layer. This will affect all
 * tiles on this layer that have the same index. If a callback is already set for the tile index it
 * will be replaced. Set the callback to null to remove it. If you want to set a callback for a tile
 * at a specific location on the map then see setTileLocationCallback.
 * If no layer specified, the map's current layer is used.
 * @param indexes - Either a single tile index, or an array of tile indexes to have a
 * collision callback set for.
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 * @param layer - [description]
 */
declare function setTileIndexCallback(indexes: number | any, callback: Function, callbackContext: object, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets a collision callback for the given rectangular area (in tile coordindates) within the layer.
 * If a callback is already set for the tile index it will be replaced. Set the callback to null to
 * remove it.
 * If no layer specified, the map's current layer is used.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param callback - The callback that will be invoked when the tile is collided with.
 * @param callbackContext - The context under which the callback is called.
 * @param layer - [description]
 */
declare function setTileLocationCallback(tileX?: number, tileY?: number, width?: number, height?: number, callback: Function, callbackContext: object, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Sets the current layer to the LayerData associated with `layer`.
 * @param [layer] - The name of the
 * layer from Tiled, the index of the layer in the map, a DynamicTilemapLayer or a
 * StaticTilemapLayer. If not given will default to the map's current layer index.
 */
declare function setLayer(layer?: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.Tilemap;

/**
 * Sets the base tile size for the map. Note: this does not necessarily match the tileWidth and
 * tileHeight for all layers. This also updates the base size on all tiles across all layers.
 * @param tileWidth - The width of the tiles the map uses for calculations.
 * @param tileHeight - The height of the tiles the map uses for calculations.
 */
declare function setBaseTileSize(tileWidth: number, tileHeight: number): Phaser.Tilemaps.Tilemap;

/**
 * Sets the tile size for a specific `layer`. Note: this does not necessarily match the map's
 * tileWidth and tileHeight for all layers. This will set the tile size for the layer and any
 * tiles the layer has.
 * @param tileWidth - The width of the tiles (in pixels) in the layer.
 * @param tileHeight - The height of the tiles (in pixels) in the layer.
 * @param [layer] - The name of the
 * layer from Tiled, the index of the layer in the map, a DynamicTilemapLayer or a
 * StaticTilemapLayer. If not given will default to the map's current layer index.
 */
declare function setLayerTileSize(tileWidth: number, tileHeight: number, layer?: string | number | Phaser.Tilemaps.DynamicTilemapLayer | Phaser.Tilemaps.StaticTilemapLayer): Phaser.Tilemaps.Tilemap;

/**
 * Shuffles the tiles in a rectangular region (specified in tile coordinates) within the given
 * layer. It will only randomize the tiles in that area, so if they're all the same nothing will
 * appear to have changed! This method only modifies tile indexes and does not change collision
 * information.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - [description]
 */
declare function shuffle(tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Scans the given rectangular area (given in tile coordinates) for tiles with an index matching
 * `indexA` and swaps then with `indexB`. This only modifies the index and does not change collision
 * information.
 * If no layer specified, the maps current layer is used.
 * This cannot be applied to StaticTilemapLayers.
 * @param tileA - First tile index.
 * @param tileB - Second tile index.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param layer - [description]
 */
declare function swapByIndex(tileA: number, tileB: number, tileX?: number, tileY?: number, width?: number, height?: number, layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Converts from tile X coordinates (tile units) to world X coordinates (pixels), factoring in the
 * layers position, scale and scroll.
 * If no layer specified, the maps current layer is used.
 * @param tileX - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function tileToWorldX(tileX: number, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number | null;

/**
 * Converts from tile Y coordinates (tile units) to world Y coordinates (pixels), factoring in the
 * layers position, scale and scroll.
 * If no layer specified, the maps current layer is used.
 * @param tileY - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function tileToWorldY(tileY: number, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number | null;

/**
 * Converts from tile XY coordinates (tile units) to world XY coordinates (pixels), factoring in the
 * layers position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 * If no layer specified, the maps current layer is used.
 * @param tileX - [description]
 * @param tileY - [description]
 * @param [point] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function tileToWorldXY(tileX: number, tileY: number, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2 | null;

/**
 * Randomizes the indexes of a rectangular region of tiles (in tile coordinates) within the
 * specified layer. Each tile will receive a new index. New indexes are drawn from the given
 * weightedIndexes array. An example weighted array:
 * [
 * { index: 6, weight: 4 },    // Probability of index 6 is 4 / 8
 * { index: 7, weight: 2 },    // Probability of index 7 would be 2 / 8
 * { index: 8, weight: 1.5 },  // Probability of index 8 would be 1.5 / 8
 * { index: 26, weight: 0.5 }  // Probability of index 27 would be 0.5 / 8
 * ]
 * The probability of any index being choose is (the index's weight) / (sum of all weights). This
 * method only modifies tile indexes and does not change collision information.
 * If no layer specified, the map's current layer is used. This
 * cannot be applied to StaticTilemapLayers.
 * @param [tileX=0] - [description]
 * @param [tileY=0] - [description]
 * @param [width=max width based on tileX] - [description]
 * @param [height=max height based on tileY] - [description]
 * @param [weightedIndexes] - An array of objects to randomly draw from during
 * randomization. They should be in the form: { index: 0, weight: 4 } or
 * { index: [0, 1], weight: 4 } if you wish to draw from multiple tile indexes.
 * @param layer - [description]
 */
declare function weightedRandomize(tileX?: number, tileY?: number, width?: number, height?: number, weightedIndexes?: object[], layer: Phaser.Tilemaps.LayerData): Phaser.Tilemaps.Tilemap | null;

/**
 * Converts from world X coordinates (pixels) to tile X coordinates (tile units), factoring in the
 * layers position, scale and scroll.
 * If no layer specified, the maps current layer is used.
 * @param worldX - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function worldToTileX(worldX: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number | null;

/**
 * Converts from world Y coordinates (pixels) to tile Y coordinates (tile units), factoring in the
 * layers position, scale and scroll.
 * If no layer specified, the maps current layer is used.
 * @param worldY - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function worldToTileY(worldY: number, snapToFloor?: boolean, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): number | null;

/**
 * Converts from world XY coordinates (pixels) to tile XY coordinates (tile units), factoring in the
 * layers position, scale and scroll. This will return a new Vector2 object or update the given
 * `point` object.
 * If no layer specified, the maps current layer is used.
 * @param worldX - [description]
 * @param worldY - [description]
 * @param [snapToFloor=true] - Whether or not to round the tile coordinate down to the
 * nearest number.
 * @param [point] - [description]
 * @param [camera=main camera] - [description]
 * @param layer - [description]
 */
declare function worldToTileXY(worldX: number, worldY: number, snapToFloor?: boolean, point?: Phaser.Math.Vector2, camera?: Phaser.Cameras.Scene2D.Camera, layer: Phaser.Tilemaps.LayerData): Phaser.Math.Vector2 | null;

/**
 * Used internally to check if a layer is static and prints out a warning.
 */
declare function _isStaticCall(): boolean;

/**
 * Creates a Tilemap from the given key or data, or creates a blank Tilemap if no key/data provided.
 * When loading from CSV or a 2D array, you should specify the tileWidth & tileHeight. When parsing
 * from a map from Tiled, the tileWidth, tileHeight, width & height will be pulled from the map
 * data. For an empty map, you should specify tileWidth, tileHeight, width & height.
 * @param [config] - The config options for the Tilemap.
 * @param [config.key] - The key in the Phaser cache that corresponds to the loaded tilemap
 * data.
 * @param [config.data] - Instead of loading from the cache, you can also load
 * directly from a 2D array of tile indexes.
 * @param [config.tileWidth=32] - The width of a tile in pixels.
 * @param [config.tileHeight=32] - The height of a tile in pixels.
 * @param [config.width=10] - The width of the map in tiles.
 * @param [config.height=10] - The height of the map in tiles.
 * @param [config.insertNull=false] - Controls how empty tiles, tiles with an index of -1,
 * in the map data are handled. If `true`, empty locations will get a value of `null`. If `false`,
 * empty location will get a Tile object with an index of -1. If you've a large sparsely populated
 * map and the tile data doesn't need to change then setting this value to `true` will help with
 * memory consumption. However if your map is small or you need to update the tiles dynamically,
 * then leave the default value set.
 */
declare function tilemap(config?: tilemap_config): Phaser.Tilemaps.Tilemap;

declare interface tilemap_config {
    /**
     * The key in the Phaser cache that corresponds to the loaded tilemap
     * data.
     */
    key: string;
    /**
     * Instead of loading from the cache, you can also load
     * directly from a 2D array of tile indexes.
     */
    data: Array.<number[];
    /**
     * The width of a tile in pixels.
     */
    tileWidth: number;
    /**
     * The height of a tile in pixels.
     */
    tileHeight: number;
    /**
     * The width of the map in tiles.
     */
    width: number;
    /**
     * The height of the map in tiles.
     */
    height: number;
    /**
     * Controls how empty tiles, tiles with an index of -1,
     * in the map data are handled. If `true`, empty locations will get a value of `null`. If `false`,
     * empty location will get a Tile object with an index of -1. If you've a large sparsely populated
     * map and the tile data doesn't need to change then setting this value to `true` will help with
     * memory consumption. However if your map is small or you need to update the tiles dynamically,
     * then leave the default value set.
     */
    insertNull: boolean;
}

/**
 * Creates a Tilemap from the given key or data, or creates a blank Tilemap if no key/data provided.
 * When loading from CSV or a 2D array, you should specify the tileWidth & tileHeight. When parsing
 * from a map from Tiled, the tileWidth, tileHeight, width & height will be pulled from the map
 * data. For an empty map, you should specify tileWidth, tileHeight, width & height.
 * @param [key] - The key in the Phaser cache that corresponds to the loaded tilemap data.
 * @param [tileWidth=32] - The width of a tile in pixels. Pass in `null` to leave as the
 * default.
 * @param [tileHeight=32] - The height of a tile in pixels. Pass in `null` to leave as the
 * default.
 * @param [width=10] - The width of the map in tiles. Pass in `null` to leave as the
 * default.
 * @param [height=10] - The height of the map in tiles. Pass in `null` to leave as the
 * default.
 * @param [data] - Instead of loading from the cache, you can also load directly from
 * a 2D array of tile indexes. Pass in `null` for no data.
 * @param [insertNull=false] - Controls how empty tiles, tiles with an index of -1, in the
 * map data are handled. If `true`, empty locations will get a value of `null`. If `false`, empty
 * location will get a Tile object with an index of -1. If you've a large sparsely populated map and
 * the tile data doesn't need to change then setting this value to `true` will help with memory
 * consumption. However if your map is small or you need to update the tiles dynamically, then leave
 * the default value set.
 */
declare function tilemap(key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number, data?: Array.<number[], insertNull?: boolean): Phaser.Tilemaps.Tilemap;

/**
 * A Tileset is a combination of an image containing the tiles and a container for data about
 * each tile.
 */
declare class Tileset {
    /**
     * @param name - The name of the tileset in the map data.
     * @param firstgid - The first tile index this tileset contains.
     * @param [tileWidth=32] - Width of each tile (in pixels).
     * @param [tileHeight=32] - Height of each tile (in pixels).
     * @param [tileMargin=0] - The margin around all tiles in the sheet (in pixels).
     * @param [tileSpacing=0] - The spacing between each tile in the sheet (in pixels).
     * @param [tileProperties={}] - Custom properties defined per tile in the Tileset.
     * These typically are custom properties created in Tiled when editing a tileset.
     * @param [tileData={}] - Data stored per tile. These typically are created in Tiled
     * when editing a tileset, e.g. from Tiled's tile collision editor or terrain editor.
     */
    constructor(name: string, firstgid: number, tileWidth?: number, tileHeight?: number, tileMargin?: number, tileSpacing?: number, tileProperties?: object, tileData?: object);

}

/**
 * Get a tiles properties that are stored in the Tileset. Returns null if tile index is not
 * contained in this Tileset. This is typically defined in Tiled under the Tileset editor.
 * @param tileIndex - The unique id of the tile across all tilesets in the map.
 */
declare function getTileProperties(tileIndex: number): object | undefined | null;

/**
 * Get a tile's data that is stored in the Tileset. Returns null if tile index is not contained
 * in this Tileset. This is typically defined in Tiled and will contain both Tileset collision
 * info and terrain mapping.
 * @param tileIndex - The unique id of the tile across all tilesets in the map.
 */
declare function getTileData(tileIndex: number): object | undefined | null;

/**
 * Get a tile's collision group that is stored in the Tileset. Returns null if tile index is not
 * contained in this Tileset. This is typically defined within Tiled's tileset collision editor.
 * @param tileIndex - The unique id of the tile across all tilesets in the map.
 */
declare function getTileCollisionGroup(tileIndex: number): object | null;

/**
 * Returns true if and only if this Tileset contains the given tile index.
 * @param tileIndex - The unique id of the tile across all tilesets in the map.
 */
declare function containsTileIndex(tileIndex: number): boolean;

/**
 * Returns the texture coordinates (UV in pixels) in the Tileset image for the given tile index.
 * Returns null if tile index is not contained in this Tileset.
 * @param tileIndex - The unique id of the tile across all tilesets in the map.
 * within the Tileset image.
 */
declare function getTileTextureCoordinates(tileIndex: number): object | null;

/**
 * Sets the image associated with this Tileset and updates the tile data (rows, columns, etc.).
 * @param texture - The image that contains the tiles.
 */
declare function setImage(texture: Phaser.Textures.Texture): Phaser.Tilemaps.Tileset;

/**
 * Sets the tile width & height and updates the tile data (rows, columns, etc.).
 * @param [tileWidth] - The width of a tile in pixels.
 * @param [tileHeight] - The height of a tile in pixels.
 */
declare function setTileSize(tileWidth?: number, tileHeight?: number): Phaser.Tilemaps.Tileset;

/**
 * Sets the tile margin & spacing and updates the tile data (rows, columns, etc.).
 * @param [margin] - The margin around the tiles in the sheet (in pixels).
 * @param [spacing] - The spacing between the tiles in the sheet (in pixels).
 */
declare function setSpacing(margin?: number, spacing?: number): Phaser.Tilemaps.Tileset;

/**
 * Updates tile texture coordinates and tileset data.
 * @param imageWidth - The (expected) width of the image to slice.
 * @param imageHeight - The (expected) height of the image to slice.
 */
declare function updateTileData(imageWidth: number, imageHeight: number): Phaser.Tilemaps.Tileset;

