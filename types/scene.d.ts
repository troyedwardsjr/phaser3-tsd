/**
 * Builds an array of which physics plugins should be activated for the given Scene.
 * @param sys - [description]
 */
declare function GetPhysicsPlugins(sys: Phaser.Scenes.Systems): any;

/**
 * Builds an array of which plugins (not including physics plugins) should be activated for the given Scene.
 * @param sys - [description]
 */
declare function GetScenePlugins(sys: Phaser.Scenes.Systems): any;

declare namespace Scenes {
}

/**
 * [description]
 */
declare class Scene {
    /**
     * @param config - [description]
     */
    constructor(config: any);

}

/**
 * Should be overridden by your own Scenes.
 */
declare function update(): void;

/**
 * The Scene Manager.
 * 
 * The Scene Manager is a Game level system, responsible for creating, processing and updating all of the
 * Scenes in a Game instance.
 */
declare class SceneManager {
    /**
     * @param game - The Phaser.Game instance this Scene Manager belongs to.
     * @param sceneConfig - Scene specific configuration settings.
     */
    constructor(game: Phaser.Game, sceneConfig: any);

}

/**
 * [description]
 */
declare function processQueue(): void;

/**
 * Adds a new Scene into the SceneManager.
 * You must give each Scene a unique key by which you'll identify it.
 * The `sceneConfig` can be:
 * * A `Phaser.Scene` any, or an any that extends it.
 * * A plain JavaScript any
 * * A JavaScript ES6 Class that extends `Phaser.Scene`
 * * A JavaScript ES5 prototype based Class
 * * A JavaScript function
 * If a function is given then a new Scene will be created by calling it.
 * @param key - A unique key used to reference the Scene, i.e. `MainMenu` or `Level1`.
 * @param sceneConfig - [description]
 * @param [autoStart=false] - If `true` the Scene will be started immediately after being added.
 */
declare function add(key: string, sceneConfig: Phaser.Scene | any | Function, autoStart?: boolean): Phaser.Scene | null;

/**
 * [description]
 * @param scene - [description]
 */
declare function bootScene(scene: Phaser.Scene): void;

/**
 * [description]
 * @param loader - [description]
 */
declare function loadComplete(loader: any): void;

/**
 * [description]
 * @param loader - [description]
 */
declare function payloadComplete(loader: any): void;

/**
 * [description]
 * @param time - [description]
 * @param delta - [description]
 */
declare function update(time: number, delta: number): void;

/**
 * [description]
 * @param renderer - [description]
 */
declare function render(renderer: any): void;

/**
 * [description]
 * @param scene - [description]
 */
declare function create(scene: Phaser.Scene): void;

/**
 * [description]
 * @param key - [description]
 * @param scene - [description]
 */
declare function createSceneFromFunction(key: string, scene: Function): Phaser.Scene;

/**
 * [description]
 * @param key - [description]
 * @param newScene - [description]
 */
declare function createSceneFromInstance(key: string, newScene: Phaser.Scene): Phaser.Scene;

/**
 * [description]
 * @param key - [description]
 * @param sceneConfig - [description]
 */
declare function createSceneFromObject(key: string, sceneConfig: any): Phaser.Scene;

/**
 * [description]
 * @param key - [description]
 * @param sceneConfig - [description]
 */
declare function getKey(key: string, sceneConfig: Phaser.Scene | any | Function): string;

/**
 * [description]
 * @param key - [description]
 */
declare function getScene(key: string): Phaser.Scene | null;

/**
 * [description]
 * @param key - [description]
 */
declare function isActive(key: string): boolean;

/**
 * [description]
 * @param key - [description]
 */
declare function isVisible(key: string): boolean;

/**
 * [description]
 * @param key - [description]
 */
declare function isSleeping(key: string): boolean;

/**
 * [description]
 * @param key - [description]
 */
declare function pause(key: string): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param key - [description]
 */
declare function resume(key: string): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param key - [description]
 */
declare function sleep(key: string): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param key - [description]
 */
declare function wake(key: string): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param key - [description]
 * @param [data] - [description]
 */
declare function start(key: string, data?: any): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param key - [description]
 */
declare function stop(key: string): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param from - [description]
 * @param to - [description]
 */
/* Illegal function name 'switch' can't be used here
declare function switch(from: string, to: string): Phaser.Scenes.SceneManager;
*/

/**
 * [description]
 * @param index - [description]
 */
declare function getAt(index: number): Phaser.Scene | undefined;

/**
 * [description]
 * @param key - [description]
 */
declare function getIndex(key: string | Phaser.Scene): number;

/**
 * [description]
 * @param scene - [description]
 */
declare function bringToTop(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param scene - [description]
 */
declare function sendToBack(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param scene - [description]
 */
declare function moveDown(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param scene - [description]
 */
declare function moveUp(scene: string | Phaser.Scene): Phaser.Scenes.SceneManager;

/**
 * [description]
 * @param keyA - [description]
 * @param keyB - [description]
 */
declare function swapPosition(keyA: string | Phaser.Scene, keyB: string | Phaser.Scene): Phaser.Scenes.SceneManager;

/**
 * [description]
 */
declare function destroy(): void;

/**
 * A proxy class to the Global Scene Manager.
 */
declare class ScenePlugin {
    /**
     * @param scene - [description]
     */
    constructor(scene: Phaser.Scene);

}

/**
 * [description]
 */
declare function boot(): void;

/**
 * Shutdown this Scene and run the given one.
 * @param key - [description]
 * @param [data] - [description]
 */
declare function start(key: string, data?: any): Phaser.Scenes.ScenePlugin;

/**
 * Add the Scene into the Scene Manager and start it if 'autoStart' is true or the Scene config 'active' property is set.
 * @param key - [description]
 * @param sceneConfig - [description]
 * @param autoStart - [description]
 */
declare function add(key: string, sceneConfig: any, autoStart: boolean): Phaser.Scenes.ScenePlugin;

/**
 * Launch the given Scene and run it in parallel with this one.
 * @param key - [description]
 * @param [data] - [description]
 */
declare function launch(key: string, data?: any): Phaser.Scenes.ScenePlugin;

/**
 * Pause the Scene - this stops the update step from happening but it still renders.
 * @param key - [description]
 */
declare function pause(key: string): Phaser.Scenes.ScenePlugin;

/**
 * Resume the Scene - starts the update loop again.
 * @param key - [description]
 */
declare function resume(key: string): Phaser.Scenes.ScenePlugin;

/**
 * Makes the Scene sleep (no update, no render) but doesn't shutdown.
 * @param key - [description]
 */
declare function sleep(key: string): Phaser.Scenes.ScenePlugin;

/**
 * Makes the Scene wake-up (starts update and render)
 * @param key - [description]
 */
declare function wake(key: string): Phaser.Scenes.ScenePlugin;

/**
 * Makes this Scene sleep then starts the Scene given.
 * @param key - [description]
 */
/* Illegal function name 'switch' can't be used here
declare function switch(key: string): Phaser.Scenes.ScenePlugin;
*/

/**
 * Shutdown the Scene, clearing display list, timers, etc.
 * @param key - [description]
 */
declare function stop(key: string): Phaser.Scenes.ScenePlugin;

/**
 * Sets the active state of the given Scene.
 * @param value - [description]
 */
declare function setActive(value: boolean): Phaser.Scenes.ScenePlugin;

/**
 * Sets the visible state of the given Scene.
 * @param value - [description]
 */
declare function setVisible(value: boolean): Phaser.Scenes.ScenePlugin;

/**
 * Checks if the given Scene is sleeping or not?
 * @param key - [description]
 */
declare function isSleeping(key: string): boolean;

/**
 * Checks if the given Scene is active or not?
 * @param key - [description]
 */
declare function isActive(key: string): boolean;

/**
 * Checks if the given Scene is visible or not?
 * @param key - [description]
 */
declare function isVisible(key: string): boolean;

/**
 * [description]
 * @param key - [description]
 */
declare function swapPosition(key: string): Phaser.Scenes.ScenePlugin;

/**
 * [description]
 * @param key - [description]
 */
declare function moveUp(key: string): Phaser.Scenes.ScenePlugin;

/**
 * [description]
 * @param key - [description]
 */
declare function moveDown(key: string): Phaser.Scenes.ScenePlugin;

/**
 * [description]
 * @param key - [description]
 */
declare function bringToTop(key: string): Phaser.Scenes.ScenePlugin;

/**
 * [description]
 * @param key - [description]
 */
declare function sendToBack(key: string): Phaser.Scenes.ScenePlugin;

/**
 * [description]
 * @param key - [description]
 */
declare function get(key: string): Phaser.Scene;

/**
 * [description]
 */
declare function shutdown(): void;

/**
 * [description]
 */
declare function destroy(): void;

/**
 * Takes a Scene configuration any and returns a fully formed Systems any.
 * @param config - [description]
 */
declare function create(config: any): any;

/**
 * The Scene Systems class.
 * 
 * This class is available from within a Scene under the property `sys`.
 * It is responsible for managing all of the plugins a Scene has running, including the display list, and
 * handling the update step and renderer. It also contains references to global systems belonging to Game.
 */
declare class Systems {
    /**
     * @param scene - The Scene that owns this Systems instance.
     * @param config - Scene specific configuration settings.
     */
    constructor(scene: Phaser.Scene, config: any);

}

/**
 * [description]
 * @param game - A reference to the Phaser Game
 */
declare function init(game: Phaser.Game): void;

/**
 * [description]
 * @param plugin - An array of plugins to install into this Scene.
 */
declare function install(plugin: any): void;

/**
 * [description]
 * @param time - [description]
 * @param delta - [description]
 */
declare function step(time: number, delta: number): void;

/**
 * [description]
 * @param renderer - [description]
 */
declare function render(renderer: Phaser.Renderer.Canvas.CanvasRenderer | Phaser.Renderer.WebGL.WebGLRenderer): void;

/**
 * Force a sort of the display list on the next render.
 */
declare function queueDepthSort(): void;

/**
 * Immediately sorts the display list if the flag is set.
 */
declare function depthSort(): void;

/**
 * Pause this Scene.
 * A paused Scene still renders, it just doesn't run ANY of its update handlers or systems.
 */
declare function pause(): Phaser.Scenes.Systems;

/**
 * Resume this Scene.
 */
declare function resume(): Phaser.Scenes.Systems;

/**
 * Send this Scene to sleep.
 * A sleeping Scene doesn't run it's update step or render anything, but it also isn't destroyed,
 * or have any of its systems or children removed, meaning it can be re-activated at any point.
 */
declare function sleep(): Phaser.Scenes.Systems;

/**
 * Wake-up this Scene if it was previously asleep.
 */
declare function wake(): Phaser.Scenes.Systems;

/**
 * Is this Scene sleeping?
 */
declare function isSleeping(): boolean;

/**
 * Is this Scene active?
 */
declare function isActive(): boolean;

/**
 * Is this Scene visible and rendering?
 */
declare function isVisible(): boolean;

/**
 * [description]
 * @param value - [description]
 */
declare function setVisible(value: boolean): Phaser.Scenes.Systems;

/**
 * [description]
 * @param value - [description]
 */
declare function setActive(value: boolean): Phaser.Scenes.Systems;

/**
 * Start this Scene running and rendering.
 * @param data - [description]
 */
declare function start(data: any): void;

/**
 * Shutdown this Scene and send a shutdown event to all of its systems.
 */
declare function shutdown(): void;

/**
 * Destroy this Scene and send a destroy event all of its systems.
 */
declare function destroy(): void;

