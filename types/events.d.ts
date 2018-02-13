declare namespace Events {
}

/**
 * EventEmitter is a Scene Systems plugin compatible version of eventemitter3.
 */
declare class EventEmitter {
    constructor();

}

/**
 * Removes all listeners.
 */
declare function shutdown(): void;

/**
 * Removes all listeners.
 */
declare function destroy(): void;

declare namespace EventEmitter {
    /**
     * Return an array listing the events for which the emitter has registered listeners.
     */
    function eventNames(): any;

    /**
     * Return the listeners registered for a given event.
     * @param event - The event name.
     */
    function listeners(event: string | symbol): any;

    /**
     * Return the number of listeners listening to a given event.
     * @param event - The event name.
     */
    function listenerCount(event: string | symbol): number;

    /**
     * Calls each of the listeners registered for a given event.
     * @param event - The event name.
     */
    function emit(event: string | symbol): Boolean;

    /**
     * Add a listener for a given event.
     * @param event - The event name.
     * @param fn - The listener function.
     * @param [context=this] - The context to invoke the listener with.
     */
    function on(event: string | symbol, fn: Function, context?: any): EventEmitter;

    /**
     * Add a listener for a given event.
     * @param event - The event name.
     * @param fn - The listener function.
     * @param [context=this] - The context to invoke the listener with.
     */
    function addListener(event: string | symbol, fn: Function, context?: any): EventEmitter;

    /**
     * Add a one-time listener for a given event.
     * @param event - The event name.
     * @param fn - The listener function.
     * @param [context=this] - The context to invoke the listener with.
     */
    function once(event: string | symbol, fn: Function, context?: any): EventEmitter;

    /**
     * Remove the listeners of a given event.
     * @param event - The event name.
     * @param fn - Only remove the listeners that match this function.
     * @param context - Only remove the listeners that have this context.
     * @param once - Only remove one-time listeners.
     */
    function removeListener(event: string | symbol, fn: Function, context: any, once: boolean): EventEmitter;

    /**
     * Remove the listeners of a given event.
     * @param event - The event name.
     * @param fn - Only remove the listeners that match this function.
     * @param context - Only remove the listeners that have this context.
     * @param once - Only remove one-time listeners.
     */
    function off(event: string | symbol, fn: Function, context: any, once: boolean): EventEmitter;

    /**
     * Remove all listeners, or those of the specified event.
     * @param [event] - The event name.
     */
    function removeAllListeners(event?: string | symbol): EventEmitter;

}

/**
 * Return an array listing the events for which the emitter has registered listeners.
 */
declare function eventNames(): any;

/**
 * Return the listeners registered for a given event.
 * @param event - The event name.
 */
declare function listeners(event: string | symbol): any;

/**
 * Return the number of listeners listening to a given event.
 * @param event - The event name.
 */
declare function listenerCount(event: string | symbol): number;

/**
 * Calls each of the listeners registered for a given event.
 * @param event - The event name.
 */
declare function emit(event: string | symbol): Boolean;

/**
 * Add a listener for a given event.
 * @param event - The event name.
 * @param fn - The listener function.
 * @param [context=this] - The context to invoke the listener with.
 */
declare function on(event: string | symbol, fn: Function, context?: any): EventEmitter;

/**
 * Add a listener for a given event.
 * @param event - The event name.
 * @param fn - The listener function.
 * @param [context=this] - The context to invoke the listener with.
 */
declare function addListener(event: string | symbol, fn: Function, context?: any): EventEmitter;

/**
 * Add a one-time listener for a given event.
 * @param event - The event name.
 * @param fn - The listener function.
 * @param [context=this] - The context to invoke the listener with.
 */
declare function once(event: string | symbol, fn: Function, context?: any): EventEmitter;

/**
 * Remove the listeners of a given event.
 * @param event - The event name.
 * @param fn - Only remove the listeners that match this function.
 * @param context - Only remove the listeners that have this context.
 * @param once - Only remove one-time listeners.
 */
declare function removeListener(event: string | symbol, fn: Function, context: any, once: boolean): EventEmitter;

/**
 * Remove the listeners of a given event.
 * @param event - The event name.
 * @param fn - Only remove the listeners that match this function.
 * @param context - Only remove the listeners that have this context.
 * @param once - Only remove one-time listeners.
 */
declare function off(event: string | symbol, fn: Function, context: any, once: boolean): EventEmitter;

/**
 * Remove all listeners, or those of the specified event.
 * @param [event] - The event name.
 */
declare function removeAllListeners(event?: string | symbol): EventEmitter;

