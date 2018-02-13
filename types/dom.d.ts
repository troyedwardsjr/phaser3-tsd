/**
 * Adds the given element to the DOM. If a parent is provided the element is added as a child of the parent, providing it was able to access it.
 * If no parent was given or falls back to using `document.body`.
 * @param element - The element to be added to the DOM. Usually a Canvas object.
 * @param [parent] - The parent in which to add the element. Can be a string which is passed to `getElementById` or an actual DOM object.
 * @param [overflowHidden=true] - [description]
 */
declare function AddToDOM(element: object, parent?: string | object, overflowHidden?: boolean): object;

/**
 * Inspects the readyState of the document. If the document is already complete then it invokes the given callback.
 * If not complete it sets up several event listeners such as `deviceready`, and once those fire, it invokes the callback.
 * Called automatically by the Phaser.Game instance. Should not usually be accessed directly.
 * @param callback - The callback to be invoked when the device is ready and the DOM content is loaded.
 */
declare function DOMContentLoaded(callback: Function): void;

declare namespace DOM {
}

/**
 * Takes the given data string and parses it as XML.
 * First tries to use the window.DOMParser and reverts to the Microsoft.XMLDOM if that fails.
 * The parsed XML object is returned, or `null` if there was an error while parsing the data.
 * @param data - The XML source stored in a string.
 */
declare function ParseXML(data: string): any;

/**
 * Attempts to remove the element from its parentNode in the DOM.
 * @param element - The DOM element to remove from its parent node.
 */
declare function RemoveFromDOM(element: any): void;

/**
 * Abstracts away the use of RAF or setTimeOut for the core game update loop.
 * This is invoked automatically by the Phaser.Game instance.
 */
declare class RequestAnimationFrame {
    constructor();

}

/**
 * Starts the requestAnimationFrame or setTimeout process running.
 * @param callback - The callback to invoke each step.
 * @param forceSetTimeOut - Should it use SetTimeout, even if RAF is available?
 */
declare function start(callback: Function, forceSetTimeOut: boolean): void;

/**
 * Stops the requestAnimationFrame or setTimeout from running.
 */
declare function stop(): void;

/**
 * Stops the step from running and clears the callback reference.
 */
declare function destroy(): void;

