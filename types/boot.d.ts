/**
 * This callback type is completely empty, a no-operation.
 */
declare interface NOOP {
}

declare interface FPSConfig {
    /**
     * [description]
     */
    min?: number;
    /**
     * [description]
     */
    target?: number;
    /**
     * [description]
     */
    forceSetTimeOut?: boolean;
    /**
     * [description]
     */
    deltaHistory?: number;
    /**
     * [description]
     */
    panicMax?: number;
}

declare interface LoaderConfig {
    /**
     * [description]
     */
    baseURL?: string;
    /**
     * [description]
     */
    path?: string;
    /**
     * [description]
     */
    enableParallel?: boolean;
    /**
     * [description]
     */
    maxParallelDownloads?: number;
    /**
     * [description]
     */
    crossOrigin?: string | undefined;
    /**
     * [description]
     */
    responseType?: string;
    /**
     * [description]
     */
    async?: boolean;
    /**
     * [description]
     */
    user?: string;
    /**
     * [description]
     */
    password?: string;
    /**
     * [description]
     */
    timeout?: number;
}

declare interface GameConfig {
    /**
     * [description]
     */
    width?: number | string;
    /**
     * [description]
     */
    height?: number | string;
    /**
     * [description]
     */
    zoom?: number;
    /**
     * [description]
     */
    resolution?: number;
    /**
     * [description]
     */
    type?: number;
    /**
     * [description]
     */
    "?parent"?: object;
    /**
     * [description]
     */
    "?canvas"?: HTMLCanvasElement;
    /**
     * [description]
     */
    "?canvasStyle"?: string;
    /**
     * [description]
     */
    "?scene"?: object;
    /**
     * [description]
     */
    seed?: any;
    /**
     * [description]
     */
    title?: string;
    /**
     * [description]
     */
    url?: string;
    /**
     * [description]
     */
    version?: string;
    /**
     * [description]
     */
    input?: object;
    /**
     * [description]
     */
    "input.keyboard"?: boolean;
    /**
     * [description]
     */
    "input.keyboard.target"?: object;
    /**
     * [description]
     */
    "input.mouse"?: boolean;
    /**
     * [description]
     */
    "?input.mouse.target"?: object;
    /**
     * [description]
     */
    "input.touch"?: boolean;
    /**
     * [description]
     */
    "?input.touch.target"?: object;
    /**
     * [description]
     */
    "?input.touch.capture"?: object;
    /**
     * [description]
     */
    "input.gamepad"?: boolean;
    /**
     * [description]
     */
    disableContextMenu?: boolean;
    /**
     * [description]
     */
    banner?: boolean;
    /**
     * [description]
     */
    "banner.hidePhaser"?: boolean;
    /**
     * [description]
     */
    "banner.text"?: string;
    /**
     * [description]
     */
    "banner.background"?: any;
    /**
     * [description]
     */
    "?fps"?: FPSConfig;
    /**
     * [description]
     */
    pixelArt?: boolean;
    /**
     * [description]
     */
    transparent?: boolean;
    /**
     * [description]
     */
    clearBeforeRender?: boolean;
    /**
     * [description]
     */
    backgroundColor?: string | number;
    /**
     * [description]
     */
    "?callbacks"?: object;
    /**
     * [description]
     */
    "callbacks.preBoot"?: Function;
    /**
     * [description]
     */
    "callbacks.postBoot"?: Function;
    /**
     * [description]
     */
    "?loader"?: LoaderConfig;
    /**
     * [description]
     */
    "?images"?: object;
    /**
     * [description]
     */
    "images.default"?: string;
    /**
     * [description]
     */
    "images.missing"?: string;
}

/**
 * [description]
 */
declare class Config {
    /**
     * @param [GameConfig] - The configuration object for your Phaser Game instance.
     */
    constructor(GameConfig?: object);

}

/**
 * Called automatically by Phaser.Game and responsible for creating the renderer it will use.
 * Relies upon two webpack global flags to be defined: `WEBGL_RENDERER` and `CANVAS_RENDERER` during build time, but not at run-time.
 * @param game - The Phaser.Game instance on which the renderer will be set.
 */
declare function CreateRenderer(game: Phaser.Game): void;

/**
 * Called automatically by Phaser.Game and responsible for creating the console.log debug header.
 * You can customize or disable the header via the Game Config object.
 * @param game - The Phaser.Game instance which will output this debug header.
 */
declare function DebugHeader(game: Phaser.Game): void;

/**
 * The Phaser.Game instance is the main controller for the entire Phaser game. It is responsible
 * for handling the boot process, parsing the configuration values, creating the renderer,
 * and setting-up all of the global Phaser systems, such as sound and input.
 * Once that is complete it will start the Scene Manager and then begin the main game loop.
 * 
 * You should generally avoid accessing any of the systems created by Game, and instead use those
 * made available to you via the Phaser.Scene Systems class instead.
 */
declare class Game {
    /**
     * @param [GameConfig] - The configuration object for your Phaser Game instance.
     */
    constructor(GameConfig?: object);

}

/**
 * This method is called automatically when the DOM is ready. It is responsible for creating the renderer,
 * displaying the Debug Header, adding the game canvas to the DOM and emitting the 'boot' event.
 * It listens for a 'ready' event from the base systems and once received it will call `Game.start`.
 */
declare function boot(): void;

/**
 * Called automatically by Game.boot once all of the global systems have finished setting themselves up.
 * By this point the Game is now ready to start the main loop running.
 * It will also enable the Visibility Handler.
 */
declare function start(): void;

/**
 * The main Game Step. Called automatically by the Time Step, once per browser frame (typically as a result of
 * Request Animation Frame, or Set Timeout on very old browsers.)
 * The step will update the global managers first, then proceed to update each Scene in turn, via the Scene Manager.
 * It will then render each Scene in turn, via the Renderer. This process emits `prerender` and `postrender` events.
 * @param time - The current timestamp as generated by the Request Animation Frame or SetTimeout.
 * @param delta - The delta time elapsed since the last frame.
 */
declare function step(time: number, delta: number): void;

/**
 * Called automatically by the Visibility Handler.
 * This will pause the main loop and then emit a pause event.
 */
declare function onHidden(): void;

/**
 * Called automatically by the Visibility Handler.
 * This will resume the main loop and then emit a resume event.
 */
declare function onVisible(): void;

/**
 * Called automatically by the Visibility Handler.
 * This will set the main loop into a 'blurred' state, which pauses it.
 */
declare function onBlur(): void;

/**
 * Called automatically by the Visibility Handler.
 * This will set the main loop into a 'focused' state, which resumes it.
 */
declare function onFocus(): void;

/**
 * Destroys this Phaser.Game instance, all global systems, all sub-systems and all Scenes.
 */
declare function destroy(): void;

declare namespace Boot {
}

/**
 * The PluginManager is global and belongs to the Game instance, not a Scene.
 * It handles the installation and removal of all global and Scene based plugins.
 * Plugins automatically register themselves with the PluginManager in their respective classes.
 */
declare class PluginManager {
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
 * @param sys - [description]
 * @param globalPlugins - [description]
 */
declare function installGlobal(sys: Phaser.Scenes.Systems, globalPlugins: any): void;

/**
 * [description]
 * @param sys - [description]
 * @param scenePlugins - [description]
 */
declare function installLocal(sys: Phaser.Scenes.Systems, scenePlugins: any): void;

/**
 * [description]
 * @param key - [description]
 */
declare function remove(key: string): void;

/**
 * [description]
 */
declare function destroy(): void;

/**
 * [description]
 */
declare class TimeStep {
    /**
     * @param game - A reference to the Phaser.Game instance that owns this Time Step.
     * @param config
     */
    constructor(game: Phaser.Game, config: FPSConfig);

}

/**
 * Called when the DOM window.onBlur event triggers.
 */
declare function blur(): void;

/**
 * Called when the DOM window.onFocus event triggers.
 */
declare function focus(): void;

/**
 * Called when the visibility API says the game is 'hidden' (tab switch out of view, etc)
 */
declare function pause(): void;

/**
 * Called when the visibility API says the game is 'visible' again (tab switch back into view, etc)
 */
declare function resume(): void;

/**
 * [description]
 */
declare function resetDelta(): void;

/**
 * Starts the Time Step running, if it is not already doing so.
 * Called automatically by the Game Boot process.
 * @param callback - The callback to be invoked each time the Time Step steps.
 */
declare function start(callback: Function): void;

/**
 * The main step method. This is called each time the browser updates, either by Request Animation Frame,
 * or by Set Timeout. It is responsible for calculating the delta values, frame totals, cool down history and more.
 * You generally should never call this method directly.
 * @param time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 */
declare function step(time: number): void;

/**
 * Manually calls TimeStep.step, passing in the performance.now value to it.
 */
declare function tick(): void;

/**
 * Sends the TimeStep to sleep, stopping Request Animation Frame (or SetTimeout) and toggling the `running` flag to false.
 */
declare function sleep(): void;

/**
 * Wakes-up the TimeStep, restarting Request Animation Frame (or SetTimeout) and toggling the `running` flag to true.
 * The `seamless` argument controls if the wake-up should adjust the start time or not.
 * @param [seamless=false] - Adjust the startTime based on the lastTime values.
 */
declare function wake(seamless?: boolean): void;

/**
 * Stops the TimeStep running.
 */
declare function stop(): Phaser.Boot.TimeStep;

/**
 * Destroys the TimeStep. This will stop Request Animation Frame, stop the step, clear the callbacks and null
 * any objects.
 */
declare function destroy(): void;

/**
 * The Visibility Handler is responsible for listening out for document level visibility change events.
 * This includes `visibilitychange` if the browser supports it, and blur and focus events. It then uses
 * the provided Event Emitter and fires the related events.
 * @param eventEmitter - The EventEmitter that will emit the visibility events.
 */
declare function VisibilityHandler(eventEmitter: Phaser.EventEmitter): void;

