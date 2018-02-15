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
        sys: Phaser.Scenes.Systems;

        update(): void;

    }

    namespace Scene {
    }

    class Scenes {
        PENDING: number;

        INIT: number;

        START: number;

        LOADING: number;

        CREATING: number;

        RUNNING: number;

        PAUSED: number;

        SLEEPING: number;

        SHUTDOWN: number;

        DESTROYED: number;

        static GetPhysicsPlugins(sys: Phaser.Scenes.Systems): any[];

        static GetScenePlugins(sys: Phaser.Scenes.Systems): any[];

    }

    namespace Scenes {
        class SceneManager {
            game: Phaser.Game;

            keys: any;

            scenes: any[];

            _pending: any[];

            _start: any[];

            _queue: any[];

            _processing: number;

            processQueue(): void;

            add(key: string, sceneConfig: Phaser.Scene, autoStart: boolean): Phaser.Scene;

            bootScene(scene: Phaser.Scene): void;

            loadComplete(loader: any): void;

            payloadComplete(loader: any): void;

            update(time: number, delta: number): void;

            render(renderer: any): void;

            create(scene: Phaser.Scene): void;

            createSceneFromFunction(key: string, scene: any): Phaser.Scene;

            createSceneFromInstance(key: string, newScene: Phaser.Scene): Phaser.Scene;

            createSceneFromObject(key: string, sceneConfig: any): Phaser.Scene;

            getKey(key: string, sceneConfig: Phaser.Scene): string;

            getScene(key: string): Phaser.Scene;

            isActive(key: string): boolean;

            isVisible(key: string): boolean;

            isSleeping(key: string): boolean;

            pause(key: string): Phaser.Scenes.SceneManager;

            resume(key: string): Phaser.Scenes.SceneManager;

            sleep(key: string): Phaser.Scenes.SceneManager;

            wake(key: string): Phaser.Scenes.SceneManager;

            start(key: string, data: any): Phaser.Scenes.SceneManager;

            stop(key: string): Phaser.Scenes.SceneManager;

            switch(from: string, to: string): Phaser.Scenes.SceneManager;

            getAt(index: number): Phaser.Scene;

            getIndex(key: string): number;

            bringToTop(scene: string): Phaser.Scenes.SceneManager;

            sendToBack(scene: string): Phaser.Scenes.SceneManager;

            moveDown(scene: string): Phaser.Scenes.SceneManager;

            moveUp(scene: string): Phaser.Scenes.SceneManager;

            swapPosition(keyA: string, keyB: string): Phaser.Scenes.SceneManager;

            destroy(): void;

        }

        namespace SceneManager {
        }

        class ScenePlugin {
            scene: Phaser.Scene;

            systems: Phaser.Scenes.Systems;

            settings: any;

            key: string;

            manager: Phaser.Scenes.SceneManager;

            _queue: any[];

            boot(): void;

            start(key: string, data: any): Phaser.Scenes.ScenePlugin;

            add(key: string, sceneConfig: any, autoStart: boolean): Phaser.Scenes.ScenePlugin;

            launch(key: string, data: any): Phaser.Scenes.ScenePlugin;

            pause(key: string): Phaser.Scenes.ScenePlugin;

            resume(key: string): Phaser.Scenes.ScenePlugin;

            sleep(key: string): Phaser.Scenes.ScenePlugin;

            wake(key: string): Phaser.Scenes.ScenePlugin;

            switch(key: string): Phaser.Scenes.ScenePlugin;

            stop(key: string): Phaser.Scenes.ScenePlugin;

            setActive(value: boolean): Phaser.Scenes.ScenePlugin;

            setVisible(value: boolean): Phaser.Scenes.ScenePlugin;

            isSleeping(key: string): boolean;

            isActive(key: string): boolean;

            isVisible(key: string): boolean;

            swapPosition(key: string): Phaser.Scenes.ScenePlugin;

            moveUp(key: string): Phaser.Scenes.ScenePlugin;

            moveDown(key: string): Phaser.Scenes.ScenePlugin;

            bringToTop(key: string): Phaser.Scenes.ScenePlugin;

            sendToBack(key: string): Phaser.Scenes.ScenePlugin;

            get(key: string): Phaser.Scene;

            shutdown(): void;

            destroy(): void;

        }

        namespace ScenePlugin {
        }

        class Systems {
            scene: Phaser.Scene;

            game: Phaser.Game;

            config: any;

            settings: any;

            canvas: HTMLCanvasElement;

            context: CanvasRenderingContext2D;

            anims: Phaser.Animations.AnimationManager;

            cache: Phaser.Cache.CacheManager;

            plugins: Phaser.Plugins.PluginManager;

            registry: any;

            sound: Phaser.Sound.BaseSoundManager;

            textures: Phaser.Textures.TextureManager;

            add: Phaser.GameObjects.GameObjectFactory;

            cameras: Phaser.Cameras.Scene2D.CameraManager;

            displayList: null;

            events: EventEmitter;

            make: Phaser.GameObjects.GameObjectCreator;

            scenePlugin: Phaser.Scenes.ScenePlugin;

            updateList: any;

            init(game: Phaser.Game): void;

            install(plugin: any[]): void;

            step(time: number, delta: number): void;

            render(renderer: Phaser.Renderer.Canvas.CanvasRenderer): void;

            queueDepthSort(): void;

            depthSort(): void;

            pause(): Phaser.Scenes.Systems;

            resume(): Phaser.Scenes.Systems;

            sleep(): Phaser.Scenes.Systems;

            wake(): Phaser.Scenes.Systems;

            isSleeping(): boolean;

            isActive(): boolean;

            isVisible(): boolean;

            setVisible(value: boolean): Phaser.Scenes.Systems;

            setActive(value: boolean): Phaser.Scenes.Systems;

            start(data: any): void;

            shutdown(): void;

            destroy(): void;

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

