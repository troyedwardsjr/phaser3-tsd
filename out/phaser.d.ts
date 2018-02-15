declare module 'phaser' {
}

declare class Phaser {
}

declare module 'Phaser' {
    declare module 'Actions' {
    }

    declare module 'Animations' {
        declare class Animation {
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

        declare class AnimationFrame {
            static toJSON(): any;

            static destroy(): void;

        }

        declare class AnimationManager {
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

    declare module 'Cache' {
    }

    declare module 'Cameras' {
    }

    declare module 'Class' {
    }

    declare module 'Create' {
    }

    declare module 'Curves' {
    }

    declare module 'Data' {
    }

    declare module 'Display' {
    }

    declare module 'DOM' {
    }

    declare module 'EventEmitter' {
    }

    declare module 'Game' {
    }

    declare module 'GameObjects' {
    }

    declare module 'Geom' {
    }

    declare module 'Input' {
    }

    declare module 'Loader' {
    }

    declare module 'Math' {
    }

    declare module 'Physics' {
    }

    declare module 'Scene' {
    }

    declare module 'Scenes' {
    }

    declare module 'Sound' {
    }

    declare module 'Structs' {
    }

    declare module 'Textures' {
    }

    declare module 'Tilemaps' {
    }

    declare module 'Time' {
    }

    declare module 'Tweens' {
    }

    declare module 'Utils' {
    }

}

