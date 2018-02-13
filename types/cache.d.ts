/**
 * The BaseCache is a base Cache class that can be used for storing references to any kind of data.
 * 
 * Data can be added, retrieved and removed based on the given keys.
 * 
 * Keys are string-based.
 */
declare class BaseCache {
    constructor();

}

/**
 * Adds an item to this cache. The item is referenced by a unique string, which you are responsible
 * for setting and keeping track of. The item can only be retrieved by using this string.
 * @param key - The unique key by which the data added to the cache will be referenced.
 * @param data - The data to be stored in the cache.
 */
declare function add(key: string, data: any): Phaser.Cache.BaseCache;

/**
 * Checks if this cache contains an item matching the given key.
 * @param key - The unique key of the item to be checked in this cache.
 */
declare function has(key: string): boolean;

/**
 * Gets an item from this cache based on the given key.
 * @param key - The unique key of the item to be retrieved from this cache.
 */
declare function get(key: string): any;

/**
 * Removes and item from this cache based on the given key.
 * If an entry matching the key is found it is removed from the cache and a `remove` event emitted.
 * No additional checks are done on the item removed. If other systems or parts of your game code
 * are relying on this item, it is up to you to sever those relationships prior to removing the item.
 * @param key - The unique key of the item to remove from the cache.
 */
declare function remove(key: string): Phaser.Cache.BaseCache;

/**
 * Destroys this cache and all items within it.
 */
declare function destroy(): void;

/**
 * The Cache Manager is the global cache owned and maintained by the Game instance.
 * 
 * Various systems, such as the file Loader, rely on this cache in order to store the files
 * it has loaded. The manager itself doesn't store any files, but instead owns multiple BaseCache
 * instances, one per type of file. You can also add your own custom caches.
 */
declare class CacheManager {
    /**
     * @param game - A reference to the Phaser.Game instance that owns this CacheManager.
     */
    constructor(game: Phaser.Game);

}

/**
 * Add your own custom Cache for storing your own files.
 * The cache will be available under `Cache.custom.key`.
 * The cache will only be created if the key is not already in use.
 * @param key - The unique key of your custom cache.
 */
declare function addCustom(key: string): Phaser.Cache.BaseCache;

/**
 * Removes all entries from all BaseCaches and destroys all custom caches.
 */
declare function destroy(): void;

declare namespace Cache {
}

