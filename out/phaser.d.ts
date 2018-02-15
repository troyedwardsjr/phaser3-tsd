declare module 'phaser' {
    export { Phaser };

}

declare class Phaser {
}

declare namespace Phaser {
    class Actions {
    }

    namespace Actions {
    }

    class Animations {
    }

    namespace Animations {
    }

    class Cache {
    }

    namespace Cache {
    }

    class Cameras {
    }

    namespace Cameras {
    }

    class Class {
    }

    namespace Class {
    }

    class Create {
    }

    namespace Create {
    }

    class Curves {
    }

    namespace Curves {
    }

    class Data {
    }

    namespace Data {
    }

    class Display {
    }

    namespace Display {
    }

    class DOM {
    }

    namespace DOM {
    }

    class EventEmitter {
    }

    namespace EventEmitter {
    }

    class Game {
    }

    namespace Game {
    }

    class GameObjects {
    }

    namespace GameObjects {
    }

    class Geom {
    }

    namespace Geom {
    }

    class Input {
    }

    namespace Input {
    }

    class Loader {
    }

    namespace Loader {
    }

    class Math {
    }

    namespace Math {
    }

    class Physics {
    }

    namespace Physics {
    }

    class Scene {
        static update(): void;

    }

    namespace Scene {
    }

    class Scenes {
        static GetPhysicsPlugins(sys: Phaser.Scenes.Systems): any[];

        static GetScenePlugins(sys: Phaser.Scenes.Systems): any[];

    }

    namespace Scenes {
        class SceneManager {
            static processQueue(): void;

            static add(key: string, sceneConfig: Phaser.Scene, autoStart: boolean): Phaser.Scene;

            static bootScene(scene: Phaser.Scene): void;

            static loadComplete(loader: any): void;

            static payloadComplete(loader: any): void;

            static update(time: number, delta: number): void;

            static render(renderer: any): void;

            static create(scene: Phaser.Scene): void;

            static createSceneFromFunction(key: string, scene: any): Phaser.Scene;

            static createSceneFromInstance(key: string, newScene: Phaser.Scene): Phaser.Scene;

            static createSceneFromObject(key: string, sceneConfig: any): Phaser.Scene;

            static getKey(key: string, sceneConfig: Phaser.Scene): string;

            static getScene(key: string): Phaser.Scene;

            static isActive(key: string): boolean;

            static isVisible(key: string): boolean;

            static isSleeping(key: string): boolean;

            static pause(key: string): Phaser.Scenes.SceneManager;

            static resume(key: string): Phaser.Scenes.SceneManager;

            static sleep(key: string): Phaser.Scenes.SceneManager;

            static wake(key: string): Phaser.Scenes.SceneManager;

            static start(key: string, data: any): Phaser.Scenes.SceneManager;

            static stop(key: string): Phaser.Scenes.SceneManager;

            static switch(from: string, to: string): Phaser.Scenes.SceneManager;

            static getAt(index: number): Phaser.Scene;

            static getIndex(key: string): number;

            static bringToTop(scene: string): Phaser.Scenes.SceneManager;

            static sendToBack(scene: string): Phaser.Scenes.SceneManager;

            static moveDown(scene: string): Phaser.Scenes.SceneManager;

            static moveUp(scene: string): Phaser.Scenes.SceneManager;

            static swapPosition(keyA: string, keyB: string): Phaser.Scenes.SceneManager;

            static destroy(): void;

        }

        namespace SceneManager {
        }

        class ScenePlugin {
            static boot(): void;

            static start(key: string, data: any): Phaser.Scenes.ScenePlugin;

            static add(key: string, sceneConfig: any, autoStart: boolean): Phaser.Scenes.ScenePlugin;

            static launch(key: string, data: any): Phaser.Scenes.ScenePlugin;

            static pause(key: string): Phaser.Scenes.ScenePlugin;

            static resume(key: string): Phaser.Scenes.ScenePlugin;

            static sleep(key: string): Phaser.Scenes.ScenePlugin;

            static wake(key: string): Phaser.Scenes.ScenePlugin;

            static switch(key: string): Phaser.Scenes.ScenePlugin;

            static stop(key: string): Phaser.Scenes.ScenePlugin;

            static setActive(value: boolean): Phaser.Scenes.ScenePlugin;

            static setVisible(value: boolean): Phaser.Scenes.ScenePlugin;

            static isSleeping(key: string): boolean;

            static isActive(key: string): boolean;

            static isVisible(key: string): boolean;

            static swapPosition(key: string): Phaser.Scenes.ScenePlugin;

            static moveUp(key: string): Phaser.Scenes.ScenePlugin;

            static moveDown(key: string): Phaser.Scenes.ScenePlugin;

            static bringToTop(key: string): Phaser.Scenes.ScenePlugin;

            static sendToBack(key: string): Phaser.Scenes.ScenePlugin;

            static get(key: string): Phaser.Scene;

            static shutdown(): void;

            static destroy(): void;

        }

        namespace ScenePlugin {
        }

        class Systems {
            static init(game: Phaser.Game): void;

            static install(plugin: any[]): void;

            static step(time: number, delta: number): void;

            static render(renderer: Phaser.Renderer.Canvas.CanvasRenderer): void;

            static queueDepthSort(): void;

            static depthSort(): void;

            static pause(): Phaser.Scenes.Systems;

            static resume(): Phaser.Scenes.Systems;

            static sleep(): Phaser.Scenes.Systems;

            static wake(): Phaser.Scenes.Systems;

            static isSleeping(): boolean;

            static isActive(): boolean;

            static isVisible(): boolean;

            static setVisible(value: boolean): Phaser.Scenes.Systems;

            static setActive(value: boolean): Phaser.Scenes.Systems;

            static start(data: any): void;

            static shutdown(): void;

            static destroy(): void;

        }

        namespace Systems {
        }

    }

    class Sound {
    }

    namespace Sound {
    }

    class Structs {
    }

    namespace Structs {
    }

    class Textures {
    }

    namespace Textures {
    }

    class Tilemaps {
    }

    namespace Tilemaps {
    }

    class Time {
    }

    namespace Time {
    }

    class Tweens {
    }

    namespace Tweens {
    }

    class Utils {
    }

    namespace Utils {
    }

}

