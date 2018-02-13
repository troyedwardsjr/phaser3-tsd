/**
 * The Data Component features a means to store pieces of data specific to a Game Object, System or Plugin.
 * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
 * or have a property called `events` that is an instance of it.
 */
declare class DataManager {
    /**
     * @param parent - [description]
     * @param eventEmitter - [description]
     */
    constructor(parent: any, eventEmitter: any);

}

/**
 * Retrieves the value for the given key, or undefined if it doesn't exist.
 * @param key - [description]
 */
declare function get(key: string): any;

/**
 * [description]
 */
declare function getAll(): object;

/**
 * [description]
 * @param search - [description]
 */
declare function query(search: string): object;

/**
 * [description]
 * @param key - [description]
 * @param data - [description]
 */
declare function set(key: string, data: any): Phaser.Data.DataManager;

/**
 * Passes all data entries to the given callback. Stores the result of the callback.
 * @param callback - The function to call.
 * @param [scope] - Value to use as `this` when executing callback.
 * @param [arguments] - Additional arguments that will be passed to the callback, after the game object, key, and data.
 */
declare function each(callback: Function, scope?: object, ...arguments?: any): Phaser.Data.DataManager;

/**
 * [description]
 * @param data - [description]
 * @param overwrite - [description]
 */
declare function merge(data: object, overwrite: boolean): Phaser.Data.DataManager;

/**
 * [description]
 * @param key - [description]
 */
declare function remove(key: string): Phaser.Data.DataManager;

/**
 * Gets the data associated with the given 'key', deletes it from this Data store, then returns it.
 * @param key - [description]
 */
declare function pop(key: string): any;

/**
 * [description]
 * @param key - [description]
 */
declare function has(key: string): boolean;

/**
 * [description]
 * @param value - [description]
 */
declare function setFreeze(value: boolean): Phaser.Data.DataManager;

/**
 * [description]
 */
declare function reset(): Phaser.Data.DataManager;

/**
 * [description]
 */
declare function destroy(): void;

/**
 * The Data Component features a means to store pieces of data specific to a Game Object, System or Plugin.
 * You can then search, query it, and retrieve the data. The parent must either extend EventEmitter,
 * or have a property called `events` that is an instance of it.
 */
declare class DataManagerPlugin {
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
 * [description]
 */
declare function shutdownPlugin(): void;

/**
 * [description]
 */
declare function destroyPlugin(): void;

declare namespace Data {
}

/**
 * Retrieves the value for the given key, or undefined if it doesn't exist.
 * @param key - [description]
 */
declare function get(key: string): any;

/**
 * [description]
 */
declare function getAll(): object;

/**
 * [description]
 * @param search - [description]
 */
declare function query(search: string): object;

/**
 * [description]
 * @param key - [description]
 * @param data - [description]
 */
declare function set(key: string, data: any): Phaser.Data.DataManager;

/**
 * Passes all data entries to the given callback. Stores the result of the callback.
 * @param callback - The function to call.
 * @param [scope] - Value to use as `this` when executing callback.
 * @param [arguments] - Additional arguments that will be passed to the callback, after the game object, key, and data.
 */
declare function each(callback: Function, scope?: object, ...arguments?: any): Phaser.Data.DataManager;

/**
 * [description]
 * @param data - [description]
 * @param overwrite - [description]
 */
declare function merge(data: object, overwrite: boolean): Phaser.Data.DataManager;

/**
 * [description]
 * @param key - [description]
 */
declare function remove(key: string): Phaser.Data.DataManager;

/**
 * Gets the data associated with the given 'key', deletes it from this Data store, then returns it.
 * @param key - [description]
 */
declare function pop(key: string): any;

/**
 * [description]
 * @param key - [description]
 */
declare function has(key: string): boolean;

/**
 * [description]
 * @param value - [description]
 */
declare function setFreeze(value: boolean): Phaser.Data.DataManager;

/**
 * [description]
 */
declare function reset(): Phaser.Data.DataManager;

/**
 * [description]
 */
declare function destroy(): void;

