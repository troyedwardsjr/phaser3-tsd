declare module 'phaser' {
}

declare class Phaser {
}

declare module 'Phaser' {
    declare class Actions {
    }

    declare namespace Actions {
    }

    declare class Animations {
    }

    declare namespace Animations {
        class Animation {
            static addFrame(config: any): Phaser.Animations.Animation;

            static addFrameAt(index: number, config: any): Phaser.Animations.Animation;

            static checkFrame(index: number): boolean;

            static completeAnimation(component: Phaser.GameObjects.Components.Animation): void;

            static getFirstTick(component: Phaser.GameObjects.Components.Animation, includeDelay: boolean): void;

            static getFrameAt(index: number): Phaser.Animations.AnimationFrame;

            static getFrames(textureManager: any, frames: any): Array.<Phaser.Animations.AnimationFrame>;

            static getNextTick(component: Phaser.GameObjects.Components.Animation): void;

            static load(component: Phaser.GameObjects.Components.Animation, startFrame: number): void;

            static nextFrame(component: Phaser.GameObjects.Components.Animation): void;

            static previousFrame(component: Phaser.GameObjects.Components.Animation): void;

            static removeFrame(frame: Phaser.Animations.AnimationFrame): Phaser.Animations.Animation;

            static removeFrameAt(index: number): Phaser.Animations.Animation;

            static repeatAnimation(component: Phaser.GameObjects.Components.Animation): void;

            static setFrame(component: Phaser.GameObjects.Components.Animation): void;

            static toJSON(): any;

            static updateFrameSequence(): Phaser.Animations.Animation;

            static pause(): Phaser.Animations.Animation;

            static resume(): Phaser.Animations.Animation;

            static destroy(): void;

        }

        class AnimationFrame {
            static toJSON(): any;

            static destroy(): void;

        }

        class AnimationManager {
            static boot(): void;

            static add(key: string, animation: Phaser.Animations.Animation): Phaser.Animations.AnimationManager;

            static create(config: any): Phaser.Animations.Animation;

            static fromJSON(data: string, clearCurrentAnimations: boolean): Array.<Phaser.Animations.Animation>;

            static generateFrameNames(key: string, config: any, config.prefix: string, config.start: number, config.end: number, config.suffix: string, config.zeroPad: number, config.outputArray: any[], config.frames: boolean): Array.<object>;

            static generateFrameNumbers(key: string, config: any, config.start: number, config.end: number, config.first: boolean, config.outputArray: any[], config.frames: boolean): Array.<object>;

            static get(key: string): Phaser.Animations.Animation;

            static load(child: Phaser.GameObjects.GameObject, key: string, startFrame: string): Phaser.GameObjects.GameObject;

            static pauseAll(): Phaser.Animations.AnimationManager;

            static play(key: string, child: Phaser.GameObjects.GameObject): Phaser.Animations.AnimationManager;

            static remove(key: string): Phaser.Animations.Animation;

            static resumeAll(): Phaser.Animations.AnimationManager;

            static staggerPlay(key: string, child: Phaser.GameObjects.GameObject, stagger: number): Phaser.Animations.AnimationManager;

            static toJSON(key: string): any;

            static destroy(): void;

        }

    }

    declare class Cache {
    }

    declare namespace Cache {
    }

    declare class Cameras {
    }

    declare namespace Cameras {
    }

    declare class Class {
    }

    declare namespace Class {
    }

    declare class Create {
    }

    declare namespace Create {
    }

    declare class Curves {
    }

    declare namespace Curves {
    }

    declare class Data {
    }

    declare namespace Data {
    }

    declare class Display {
    }

    declare namespace Display {
    }

    declare class DOM {
    }

    declare namespace DOM {
    }

    declare class EventEmitter {
    }

    declare namespace EventEmitter {
    }

    declare class Game {
    }

    declare namespace Game {
    }

    declare class GameObjects {
    }

    declare namespace GameObjects {
    }

    declare class Geom {
    }

    declare namespace Geom {
    }

    declare class Input {
    }

    declare namespace Input {
    }

    declare class Loader {
    }

    declare namespace Loader {
    }

    declare class Math {
    }

    declare namespace Math {
    }

    declare class Physics {
    }

    declare namespace Physics {
    }

    declare class Scene {
    }

    declare namespace Scene {
    }

    declare class Scenes {
    }

    declare namespace Scenes {
    }

    declare class Sound {
    }

    declare namespace Sound {
    }

    declare class Structs {
    }

    declare namespace Structs {
    }

    declare class Textures {
    }

    declare namespace Textures {
    }

    declare class Tilemaps {
    }

    declare namespace Tilemaps {
    }

    declare class Time {
    }

    declare namespace Time {
    }

    declare class Tweens {
    }

    declare namespace Tweens {
    }

    declare class Utils {
    }

    declare namespace Utils {
    }

    declare namespace Animation {
    }

    declare namespace AnimationFrame {
    }

    declare namespace AnimationManager {
    }

}

