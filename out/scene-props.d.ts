/**
 * @classdesc
 * The Scene Systems class.
 *
 * This class is available from within a Scene under the property `sys`.
 * It is responsible for managing all of the plugins a Scene has running, including the display list, and
 * handling the update step and renderer. It also contains references to global systems belonging to Game.
 *
 * @class Systems
 * @memberOf Phaser.Scenes
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene that owns this Systems instance.
 * @param {object} config - Scene specific configuration settings.
 */
sys: Phaser.Scenes.Systems;

/**
 * @classdesc
 * The Animation Manager.
 * 
 * Animations are managed by the global Animation Manager. This is a singleton class that is
 * responsible for creating and delivering animations and their corresponding data to all Game Objects.
 * Unlike plugins it is owned by the Game instance, not the Scene.
 * 
 * Sprites and other Game Objects get the data they need from the AnimationManager.
 *
 * @class AnimationManager
 * @extends EventEmitter
 * @memberOf Phaser.Animations
 * @constructor
 * @since 3.0.0
 * 
 * @param {Phaser.Game} game - [description]
 */
anims: Phaser.Animations.AnimationManager;

/**
 * @classdesc
 * The Cache Manager is the global cache owned and maintained by the Game instance.
 * 
 * Various systems, such as the file Loader, rely on this cache in order to store the files
 * it has loaded. The manager itself doesn't store any files, but instead owns multiple BaseCache
 * instances, one per type of file. You can also add your own custom caches.
 *
 * @class CacheManager
 * @memberOf Phaser.Cache
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Game} game - A reference to the Phaser.Game instance that owns this CacheManager.
 */
cache: Phaser.Cache.CacheManager;

/**
 * @classdesc
 * The Data Component features a means to store pieces of data specific to a Game Object, System or Plugin.
 * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
 * or have a property called `events` that is an instance of it.
 *
 * @class DataManager
 * @memberOf Phaser.Data
 * @constructor
 * @since 3.0.0
 *
 * @param {any} parent - [description]
 * @param {any} eventEmitter - [description]
 */
registry: Phaser.Data.DataManager;

/**
 * @classdesc
 * Web Audio API implementation of the sound manager.
 *
 * @class WebAudioSoundManager
 * @extends Phaser.Sound.BaseSoundManager
 * @memberOf Phaser.Sound
 * @constructor
 * @author Pavle Goloskokovic <pgoloskokovic@gmail.com> (http://prunegames.com)
 * @since 3.0.0
 * 
 * @param {Phaser.Game} game - Reference to the current game instance.
 */
sound: Phaser.Sound.WebAudioSoundManager;

/**
 * @classdesc
 * Textures are managed by the global TextureManager. This is a singleton class that is
 * responsible for creating and delivering Textures and their corresponding Frames to Game Objects.
 *
 * Sprites and other Game Objects get the texture data they need from the TextureManager.
 *
 * Access it via `scene.textures`.
 *
 * @class TextureManager
 * @extends EventEmitter
 * @memberOf Phaser.Textures
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Game} game - [description]
 */
textures: Phaser.Textures.TextureManager;

/**
 * @classdesc
 * EventEmitter is a Scene Systems plugin compatible version of eventemitter3.
 *
 * @class EventEmitter
 * @extends EventEmitter
 * @memberOf Phaser.Events
 * @constructor
 * @since 3.0.0
 */
events: Phaser.Events.EventEmitter;

/**
 * @classdesc
 * [description]
 *
 * @class CameraManager
 * @memberOf Phaser.Cameras.Scene2D
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene that owns the Camera Manager plugin.
 */
cameras: Phaser.Cameras.Scene2D.CameraManager;

/**
 * @classdesc
 * [description]
 *
 * @class CameraManager
 * @memberOf Phaser.Cameras.Sprite3D
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
cameras: Phaser.Cameras.Sprite3D.CameraManager;

/**
 * @classdesc
 * The Game Object Creator is a Scene plugin that allows you to quickly create many common
 * types of Game Objects and return them. Unlike the Game Object Factory, they are not automatically
 * added to the Scene.
 *
 * Game Objects directly register themselves with the Creator and inject their own creation
 * methods into the class.
 *
 * @class GameObjectCreator
 * @memberOf Phaser.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene to which this Game Object Factory belongs.
 */
make: Phaser.GameObjects.GameObjectCreator;

/**
 * @classdesc
 * The Game Object Factory is a Scene plugin that allows you to quickly create many common
 * types of Game Objects and have them automatically registered with the Scene.
 *
 * Game Objects directly register themselves with the Factory and inject their own creation
 * methods into the class.
 *
 * @class GameObjectFactory
 * @memberOf Phaser.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene to which this Game Object Factory belongs.
 */
add: Phaser.GameObjects.GameObjectFactory;

/**
 * @classdesc
 * A proxy class to the Global Scene Manager.
 *
 * @class ScenePlugin
 * @memberOf Phaser.Scenes
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
scene: Phaser.Scenes.ScenePlugin;

/**
 * @classdesc
 * [description]
 *
 * @class DisplayList
 * @extends Phaser.Structs.List
 * @memberOf Phaser.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
children: Phaser.GameObjects.DisplayList;

/**
 * @classdesc
 * [description]
 *
 * @class CameraManager
 * @memberOf Phaser.Cameras.Scene2D
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene that owns the Camera Manager plugin.
 */
cameras3d: Phaser.Cameras.Scene2D.CameraManager;

/**
 * @classdesc
 * [description]
 *
 * @class CameraManager
 * @memberOf Phaser.Cameras.Sprite3D
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
cameras3d: Phaser.Cameras.Sprite3D.CameraManager;

/**
 * @classdesc
 * [description]
 *
 * @class Clock
 * @memberOf Phaser.Time
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
time: Phaser.Time.Clock;

/**
 * @classdesc
 * The Data Component features a means to store pieces of data specific to a Game Object, System or Plugin.
 * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
 * or have a property called `events` that is an instance of it.
 *
 * @class DataManagerPlugin
 * @extends Phaser.Data.DataManager
 * @memberOf Phaser.Data
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
data: Phaser.Data.DataManagerPlugin;

/**
 * @classdesc
 * [description]
 *
 * @class InputPlugin
 * @extends EventEmitter
 * @memberOf Phaser.Input
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - The Scene that owns this plugin.
 */
input: Phaser.Input.InputPlugin;

/**
 * @classdesc
 * [description]
 *
 * @class LoaderPlugin
 * @extends EventEmitter
 * @memberOf Phaser.Loader
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
load: Phaser.Loader.LoaderPlugin;

/**
 * @classdesc
 * [description]
 *
 * @class TweenManager
 * @memberOf Phaser.Tweens
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
tweens: Phaser.Tweens.TweenManager;

/**
 * @classdesc
 * [description]
 *
 * @class LightsPlugin
 * @extends Phaser.GameObjects.LightsManager
 * @memberOf Phaser.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
lights: Phaser.GameObjects.LightsPlugin;

/**
 * @classdesc
 * [description]
 *
 * @class ArcadePhysics
 * @memberOf Phaser.Physics.Arcade
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Scene} scene - [description]
 */
physics: Phaser.Physics.Arcade.ArcadePhysics;

