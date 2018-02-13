/**
 * [description]
 */
declare class Clock {
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
 * @param config - [description]
 */
declare function addEvent(config: object): Phaser.Time.TimerEvent;

/**
 * [description]
 * @param delay - [description]
 * @param callback - [description]
 * @param args - [description]
 * @param callbackScope - [description]
 */
declare function delayedCall(delay: number, callback: Function, args: any, callbackScope: object): any;

/**
 * [description]
 */
declare function clearPendingEvents(): Phaser.Time.Clock;

/**
 * [description]
 */
declare function removeAllEvents(): Phaser.Time.Clock;

/**
 * [description]
 * @param time - [description]
 * @param delta - [description]
 */
declare function preUpdate(time: number, delta: number): void;

/**
 * [description]
 * @param time - [description]
 * @param delta - [description]
 */
declare function update(time: number, delta: number): void;

/**
 * [description]
 */
declare function shutdown(): void;

/**
 * [description]
 */
declare function destroy(): void;

declare namespace Time {
}

/**
 * [description]
 */
declare class TimerEvent {
    /**
     * @param config - [description]
     */
    constructor(config: object);

}

/**
 * [description]
 * @param config - [description]
 */
declare function reset(config: object): Phaser.Time.TimerEvent;

/**
 * Gets the progress of the current iteration, not factoring in repeats.
 */
declare function getProgress(): number;

/**
 * Gets the progress of the timer overall, factoring in repeats.
 */
declare function getOverallProgress(): number;

/**
 * [description]
 */
declare function getRepeatCount(): number;

/**
 * [description]
 */
declare function getElapsed(): number;

/**
 * [description]
 */
declare function getElapsedSeconds(): number;

/**
 * [description]
 * @param dispatchCallback - [description]
 */
declare function remove(dispatchCallback: Function): void;

/**
 * [description]
 */
declare function destroy(): void;

