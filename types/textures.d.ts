declare namespace FilterMode {
}

/**
 * A Frame is a section of a Texture.
 */
declare class Frame {
    /**
     * @param texture - The Texture this Frame is a part of.
     * @param name - The name of this Frame. The name is unique within the Texture.
     * @param sourceIndex - The index of the TextureSource that this Frame is a part of.
     * @param x - The x coordinate of the top-left of this Frame.
     * @param y - The y coordinate of the top-left of this Frame.
     * @param width - The width of this Frame.
     * @param height - The height of this Frame.
     */
    constructor(texture: Phaser.Textures.Texture, name: number | string, sourceIndex: number, x: number, y: number, width: number, height: number);

}

/**
 * If the frame was trimmed when added to the Texture Atlas, this records the trim and source data.
 * @param actualWidth - The width of the frame before being trimmed.
 * @param actualHeight - The height of the frame before being trimmed.
 * @param destX - The destination X position of the trimmed frame for display.
 * @param destY - The destination Y position of the trimmed frame for display.
 * @param destWidth - The destination width of the trimmed frame for display.
 * @param destHeight - The destination height of the trimmed frame for display.
 */
declare function setTrim(actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): Phaser.Textures.Frame;

/**
 * Updates the internal WebGL UV cache and the drawImage cache.
 */
declare function updateUVs(): Phaser.Textures.Frame;

/**
 * Updates the internal WebGL UV cache.
 */
declare function updateUVsInverted(): Phaser.Textures.Frame;

/**
 * Clones this Frame into a new Frame any.
 */
declare function clone(): Phaser.Textures.Frame;

/**
 * Destroys this Frames references.
 */
declare function destroy(): void;

declare namespace Textures {
}

/**
 * Adds a Canvas Element to a Texture.
 * @param texture - The Texture to add the Frames to.
 * @param sourceIndex - The index of the TextureSource.
 */
declare function Canvas(texture: Phaser.Textures.Texture, sourceIndex: number): Phaser.Textures.Texture;

/**
 * Adds an Image Element to a Texture.
 * @param texture - The Texture to add the Frames to.
 * @param sourceIndex - The index of the TextureSource.
 */
declare function Image(texture: Phaser.Textures.Texture, sourceIndex: number): Phaser.Textures.Texture;

declare namespace Parsers {
}

/**
 * Parses a Texture Atlas JSON Array and adds the Frames to the Texture.
 * JSON format expected to match that defined by Texture Packer, with the frames property containing an array of Frames.
 * @param texture - The Texture to add the Frames to.
 * @param sourceIndex - The index of the TextureSource.
 * @param json - The JSON data.
 */
declare function JSONArray(texture: Phaser.Textures.Texture, sourceIndex: number, json: any): Phaser.Textures.Texture;

/**
 * Parses a Texture Atlas JSON Hash and adds the Frames to the Texture.
 * JSON format expected to match that defined by Texture Packer, with the frames property containing an any of Frames.
 * @param texture - The Texture to add the Frames to.
 * @param sourceIndex - The index of the TextureSource.
 * @param json - The JSON data.
 */
declare function JSONHash(texture: Phaser.Textures.Texture, sourceIndex: number, json: any): Phaser.Textures.Texture;

/**
 * Parses a Pyxel JSON any and adds the Frames to a Texture.
 * @param texture - The Texture to add the Frames to.
 * @param json - The JSON data.
 */
declare function Pyxel(texture: Phaser.Textures.Texture, json: any): Phaser.Textures.Texture;

/**
 * Parses a Sprite Sheet and adds the Frames to the Texture.
 * In Phaser terminology a Sprite Sheet is a texture containing different frames, but each frame is the exact
 * same size and cannot be trimmed or rotated.
 * @param texture - The Texture to add the Frames to.
 * @param sourceIndex - The index of the TextureSource.
 * @param x - [description]
 * @param y - [description]
 * @param width - [description]
 * @param height - [description]
 * @param config - [description]
 */
declare function SpriteSheet(texture: Phaser.Textures.Texture, sourceIndex: number, x: number, y: number, width: number, height: number, config: any): Phaser.Textures.Texture;

/**
 * Parses a Sprite Sheet and adds the Frames to the Texture, where the Sprite Sheet is stored as a frame within an Atlas.
 * In Phaser terminology a Sprite Sheet is a texture containing different frames, but each frame is the exact
 * same size and cannot be trimmed or rotated.
 * @param texture - The Texture to add the Frames to.
 * @param frame - The Frame that contains the Sprite Sheet.
 * @param config - [description]
 */
declare function SpriteSheetFromAtlas(texture: Phaser.Textures.Texture, frame: Phaser.Textures.Frame, config: any): Phaser.Textures.Texture;

/**
 * Parses a Starling XML any and adds all the Frames into a Texture.
 * @param texture - The Texture to add the Frames to.
 * @param xml - The XML data.
 */
declare function StarlingXML(texture: Phaser.Textures.Texture, xml: any): Phaser.Textures.Texture;

/**
 * Parses a Unity YAML File and creates Frames in the Texture.
 * For more details about Sprite Meta Data see https://docs.unity3d.com/ScriptReference/SpriteMetaData.html
 * @param texture - The Texture to add the Frames to.
 * @param sourceIndex - The index of the TextureSource.
 * @param yaml - The YAML data.
 */
declare function UnityYAML(texture: Phaser.Textures.Texture, sourceIndex: number, yaml: any): Phaser.Textures.Texture;

/**
 * A Texture consists of a source, usually an Image from the Cache, or a Canvas, and a collection
 * of Frames. The Frames represent the different areas of the Texture. For example a texture atlas
 * may have many Frames, one for each element within the atlas. Where-as a single image would have
 * just one frame, that encompasses the whole image.
 * 
 * Textures are managed by the global TextureManager. This is a singleton class that is
 * responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
 * 
 * Sprites and other Game Objects get the texture data they need from the TextureManager.
 */
declare class Texture {
    /**
     * @param manager - A reference to the Texture Manager this Texture belongs to.
     * @param key - The unique string-based key of this Texture.
     * @param source - The source that is used to create the texture. Usually an Image, but can also be a Canvas.
     * @param [width] - The width of the Texture. This is optional and automatically derived from the source images.
     * @param [height] - The height of the Texture. This is optional and automatically derived from the source images.
     */
    constructor(manager: Phaser.Textures.TextureManager, key: string, source: Image | HTMLCanvasElement, width?: number, height?: number);

}

/**
 * Adds a new Frame to this Texture.
 * A Frame is a rectangular region of a TextureSource with a unique index or string-based key.
 * @param name - The name of this Frame. The name is unique within the Texture.
 * @param sourceIndex - The index of the TextureSource that this Frame is a part of.
 * @param x - The x coordinate of the top-left of this Frame.
 * @param y - The y coordinate of the top-left of this Frame.
 * @param width - The width of this Frame.
 * @param height - The height of this Frame.
 */
declare function add(name: number | string, sourceIndex: number, x: number, y: number, width: number, height: number): Phaser.Textures.Frame;

/**
 * Checks to see if a Frame matching the given key exists within this Texture.
 * @param name - The key of the Frame to check for.
 */
declare function has(name: string): boolean;

/**
 * Gets a Frame from this Texture based on either the key or the index of the Frame.
 * In a Texture Atlas Frames are typically referenced by a key.
 * In a Sprite Sheet Frames are referenced by an index.
 * Passing no value for the name returns the base texture.
 * @param [name] - The string-based name, or number based index, of the Frame to get from this Texture.
 */
declare function get(name?: string | number): Phaser.Textures.Frame;

/**
 * Takes the given TextureSource and returns the index of it within this Texture.
 * If it's not in this Texture, it returns -1.
 * Unless this Texture has multiple TextureSources, such as with a multi-atlas, this
 * method will always return zero or -1.
 * @param source - The TextureSource to check.
 */
declare function getTextureSourceIndex(source: Phaser.Textures.TextureSource): number;

/**
 * Returns an array of all the Frames in the given TextureSource.
 * @param sourceIndex - The index of the TextureSource to get the Frames from.
 */
declare function getFramesFromTextureSource(sourceIndex: number): Phaser.Textures.Frame[];

/**
 * Returns an array with all of the names of the Frames in this Texture.
 * Useful if you want to randomly assign a Frame to a Game Object, as you can
 * pick a random element from the returned array.
 * @param [includeBase=false] - Include the `__BASE` Frame in the output array?
 */
declare function getFrameNames(includeBase?: boolean): string[];

/**
 * Given a Frame name, return the source image it uses to render with.
 * This will return the actual DOM Image or Canvas element.
 * @param [name] - The string-based name, or number based index, of the Frame to get from this Texture.
 */
declare function getSourceImage(name?: string | number): Image | HTMLCanvasElement;

/**
 * Adds a data source image to this Texture.
 * An example of a data source image would be a normal map, where all of the Frames for this Texture
 * equally apply to the normal map.
 * @param data - The source image.
 */
declare function setDataSource(data: Image | HTMLCanvasElement): void;

/**
 * Sets the Filter Mode for this Texture.
 * The mode can be either Linear, the default, or Nearest.
 * For pixel-art you should use Nearest.
 * The mode applies to the entire Texture, not just a specific Frame of it.
 * @param filterMode - The Filter Mode.
 */
declare function setFilter(filterMode: Phaser.Textures.FilterMode.LINEAR | Phaser.Textures.FilterMode.NEAREST): void;

/**
 * Destroys this Texture and releases references to its sources and frames.
 */
declare function destroy(): void;

/**
 * Textures are managed by the global TextureManager. This is a singleton class that is
 * responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
 * 
 * Sprites and other Game Objects get the texture data they need from the TextureManager.
 * 
 * Access it via `scene.textures`.
 */
declare class TextureManager {
    /**
     * @param game - [description]
     */
    constructor(game: Phaser.Game);

}

/**
 * [description]
 */
declare function boot(): void;

/**
 * [description]
 */
declare function updatePending(): void;

/**
 * Adds a new Texture to the Texture Manager created from the given Base64 encoded data.
 * @param key - The unique string-based key of the Texture.
 * @param data - The Base64 encoded data.
 */
declare function addBase64(key: string, data: any): void;

/**
 * Adds a new Texture to the Texture Manager created from the given Image element.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param [dataSource] - An optional data Image element.
 */
declare function addImage(key: string, source: Image, dataSource?: Image): Phaser.Textures.Texture;

/**
 * Creates a new Texture using the given config values.
 * Generated textures consist of a Canvas element to which the texture data is drawn.
 * See the Phaser.Create function for the more direct way to create textures.
 * @param key - The unique string-based key of the Texture.
 * @param config - [description]
 */
declare function generate(key: string, config: any): Phaser.Textures.Texture;

/**
 * Creates a new Texture using a blank Canvas element of the size given.
 * Canvas elements are automatically pooled and calling this method will
 * extract a free canvas from the CanvasPool, or create one if none are available.
 * @param key - The unique string-based key of the Texture.
 * @param width - The width of the Canvas element.
 * @param height - The height of the Canvas element.
 */
declare function createCanvas(key: string, width: number, height: number): Phaser.Textures.Texture;

/**
 * Creates a new Texture any from an existing Canvas element and adds
 * it to this Texture Manager.
 * @param key - The unique string-based key of the Texture.
 * @param source - The Canvas element to form the base of the new Texture.
 */
declare function addCanvas(key: string, source: HTMLCanvasElement): Phaser.Textures.Texture;

/**
 * Adds a new Texture Atlas to this Texture Manager.
 * It can accept either JSON Array or JSON Hash formats, as exported by Texture Packer and similar software.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param data - The Texture Atlas data.
 */
declare function addAtlas(key: string, source: Image, data: any): Phaser.Textures.Texture;

/**
 * Adds a Texture Atlas to this Texture Manager.
 * The frame data of the atlas must be stored in an Array within the JSON.
 * This is known as a JSON Array in software such as Texture Packer.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param data - The Texture Atlas data.
 */
declare function addAtlasJSONArray(key: string, source: Image, data: any): Phaser.Textures.Texture;

/**
 * Adds a Texture Atlas to this Texture Manager.
 * The frame data of the atlas must be stored in an Object within the JSON.
 * This is known as a JSON Hash in software such as Texture Packer.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param data - The Texture Atlas data.
 */
declare function addAtlasJSONHash(key: string, source: Image, data: any): Phaser.Textures.Texture;

/**
 * Adds a Unity Texture Atlas to this Texture Manager.
 * The data must be in the form of a Unity YAML file.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param data - The Texture Atlas data.
 */
declare function addUnityAtlas(key: string, source: Image, data: any): Phaser.Textures.Texture;

/**
 * Adds a Sprite Sheet to this Texture Manager.
 * In Phaser terminology a Sprite Sheet is a texture containing different frames, but each frame is the exact
 * same size and cannot be trimmed or rotated.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param config - The configuration any for this Sprite Sheet.
 * @param config.frameWidth - The fixed width of each frame.
 * @param [config.frameHeight] - The fixed height of each frame. If not set it will use the frameWidth as the height.
 * @param [config.startFrame=0] - Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
 * @param [config.endFrame=-1] - The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
 * @param [config.margin=0] - If the frames have been drawn with a margin, specify the amount here.
 * @param [config.spacing=0] - If the frames have been drawn with spacing between them, specify the amount here.
 */
declare function addSpriteSheet(key: string, source: Image, config?: addSpriteSheet_config): Phaser.Textures.Texture;

declare interface addSpriteSheet_config {
    /**
     * The fixed width of each frame.
     */
    frameWidth: number;
    /**
     * The fixed height of each frame. If not set it will use the frameWidth as the height.
     */
    frameHeight: number;
    /**
     * Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
     */
    startFrame: number;
    /**
     * The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
     */
    endFrame: number;
    /**
     * If the frames have been drawn with a margin, specify the amount here.
     */
    margin: number;
    /**
     * If the frames have been drawn with spacing between them, specify the amount here.
     */
    spacing: number;
}

/**
 * Adds a Sprite Sheet to this Texture Manager, where the Sprite Sheet exists as a Frame within a Texture Atlas.
 * In Phaser terminology a Sprite Sheet is a texture containing different frames, but each frame is the exact
 * same size and cannot be trimmed or rotated.
 * @param key - The unique string-based key of the Texture.
 * @param config - The configuration any for this Sprite Sheet.
 * @param config.atlas - The key of the Texture Atlas in which this Sprite Sheet can be found.
 * @param config.frame - The key of the Texture Atlas Frame in which this Sprite Sheet can be found.
 * @param config.frameWidth - The fixed width of each frame.
 * @param [config.frameHeight] - The fixed height of each frame. If not set it will use the frameWidth as the height.
 * @param [config.startFrame=0] - Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
 * @param [config.endFrame=-1] - The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
 * @param [config.margin=0] - If the frames have been drawn with a margin, specify the amount here.
 * @param [config.spacing=0] - If the frames have been drawn with spacing between them, specify the amount here.
 */
declare function addSpriteSheetFromAtlas(key: string, config?: addSpriteSheetFromAtlas_config): Phaser.Textures.Texture;

declare interface addSpriteSheetFromAtlas_config {
    /**
     * The key of the Texture Atlas in which this Sprite Sheet can be found.
     */
    atlas: string;
    /**
     * The key of the Texture Atlas Frame in which this Sprite Sheet can be found.
     */
    frame: string;
    /**
     * The fixed width of each frame.
     */
    frameWidth: number;
    /**
     * The fixed height of each frame. If not set it will use the frameWidth as the height.
     */
    frameHeight: number;
    /**
     * Skip a number of frames. Useful when there are multiple sprite sheets in one Texture.
     */
    startFrame: number;
    /**
     * The total number of frames to extract from the Sprite Sheet. The default value of -1 means "extract all frames".
     */
    endFrame: number;
    /**
     * If the frames have been drawn with a margin, specify the amount here.
     */
    margin: number;
    /**
     * If the frames have been drawn with spacing between them, specify the amount here.
     */
    spacing: number;
}

/**
 * Adds a Texture Atlas to this Texture Manager, where the atlas data is given
 * in the Starling XML format.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param data - The Texture Atlas XML data.
 */
declare function addAtlasStarlingXML(key: string, source: Image, data: any): Phaser.Textures.Texture;

/**
 * Adds a Texture Atlas to this Texture Manager, where the atlas data is given
 * in the Pyxel JSON format.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param data - The Texture Atlas XML data.
 */
declare function addAtlasPyxel(key: string, source: Image, data: any): Phaser.Textures.Texture;

/**
 * Creates a new Texture using the given source and dimensions.
 * @param key - The unique string-based key of the Texture.
 * @param source - The source Image element.
 * @param width - The width of the Texture.
 * @param height - The height of the Texture.
 */
declare function create(key: string, source: Image, width: number, height: number): Phaser.Textures.Texture;

/**
 * Checks the given key to see if a Texture using it exists within this Texture Manager.
 * @param key - The unique string-based key of the Texture.
 */
declare function exists(key: string): boolean;

/**
 * Returns a Texture from the Texture Manager that matches the given key.
 * If the key is undefined it will return the `__DEFAULT` Texture.
 * If the key is given, but not found, it will return the `__MISSING` Texture.
 * @param key - The unique string-based key of the Texture.
 */
declare function get(key: string): Phaser.Textures.Texture;

/**
 * Takes a Texture key and Frame name and returns a clone of that Frame if found.
 * @param key - The unique string-based key of the Texture.
 * @param frame - The string or index of the Frame to be cloned.
 */
declare function cloneFrame(key: string, frame: string | number): Phaser.Textures.Frame;

/**
 * Takes a Texture key and Frame name and returns a reference to that Frame, if found.
 * @param key - The unique string-based key of the Texture.
 * @param frame - The string or index of the Frame.
 */
declare function getFrame(key: string, frame: string | number): Phaser.Textures.Frame;

/**
 * Returns an array with all of the keys of all Textures in this Texture Manager.
 * The output array will exclude the `__DEFAULT` and `__MISSING` keys.
 */
declare function getTextureKeys(): string[];

/**
 * Given a Texture and an `x` and `y` coordinate this method will return a new
 * Color any that has been populated with the color and alpha values of the pixel
 * at that location in the Texture.
 * @param x - The x coordinate of the pixel within the Texture.
 * @param y - The y coordinate of the pixel within the Texture.
 * @param key - The unique string-based key of the Texture.
 * @param frame - The string or index of the Frame.
 * or `null` if the coordinates were out of bounds.
 */
declare function getPixel(x: number, y: number, key: string, frame: string | number): Phaser.Display.Color | null;

/**
 * Sets the given Game Objects `texture` and `frame` properties so that it uses
 * the Texture and Frame specified in the `key` and `frame` arguments to this method.
 * @param gameObject - [description]
 * @param key - The unique string-based key of the Texture.
 * @param frame - The string or index of the Frame.
 */
declare function setTexture(gameObject: Phaser.GameObjects.GameObject, key: string, frame: string | number): Phaser.GameObjects.GameObject;

/**
 * Passes all Textures to the given callback.
 * @param callback - The callback function to be sent the Textures.
 * @param scope - The value to use as `this` when executing the callback.
 * @param [arguments] - Additional arguments that will be passed to the callback, after the child.
 */
declare function each(callback: Function, scope: any, ...arguments?: any): void;

/**
 * Destroys the Texture Manager and all Textures stored within it.
 */
declare function destroy(): void;

/**
 * A Texture Source is the encapsulation of the actual source data for a Texture.
 * This is typically an Image Element, loaded from the file system or network, or a Canvas Element.
 * 
 * A Texture can contain multiple Texture Sources, which only happens when a multi-atlas is loaded.
 */
declare class TextureSource {
    /**
     * @param texture - The Texture this TextureSource belongs to.
     * @param source - The source image data.
     * @param [width] - Optional width of the source image. If not given it's derived from the source itself.
     * @param [height] - Optional height of the source image. If not given it's derived from the source itself.
     */
    constructor(texture: Phaser.Textures.Texture, source: Image | HTMLCanvasElement, width?: number, height?: number);

}

/**
 * Creates a WebGL Texture, if required, and sets the Texture filter mode.
 * @param game - A reference to the Phaser Game instance.
 */
declare function init(game: Phaser.Game): void;

/**
 * Sets the Filter Mode for this Texture.
 * The mode can be either Linear, the default, or Nearest.
 * For pixel-art you should use Nearest.
 * @param filterMode - The Filter Mode.
 */
declare function setFilter(filterMode: Phaser.Textures.FilterMode.LINEAR | Phaser.Textures.FilterMode.NEAREST): void;

/**
 * Destroys this Texture Source and nulls the source image reference.
 */
declare function destroy(): void;

