declare module 'phaser' {
	export default Phaser ;

}

declare class Phaser {
}

declare namespace Phaser {
	class Actions {
			static Angle(): any[];

			static Call(): any[];

			static GetFirst(): any[];

			static GridAlign(): any[];

			static IncAlpha(): any[];

			static IncX(): any[];

			static IncXY(): any[];

			static IncY(): any[];

			static PlaceOnCircle(): any[];

			static PlaceOnEllipse(): any[];

			static PlaceOnLine(): any[];

			static PlaceOnRectangle(): any[];

			static PlaceOnTriangle(): any[];

			static PlayAnimation(): any[];

			static RandomCircle(): any[];

			static RandomEllipse(): any[];

			static RandomLine(): any[];

			static RandomRectangle(): any[];

			static RandomTriangle(): any[];

			static Rotate(): any[];

			static RotateAround(): any[];

			static RotateAroundDistance(): any[];

			static ScaleX(): any[];

			static ScaleXY(): any[];

			static ScaleY(): any[];

			static SetAlpha(): any[];

			static SetBlendMode(): any[];

			static SetDepth(): any[];

			static SetHitArea(): any[];

			static SetOrigin(): any[];

			static SetRotation(): any[];

			static SetScale(): any[];

			static SetScaleX(): any[];

			static SetScaleY(): any[];

			static SetTint(): any[];

			static SetVisible(): any[];

			static SetX(): any[];

			static SetXY(): any[];

			static SetY(): any[];

			static ShiftPosition(): any[];

			static Shuffle(): any[];

			static SmootherStep(): any[];

			static SmoothStep(): any[];

			static Spread(): any[];

			static ToggleVisible(): any[];

	}

	namespace Actions {
	}

	class Animations {
	}

	namespace Animations {
			class Animation {
					manager: Phaser.Animations.AnimationManager;

					key: string;

					key: string;

					frames: any[];

					frameRate: number;

					duration: number;

					msPerFrame: number;

					skipMissedFrames: boolean;

					delay: number;

					repeat: number;

					repeatDelay: number;

					yoyo: boolean;

					showOnStart: boolean;

					hideOnComplete: boolean;

					callbackScope: any;

					onStart: any;

					onStartParams: any[];

					onRepeat: any;

					onRepeatParams: any[];

					onUpdate: any;

					onUpdateParams: any[];

					onComplete: any;

					onCompleteParams: any[];

					paused: boolean;

					addFrame(): Phaser.Animations.Animation;

					addFrameAt(): Phaser.Animations.Animation;

					checkFrame(): boolean;

					completeAnimation(): void;

					getFirstTick(): void;

					getFrameAt(): Phaser.Animations.AnimationFrame;

					getFrames(): Array.<Phaser.Animations.AnimationFrame>;

					getNextTick(): void;

					load(): void;

					nextFrame(): void;

					previousFrame(): void;

					removeFrame(): Phaser.Animations.Animation;

					removeFrameAt(): Phaser.Animations.Animation;

					repeatAnimation(): void;

					setFrame(): void;

					toJSON(): any;

					updateFrameSequence(): Phaser.Animations.Animation;

					pause(): Phaser.Animations.Animation;

					resume(): Phaser.Animations.Animation;

					destroy(): void;

					parent: Phaser.GameObjects.GameObject;

					animationManager: Phaser.Animations.AnimationManager;

					isPlaying: boolean;

					currentAnim: Phaser.Animations.Animation;

					currentFrame: Phaser.Animations.AnimationFrame;

					_timeScale: number;

					frameRate: number;

					duration: number;

					msPerFrame: number;

					skipMissedFrames: boolean;

					_delay: number;

					_repeat: number;

					_repeatDelay: number;

					_yoyo: boolean;

					forward: boolean;

					accumulator: number;

					nextTick: number;

					repeatCounter: number;

					pendingRepeat: boolean;

					_paused: boolean;

					_wasPlaying: boolean;

					_callbackArgs: any[];

					_updateParams: any[];

					delay(): Phaser.GameObjects.GameObject;

					delayedPlay(): Phaser.GameObjects.GameObject;

					getCurrentKey(): any;

					load(): Phaser.GameObjects.GameObject;

					pause(): Phaser.GameObjects.GameObject;

					paused(): any;

					play(): Phaser.GameObjects.GameObject;

					progress(): any;

					remove(): void;

					repeat(): any;

					repeatDelay(): any;

					restart(): Phaser.GameObjects.GameObject;

					resume(): Phaser.GameObjects.GameObject;

					stop(): Phaser.GameObjects.GameObject;

					timeScale(): any;

					totalFrames(): any;

					totalProgres(): void;

					update(): void;

					updateFrame(): void;

					yoyo(): any;

					destroy(): void;

			}

			namespace Animation {
			}

			class AnimationFrame {
					textureKey: string;

					textureFrame: string;

					index: number;

					frame: Phaser.Textures.Frame;

					isFirst: boolean;

					isLast: boolean;

					prevFrame: Phaser.Animations.AnimationFrame;

					nextFrame: Phaser.Animations.AnimationFrame;

					duration: number;

					progress: number;

					onUpdate: any;

					toJSON(): any;

					destroy(): void;

			}

			namespace AnimationFrame {
			}

			class AnimationManager {
					game: Phaser.Game;

					textureManager: Phaser.Textures.TextureManager;

					globalTimeScale: number;

					anims: Phaser.Structs.Map;

					paused: boolean;

					name: string;

					boot(): void;

					add(): Phaser.Animations.AnimationManager;

					create(): Phaser.Animations.Animation;

					fromJSON(): Array.<Phaser.Animations.Animation>;

					generateFrameNames(): Array.<object>;

					generateFrameNumbers(): Array.<object>;

					get(): Phaser.Animations.Animation;

					load(): Phaser.GameObjects.GameObject;

					pauseAll(): Phaser.Animations.AnimationManager;

					play(): Phaser.Animations.AnimationManager;

					remove(): Phaser.Animations.Animation;

					resumeAll(): Phaser.Animations.AnimationManager;

					staggerPlay(): Phaser.Animations.AnimationManager;

					toJSON(): any;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace AnimationManager {
			}

	}

	class Cache {
	}

	namespace Cache {
			class BaseCache {
					entries: Phaser.Structs.Map;

					events: EventEmitter;

					add(): Phaser.Cache.BaseCache;

					has(): boolean;

					get(): any;

					remove(): Phaser.Cache.BaseCache;

					destroy(): void;

			}

			namespace BaseCache {
			}

			class CacheManager {
					game: Phaser.Game;

					binary: Phaser.Cache.BaseCache;

					bitmapFont: Phaser.Cache.BaseCache;

					json: Phaser.Cache.BaseCache;

					physics: Phaser.Cache.BaseCache;

					shader: Phaser.Cache.BaseCache;

					audio: Phaser.Cache.BaseCache;

					text: Phaser.Cache.BaseCache;

					obj: Phaser.Cache.BaseCache;

					tilemap: Phaser.Cache.BaseCache;

					xml: Phaser.Cache.BaseCache;

					custom: object.<Phaser.Cache.BaseCache>;

					addCustom(): Phaser.Cache.BaseCache;

					destroy(): void;

			}

			namespace CacheManager {
			}

	}

	class Cameras {
	}

	namespace Cameras {
			class Scene2D {
			}

			namespace Scene2D {
			}

			class Controls {
			}

			namespace Controls {
					class SmoothedKeyControl {
							camera: Phaser.Cameras.Scene2D.Camera;

							left: Phaser.Input.Keyboard;

							right: Phaser.Input.Keyboard;

							up: Phaser.Input.Keyboard;

							down: Phaser.Input.Keyboard;

							zoomIn: Phaser.Input.Keyboard;

							zoomOut: Phaser.Input.Keyboard;

							zoomSpeed: number;

							accelX: number;

							accelY: number;

							dragX: number;

							dragY: number;

							maxSpeedX: number;

							maxSpeedY: number;

							_speedX: number;

							_speedY: number;

							_zoom: number;

							active: boolean;

							start(): Phaser.Cameras.Controls.SmoothedKeyControl;

							stop(): Phaser.Cameras.Controls.SmoothedKeyControl;

							setCamera(): Phaser.Cameras.Controls.SmoothedKeyControl;

							update(): void;

							destroy(): void;

					}

					namespace SmoothedKeyControl {
					}

			}

			class Sprite3D {
			}

			namespace Sprite3D {
					class OrthographicCamera {
							viewportWidth: number;

							viewportHeight: number;

							_zoom: number;

							near: number;

							setToOrtho(): any;

							update(): any;

							zoom: number;

							setPosition(): Phaser.Cameras.Sprite3D.Camera;

							setScene(): Phaser.Cameras.Sprite3D.Camera;

							setPixelScale(): Phaser.Cameras.Sprite3D.Camera;

							add(): any;

							remove(): Phaser.Cameras.Sprite3D.Camera;

							clear(): Phaser.Cameras.Sprite3D.Camera;

							getChildren(): any[];

							create(): any;

							createMultiple(): any;

							createRect(): any;

							randomSphere(): Phaser.Cameras.Sprite3D.Camera;

							randomCube(): Phaser.Cameras.Sprite3D.Camera;

							translateChildren(): Phaser.Cameras.Sprite3D.Camera;

							transformChildren(): Phaser.Cameras.Sprite3D.Camera;

							setViewport(): Phaser.Cameras.Sprite3D.Camera;

							translate(): Phaser.Cameras.Sprite3D.Camera;

							lookAt(): Phaser.Cameras.Sprite3D.Camera;

							rotate(): Phaser.Cameras.Sprite3D.Camera;

							rotateAround(): Phaser.Cameras.Sprite3D.Camera;

							project(): any;

							unproject(): any;

							getPickRay(): any;

							updateChildren(): Phaser.Cameras.Sprite3D.Camera;

							updateBillboardMatrix(): void;

							getPointSize(): any;

							destroy(): void;

							setX(): Phaser.Cameras.Sprite3D.Camera;

							setY(): Phaser.Cameras.Sprite3D.Camera;

							setZ(): Phaser.Cameras.Sprite3D.Camera;

							x: number;

							y: number;

							z: number;

					}

					namespace OrthographicCamera {
					}

					class PerspectiveCamera {
							viewportWidth: number;

							viewportHeight: number;

							fieldOfView: number;

							setFOV(): any;

							update(): any;

							setPosition(): Phaser.Cameras.Sprite3D.Camera;

							setScene(): Phaser.Cameras.Sprite3D.Camera;

							setPixelScale(): Phaser.Cameras.Sprite3D.Camera;

							add(): any;

							remove(): Phaser.Cameras.Sprite3D.Camera;

							clear(): Phaser.Cameras.Sprite3D.Camera;

							getChildren(): any[];

							create(): any;

							createMultiple(): any;

							createRect(): any;

							randomSphere(): Phaser.Cameras.Sprite3D.Camera;

							randomCube(): Phaser.Cameras.Sprite3D.Camera;

							translateChildren(): Phaser.Cameras.Sprite3D.Camera;

							transformChildren(): Phaser.Cameras.Sprite3D.Camera;

							setViewport(): Phaser.Cameras.Sprite3D.Camera;

							translate(): Phaser.Cameras.Sprite3D.Camera;

							lookAt(): Phaser.Cameras.Sprite3D.Camera;

							rotate(): Phaser.Cameras.Sprite3D.Camera;

							rotateAround(): Phaser.Cameras.Sprite3D.Camera;

							project(): any;

							unproject(): any;

							getPickRay(): any;

							updateChildren(): Phaser.Cameras.Sprite3D.Camera;

							updateBillboardMatrix(): void;

							getPointSize(): any;

							destroy(): void;

							setX(): Phaser.Cameras.Sprite3D.Camera;

							setY(): Phaser.Cameras.Sprite3D.Camera;

							setZ(): Phaser.Cameras.Sprite3D.Camera;

							x: number;

							y: number;

							z: number;

					}

					namespace PerspectiveCamera {
					}

			}

	}

	class Class {
	}

	namespace Class {
	}

	class Create {
			static GenerateTexture(): HTMLCanvasElement;

	}

	namespace Create {
			class Palettes {
					JMP: any;

					MSX: any;

			}

			namespace Palettes {
			}

	}

	class Curves {
	}

	namespace Curves {
			class CubicBezierCurve {
					p0: Phaser.Math.Vector2;

					p1: Phaser.Math.Vector2;

					p2: Phaser.Math.Vector2;

					p3: Phaser.Math.Vector2;

					getStartPoint(): Phaser.Math.Vector2;

					getResolution(): any;

					getPoint(): any;

					draw(): Phaser.GameObjects.Graphics;

					toJSON(): any;

					type: string;

					defaultDivisions: number;

					arcLengthDivisions: number;

					cacheArcLengths: any[];

					needsUpdate: boolean;

					active: boolean;

					_tmpVec2A: Phaser.Math.Vector2;

					_tmpVec2B: Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					getDistancePoints(): Array.<Phaser.Geom.Point>;

					getEndPoint(): Phaser.Math.Vector2;

					getLength(): number;

					getLengths(): Array.<number>;

					getPointAt(): Phaser.Math.Vector2;

					getPoints(): Array.<Phaser.Math.Vector2>;

					getRandomPoint(): Phaser.Math.Vector2;

					getSpacedPoints(): Array.<Phaser.Math.Vector2>;

					getTangent(): Phaser.Math.Vector2;

					getTangentAt(): Phaser.Math.Vector2;

					getTFromDistance(): number;

					getUtoTmapping(): number;

					updateArcLengths(): void;

			}

			namespace CubicBezierCurve {
			}

			class Curve {
					type: string;

					defaultDivisions: number;

					arcLengthDivisions: number;

					cacheArcLengths: any[];

					needsUpdate: boolean;

					active: boolean;

					_tmpVec2A: Phaser.Math.Vector2;

					_tmpVec2B: Phaser.Math.Vector2;

					draw(): Phaser.GameObjects.Graphics;

					getBounds(): Phaser.Geom.Rectangle;

					getDistancePoints(): Array.<Phaser.Geom.Point>;

					getEndPoint(): Phaser.Math.Vector2;

					getLength(): number;

					getLengths(): Array.<number>;

					getPointAt(): Phaser.Math.Vector2;

					getPoints(): Array.<Phaser.Math.Vector2>;

					getRandomPoint(): Phaser.Math.Vector2;

					getSpacedPoints(): Array.<Phaser.Math.Vector2>;

					getStartPoint(): Phaser.Math.Vector2;

					getTangent(): Phaser.Math.Vector2;

					getTangentAt(): Phaser.Math.Vector2;

					getTFromDistance(): number;

					getUtoTmapping(): number;

					updateArcLengths(): void;

			}

			namespace Curve {
			}

			class EllipseCurve {
					p0: Phaser.Math.Vector2;

					_xRadius: number;

					_yRadius: number;

					_startAngle: number;

					_endAngle: number;

					_clockwise: boolean;

					_rotation: number;

					getStartPoint(): any;

					getResolution(): any;

					getPoint(): any;

					setXRadius(): any;

					setYRadius(): any;

					setWidth(): any;

					setHeight(): any;

					setStartAngle(): any;

					setEndAngle(): any;

					setClockwise(): any;

					setRotation(): any;

					x: number;

					y: number;

					xRadius: number;

					yRadius: number;

					startAngle: number;

					endAngle: number;

					clockwise: number;

					rotation: number;

					toJSON(): any;

					type: string;

					defaultDivisions: number;

					arcLengthDivisions: number;

					cacheArcLengths: any[];

					needsUpdate: boolean;

					active: boolean;

					_tmpVec2A: Phaser.Math.Vector2;

					_tmpVec2B: Phaser.Math.Vector2;

					draw(): Phaser.GameObjects.Graphics;

					getBounds(): Phaser.Geom.Rectangle;

					getDistancePoints(): Array.<Phaser.Geom.Point>;

					getEndPoint(): Phaser.Math.Vector2;

					getLength(): number;

					getLengths(): Array.<number>;

					getPointAt(): Phaser.Math.Vector2;

					getPoints(): Array.<Phaser.Math.Vector2>;

					getRandomPoint(): Phaser.Math.Vector2;

					getSpacedPoints(): Array.<Phaser.Math.Vector2>;

					getTangent(): Phaser.Math.Vector2;

					getTangentAt(): Phaser.Math.Vector2;

					getTFromDistance(): number;

					getUtoTmapping(): number;

					updateArcLengths(): void;

			}

			namespace EllipseCurve {
			}

			class LineCurve {
					p0: Phaser.Math.Vector2;

					getBounds(): any;

					getStartPoint(): any;

					getResolution(): number;

					getPoint(): any;

					getPointAt(): any;

					getTangent(): any;

					draw(): any;

					toJSON(): any;

					type: string;

					defaultDivisions: number;

					arcLengthDivisions: number;

					cacheArcLengths: any[];

					needsUpdate: boolean;

					active: boolean;

					_tmpVec2A: Phaser.Math.Vector2;

					_tmpVec2B: Phaser.Math.Vector2;

					getDistancePoints(): Array.<Phaser.Geom.Point>;

					getEndPoint(): Phaser.Math.Vector2;

					getLength(): number;

					getLengths(): Array.<number>;

					getPoints(): Array.<Phaser.Math.Vector2>;

					getRandomPoint(): Phaser.Math.Vector2;

					getSpacedPoints(): Array.<Phaser.Math.Vector2>;

					getTangentAt(): Phaser.Math.Vector2;

					getTFromDistance(): number;

					getUtoTmapping(): number;

					updateArcLengths(): void;

			}

			namespace LineCurve {
			}

			class MoveTo {
					active: boolean;

					p0: Phaser.Math.Vector2;

					getPoint(): any;

					getPointAt(): any;

					getResolution(): any;

					getLength(): any;

					toJSON(): any;

			}

			namespace MoveTo {
			}

			class Path {
					name: string;

					curves: any[];

					cacheLengths: any[];

					autoClose: boolean;

					startPoint: Phaser.Math.Vector2;

					_tmpVec2A: Phaser.Math.Vector2;

					_tmpVec2B: Phaser.Math.Vector2;

					add(): Phaser.Curves.Path;

					circleTo(): Phaser.Curves.Path;

					closePath(): Phaser.Curves.Path;

					cubicBezierTo(): Phaser.Curves.Path;

					destroy(): void;

					draw(): Phaser.GameObjects.Graphics;

					ellipseTo(): Phaser.Curves.Path;

					fromJSON(): Phaser.Curves.Path;

					getBounds(): Phaser.Geom.Rectangle;

					getCurveLengths(): any[];

					getEndPoint(): Phaser.Math.Vector2;

					getLength(): number;

					getPoint(): Phaser.Math.Vector2;

					getPoints(): Array.<Phaser.Math.Vector2>;

					getRandomPoint(): Phaser.Math.Vector2;

					getSpacedPoints(): Array.<Phaser.Math.Vector2>;

					getStartPoint(): Phaser.Math.Vector2;

					lineTo(): Phaser.Curves.Path;

					splineTo(): Phaser.Curves.Path;

					moveTo(): Phaser.Curves.Path;

					toJSON(): any;

					updateArcLengths(): void;

			}

			namespace Path {
			}

			class SplineCurve {
					points: Array.<Phaser.Math.Vector2>;

					addPoints(): any;

					addPoint(): any;

					getStartPoint(): any;

					getResolution(): any;

					getPoint(): any;

					toJSON(): any;

					type: string;

					defaultDivisions: number;

					arcLengthDivisions: number;

					cacheArcLengths: any[];

					needsUpdate: boolean;

					active: boolean;

					_tmpVec2A: Phaser.Math.Vector2;

					_tmpVec2B: Phaser.Math.Vector2;

					draw(): Phaser.GameObjects.Graphics;

					getBounds(): Phaser.Geom.Rectangle;

					getDistancePoints(): Array.<Phaser.Geom.Point>;

					getEndPoint(): Phaser.Math.Vector2;

					getLength(): number;

					getLengths(): Array.<number>;

					getPointAt(): Phaser.Math.Vector2;

					getPoints(): Array.<Phaser.Math.Vector2>;

					getRandomPoint(): Phaser.Math.Vector2;

					getSpacedPoints(): Array.<Phaser.Math.Vector2>;

					getTangent(): Phaser.Math.Vector2;

					getTangentAt(): Phaser.Math.Vector2;

					getTFromDistance(): number;

					getUtoTmapping(): number;

					updateArcLengths(): void;

			}

			namespace SplineCurve {
			}

	}

	class Data {
	}

	namespace Data {
			class DataManager {
					parent: any;

					events: EventEmitter;

					list: any;

					blockSet: boolean;

					_frozen: boolean;

					get(): any;

					getAll(): any;

					query(): any;

					set(): Phaser.Data.DataManager;

					each(): Phaser.Data.DataManager;

					merge(): Phaser.Data.DataManager;

					remove(): Phaser.Data.DataManager;

					pop(): any;

					has(): boolean;

					setFreeze(): Phaser.Data.DataManager;

					reset(): Phaser.Data.DataManager;

					destroy(): void;

					freeze: boolean;

					count: number;

			}

			namespace DataManager {
			}

			class DataManagerPlugin {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					boot(): void;

					shutdownPlugin(): void;

					destroyPlugin(): void;

					parent: any;

					events: EventEmitter;

					list: any;

					blockSet: boolean;

					_frozen: boolean;

					get(): any;

					getAll(): any;

					query(): any;

					set(): Phaser.Data.DataManager;

					each(): Phaser.Data.DataManager;

					merge(): Phaser.Data.DataManager;

					remove(): Phaser.Data.DataManager;

					pop(): any;

					has(): boolean;

					setFreeze(): Phaser.Data.DataManager;

					reset(): Phaser.Data.DataManager;

					destroy(): void;

					freeze: boolean;

					count: number;

			}

			namespace DataManagerPlugin {
			}

	}

	class Display {
	}

	namespace Display {
			class Align {
			}

			namespace Align {
					class To {
							static LeftBottom(): Phaser.GameObjects.GameObject;

							static LeftCenter(): Phaser.GameObjects.GameObject;

							static LeftTop(): Phaser.GameObjects.GameObject;

							static RightBottom(): Phaser.GameObjects.GameObject;

							static RightCenter(): Phaser.GameObjects.GameObject;

							static RightTop(): Phaser.GameObjects.GameObject;

							static TopCenter(): Phaser.GameObjects.GameObject;

							static TopLeft(): Phaser.GameObjects.GameObject;

							static TopRight(): Phaser.GameObjects.GameObject;

					}

					namespace To {
					}

			}

			class Bounds {
					static SetBottom(): Phaser.GameObjects.GameObject;

					static SetCenterX(): Phaser.GameObjects.GameObject;

					static SetCenterY(): Phaser.GameObjects.GameObject;

					static SetLeft(): Phaser.GameObjects.GameObject;

					static SetRight(): Phaser.GameObjects.GameObject;

					static SetTop(): Phaser.GameObjects.GameObject;

					static wrap(): Matter.Vector;

			}

			namespace Bounds {
			}

			class Canvas {
					static TouchAction(): HTMLCanvasElement;

					static UserSelect(): HTMLCanvasElement;

					static BlitImage(): void;

					static DrawImage(): void;

					static GetBlendModes(): any[];

			}

			namespace Canvas {
					class Smoothing {
							static getPrefix(): string;

							static enable(): any;

							static disable(): any;

							static isEnabled(): boolean;

					}

					namespace Smoothing {
					}

					class CanvasRenderer {
							game: Phaser.Game;

							type: number;

							drawCount: number;

							width: number;

							height: number;

							config: any;

							scaleMode: number;

							gameCanvas: HTMLCanvasElement;

							gameContext: CanvasRenderingContext2D;

							currentContext: CanvasRenderingContext2D;

							drawImage: any;

							blitImage: any;

							blendModes: any[];

							currentAlpha: number;

							currentBlendMode: number;

							currentScaleMode: number;

							snapshotCallback: any;

							snapshotType: any;

							snapshotEncoder: any;

							init(): void;

							resize(): void;

							onContextLost(): void;

							onContextRestored(): void;

							resetTransform(): void;

							setBlendMode(): any;

							setAlpha(): number;

							preRender(): void;

							render(): void;

							postRender(): void;

							snapshot(): void;

							destroy(): void;

					}

					namespace CanvasRenderer {
					}

			}

			class Color {
					r: number;

					g: number;

					b: number;

					a: number;

					gl: any[];

					_color: number;

					_color32: number;

					_rgba: string;

					transparent(): Phaser.Display.Color;

					setTo(): Phaser.Display.Color;

					setGLTo(): Phaser.Display.Color;

					setFromRGB(): Phaser.Display.Color;

					update(): Phaser.Display.Color;

					clone(): Phaser.Display.Color;

					color: number;

					color32: number;

					rgba: string;

					redGL: number;

					greenGL: number;

					blueGL: number;

					alphaGL: number;

					red: number;

					green: number;

					blue: number;

					alpha: number;

					static ColorToRGBA(): ColorObject;

					static ComponentToHex(): string;

					static GetColor(): number;

					static GetColor32(): number;

					static HexStringToColor(): Phaser.Display.Color;

					static HSLToColor(): Phaser.Display.Color;

					static HSVColorWheel(): any[];

					static HSVToRGB(): ColorObject;

					static HueToComponent(): number;

			}

			namespace Color {
			}

			class Color {
					static IntegerToColor(): Phaser.Display.Color;

					static IntegerToRGB(): ColorObject;

					static ObjectToColor(): Phaser.Display.Color;

					static RandomRGB(): Phaser.Display.Color;

					static RGBStringToColor(): Phaser.Display.Color;

					static RGBToHSV(): any;

					static RGBToString(): string;

					static ValueToColor(): Phaser.Display.Color;

			}

			namespace Color {
					class Interpolate {
							static RGBWithRGB(): ColorObject;

							static ColorWithColor(): ColorObject;

							static ColorWithRGB(): ColorObject;

					}

					namespace Interpolate {
					}

			}

			class Masks {
			}

			namespace Masks {
			}

	}

	class DOM {
			static AddToDOM(): any;

			static DOMContentLoaded(): void;

			static ParseXML(): any;

			static RemoveFromDOM(): void;

	}

	namespace DOM {
			class RequestAnimationFrame {
					isRunning: boolean;

					callback: any;

					tick: DOMHighResTimeStamp;

					isSetTimeOut: boolean;

					timeOutID: number;

					lastTime: number;

					step: any;

					stepTimeout: any;

					start(): void;

					stop(): void;

					destroy(): void;

			}

			namespace RequestAnimationFrame {
			}

	}

	class EventEmitter {
			shutdown(): void;

			destroy(): void;

			eventNames(): any[];

			listeners(): any[];

			listenerCount(): number;

			emit(): Boolean;

			on(): EventEmitter;

			addListener(): EventEmitter;

			once(): EventEmitter;

			removeListener(): EventEmitter;

			off(): EventEmitter;

			removeAllListeners(): EventEmitter;

			eventNames(): any[];

			listeners(): any[];

			listenerCount(): number;

			emit(): Boolean;

			on(): EventEmitter;

			addListener(): EventEmitter;

			once(): EventEmitter;

			removeListener(): EventEmitter;

			off(): EventEmitter;

			removeAllListeners(): EventEmitter;

	}

	namespace EventEmitter {
	}

	class Game {
			config: Phaser.Boot.Config;

			renderer: Phaser.Renderer.Canvas.CanvasRenderer;

			canvas: HTMLCanvasElement;

			context: CanvasRenderingContext2D;

			isBooted: boolean;

			isRunning: boolean;

			events: EventEmitter;

			anims: Phaser.Animations.AnimationManager;

			textures: Phaser.Textures.TextureManager;

			cache: Phaser.Cache.CacheManager;

			registry: Phaser.Data.DataManager;

			input: Phaser.Input.InputManager;

			scene: Phaser.Scenes.SceneManager;

			device: Phaser.Device;

			sound: Phaser.BaseSoundManager;

			loop: Phaser.Boot.TimeStep;

			plugins: Phaser.Boot.PluginManager;

			onStepCallback: any;

			boot(): void;

			start(): void;

			step(): void;

			onHidden(): void;

			onVisible(): void;

			onBlur(): void;

			onFocus(): void;

			destroy(): void;

	}

	namespace Game {
	}

	class GameObjects {
	}

	namespace GameObjects {
			class DynamicBitmapText {
					font: string;

					fontData: any;

					text: string;

					fontSize: number;

					_bounds: any;

					scrollX: number;

					scrollY: number;

					cropWidth: number;

					cropHeight: number;

					"displayCallback;": any;

					setSize(): Phaser.GameObjects.DynamicBitmapText;

					setDisplayCallback(): Phaser.GameObjects.DynamicBitmapText;

					setFontSize(): Phaser.GameObjects.DynamicBitmapText;

					setText(): Phaser.GameObjects.DynamicBitmapText;

					setScrollX(): Phaser.GameObjects.DynamicBitmapText;

					setScrollY(): Phaser.GameObjects.DynamicBitmapText;

					getTextBounds(): any;

					width: number;

					height: number;

					toJSON(): any;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace DynamicBitmapText {
			}

			class BitmapText {
					font: string;

					fontData: any;

					text: string;

					fontSize: number;

					_bounds: any;

					setFontSize(): Phaser.GameObjects.BitmapText;

					setText(): Phaser.GameObjects.BitmapText;

					getTextBounds(): any;

					width: number;

					height: number;

					toJSON(): any;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace BitmapText {
			}

			class Blitter {
					children: Phaser.GameObjects.DisplayList;

					renderList: any[];

					create(): Phaser.GameObjects.Blitter.Bob;

					createFromCallback(): Array.<Phaser.GameObjects.Blitter.Bob>;

					createMultiple(): Array.<Phaser.GameObjects.Blitter.Bob>;

					childCanRender(): boolean;

					getRenderList(): any;

					clear(): void;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

			}

			namespace Blitter {
					class Bob {
							parent: Phaser.GameObjects.Blitter;

							x: number;

							y: number;

							frame: string;

							data: any;

							_visible: boolean;

							_alpha: number;

							flipX: boolean;

							flipY: boolean;

							setFrame(): Phaser.GameObjects.Blitter.Bob;

							resetFlip(): Phaser.GameObjects.Blitter.Bob;

							reset(): Phaser.GameObjects.Blitter.Bob;

							setFlipX(): Phaser.GameObjects.Blitter.Bob;

							setFlipY(): Phaser.GameObjects.Blitter.Bob;

							setFlip(): Phaser.GameObjects.Blitter.Bob;

							setVisible(): Phaser.GameObjects.Blitter.Bob;

							setAlpha(): Phaser.GameObjects.Blitter.Bob;

							destroy(): void;

							visible: boolean;

							alpha: number;

					}

					namespace Bob {
					}

			}

			class Components {
					Origin: any;

					Pipeline: any;

					ScaleMode: any;

					ScrollFactor: any;

					Size: any;

					Texture: any;

					Tint: any;

					Transform: any;

					Visible: any;

					Acceleration: any;

					Angular: any;

					Bounce: any;

					Debug: any;

					Drag: any;

					Enable: any;

					Friction: any;

					Gravity: any;

					Immovable: any;

					Mass: any;

					Size: any;

					Velocity: any;

					Acceleration: any;

					BodyScale: any;

					BodyType: any;

					Bounce: any;

					CheckAgainst: any;

					Collides: any;

					Debug: any;

					Friction: any;

					Gravity: any;

					Offset: any;

					SetGameObject: any;

					Velocity: any;

					Bounce: any;

					Collision: any;

					Force: any;

					Friction: any;

					Gravity: any;

					Mass: any;

					Sensor: any;

					SetBody: any;

					Sleep: any;

					Static: any;

					Transform: any;

					Velocity: any;

					static CalculateFacesAt(): void;

					static CalculateFacesWithin(): void;

					static Copy(): void;

					static CreateFromTiles(): Array.<Phaser.GameObjects.Sprite>;

					static CullTiles(): Array.<Phaser.Tilemaps.Tile>;

					static Fill(): void;

					static FilterTiles(): Array.<Phaser.Tilemaps.Tile>;

					static FindByIndex(): Phaser.Tilemaps.Tile;

					static FindTile(): Phaser.Tilemaps.Tile;

					static ForEachTile(): void;

					static GetTileAt(): Phaser.Tilemaps.Tile;

					static GetTileAtWorldXY(): Phaser.Tilemaps.Tile;

					static GetTilesWithin(): Array.<Phaser.Tilemaps.Tile>;

					static GetTilesWithinShape(): Array.<Phaser.Tilemaps.Tile>;

					static GetTilesWithinWorldXY(): Array.<Phaser.Tilemaps.Tile>;

					static HasTileAt(): boolean;

					static HasTileAtWorldXY(): boolean;

			}

			namespace Components {
					class TransformMatrix {
							matrix: number32Array;

							decomposedMatrix: any;

							loadIdentity(): Phaser.GameObjects.Components.TransformMatrix;

							translate(): Phaser.GameObjects.Components.TransformMatrix;

							scale(): Phaser.GameObjects.Components.TransformMatrix;

							rotate(): Phaser.GameObjects.Components.TransformMatrix;

							multiply(): Phaser.GameObjects.Components.TransformMatrix;

							transform(): Phaser.GameObjects.Components.TransformMatrix;

							transformPoint(): Phaser.Geom.Point;

							invert(): Phaser.GameObjects.Components.TransformMatrix;

							setTransform(): Phaser.GameObjects.Components.TransformMatrix;

							decomposeMatrix(): any;

							applyITRS(): Phaser.GameObjects.Components.TransformMatrix;

					}

					namespace TransformMatrix {
					}

					class TextStyle {
							parent: Phaser.GameObjects.Text;

							fontFamily: string;

							fontSize: string;

							fontStyle: string;

							backgroundColor: string;

							color: string;

							stroke: string;

							strokeThickness: number;

							shadowOffsetX: number;

							shadowOffsetY: number;

							shadowColor: string;

							shadowBlur: number;

							shadowStroke: boolean;

							shadowFill: boolean;

							align: string;

							maxLines: number;

							fixedWidth: number;

							fixedHeight: number;

							rtl: boolean;

							testString: string;

							_font: string;

							setStyle(): void;

							syncFont(): void;

							syncStyle(): void;

							syncShadow(): void;

							update(): Phaser.GameObjects.Text;

							setFont(): Phaser.GameObjects.Text;

							setFontFamily(): Phaser.GameObjects.Text;

							setFontStyle(): Phaser.GameObjects.Text;

							setFontSize(): Phaser.GameObjects.Text;

							setTestString(): Phaser.GameObjects.Text;

							setFixedSize(): Phaser.GameObjects.Text;

							setBackgroundColor(): Phaser.GameObjects.Text;

							setFill(): Phaser.GameObjects.Text;

							setColor(): Phaser.GameObjects.Text;

							setStroke(): Phaser.GameObjects.Text;

							setShadow(): Phaser.GameObjects.Text;

							setShadowOffset(): Phaser.GameObjects.Text;

							setShadowColor(): Phaser.GameObjects.Text;

							setShadowBlur(): Phaser.GameObjects.Text;

							setShadowStroke(): Phaser.GameObjects.Text;

							setShadowFill(): Phaser.GameObjects.Text;

							setWordWrapWidth(): Phaser.GameObjects.Text;

							setWordWrapCallback(): Phaser.GameObjects.Text;

							setAlign(): Phaser.GameObjects.Text;

							setMaxLines(): Phaser.GameObjects.Text;

							getTextMetrics(): any;

							toJSON(): any;

							destroy(): void;

					}

					namespace TextStyle {
					}

			}

			class DisplayList {
					sortChildrenFlag: boolean;

					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					boot(): void;

					queueDepthSort(): void;

					depthSort(): void;

					sortByDepth(): number;

					sortGameObjects(): any[];

					getTopGameObject(): Phaser.GameObjects.GameObject;

					parent: any;

					list: any[];

					position: number;

					add(): any;

					addAt(): any;

					addMultiple(): any[];

					getAt(): any;

					getIndex(): number;

					sort(): any[];

					sortIndexHandler(): number;

					getByKey(): any;

					getByName(): any;

					getRandom(): any;

					getFirst(): any;

					getAll(): any[];

					count(): number;

					swap(): void;

					moveTo(): any;

					remove(): any;

					removeAt(): any;

					removeBetween(): any[];

					removeAll(): Phaser.Structs.List;

					bringToTop(): any;

					sendToBack(): any;

					moveUp(): any;

					moveDown(): any;

					reverse(): Phaser.Structs.List;

					shuffle(): Phaser.Structs.List;

					replace(): any;

					exists(): boolean;

					setAll(): void;

					each(): void;

					shutdown(): void;

					destroy(): void;

					length: number;

					first: number;

					last: number;

					next: number;

					previous: number;

			}

			namespace DisplayList {
			}

			class GameObject {
					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace GameObject {
			}

			class GameObjectCreator {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					displayList: Phaser.GameObjects.DisplayList;

					"updateList;": Phaser.GameObjects.UpdateList;

					boot(): void;

					shutdown(): void;

					destroy(): void;

					graphics(): Phaser.GameObjects.Graphics;

					group(): Phaser.GameObjects.Group;

					image(): Phaser.GameObjects.Image;

					mesh(): Phaser.GameObjects.Mesh;

					particles(): Phaser.GameObjects.Particles.ParticleEmitterManager;

					quad(): Phaser.GameObjects.Quad;

					sprite(): Phaser.GameObjects.Sprite;

					sprite3D(): Phaser.GameObjects.Sprite3D;

					text(): Phaser.GameObjects.Text;

					tileSprite(): Phaser.GameObjects.TileSprite;

					zone(): Phaser.GameObjects.Zone;

					tilemap(): Phaser.Tilemaps.Tilemap;

					tween(): Phaser.Tweens.Tween;

			}

			namespace GameObjectCreator {
			}

			class GameObjectFactory {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					displayList: Phaser.GameObjects.DisplayList;

					"updateList;": Phaser.GameObjects.UpdateList;

					boot(): void;

					existing(): Phaser.GameObjects.GameObject;

					shutdown(): void;

					destroy(): void;

					graphics(): Phaser.GameObjects.Graphics;

					group(): Phaser.GameObjects.Group;

					image(): Phaser.GameObjects.Image;

					mesh(): Phaser.GameObjects.Mesh;

					particles(): Phaser.GameObjects.Particles.ParticleEmitterManager;

					follower(): Phaser.GameObjects.PathFollower;

					quad(): Phaser.GameObjects.Quad;

					sprite(): Phaser.GameObjects.Sprite;

					sprite3D(): Phaser.GameObjects.Sprite3D;

					text(): Phaser.GameObjects.Text;

					tileSprite(): Phaser.GameObjects.TileSprite;

					zone(): Phaser.GameObjects.Zone;

					tilemap(): Phaser.Tilemaps.Tilemap;

					tween(): Phaser.Tweens.Tween;

			}

			namespace GameObjectFactory {
			}

			class Graphics {
					displayOriginX: number;

					displayOriginY: number;

					commandBuffer: any[];

					defaultFillColor: number;

					defaultFillAlpha: number;

					defaultStrokeWidth: number;

					defaultStrokeColor: number;

					defaultStrokeAlpha: number;

					_lineWidth: number;

					setDefaultStyles(): Phaser.GameObjects.Graphics;

					lineStyle(): Phaser.GameObjects.Graphics;

					fillStyle(): Phaser.GameObjects.Graphics;

					beginPath(): Phaser.GameObjects.Graphics;

					closePath(): Phaser.GameObjects.Graphics;

					fillPath(): Phaser.GameObjects.Graphics;

					strokePath(): Phaser.GameObjects.Graphics;

					fillCircleShape(): Phaser.GameObjects.Graphics;

					strokeCircleShape(): Phaser.GameObjects.Graphics;

					fillCircle(): Phaser.GameObjects.Graphics;

					strokeCircle(): Phaser.GameObjects.Graphics;

					fillRectShape(): Phaser.GameObjects.Graphics;

					strokeRectShape(): Phaser.GameObjects.Graphics;

					fillRect(): Phaser.GameObjects.Graphics;

					strokeRect(): Phaser.GameObjects.Graphics;

					fillPointShape(): Phaser.GameObjects.Graphics;

					fillPoint(): Phaser.GameObjects.Graphics;

					fillTriangleShape(): Phaser.GameObjects.Graphics;

					strokeTriangleShape(): Phaser.GameObjects.Graphics;

					fillTriangle(): Phaser.GameObjects.Graphics;

					strokeTriangle(): Phaser.GameObjects.Graphics;

					strokeLineShape(): Phaser.GameObjects.Graphics;

					lineBetween(): Phaser.GameObjects.Graphics;

					lineTo(): Phaser.GameObjects.Graphics;

					moveTo(): Phaser.GameObjects.Graphics;

					lineFxTo(): Phaser.GameObjects.Graphics;

					moveFxTo(): Phaser.GameObjects.Graphics;

					strokePoints(): Phaser.GameObjects.Graphics;

					fillPoints(): Phaser.GameObjects.Graphics;

					strokeEllipseShape(): Phaser.GameObjects.Graphics;

					strokeEllipse(): Phaser.GameObjects.Graphics;

					fillEllipseShape(): Phaser.GameObjects.Graphics;

					fillEllipse(): Phaser.GameObjects.Graphics;

					arc(): Phaser.GameObjects.Graphics;

					save(): Phaser.GameObjects.Graphics;

					restore(): Phaser.GameObjects.Graphics;

					translate(): Phaser.GameObjects.Graphics;

					scale(): Phaser.GameObjects.Graphics;

					rotate(): Phaser.GameObjects.Graphics;

					clear(): Phaser.GameObjects.Graphics;

					generateTexture(): Phaser.GameObjects.Graphics;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace Graphics {
			}

			class Group {
					scene: Phaser.Scene;

					children: Phaser.Structs.Set;

					isParent: boolean;

					classType: any;

					active: boolean;

					maxSize: number;

					defaultKey: string;

					defaultFrame: string;

					runChildUpdate: boolean;

					createCallback: any;

					removeCallback: any;

					createMultipleCallback: any;

					create(): Phaser.GameObjects.GameObject;

					createMultiple(): Array.<Phaser.GameObjects.GameObject>;

					createFromConfig(): Array.<Phaser.GameObjects.GameObject>;

					preUpdate(): void;

					add(): Phaser.GameObjects.Group;

					addMultiple(): Phaser.GameObjects.Group;

					remove(): Phaser.GameObjects.Group;

					clear(): Phaser.GameObjects.Group;

					contains(): boolean;

					getChildren(): Array.<Phaser.GameObjects.GameObject>;

					getLength(): number;

					getFirst(): Phaser.GameObjects.GameObject;

					get(): Phaser.GameObjects.GameObject;

					getFirstAlive(): Phaser.GameObjects.GameObject;

					getFirstDead(): Phaser.GameObjects.GameObject;

					playAnimation(): Phaser.GameObjects.Group;

					isFull(): boolean;

					countActive(): number;

					getTotalUsed(): number;

					getTotalFree(): number;

					setDepth(): Phaser.GameObjects.Group;

					kill(): void;

					killAndHide(): void;

					toggleVisible(): Phaser.GameObjects.Group;

					destroy(): void;

			}

			namespace Group {
			}

			class Image {
					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					setAcceleration(): any;

					setAccelerationX(): any;

					setAccelerationY(): any;

					setAngularVelocity(): any;

					setAngularAcceleration(): any;

					setAngularDrag(): any;

					setBounce(): any;

					setBounceX(): any;

					setBounceY(): any;

					setCollideWorldBounds(): any;

					setDebug(): any;

					setDebugBodyColor(): any;

					debugShowBody: any;

					debugShowVelocity: any;

					debugBodyColor: any;

					setDrag(): any;

					setDragX(): any;

					setDragY(): any;

					enableBody(): any;

					disableBody(): any;

					setFriction(): any;

					setFrictionX(): any;

					setFrictionY(): any;

					setGravity(): any;

					setGravityX(): any;

					setGravityY(): any;

					setImmovable(): any;

					setMass(): any;

					setOffset(): any;

					setCircle(): any;

					setVelocity(): any;

					setVelocityX(): any;

					setVelocityY(): any;

					setMaxVelocity(): any;

			}

			namespace Image {
			}

			class Light {
					x: number;

					y: number;

					radius: number;

					r: number;

					g: number;

					b: number;

					intensity: number;

					scrollFactorX: number;

					scrollFactorY: number;

					set(): Phaser.GameObjects.Light;

					setScrollFactor(): Phaser.GameObjects.Light;

					setColor(): Phaser.GameObjects.Light;

					setIntensity(): Phaser.GameObjects.Light;

					setPosition(): Phaser.GameObjects.Light;

					setRadius(): Phaser.GameObjects.Light;

			}

			namespace Light {
			}

			class LightsManager {
					lightPool: any[];

					lights: any[];

					culledLights: any[];

					ambientColor: Object;

					active: boolean;

					enable(): Phaser.GameObjects.LightsManager;

					disable(): Phaser.GameObjects.LightsManager;

					cull(): Array.<Phaser.GameObjects.Light>;

					forEachLight(): Phaser.GameObjects.LightsManager;

					setAmbientColor(): Phaser.GameObjects.LightsManager;

					getMaxVisibleLights(): number;

					getLightCount(): number;

					addLight(): Phaser.GameObjects.Light;

					removeLight(): Phaser.GameObjects.LightsManager;

					shutdown(): void;

					destroy(): void;

			}

			namespace LightsManager {
			}

			class LightsPlugin {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					boot(): void;

					destroy(): void;

					lightPool: any[];

					lights: any[];

					culledLights: any[];

					ambientColor: Object;

					active: boolean;

					enable(): Phaser.GameObjects.LightsManager;

					disable(): Phaser.GameObjects.LightsManager;

					cull(): Array.<Phaser.GameObjects.Light>;

					forEachLight(): Phaser.GameObjects.LightsManager;

					setAmbientColor(): Phaser.GameObjects.LightsManager;

					getMaxVisibleLights(): number;

					getLightCount(): number;

					addLight(): Phaser.GameObjects.Light;

					removeLight(): Phaser.GameObjects.LightsManager;

					shutdown(): void;

			}

			namespace LightsPlugin {
			}

			class Mesh {
					vertices: number32Array;

					uv: number32Array;

					colors: Uint32Array;

					alphas: number32Array;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace Mesh {
			}

			class Particles {
			}

			namespace Particles {
					class Particle {
							emitter: Phaser.GameObjects.Particles.ParticleEmitter;

							frame: Phaser.Texture.Frame;

							index: number;

							x: number;

							y: number;

							velocityX: number;

							velocityY: number;

							accelerationX: number;

							accelerationY: number;

							maxVelocityX: number;

							maxVelocityY: number;

							bounce: number;

							scaleX: number;

							scaleY: number;

							alpha: number;

							angle: number;

							rotation: number;

							scrollFactorX: number;

							scrollFactorY: number;

							tint: number;

							color: number;

							life: number;

							lifeCurrent: number;

							delayCurrent: number;

							lifeT: number;

							data: any;

							isAlive(): boolean;

							fire(): void;

							computeVelocity(): void;

							checkBounds(): void;

							update(): boolean;

					}

					namespace Particle {
					}

					class ParticleEmitter {
							manager: Phaser.GameObjects.Particles.ParticleEmitterManager;

							texture: Phaser.Textures.Texture;

							frames: Array.<Phaser.Textures.Frame>;

							defaultFrame: Phaser.Textures.Frame;

							configFastMap: any;

							configOpMap: any;

							name: string;

							particleClass: Phaser.GameObjects.Particles.Particle;

							x: number;

							y: number;

							radial: boolean;

							gravityX: number;

							gravityY: number;

							acceleration: boolean;

							accelerationX: number;

							accelerationY: number;

							maxVelocityX: number;

							maxVelocityY: number;

							speedX: number;

							speedY: number;

							moveTo: boolean;

							moveToX: number;

							moveToY: number;

							bounce: number;

							scaleX: number;

							scaleY: number;

							tint: number;

							alpha: number;

							lifespan: number;

							angle: number;

							rotate: number;

							emitCallback: any;

							emitCallbackScope: any;

							deathCallback: any;

							deathCallbackScope: any;

							maxParticles: number;

							quantity: number;

							delay: number;

							frequency: number;

							on: boolean;

							particleBringToTop: boolean;

							timeScale: number;

							emitZone: any;

							deathZone: any;

							bounds: Phaser.Geom.Rectangle;

							collideLeft: boolean;

							collideRight: boolean;

							collideTop: boolean;

							collideBottom: boolean;

							active: boolean;

							visible: boolean;

							blendMode: number;

							follow: any;

							followOffset: Phaser.Math.Vector2;

							trackVisible: boolean;

							currentFrame: number;

							randomFrame: boolean;

							frameQuantity: number;

							dead: any[];

							alive: any[];

							_counter: number;

							_frameCounter: number;

							fromJSON(): Phaser.GameObjects.Particles.ParticleEmitter;

							toJSON(): any;

							startFollow(): Phaser.GameObjects.Particles.ParticleEmitter;

							stopFollow(): Phaser.GameObjects.Particles.ParticleEmitter;

							getFrame(): Phaser.Textures.Frame;

							setFrame(): Phaser.GameObjects.Particles.ParticleEmitter;

							setRadial(): Phaser.GameObjects.Particles.ParticleEmitter;

							setPosition(): Phaser.GameObjects.Particles.ParticleEmitter;

							setBounds(): Phaser.GameObjects.Particles.ParticleEmitter;

							setSpeedX(): Phaser.GameObjects.Particles.ParticleEmitter;

							setSpeedY(): Phaser.GameObjects.Particles.ParticleEmitter;

							setSpeed(): Phaser.GameObjects.Particles.ParticleEmitter;

							setScaleX(): Phaser.GameObjects.Particles.ParticleEmitter;

							setScaleY(): Phaser.GameObjects.Particles.ParticleEmitter;

							setScale(): Phaser.GameObjects.Particles.ParticleEmitter;

							setGravityX(): Phaser.GameObjects.Particles.ParticleEmitter;

							setGravityY(): Phaser.GameObjects.Particles.ParticleEmitter;

							setGravity(): Phaser.GameObjects.Particles.ParticleEmitter;

							setAlpha(): Phaser.GameObjects.Particles.ParticleEmitter;

							setEmitterAngle(): Phaser.GameObjects.Particles.ParticleEmitter;

							setAngle(): Phaser.GameObjects.Particles.ParticleEmitter;

							setLifespan(): Phaser.GameObjects.Particles.ParticleEmitter;

							setQuantity(): Phaser.GameObjects.Particles.ParticleEmitter;

							setFrequency(): Phaser.GameObjects.Particles.ParticleEmitter;

							setEmitZone(): Phaser.GameObjects.Particles.ParticleEmitter;

							setDeathZone(): Phaser.GameObjects.Particles.ParticleEmitter;

							reserve(): Phaser.GameObjects.Particles.ParticleEmitter;

							getAliveParticleCount(): number;

							getDeadParticleCount(): number;

							getParticleCount(): number;

							atLimit(): boolean;

							onParticleEmit(): Phaser.GameObjects.Particles.ParticleEmitter;

							onParticleDeath(): Phaser.GameObjects.Particles.ParticleEmitter;

							killAll(): Phaser.GameObjects.Particles.ParticleEmitter;

							forEachAlive(): Phaser.GameObjects.Particles.ParticleEmitter;

							forEachDead(): Phaser.GameObjects.Particles.ParticleEmitter;

							start(): Phaser.GameObjects.Particles.ParticleEmitter;

							pause(): Phaser.GameObjects.Particles.ParticleEmitter;

							resume(): Phaser.GameObjects.Particles.ParticleEmitter;

							depthSort(): Phaser.GameObjects.Particles.ParticleEmitter;

							flow(): Phaser.GameObjects.Particles.ParticleEmitter;

							explode(): Phaser.GameObjects.Particles.Particle;

							emitParticleAt(): Phaser.GameObjects.Particles.Particle;

							emitParticle(): Phaser.GameObjects.Particles.Particle;

							preUpdate(): void;

							depthSortCallback(): number;

							indexSortCallback(): number;

							setBlendMode(): Phaser.GameObjects.GameObject;

							scrollFactorX: number;

							scrollFactorY: number;

							setScrollFactor(): Phaser.GameObjects.GameObject;

							setVisible(): Phaser.GameObjects.GameObject;

					}

					namespace ParticleEmitter {
					}

					class ParticleEmitterManager {
							blendMode: number;

							timeScale: number;

							texture: Phaser.Textures.Texture;

							frame: Phaser.Textures.Frame;

							frameNames: any[];

							emitters: Phaser.Structs.List;

							wells: Phaser.Structs.List;

							setTexture(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							setFrame(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							setEmitterFrames(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							addEmitter(): Phaser.GameObjects.Particles.ParticleEmitter;

							createEmitter(): Phaser.GameObjects.Particles.ParticleEmitter;

							addGravityWell(): Phaser.GameObjects.Particles.GravityWell;

							createGravityWell(): Phaser.GameObjects.Particles.GravityWell;

							emitParticle(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							emitParticleAt(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							pause(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							resume(): Phaser.GameObjects.Particles.ParticleEmitterManager;

							getProcessors(): any;

							preUpdate(): void;

					}

					namespace ParticleEmitterManager {
					}

			}

			class PathFollower {
					path: Phaser.Curves.Path;

					rotateToPath: boolean;

					pathRotationVerticalAdjust: boolean;

					pathRotationOffset: number;

					pathOffset: Phaser.Math.Vector2;

					pathVector: Phaser.Math.Vector2;

					pathTween: null;

					pathConfig: any;

					_prevDirection: number;

					setPath(): Phaser.GameObjects.PathFollower;

					setRotateToPath(): Phaser.GameObjects.PathFollower;

					isFollowing(): boolean;

					start(): Phaser.GameObjects.PathFollower;

					pause(): Phaser.GameObjects.PathFollower;

					resume(): Phaser.GameObjects.PathFollower;

					stop(): Phaser.GameObjects.PathFollower;

					preUpdate(): void;

					anims: any;

					play(): any;

					toJSON(): any;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					parent: Phaser.GameObjects.GameObject;

					animationManager: Phaser.Animations.AnimationManager;

					isPlaying: boolean;

					currentAnim: Phaser.Animations.Animation;

					currentFrame: Phaser.Animations.AnimationFrame;

					_timeScale: number;

					frameRate: number;

					duration: number;

					msPerFrame: number;

					skipMissedFrames: boolean;

					_delay: number;

					_repeat: number;

					_repeatDelay: number;

					_yoyo: boolean;

					forward: boolean;

					accumulator: number;

					nextTick: number;

					repeatCounter: number;

					pendingRepeat: boolean;

					_paused: boolean;

					_wasPlaying: boolean;

					_callbackArgs: any[];

					_updateParams: any[];

					delay(): Phaser.GameObjects.GameObject;

					delayedPlay(): Phaser.GameObjects.GameObject;

					getCurrentKey(): any;

					load(): Phaser.GameObjects.GameObject;

					paused(): any;

					progress(): any;

					remove(): void;

					repeat(): any;

					repeatDelay(): any;

					restart(): Phaser.GameObjects.GameObject;

					timeScale(): any;

					totalFrames(): any;

					totalProgres(): void;

					updateFrame(): void;

					yoyo(): any;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

			}

			namespace PathFollower {
			}

			class Quad {
					topLeftX: number;

					topLeftY: number;

					topRightX: number;

					topRightY: number;

					bottomLeftX: number;

					bottomLeftY: number;

					bottomRightX: number;

					bottomRightY: number;

					topLeftAlpha: number;

					topRightAlpha: number;

					bottomLeftAlpha: number;

					bottomRightAlpha: number;

					topLeftColor: number;

					topRightColor: number;

					bottomLeftColor: number;

					bottomRightColor: number;

					setTopLeft(): Phaser.GameObjects.Quad;

					setTopRight(): Phaser.GameObjects.Quad;

					setBottomLeft(): Phaser.GameObjects.Quad;

					setBottomRight(): Phaser.GameObjects.Quad;

					resetPosition(): Phaser.GameObjects.Quad;

					resetAlpha(): Phaser.GameObjects.Quad;

					resetColors(): Phaser.GameObjects.Quad;

					reset(): Phaser.GameObjects.Quad;

					vertices: number32Array;

					uv: number32Array;

					colors: Uint32Array;

					alphas: number32Array;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace Quad {
			}

			class Sprite {
					anims: any;

					preUpdate(): void;

					play(): any;

					toJSON(): any;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					parent: Phaser.GameObjects.GameObject;

					animationManager: Phaser.Animations.AnimationManager;

					isPlaying: boolean;

					currentAnim: Phaser.Animations.Animation;

					currentFrame: Phaser.Animations.AnimationFrame;

					_timeScale: number;

					frameRate: number;

					duration: number;

					msPerFrame: number;

					skipMissedFrames: boolean;

					_delay: number;

					_repeat: number;

					_repeatDelay: number;

					_yoyo: boolean;

					forward: boolean;

					accumulator: number;

					nextTick: number;

					repeatCounter: number;

					pendingRepeat: boolean;

					_paused: boolean;

					_wasPlaying: boolean;

					_callbackArgs: any[];

					_updateParams: any[];

					delay(): Phaser.GameObjects.GameObject;

					delayedPlay(): Phaser.GameObjects.GameObject;

					getCurrentKey(): any;

					load(): Phaser.GameObjects.GameObject;

					pause(): Phaser.GameObjects.GameObject;

					paused(): any;

					progress(): any;

					remove(): void;

					repeat(): any;

					repeatDelay(): any;

					restart(): Phaser.GameObjects.GameObject;

					resume(): Phaser.GameObjects.GameObject;

					stop(): Phaser.GameObjects.GameObject;

					timeScale(): any;

					totalFrames(): any;

					totalProgres(): void;

					updateFrame(): void;

					yoyo(): any;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					anims: any;

					preUpdate(): void;

					play(): any;

					toJSON(): any;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					parent: Phaser.GameObjects.GameObject;

					animationManager: Phaser.Animations.AnimationManager;

					isPlaying: boolean;

					currentAnim: Phaser.Animations.Animation;

					currentFrame: Phaser.Animations.AnimationFrame;

					_timeScale: number;

					frameRate: number;

					duration: number;

					msPerFrame: number;

					skipMissedFrames: boolean;

					_delay: number;

					_repeat: number;

					_repeatDelay: number;

					_yoyo: boolean;

					forward: boolean;

					accumulator: number;

					nextTick: number;

					repeatCounter: number;

					pendingRepeat: boolean;

					_paused: boolean;

					_wasPlaying: boolean;

					_callbackArgs: any[];

					_updateParams: any[];

					delay(): Phaser.GameObjects.GameObject;

					delayedPlay(): Phaser.GameObjects.GameObject;

					getCurrentKey(): any;

					load(): Phaser.GameObjects.GameObject;

					pause(): Phaser.GameObjects.GameObject;

					paused(): any;

					progress(): any;

					remove(): void;

					repeat(): any;

					repeatDelay(): any;

					restart(): Phaser.GameObjects.GameObject;

					resume(): Phaser.GameObjects.GameObject;

					stop(): Phaser.GameObjects.GameObject;

					timeScale(): any;

					totalFrames(): any;

					totalProgres(): void;

					updateFrame(): void;

					yoyo(): any;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					setAcceleration(): any;

					setAccelerationX(): any;

					setAccelerationY(): any;

					setAngularVelocity(): any;

					setAngularAcceleration(): any;

					setAngularDrag(): any;

					setBounce(): any;

					setBounceX(): any;

					setBounceY(): any;

					setCollideWorldBounds(): any;

					setDebug(): any;

					setDebugBodyColor(): any;

					debugShowBody: any;

					debugShowVelocity: any;

					debugBodyColor: any;

					setDrag(): any;

					setDragX(): any;

					setDragY(): any;

					enableBody(): any;

					disableBody(): any;

					setFriction(): any;

					setFrictionX(): any;

					setFrictionY(): any;

					setGravity(): any;

					setGravityX(): any;

					setGravityY(): any;

					setImmovable(): any;

					setMass(): any;

					setOffset(): any;

					setCircle(): any;

					setVelocity(): any;

					setVelocityX(): any;

					setVelocityY(): any;

					setMaxVelocity(): any;

			}

			namespace Sprite {
			}

			class Sprite3D {
					gameObject: Phaser.GameObjects.GameObject;

					position: Phaser.Math.Vector4;

					size: Phaser.Math.Vector2;

					scale: Phaser.Math.Vector2;

					adjustScaleX: boolean;

					adjustScaleY: boolean;

					_visible: boolean;

					project(): void;

					setVisible(): Phaser.GameObjects.Sprite3D;

					visible: boolean;

					x: number;

					y: number;

					z: number;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace Sprite3D {
			}

			class Text {
					canvas: HTMLCanvasElement;

					context: CanvasRenderingContext2D;

					style: Phaser.GameObjects.Components.TextStyle;

					autoRound: boolean;

					splitRegExp: any;

					text: string;

					resolution: number;

					padding: any;

					width: number;

					height: number;

					canvasTexture: any;

					dirty: boolean;

					initRTL(): void;

					runWordWrap(): string;

					advancedWordWrap(): string;

					basicWordWrap(): string;

					getWrappedText(): Array.<string>;

					setText(): Phaser.GameObjects.Text;

					setStyle(): Phaser.GameObjects.Text;

					setFont(): Phaser.GameObjects.Text;

					setFontFamily(): Phaser.GameObjects.Text;

					setFontSize(): Phaser.GameObjects.Text;

					setFontStyle(): Phaser.GameObjects.Text;

					setFixedSize(): Phaser.GameObjects.Text;

					setBackgroundColor(): Phaser.GameObjects.Text;

					setFill(): Phaser.GameObjects.Text;

					setColor(): Phaser.GameObjects.Text;

					setStroke(): Phaser.GameObjects.Text;

					setShadow(): Phaser.GameObjects.Text;

					setShadowOffset(): Phaser.GameObjects.Text;

					setShadowColor(): Phaser.GameObjects.Text;

					setShadowBlur(): Phaser.GameObjects.Text;

					setShadowStroke(): Phaser.GameObjects.Text;

					setShadowFill(): Phaser.GameObjects.Text;

					setWordWrapWidth(): Phaser.GameObjects.Text;

					setWordWrapCallback(): Phaser.GameObjects.Text;

					setAlign(): Phaser.GameObjects.Text;

					setPadding(): Phaser.GameObjects.Text;

					setMaxLines(): Phaser.GameObjects.Text;

					updateText(): Phaser.GameObjects.Text;

					getTextMetrics(): any;

					toJSON(): any;

					preDestroy(): void;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

			}

			namespace Text {
			}

			class TileSprite {
					tilePositionX: number;

					tilePositionY: number;

					dirty: boolean;

					tileTexture: any;

					renderer: any;

					potWidth: number;

					potHeight: number;

					canvasPattern: CanvasPattern;

					canvasBuffer: HTMLCanvasElement;

					canvasBufferCtx: CanvasRenderingContext2D;

					updateTileTexture(): void;

					destroy(): void;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					texture: Phaser.Textures.Texture;

					frame: Phaser.Textures.Frame;

					setTexture(): Phaser.GameObjects.GameObject;

					setFrame(): Phaser.GameObjects.GameObject;

					clearTint(): Phaser.GameObjects.GameObject;

					setTint(): Phaser.GameObjects.GameObject;

					tintTopLeft: number;

					tintTopRight: number;

					tintBottomLeft: number;

					tintBottomRight: number;

					tint: number;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

			}

			namespace TileSprite {
			}

			class UpdateList {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					_list: any[];

					_pendingInsertion: any[];

					_pendingRemoval: any[];

					boot(): void;

					add(): Phaser.GameObjects.GameObject;

					preUpdate(): void;

					update(): void;

					remove(): Phaser.GameObjects.GameObject;

					removeAll(): Phaser.GameObjects.UpdateList;

					shutdown(): void;

					destroy(): void;

			}

			namespace UpdateList {
			}

			class Zone {
					width: number;

					height: number;

					blendMode: number;

					displayWidth: number;

					displayHeight: number;

					setSize(): Phaser.GameObjects.Zone;

					setDisplaySize(): Phaser.GameObjects.Zone;

					setCircleDropZone(): Phaser.GameObjects.Zone;

					setRectangleDropZone(): Phaser.GameObjects.Zone;

					setDropZone(): Phaser.GameObjects.Zone;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

			}

			namespace Zone {
			}

	}

	class Geom {
	}

	namespace Geom {
			class Circle {
					x: number;

					y: number;

					_radius: number;

					_diameter: number;

					contains(): boolean;

					getPoint(): Phaser.Geom.Point;

					getPoints(): Array.<Phaser.Geom.Point>;

					getRandomPoint(): Phaser.Geom.Point;

					setTo(): Phaser.Geom.Circle;

					setEmpty(): Phaser.Geom.Circle;

					setPosition(): Phaser.Geom.Circle;

					isEmpty(): boolean;

					radius: number;

					diameter: number;

					left: number;

					right: number;

					top: number;

					bottom: number;

					static Circumference(): number;

					static CircumferencePoint(): Phaser.Geom.Point;

					static Clone(): Phaser.Geom.Circle;

					static Contains(): boolean;

					static ContainsPoint(): boolean;

					static ContainsRect(): boolean;

					static CopyFrom(): Phaser.Geom.Circle;

					static Equals(): boolean;

					static GetBounds(): Phaser.Geom.Rectangle;

					static GetPoint(): Phaser.Geom.Point;

					static GetPoints(): Array.<Phaser.Geom.Point>;

					static Offset(): Phaser.Geom.Circle;

					static OffsetPoint(): Phaser.Geom.Circle;

					static Random(): Phaser.Geom.Point;

			}

			namespace Circle {
			}

			class Ellipse {
					x: number;

					y: number;

					width: number;

					height: number;

					contains(): boolean;

					getPoint(): Phaser.Geom.Point;

					getPoints(): Array.<Phaser.Geom.Point>;

					getRandomPoint(): Phaser.Geom.Point;

					setTo(): Phaser.Geom.Ellipse;

					setEmpty(): Phaser.Geom.Ellipse;

					setPosition(): Phaser.Geom.Ellipse;

					setSize(): Phaser.Geom.Ellipse;

					isEmpty(): boolean;

					getMinorRadius(): number;

					getMajorRadius(): number;

					left: number;

					right: number;

					top: number;

					bottom: number;

					static Equals(): boolean;

					static GetBounds(): Phaser.Geom.Rectangle;

					static GetPoint(): Phaser.Geom.Point;

					static GetPoints(): Array.<Phaser.Geom.Point>;

					static Offset(): Phaser.Geom.Ellipse;

					static OffsetPoint(): Phaser.Geom.Ellipse;

					static Random(): Phaser.Geom.Point;

			}

			namespace Ellipse {
			}

			class Intersects {
					static LineToCircle(): boolean;

					static LineToLine(): boolean;

					static LineToRectangle(): boolean;

					static PointToLine(): boolean;

					static PointToLineSegment(): boolean;

					static RectangleToRectangle(): boolean;

					static RectangleToTriangle(): boolean;

					static RectangleToValues(): boolean;

					static TriangleToCircle(): boolean;

					static TriangleToLine(): boolean;

					static TriangleToTriangle(): boolean;

			}

			namespace Intersects {
			}

			class Line {
					x1: number;

					y1: number;

					x2: number;

					y2: number;

					getPoint(): Phaser.Geom.Point;

					getPoints(): any;

					getRandomPoint(): any;

					setTo(): Phaser.Geom.Line;

					getPointA(): any;

					getPointB(): any;

					left: number;

					right: number;

					top: number;

					bottom: number;

					static NormalAngle(): number;

					static NormalX(): number;

					static NormalY(): number;

					static Offset(): Phaser.Geom.Line;

					static PerpSlope(): number;

					static Random(): Phaser.Geom.Point;

					static ReflectAngle(): number;

					static Rotate(): Phaser.Geom.Line;

					static RotateAroundPoint(): Phaser.Geom.Line;

					static RotateAroundXY(): Phaser.Geom.Line;

					static SetToAngle(): Phaser.Geom.Line;

					static Slope(): number;

					static Width(): number;

			}

			namespace Line {
			}

			class Point {
					x: number;

					y: number;

					setTo(): Phaser.Geom.Point;

					static Project(): Phaser.Geom.Point;

					static ProjectUnit(): Phaser.Geom.Point;

					static SetMagnitude(): Phaser.Geom.Point;

			}

			namespace Point {
			}

			class Polygon {
					area: number;

					points: Array.<Phaser.Geom.Point>;

					contains(): any;

					setTo(): Phaser.Geom.Polygon;

					calculateArea(): number;

					static Reverse(): Phaser.Geom.Polygon;

			}

			namespace Polygon {
			}

			class Rectangle {
					x: number;

					y: number;

					width: number;

					height: number;

					contains(): any;

					getPoint(): any;

					getPoints(): any;

					getRandomPoint(): any;

					setTo(): Phaser.Geom.Rectangle;

					setEmpty(): Phaser.Geom.Rectangle;

					setPosition(): Phaser.Geom.Rectangle;

					setSize(): Phaser.Geom.Rectangle;

					isEmpty(): boolean;

					getLineA(): any;

					getLineB(): any;

					getLineC(): any;

					getLineD(): any;

					left: number;

					right: number;

					top: number;

					bottom: number;

					centerX: number;

					centerY: number;

					static Scale(): Phaser.Geom.Rectangle;

					static Union(): Phaser.Geom.Rectangle;

			}

			namespace Rectangle {
			}

			class Triangle {
					x1: number;

					y1: number;

					x2: number;

					y2: number;

					x3: number;

					y3: number;

					contains(): any;

					getPoint(): any;

					getPoints(): any;

					getRandomPoint(): any;

					setTo(): Phaser.Geom.Triangle;

					getLineA(): any;

					getLineB(): any;

					getLineC(): any;

					left: number;

					right: number;

					top: number;

					bottom: number;

			}

			namespace Triangle {
			}

	}

	class Input {
	}

	namespace Input {
			class Gamepad {
			}

			namespace Gamepad {
			}

			class InputManager {
					game: Phaser.Game;

					canvas: HTMLCanvasElement;

					config: any;

					enabled: boolean;

					events: EventEmitter;

					queue: any[];

					keyboard: Phaser.Input.Keyboard.KeyboardManager;

					mouse: Phaser.Input.Mouse.MouseManager;

					touch: Phaser.Input.Touch.TouchManager;

					gamepad: Phaser.Input.Gamepad.GamepadManager;

					activePointer: any;

					scale: any;

					globalTopOnly: boolean;

					ignoreEvents: boolean;

					bounds: Phaser.Geom.Rectangle;

					_tempPoint: any;

					_tempHitTest: any[];

					boot(): void;

					updateBounds(): void;

					update(): void;

					hitTest(): any[];

					pointWithinHitArea(): boolean;

					pointWithinInteractiveObject(): boolean;

					transformX(): number;

					transformY(): number;

					getOffsetX(): number;

					getOffsetY(): number;

					getScaleX(): number;

					getScaleY(): number;

					destroy(): void;

			}

			namespace InputManager {
			}

			class InputPlugin {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					manager: Phaser.Input.InputManager;

					displayList: Phaser.GameObjects.DisplayList;

					cameras: null;

					keyboard: Phaser.Input.Keyboard.KeyboardManager;

					mouse: Phaser.Input.Mouse.MouseManager;

					gamepad: Phaser.Input.Gamepad.GamepadManager;

					topOnly: boolean;

					pollRate: number;

					_pollTimer: number;

					dragDistanceThreshold: number;

					dragTimeThreshold: number;

					_temp: any[];

					_list: any[];

					_pendingInsertion: any[];

					_pendingRemoval: any[];

					_draggable: any[];

					_drag: any;

					_over: any;

					_validTypes: any;

					boot(): void;

					preUpdate(): any;

					clear(): any;

					disable(): void;

					enable(): any;

					hitTestPointer(): any;

					processDownEvents(): any;

					processDragEvents(): any;

					processMoveEvents(): any;

					processOverOutEvents(): any;

					processUpEvents(): void;

					queueForInsertion(): any;

					queueForRemoval(): any;

					setDraggable(): any;

					setHitArea(): any;

					setHitAreaCircle(): any;

					setHitAreaEllipse(): any;

					setHitAreaFromTexture(): any;

					setHitAreaRectangle(): any;

					setHitAreaTriangle(): any;

					setPollAlways(): any;

					setPollOnMove(): any;

					setPollRate(): any;

					setGlobalTopOnly(): any;

					setTopOnly(): any;

					sortGameObjects(): any;

					sortHandlerGO(): any;

					sortHandlerIO(): any;

					sortInteractiveObjects(): any;

					stopPropagation(): any;

					update(): any;

					shutdown(): void;

					destroy(): void;

					activePointer: Phaser.Input.Pointer;

					x: number;

					y: number;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace InputPlugin {
			}

			class Keyboard {
					static DownDuration(): boolean;

					static JustDown(): boolean;

					static JustUp(): boolean;

					static UpDuration(): boolean;

			}

			namespace Keyboard {
					class KeyboardManager {
							manager: Phaser.Input.InputManager;

							enabled: boolean;

							target: null;

							keys: any[];

							combos: any[];

							captures: any[];

							queue: any[];

							handler: any;

							boot(): void;

							startListeners(): any;

							stopListeners(): void;

							createCursorKeys(): any;

							addKeys(): any;

							addKey(): any;

							removeKey(): void;

							addKeyCapture(): void;

							removeKeyCapture(): void;

							createCombo(): any;

							update(): any;

							shutdown(): void;

							destroy(): void;

							eventNames(): any[];

							listeners(): any[];

							listenerCount(): number;

							emit(): Boolean;

							on(): EventEmitter;

							addListener(): EventEmitter;

							once(): EventEmitter;

							removeListener(): EventEmitter;

							off(): EventEmitter;

							removeAllListeners(): EventEmitter;

					}

					namespace KeyboardManager {
					}

					class Key {
							keyCode: number;

							originalEvent: KeyboardEvent;

							preventDefault: boolean;

							enabled: boolean;

							isDown: boolean;

							isUp: boolean;

							altKey: boolean;

							ctrlKey: boolean;

							shiftKey: boolean;

							location: number;

							timeDown: number;

							duration: number;

							timeUp: number;

							repeats: number;

							_justDown: boolean;

							_justUp: boolean;

					}

					namespace Key {
					}

			}

			class Mouse {
			}

			namespace Mouse {
					class MouseManager {
							manager: Phaser.Input.InputManager;

							capture: boolean;

							enabled: boolean;

							target: null;

							handler: null;

							locked: boolean;

							boot(): void;

							disableContextMenu(): Phaser.Input.Mouse.MouseManager;

							requestPointerLock(): void;

							pointerLockChange(): void;

							releasePointerLock(): void;

							startListeners(): void;

							stopListeners(): void;

							destroy(): void;

					}

					namespace MouseManager {
					}

			}

			class Pointer {
					manager: Phaser.Input.InputManager;

					id: number;

					event: null;

					camera: Phaser.Cameras.Scene2D.Camera;

					buttons: number;

					position: Phaser.Math.Vector2;

					downX: number;

					downY: number;

					downTime: number;

					upX: number;

					upY: number;

					upTime: number;

					primaryDown: boolean;

					dragState: number;

					isDown: boolean;

					dirty: boolean;

					justDown: boolean;

					justUp: boolean;

					justMoved: boolean;

					wasTouch: boolean;

					movementX: number;

					movementY: number;

					positionToCamera(): any;

					x: number;

					y: number;

					reset(): void;

					touchmove(): void;

					move(): void;

					down(): void;

					touchstart(): void;

					up(): void;

					touchend(): void;

					noButtonDown(): boolean;

					leftButtonDown(): boolean;

					rightButtonDown(): boolean;

					middleButtonDown(): boolean;

					backButtonDown(): boolean;

					forwardButtonDown(): boolean;

					destroy(): void;

			}

			namespace Pointer {
			}

			class Touch {
			}

			namespace Touch {
					class TouchManager {
							manager: Phaser.Input.InputManager;

							capture: boolean;

							enabled: boolean;

							target: null;

							handler: any;

							boot(): void;

							startListeners(): void;

							stopListeners(): void;

							destroy(): void;

					}

					namespace TouchManager {
					}

			}

	}

	class Loader {
			LOADER_IDLE: number;

			LOADER_LOADING: number;

			LOADER_PROCESSING: number;

			LOADER_COMPLETE: number;

			LOADER_SHUTDOWN: number;

			LOADER_DESTROYED: number;

			FILE_PENDING: number;

			FILE_LOADING: number;

			FILE_LOADED: number;

			FILE_FAILED: number;

			FILE_PROCESSING: number;

			FILE_WAITING_LINKFILE: number;

			FILE_ERRORED: number;

			FILE_COMPLETE: number;

			FILE_DESTROYED: number;

			FILE_POPULATED: number;

			TEXTURE_ATLAS_JSON_ARRAY: number;

			TEXTURE_ATLAS_JSON_HASH: number;

			static GetURL(): string;

			static MergeXHRSettings(): Phaser.Loader.XHRSettings;

			static XHRLoader(): XMLHttpRequest;

			static XHRSettings(): Phaser.Loader.XHRSettings;

	}

	namespace Loader {
			class File {
					type: string;

					key: string;

					url: string;

					src: string;

					xhrSettings: Phaser.Loader.XHRSettings;

					loader: Phaser.Loader.LoaderPlugin;

					xhrLoader: Phaser.Loader.XHRLoader;

					state: number;

					bytesTotal: number;

					bytesLoaded: number;

					percentComplete: number;

					crossOrigin: string;

					data: any;

					config: any;

					linkFile: Phaser.Loader.File;

					linkType: string;

					linkParent: boolean;

					setLinkFile(): void;

					resetXHR(): void;

					load(): void;

					onLoad(): void;

					onError(): void;

					onProgress(): void;

					onProcess(): void;

					onComplete(): void;

					static createObjectURL(): void;

					static revokeObjectURL(): void;

			}

			namespace File {
			}

			class FileTypes {
			}

			namespace FileTypes {
					class JSONFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace JSONFile {
					}

					class PluginFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace PluginFile {
					}

					class ScriptFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace ScriptFile {
					}

					class SVGFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace SVGFile {
					}

					class TextFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace TextFile {
					}

					class TilemapCSVFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace TilemapCSVFile {
					}

					class XMLFile {
							type: string;

							key: string;

							url: string;

							src: string;

							xhrSettings: Phaser.Loader.XHRSettings;

							loader: Phaser.Loader.LoaderPlugin;

							xhrLoader: Phaser.Loader.XHRLoader;

							state: number;

							bytesTotal: number;

							bytesLoaded: number;

							percentComplete: number;

							crossOrigin: string;

							data: any;

							config: any;

							linkFile: Phaser.Loader.File;

							linkType: string;

							linkParent: boolean;

							setLinkFile(): void;

							resetXHR(): void;

							load(): void;

							onLoad(): void;

							onError(): void;

							onProgress(): void;

							onProcess(): void;

							onComplete(): void;

					}

					namespace XMLFile {
					}

			}

			class LoaderPlugin {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					_multilist: any;

					path: string;

					baseURL: string;

					enableParallel: boolean;

					maxParallelDownloads: number;

					xhr: Phaser.Loader.XHRSettings;

					crossOrigin: string;

					totalToLoad: number;

					progress: number;

					list: Phaser.Structs.Set;

					inflight: Phaser.Structs.Set;

					failed: Phaser.Structs.Set;

					queue: Phaser.Structs.Set;

					storage: Phaser.Structs.Set;

					state: number;

					boot(): void;

					setBaseURL(): Phaser.Loader.LoaderPlugin;

					setPath(): Phaser.Loader.LoaderPlugin;

					setCORS(): Phaser.Loader.LoaderPlugin;

					addFile(): Phaser.Loader.File;

					isLoading(): boolean;

					isReady(): boolean;

					start(): void;

					updateProgress(): void;

					processLoadQueue(): void;

					loadFile(): void;

					nextFile(): void;

					finishedLoading(): void;

					processUpdate(): void;

					removeFromQueue(): void;

					processComplete(): void;

					processCallback(): void;

					saveJSON(): any;

					save(): Phaser.Loader.LoaderPlugin;

					reset(): void;

					loadArray(): boolean;

					file(): Phaser.Loader.File;

					shutdown(): void;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace LoaderPlugin {
			}

	}

	class Math {
			static Average(): number;

			static Bernstein(): number;

			static Between(): number;

			static CatmullRom(): number;

			static CeilTo(): number;

			static Clamp(): number;

			PI2: number;

			TAU: number;

			EPSILON: number;

			DEG_TO_RAD: number;

			RAD_TO_DEG: number;

			RND: Phaser.Math.RandomDataGenerator;

			static DegToRad(): number;

			static Difference(): number;

			static Factorial(): number;

			static numberBetween(): number;

			static FloorTo(): number;

			static FromPercent(): number;

			static GetSpeed(): number;

			static IsEven(): boolean;

			static IsEvenStrict(): boolean;

			static Linear(): number;

			static MaxAdd(): number;

			static MinSub(): number;

			static Percent(): number;

			static RadToDeg(): number;

			static RandomXY(): Phaser.Math.Vector2;

			static RandomXYZ(): Phaser.Math.Vector3;

			static RandomXYZW(): Phaser.Math.Vector4;

			static Rotate(): Phaser.Geom.Point;

			static RotateAround(): Phaser.Geom.Point;

			static RotateAroundDistance(): Phaser.Geom.Point;

			static RotateVec3(): Phaser.Math.Vector3;

			static RoundAwayFromZero(): number;

			static RoundTo(): number;

			static SinCosTableGenerator(): any;

			static SmootherStep(): number;

			static SmoothStep(): number;

			static TransformXY(): Vector2;

			static Within(): boolean;

			static Wrap(): number;

	}

	namespace Math {
			class Angle {
					static Normalize(): number;

					static Reverse(): number;

					static RotateTo(): number;

					static ShortestBetween(): number;

					static Wrap(): number;

					static WrapDegrees(): number;

			}

			namespace Angle {
			}

			class Distance {
			}

			namespace Distance {
			}

			class Easing {
					static Linear(): number;

					static Stepped(): number;

			}

			namespace Easing {
			}

			class Fuzzy {
					static LessThan(): boolean;

			}

			namespace Fuzzy {
			}

			class Interpolation {
					static Linear(): number;

			}

			namespace Interpolation {
			}

			class Matrix3 {
					val: number32Array;

					clone(): any;

					set(): any;

					copy(): any;

					fromMat4(): any;

					fromArray(): any;

					identity(): any;

					transpose(): any;

					invert(): any;

					adjoint(): any;

					determinant(): any;

					multiply(): any;

					translate(): any;

					rotate(): any;

					scale(): any;

					fromQuat(): any;

					normalFromMat4(): any;

			}

			namespace Matrix3 {
			}

			class Matrix4 {
					val: number32Array;

					clone(): any;

					set(): any;

					copy(): any;

					fromArray(): any;

					zero(): any;

					xyz(): any;

					scaling(): any;

					identity(): any;

					transpose(): any;

					invert(): any;

					adjoint(): any;

					determinant(): any;

					multiply(): any;

					multiplyLocal(): any;

					translate(): any;

					scale(): any;

					makeRotationAxis(): any;

					rotate(): any;

					rotateX(): any;

					rotateY(): any;

					rotateZ(): any;

					fromRotationTranslation(): any;

					fromQuat(): any;

					frustum(): any;

					perspective(): any;

					perspectiveLH(): any;

					ortho(): any;

					lookAt(): any;

					yawPitchRoll(): any;

					setWorldMatrix(): any;

			}

			namespace Matrix4 {
			}

			class Pow2 {
					static IsSizePowerOfTwo(): boolean;

					static IsValuePowerOfTwo(): boolean;

			}

			namespace Pow2 {
			}

			class Quaternion {
					x: number;

					y: number;

					z: number;

					w: number;

					copy(): any;

					set(): any;

					add(): any;

					subtract(): any;

					scale(): any;

					length(): any;

					lengthSq(): any;

					normalize(): any;

					dot(): any;

					lerp(): any;

					rotationTo(): any;

					setAxes(): any;

					identity(): any;

					setAxisAngle(): any;

					multiply(): any;

					slerp(): any;

					invert(): any;

					conjugate(): any;

					rotateX(): any;

					rotateY(): any;

					rotateZ(): any;

					calculateW(): any;

					fromMat3(): any;

			}

			namespace Quaternion {
			}

			class RandomDataGenerator {
					c: number;

					s0: number;

					s1: number;

					s2: number;

					sign: any[];

					rnd(): number;

					hash(): number;

					init(): void;

					sow(): void;

					integer(): number;

					frac(): number;

					real(): number;

					integerInRange(): number;

					between(): number;

					realInRange(): number;

					normal(): number;

					uuid(): string;

					pick(): any;

					sign(): number;

					weightedPick(): any;

					timestamp(): number;

					angle(): number;

					rotation(): number;

					state(): string;

			}

			namespace RandomDataGenerator {
			}

			class Snap {
					static Ceil(): number;

					static Floor(): number;

					static To(): number;

			}

			namespace Snap {
			}

			class Vector2 {
					x: number;

					y: number;

					clone(): Phaser.Math.Vector2;

					copy(): Phaser.Math.Vector2;

					setFromObject(): Phaser.Math.Vector2;

					set(): Phaser.Math.Vector2;

					setToPolar(): Phaser.Math.Vector2;

					equals(): boolean;

					angle(): number;

					add(): Phaser.Math.Vector2;

					subtract(): Phaser.Math.Vector2;

					multiply(): Phaser.Math.Vector2;

					scale(): Phaser.Math.Vector2;

					divide(): Phaser.Math.Vector2;

					negate(): Phaser.Math.Vector2;

					distance(): number;

					distanceSq(): number;

					length(): number;

					lengthSq(): number;

					normalize(): Phaser.Math.Vector2;

					normalizeRightHand(): Phaser.Math.Vector2;

					dot(): number;

					cross(): number;

					lerp(): Phaser.Math.Vector2;

					transformMat3(): Phaser.Math.Vector2;

					transformMat4(): Phaser.Math.Vector2;

					reset(): Phaser.Math.Vector2;

			}

			namespace Vector2 {
			}

			class Vector3 {
					x: number;

					y: number;

					z: number;

					up(): any;

					clone(): any;

					crossVectors(): any;

					equals(): any;

					copy(): any;

					set(): any;

					add(): any;

					subtract(): any;

					multiply(): any;

					scale(): any;

					divide(): any;

					negate(): any;

					distance(): any;

					distanceSq(): any;

					length(): any;

					lengthSq(): any;

					normalize(): any;

					dot(): any;

					cross(): any;

					lerp(): any;

					transformMat3(): any;

					transformMat4(): any;

					transformCoordinates(): any;

					transformQuat(): any;

					project(): any;

					unproject(): any;

					reset(): any;

					x: number;

					y: number;

					z: number;

					w: number;

			}

			namespace Vector3 {
			}

			class Vector4 {
					clone(): any;

					copy(): any;

					equals(): any;

					set(): any;

					add(): any;

					subtract(): any;

					scale(): any;

					length(): any;

					lengthSq(): any;

					normalize(): any;

					dot(): any;

					lerp(): any;

					multiply(): any;

					divide(): any;

					distance(): any;

					distanceSq(): any;

					negate(): any;

					transformMat4(): any;

					transformQuat(): any;

					reset(): any;

			}

			namespace Vector4 {
			}

	}

	class Physics {
	}

	namespace Physics {
			class Arcade {
					static SeparateX(): boolean;

					static SeparateY(): boolean;

			}

			namespace Arcade {
					class Group {
							world: Phaser.Physics.Arcade.World;

							physicsType: number;

							defaults: any;

							createCallback(): void;

							removeCallback(): void;

							setVelocity(): Phaser.Physics.Arcade.Group;

							setVelocityX(): Phaser.Physics.Arcade.Group;

							setVelocityY(): Phaser.Physics.Arcade.Group;

							scene: Phaser.Scene;

							children: Phaser.Structs.Set;

							isParent: boolean;

							classType: any;

							active: boolean;

							maxSize: number;

							defaultKey: string;

							defaultFrame: string;

							runChildUpdate: boolean;

							createMultipleCallback: any;

							create(): Phaser.GameObjects.GameObject;

							createMultiple(): Array.<Phaser.GameObjects.GameObject>;

							createFromConfig(): Array.<Phaser.GameObjects.GameObject>;

							preUpdate(): void;

							add(): Phaser.GameObjects.Group;

							addMultiple(): Phaser.GameObjects.Group;

							remove(): Phaser.GameObjects.Group;

							clear(): Phaser.GameObjects.Group;

							contains(): boolean;

							getChildren(): Array.<Phaser.GameObjects.GameObject>;

							getLength(): number;

							getFirst(): Phaser.GameObjects.GameObject;

							get(): Phaser.GameObjects.GameObject;

							getFirstAlive(): Phaser.GameObjects.GameObject;

							getFirstDead(): Phaser.GameObjects.GameObject;

							playAnimation(): Phaser.GameObjects.Group;

							isFull(): boolean;

							countActive(): number;

							getTotalUsed(): number;

							getTotalFree(): number;

							setDepth(): Phaser.GameObjects.Group;

							kill(): void;

							killAndHide(): void;

							toggleVisible(): Phaser.GameObjects.Group;

							destroy(): void;

					}

					namespace Group {
					}

					class StaticBody {
							world: Phaser.Physics.Arcade.World;

							gameObject: Phaser.GameObjects.GameObject;

							debugShowBody: boolean;

							debugBodyColor: number;

							enable: boolean;

							isCircle: boolean;

							radius: number;

							offset: Phaser.Math.Vector2;

							position: Phaser.Math.Vector2;

							width: number;

							height: number;

							sourceWidth: number;

							sourceHeight: number;

							halfWidth: number;

							halfHeight: number;

							center: Phaser.Math.Vector2;

							velocity: Phaser.Math.Vector2;

							allowGravity: boolean;

							gravity: Phaser.Math.Vector2;

							bounce: Phaser.Math.Vector2;

							onWorldBounds: boolean;

							onCollide: boolean;

							onOverlap: boolean;

							mass: number;

							immovable: boolean;

							moves: boolean;

							customSeparateX: boolean;

							customSeparateY: boolean;

							overlapX: number;

							overlapY: number;

							overlapR: number;

							embedded: boolean;

							collideWorldBounds: boolean;

							checkCollision: any;

							touching: any;

							wasTouching: any;

							blocked: any;

							physicsType: number;

							_sx: number;

							_sy: number;

							_bounds: Phaser.Geom.Rectangle;

							setSize(): Phaser.Physics.Arcade.StaticBody;

							setCircle(): Phaser.Physics.Arcade.StaticBody;

							updateCenter(): void;

							reset(): void;

							stop(): Phaser.Physics.Arcade.StaticBody;

							getBounds(): any;

							hitTest(): boolean;

							deltaAbsX(): number;

							deltaAbsY(): number;

							deltaX(): number;

							deltaY(): number;

							deltaZ(): number;

							destroy(): void;

							drawDebug(): void;

							willDrawDebug(): boolean;

							setMass(): Phaser.Physics.Arcade.StaticBody;

							x: number;

							y: number;

							left: number;

							right: number;

							top: number;

							bottom: number;

					}

					namespace StaticBody {
					}

					class StaticGroup {
							world: Phaser.Physics.Arcade.World;

							physicsType: number;

							createCallback(): void;

							removeCallback(): void;

							createMultipleCallback(): void;

							refresh(): Phaser.Physics.Arcade.StaticGroup;

							scene: Phaser.Scene;

							children: Phaser.Structs.Set;

							isParent: boolean;

							classType: any;

							active: boolean;

							maxSize: number;

							defaultKey: string;

							defaultFrame: string;

							runChildUpdate: boolean;

							create(): Phaser.GameObjects.GameObject;

							createMultiple(): Array.<Phaser.GameObjects.GameObject>;

							createFromConfig(): Array.<Phaser.GameObjects.GameObject>;

							preUpdate(): void;

							add(): Phaser.GameObjects.Group;

							addMultiple(): Phaser.GameObjects.Group;

							remove(): Phaser.GameObjects.Group;

							clear(): Phaser.GameObjects.Group;

							contains(): boolean;

							getChildren(): Array.<Phaser.GameObjects.GameObject>;

							getLength(): number;

							getFirst(): Phaser.GameObjects.GameObject;

							get(): Phaser.GameObjects.GameObject;

							getFirstAlive(): Phaser.GameObjects.GameObject;

							getFirstDead(): Phaser.GameObjects.GameObject;

							playAnimation(): Phaser.GameObjects.Group;

							isFull(): boolean;

							countActive(): number;

							getTotalUsed(): number;

							getTotalFree(): number;

							setDepth(): Phaser.GameObjects.Group;

							kill(): void;

							killAndHide(): void;

							toggleVisible(): Phaser.GameObjects.Group;

							destroy(): void;

					}

					namespace StaticGroup {
					}

					class World {
							scene: Phaser.Scene;

							bodies: Phaser.Structs.Set;

							staticBodies: Phaser.Structs.Set;

							colliders: Phaser.Structs.ProcessQueue;

							gravity: Phaser.Math.Vector2;

							bounds: Phaser.Geom.Rectangle;

							checkCollision: any;

							OVERLAP_BIAS: number;

							TILE_BIAS: number;

							forceX: boolean;

							isPaused: boolean;

							_total: number;

							drawDebug: boolean;

							debugGraphic: Phaser.GameObjects.Graphics;

							defaults: any;

							maxEntries: number;

							tree: Phaser.Structs.RTree;

							staticTree: Phaser.Structs.RTree;

							treeMinMax: any;

							enable(): void;

							enableBody(): Phaser.GameObjects.GameObject;

							remove(): void;

							disable(): void;

							disableBody(): Phaser.GameObjects.GameObject;

							createDebugGraphic(): Phaser.GameObjects.Graphics;

							setBounds(): Phaser.Physics.Arcade.World;

							setBoundsCollision(): Phaser.Physics.Arcade.World;

							pause(): Phaser.Physics.Arcade.World;

							resume(): Phaser.Physics.Arcade.World;

							addCollider(): Phaser.Physics.Arcade.Collider;

							addOverlap(): Phaser.Physics.Arcade.Collider;

							removeCollider(): Phaser.Physics.Arcade.World;

							update(): void;

							postUpdate(): void;

							updateMotion(): void;

							computeVelocity(): number;

							separate(): boolean;

							separateCircle(): boolean;

							intersects(): boolean;

							circleBodyIntersects(): boolean;

							overlap(): boolean;

							collide(): boolean;

							collideObjects(): boolean;

							collideHandler(): boolean;

							collideSpriteVsSprite(): boolean;

							collideSpriteVsGroup(): boolean;

							collideGroupVsTilemapLayer(): boolean;

							collideSpriteVsTilemapLayer(): boolean;

							collideGroupVsGroup(): boolean;

							shutdown(): void;

							destroy(): void;

					}

					namespace World {
					}

			}

			class Impact {
					static SeperateX(): void;

					static SeperateY(): void;

					static Solver(): void;

					static UpdateMotion(): void;

					static ParseTileLayers(): any[];

					static ParseTilesets(): any[];

					static ParseWeltmeister(): any;

			}

			namespace Impact {
					class TYPES {
							NONE: number;

							A: number;

							B: number;

							BOTH: number;

					}

					namespace TYPES {
					}

					class World {
							scene: Phaser.Scene;

							bodies: Phaser.Structs.Set;

							gravity: number;

							cellSize: number;

							collisionMap: Phaser.Physics.Impact.CollisionMap;

							timeScale: number;

							maxStep: number;

							enabled: boolean;

							drawDebug: boolean;

							debugGraphic: Phaser.GameObjects.Graphics;

							defaults: any;

							walls: any;

							delta: number;

							_lastId: number;

							setCollisionMap(): CollisionMap;

							setCollisionMapFromTilemapLayer(): Phaser.Physics.Impact.CollisionMap;

							setBounds(): Phaser.Physics.Impact.World;

							updateWall(): void;

							createDebugGraphic(): Phaser.GameObjects.Graphics;

							getNextID(): number;

							create(): Phaser.Physics.Impact.Body;

							remove(): void;

							pause(): Phaser.Physics.Impact.World;

							resume(): Phaser.Physics.Impact.World;

							update(): void;

							checkHash(): void;

							checkBodies(): void;

							setCollidesNever(): Phaser.Physics.Impact.World;

							setLite(): Phaser.Physics.Impact.World;

							setPassive(): Phaser.Physics.Impact.World;

							setActive(): Phaser.Physics.Impact.World;

							setFixed(): Phaser.Physics.Impact.World;

							setTypeNone(): Phaser.Physics.Impact.World;

							setTypeA(): Phaser.Physics.Impact.World;

							setTypeB(): Phaser.Physics.Impact.World;

							setAvsB(): Phaser.Physics.Impact.World;

							setBvsA(): Phaser.Physics.Impact.World;

							setCheckAgainstNone(): Phaser.Physics.Impact.World;

							setCheckAgainstA(): Phaser.Physics.Impact.World;

							setCheckAgainstB(): Phaser.Physics.Impact.World;

							shutdown(): void;

							destroy(): void;

					}

					namespace World {
					}

			}

			class Matter {
					name: String;

					version: String;

					uses: Array;

					used: Array;

			}

			namespace Matter {
					class Body {
							static init(): void;

					}

					namespace Body {
					}

					class Body {
							static wrap(): Matter.Vector;

					}

					namespace Body {
					}

					class MatterImage {
							renderCanvas(): void;

							renderWebGL(): void;

							scene: Phaser.Scene;

							type: string;

							name: string;

							active: boolean;

							tabIndex: number;

							data: Phaser.Data.DataManager;

							renderFlags: number;

							cameraFilter: number;

							input: Phaser.Input.InteractiveObject;

							body: Phaser.Physics.Body;

							setActive(): Phaser.GameObjects.GameObject;

							setName(): Phaser.GameObjects.GameObject;

							setDataEnabled(): Phaser.GameObjects.GameObject;

							setData(): Phaser.GameObjects.GameObject;

							getData(): any;

							setInteractive(): Phaser.GameObjects.GameObject;

							update(): void;

							toJSON(): any;

							willRender(): boolean;

							destroy(): void;

							eventNames(): any[];

							listeners(): any[];

							listenerCount(): number;

							emit(): Boolean;

							on(): EventEmitter;

							addListener(): EventEmitter;

							once(): EventEmitter;

							removeListener(): EventEmitter;

							off(): EventEmitter;

							removeAllListeners(): EventEmitter;

							clearAlpha(): Phaser.GameObjects.GameObject;

							setAlpha(): Phaser.GameObjects.GameObject;

							alpha: number;

							alphaTopLeft: number;

							alphaTopRight: number;

							alphaBottomLeft: number;

							alphaBottomRight: number;

							blendMode: number;

							setBlendMode(): Phaser.GameObjects.GameObject;

							depth: number;

							setDepth(): Phaser.GameObjects.GameObject;

							flipX: boolean;

							flipY: boolean;

							toggleFlipX(): Phaser.GameObjects.GameObject;

							toggleFlipY(): Phaser.GameObjects.GameObject;

							setFlipX(): Phaser.GameObjects.GameObject;

							setFlipY(): Phaser.GameObjects.GameObject;

							setFlip(): Phaser.GameObjects.GameObject;

							resetFlip(): Phaser.GameObjects.GameObject;

							getCenter(): Phaser.Math.Vector2;

							getTopLeft(): Phaser.Math.Vector2;

							getTopRight(): Phaser.Math.Vector2;

							getBottomLeft(): Phaser.Math.Vector2;

							getBottomRight(): Phaser.Math.Vector2;

							getBounds(): Phaser.Geom.Rectangle;

							originX: number;

							originY: number;

							displayOriginX: number;

							displayOriginY: number;

							setOrigin(): Phaser.GameObjects.GameObject;

							setOriginFromFrame(): Phaser.GameObjects.GameObject;

							setDisplayOrigin(): Phaser.GameObjects.GameObject;

							updateDisplayOrigin(): Phaser.GameObjects.GameObject;

							defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

							pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

							initPipeline(): boolean;

							setPipeline(): boolean;

							resetPipeline(): boolean;

							getPipelineName(): string;

							scaleMode: number;

							setScaleMode(): Phaser.GameObjects.GameObject;

							scrollFactorX: number;

							scrollFactorY: number;

							setScrollFactor(): Phaser.GameObjects.GameObject;

							width: number;

							height: number;

							displayWidth: number;

							displayHeight: number;

							setSizeToFrame(): Phaser.GameObjects.GameObject;

							setSize(): Phaser.GameObjects.GameObject;

							setDisplaySize(): Phaser.GameObjects.GameObject;

							texture: Phaser.Textures.Texture;

							frame: Phaser.Textures.Frame;

							setTexture(): Phaser.GameObjects.GameObject;

							setFrame(): Phaser.GameObjects.GameObject;

							clearTint(): Phaser.GameObjects.GameObject;

							setTint(): Phaser.GameObjects.GameObject;

							tintTopLeft: number;

							tintTopRight: number;

							tintBottomLeft: number;

							tintBottomRight: number;

							tint: number;

							x: number;

							y: number;

							z: number;

							w: number;

							scaleX: number;

							scaleY: number;

							angle: number;

							rotation: number;

							setPosition(): Phaser.GameObjects.GameObject;

							setRotation(): Phaser.GameObjects.GameObject;

							setAngle(): Phaser.GameObjects.GameObject;

							setScale(): Phaser.GameObjects.GameObject;

							setX(): Phaser.GameObjects.GameObject;

							setY(): Phaser.GameObjects.GameObject;

							setZ(): Phaser.GameObjects.GameObject;

							setW(): Phaser.GameObjects.GameObject;

							visible: boolean;

							setVisible(): Phaser.GameObjects.GameObject;

							setBounce(): any;

							setCollisionCategory(): any;

							setCollisionGroup(): any;

							setCollidesWith(): any;

							applyForce(): any;

							applyForceFrom(): any;

							thrust(): any;

							thrustLeft(): any;

							thrustRight(): any;

							thrustBack(): any;

							setFriction(): any;

							setFrictionAir(): any;

							setFrictionStatic(): any;

							setIgnoreGravity(): any;

							setMass(): any;

							setDensity(): any;

							setSensor(): any;

							isSensor(): any;

							setRectangle(): any;

							setCircle(): any;

							setPolygon(): any;

							setTrapezoid(): any;

							setExistingBody(): any;

							setBody(): any;

							setSleepThreshold(): any;

							setSleepEvents(): any;

							setSleepStartEvent(): any;

							setSleepEndEvent(): any;

							setStatic(): any;

							isStatic(): any;

							setFixedRotation(): any;

							setAngularVelocity(): any;

							setVelocityX(): any;

							setVelocityY(): any;

							setVelocity(): any;

					}

					namespace MatterImage {
					}

					class MatterPhysics {
							scene: Phaser.Scene;

							systems: Phaser.Scenes.Systems;

							config: any;

							world: Phaser.Physics.Matter.World;

							add: Phaser.Physics.Matter.Factory;

							getConfig(): any;

							boot(): void;

							enableAttractorPlugin(): void;

							enableWrapPlugin(): void;

							pause(): Phaser.Physics.Matter.World;

							resume(): Phaser.Physics.Matter.World;

							shutdown(): void;

							destroy(): void;

					}

					namespace MatterPhysics {
					}

					class MatterSprite {
							anims: any;

							preUpdate(): void;

							play(): any;

							toJSON(): any;

							renderCanvas(): void;

							renderWebGL(): void;

							scene: Phaser.Scene;

							type: string;

							name: string;

							active: boolean;

							tabIndex: number;

							data: Phaser.Data.DataManager;

							renderFlags: number;

							cameraFilter: number;

							input: Phaser.Input.InteractiveObject;

							body: Phaser.Physics.Body;

							setActive(): Phaser.GameObjects.GameObject;

							setName(): Phaser.GameObjects.GameObject;

							setDataEnabled(): Phaser.GameObjects.GameObject;

							setData(): Phaser.GameObjects.GameObject;

							getData(): any;

							setInteractive(): Phaser.GameObjects.GameObject;

							update(): void;

							willRender(): boolean;

							destroy(): void;

							eventNames(): any[];

							listeners(): any[];

							listenerCount(): number;

							emit(): Boolean;

							on(): EventEmitter;

							addListener(): EventEmitter;

							once(): EventEmitter;

							removeListener(): EventEmitter;

							off(): EventEmitter;

							removeAllListeners(): EventEmitter;

							clearAlpha(): Phaser.GameObjects.GameObject;

							setAlpha(): Phaser.GameObjects.GameObject;

							alpha: number;

							alphaTopLeft: number;

							alphaTopRight: number;

							alphaBottomLeft: number;

							alphaBottomRight: number;

							parent: Phaser.GameObjects.GameObject;

							animationManager: Phaser.Animations.AnimationManager;

							isPlaying: boolean;

							currentAnim: Phaser.Animations.Animation;

							currentFrame: Phaser.Animations.AnimationFrame;

							_timeScale: number;

							frameRate: number;

							duration: number;

							msPerFrame: number;

							skipMissedFrames: boolean;

							_delay: number;

							_repeat: number;

							_repeatDelay: number;

							_yoyo: boolean;

							forward: boolean;

							accumulator: number;

							nextTick: number;

							repeatCounter: number;

							pendingRepeat: boolean;

							_paused: boolean;

							_wasPlaying: boolean;

							_callbackArgs: any[];

							_updateParams: any[];

							delay(): Phaser.GameObjects.GameObject;

							delayedPlay(): Phaser.GameObjects.GameObject;

							getCurrentKey(): any;

							load(): Phaser.GameObjects.GameObject;

							pause(): Phaser.GameObjects.GameObject;

							paused(): any;

							progress(): any;

							remove(): void;

							repeat(): any;

							repeatDelay(): any;

							restart(): Phaser.GameObjects.GameObject;

							resume(): Phaser.GameObjects.GameObject;

							stop(): Phaser.GameObjects.GameObject;

							timeScale(): any;

							totalFrames(): any;

							totalProgres(): void;

							updateFrame(): void;

							yoyo(): any;

							blendMode: number;

							setBlendMode(): Phaser.GameObjects.GameObject;

							depth: number;

							setDepth(): Phaser.GameObjects.GameObject;

							flipX: boolean;

							flipY: boolean;

							toggleFlipX(): Phaser.GameObjects.GameObject;

							toggleFlipY(): Phaser.GameObjects.GameObject;

							setFlipX(): Phaser.GameObjects.GameObject;

							setFlipY(): Phaser.GameObjects.GameObject;

							setFlip(): Phaser.GameObjects.GameObject;

							resetFlip(): Phaser.GameObjects.GameObject;

							getCenter(): Phaser.Math.Vector2;

							getTopLeft(): Phaser.Math.Vector2;

							getTopRight(): Phaser.Math.Vector2;

							getBottomLeft(): Phaser.Math.Vector2;

							getBottomRight(): Phaser.Math.Vector2;

							getBounds(): Phaser.Geom.Rectangle;

							originX: number;

							originY: number;

							displayOriginX: number;

							displayOriginY: number;

							setOrigin(): Phaser.GameObjects.GameObject;

							setOriginFromFrame(): Phaser.GameObjects.GameObject;

							setDisplayOrigin(): Phaser.GameObjects.GameObject;

							updateDisplayOrigin(): Phaser.GameObjects.GameObject;

							defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

							pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

							initPipeline(): boolean;

							setPipeline(): boolean;

							resetPipeline(): boolean;

							getPipelineName(): string;

							scaleMode: number;

							setScaleMode(): Phaser.GameObjects.GameObject;

							scrollFactorX: number;

							scrollFactorY: number;

							setScrollFactor(): Phaser.GameObjects.GameObject;

							width: number;

							height: number;

							displayWidth: number;

							displayHeight: number;

							setSizeToFrame(): Phaser.GameObjects.GameObject;

							setSize(): Phaser.GameObjects.GameObject;

							setDisplaySize(): Phaser.GameObjects.GameObject;

							texture: Phaser.Textures.Texture;

							frame: Phaser.Textures.Frame;

							setTexture(): Phaser.GameObjects.GameObject;

							setFrame(): Phaser.GameObjects.GameObject;

							clearTint(): Phaser.GameObjects.GameObject;

							setTint(): Phaser.GameObjects.GameObject;

							tintTopLeft: number;

							tintTopRight: number;

							tintBottomLeft: number;

							tintBottomRight: number;

							tint: number;

							x: number;

							y: number;

							z: number;

							w: number;

							scaleX: number;

							scaleY: number;

							angle: number;

							rotation: number;

							setPosition(): Phaser.GameObjects.GameObject;

							setRotation(): Phaser.GameObjects.GameObject;

							setAngle(): Phaser.GameObjects.GameObject;

							setScale(): Phaser.GameObjects.GameObject;

							setX(): Phaser.GameObjects.GameObject;

							setY(): Phaser.GameObjects.GameObject;

							setZ(): Phaser.GameObjects.GameObject;

							setW(): Phaser.GameObjects.GameObject;

							visible: boolean;

							setVisible(): Phaser.GameObjects.GameObject;

							setBounce(): any;

							setCollisionCategory(): any;

							setCollisionGroup(): any;

							setCollidesWith(): any;

							applyForce(): any;

							applyForceFrom(): any;

							thrust(): any;

							thrustLeft(): any;

							thrustRight(): any;

							thrustBack(): any;

							setFriction(): any;

							setFrictionAir(): any;

							setFrictionStatic(): any;

							setIgnoreGravity(): any;

							setMass(): any;

							setDensity(): any;

							setSensor(): any;

							isSensor(): any;

							setRectangle(): any;

							setCircle(): any;

							setPolygon(): any;

							setTrapezoid(): any;

							setExistingBody(): any;

							setBody(): any;

							setSleepThreshold(): any;

							setSleepEvents(): any;

							setSleepStartEvent(): any;

							setSleepEndEvent(): any;

							setStatic(): any;

							isStatic(): any;

							setFixedRotation(): any;

							setAngularVelocity(): any;

							setVelocityX(): any;

							setVelocityY(): any;

							setVelocity(): any;

					}

					namespace MatterSprite {
					}

					class PointerConstraint {
							scene: Phaser.Scene;

							world: Phaser.Physics.Matter.World;

							camera: Phaser.Cameras.Scene2D.Camera;

							pointer: Phaser.Input.Pointer;

							active: boolean;

							position: Phaser.Math.Vector2;

							constraint: any;

							onDown(): void;

							onUp(): void;

							getBodyPart(): boolean;

							update(): void;

							destroy(): void;

					}

					namespace PointerConstraint {
					}

					class World {
							scene: Phaser.Scene;

							engine: any;

							localWorld: any;

							walls: any;

							enabled: boolean;

							drawDebug: boolean;

							debugGraphic: Phaser.GameObjects.Graphics;

							defaults: any;

							setEventsProxy(): void;

							setBounds(): Phaser.Physics.Matter.World;

							updateWall(): void;

							createDebugGraphic(): Phaser.GameObjects.Graphics;

							disableGravity(): Phaser.Physics.Matter.World;

							setGravity(): Phaser.Physics.Matter.World;

							create(): any;

							add(): Phaser.Physics.Matter.World;

							remove(): Phaser.Physics.Matter.World;

							removeConstraint(): Phaser.Physics.Matter.World;

							convertTilemapLayer(): Phaser.Physics.Matter.World;

							convertTiles(): Phaser.Physics.Matter.World;

							nextGroup(): any;

							nextCategory(): any;

							pause(): Phaser.Physics.Matter.World;

							resume(): Phaser.Physics.Matter.World;

							update(): void;

							postUpdate(): void;

							fromPath(): any;

							shutdown(): void;

							destroy(): void;

							eventNames(): any[];

							listeners(): any[];

							listenerCount(): number;

							emit(): Boolean;

							on(): EventEmitter;

							addListener(): EventEmitter;

							once(): EventEmitter;

							removeListener(): EventEmitter;

							off(): EventEmitter;

							removeAllListeners(): EventEmitter;

							eventNames(): any[];

							listeners(): any[];

							listenerCount(): number;

							emit(): Boolean;

							on(): EventEmitter;

							addListener(): EventEmitter;

							once(): EventEmitter;

							removeListener(): EventEmitter;

							off(): EventEmitter;

							removeAllListeners(): EventEmitter;

							eventNames(): any[];

							listeners(): any[];

							listenerCount(): number;

							emit(): Boolean;

							on(): EventEmitter;

							addListener(): EventEmitter;

							once(): EventEmitter;

							removeListener(): EventEmitter;

							off(): EventEmitter;

							removeAllListeners(): EventEmitter;

					}

					namespace World {
					}

			}

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

			static GetPhysicsPlugins(): any[];

			static GetScenePlugins(): any[];

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

					add(): Phaser.Scene;

					bootScene(): void;

					loadComplete(): void;

					payloadComplete(): void;

					update(): void;

					render(): void;

					create(): void;

					createSceneFromFunction(): Phaser.Scene;

					createSceneFromInstance(): Phaser.Scene;

					createSceneFromObject(): Phaser.Scene;

					getKey(): string;

					getScene(): Phaser.Scene;

					isActive(): boolean;

					isVisible(): boolean;

					isSleeping(): boolean;

					pause(): Phaser.Scenes.SceneManager;

					resume(): Phaser.Scenes.SceneManager;

					sleep(): Phaser.Scenes.SceneManager;

					wake(): Phaser.Scenes.SceneManager;

					start(): Phaser.Scenes.SceneManager;

					stop(): Phaser.Scenes.SceneManager;

					switch(): Phaser.Scenes.SceneManager;

					getAt(): Phaser.Scene;

					getIndex(): number;

					bringToTop(): Phaser.Scenes.SceneManager;

					sendToBack(): Phaser.Scenes.SceneManager;

					moveDown(): Phaser.Scenes.SceneManager;

					moveUp(): Phaser.Scenes.SceneManager;

					swapPosition(): Phaser.Scenes.SceneManager;

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

					start(): Phaser.Scenes.ScenePlugin;

					add(): Phaser.Scenes.ScenePlugin;

					launch(): Phaser.Scenes.ScenePlugin;

					pause(): Phaser.Scenes.ScenePlugin;

					resume(): Phaser.Scenes.ScenePlugin;

					sleep(): Phaser.Scenes.ScenePlugin;

					wake(): Phaser.Scenes.ScenePlugin;

					switch(): Phaser.Scenes.ScenePlugin;

					stop(): Phaser.Scenes.ScenePlugin;

					setActive(): Phaser.Scenes.ScenePlugin;

					setVisible(): Phaser.Scenes.ScenePlugin;

					isSleeping(): boolean;

					isActive(): boolean;

					isVisible(): boolean;

					swapPosition(): Phaser.Scenes.ScenePlugin;

					moveUp(): Phaser.Scenes.ScenePlugin;

					moveDown(): Phaser.Scenes.ScenePlugin;

					bringToTop(): Phaser.Scenes.ScenePlugin;

					sendToBack(): Phaser.Scenes.ScenePlugin;

					get(): Phaser.Scene;

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

					init(): void;

					install(): void;

					step(): void;

					render(): void;

					queueDepthSort(): void;

					depthSort(): void;

					pause(): Phaser.Scenes.Systems;

					resume(): Phaser.Scenes.Systems;

					sleep(): Phaser.Scenes.Systems;

					wake(): Phaser.Scenes.Systems;

					isSleeping(): boolean;

					isActive(): boolean;

					isVisible(): boolean;

					setVisible(): Phaser.Scenes.Systems;

					setActive(): Phaser.Scenes.Systems;

					start(): void;

					shutdown(): void;

					destroy(): void;

			}

			namespace Systems {
			}

	}

	class Sound {
			static SoundManagerCreator(): void;

	}

	namespace Sound {
			class BaseSound {
					manager: Phaser.Sound.BaseSoundManager;

					key: string;

					isPlaying: boolean;

					isPaused: boolean;

					totalRate: number;

					duration: number;

					totalDuration: number;

					config: any;

					currentConfig: any;

					mute: boolean;

					volume: number;

					rate: number;

					detune: number;

					seek: number;

					loop: boolean;

					config: any;

					markers: any;

					currentMarker: ISoundMarker;

					pendingRemove: boolean;

					addMarker(): boolean;

					updateMarker(): boolean;

					removeMarker(): ISoundMarker;

					play(): boolean;

					pause(): boolean;

					resume(): boolean;

					stop(): boolean;

					applyConfig(): void;

					resetConfig(): void;

					update(): void;

					destroy(): void;

					setRate(): void;

					rate: number;

					detune: any;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace BaseSound {
			}

			class BaseSoundManager {
					game: Phaser.Game;

					sounds: any[];

					mute: boolean;

					volume: number;

					rate: number;

					detune: number;

					pauseOnBlur: boolean;

					_rate: number;

					_detune: number;

					locked: boolean;

					unlocked: boolean;

					add(): ISound;

					addAudioSprite(): IAudioSpriteSound;

					play(): boolean;

					playAudioSprite(): boolean;

					remove(): boolean;

					removeByKey(): number;

					pauseAll(): void;

					resumeAll(): void;

					stopAll(): void;

					unlock(): void;

					onBlur(): void;

					onFocus(): void;

					update(): void;

					destroy(): void;

					forEachActiveSound(): void;

					rate: number;

					detune: number;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace BaseSoundManager {
			}

			class HTML5AudioSound {
					tags: Array.<HTMLAudioElement>;

					audio: HTMLAudioElement;

					startTime: number;

					previousTime: number;

					play(): boolean;

					pause(): boolean;

					resume(): boolean;

					stop(): boolean;

					pickAndPlayAudioTag(): boolean;

					pickAudioTag(): boolean;

					playCatchPromise(): void;

					stopAndReleaseAudioTag(): void;

					reset(): void;

					onFocus(): void;

					update(): void;

					destroy(): void;

					setMute(): void;

					setVolume(): void;

					setRate(): void;

					mute: boolean;

					volume: number;

					rate: number;

					detune: number;

					seek: number;

					loop: boolean;

					manager: Phaser.Sound.BaseSoundManager;

					key: string;

					isPlaying: boolean;

					isPaused: boolean;

					totalRate: number;

					duration: number;

					totalDuration: number;

					config: any;

					currentConfig: any;

					markers: any;

					currentMarker: ISoundMarker;

					pendingRemove: boolean;

					addMarker(): boolean;

					updateMarker(): boolean;

					removeMarker(): ISoundMarker;

					applyConfig(): void;

					resetConfig(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace HTML5AudioSound {
			}

			class HTML5AudioSoundManager {
					override: boolean;

					audioPlayDelay: number;

					loopEndOffset: number;

					onBlurPausedSounds: Array.<Phaser.Sound.HTML5AudioSound>;

					lockedActionsQueue: any[];

					_mute: boolean;

					_volume: boolean;

					add(): Phaser.Sound.HTML5AudioSound;

					unlock(): void;

					onBlur(): void;

					onFocus(): void;

					destroy(): void;

					isLocked(): boolean;

					mute: boolean;

					volume: number;

					game: Phaser.Game;

					sounds: any[];

					rate: number;

					detune: number;

					pauseOnBlur: boolean;

					_rate: number;

					_detune: number;

					locked: boolean;

					unlocked: boolean;

					addAudioSprite(): IAudioSpriteSound;

					play(): boolean;

					playAudioSprite(): boolean;

					remove(): boolean;

					removeByKey(): number;

					pauseAll(): void;

					resumeAll(): void;

					stopAll(): void;

					update(): void;

					forEachActiveSound(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace HTML5AudioSoundManager {
			}

			class NoAudioSound {
					manager: Phaser.Sound.NoAudioSoundManager;

					key: string;

					isPlaying: boolean;

					isPaused: boolean;

					totalRate: number;

					duration: number;

					totalDuration: number;

					config: any;

					currentConfig: any;

					mute: boolean;

					volume: number;

					rate: number;

					detune: number;

					seek: number;

					loop: boolean;

					markers: any;

					currentMarker: any;

					pendingRemove: boolean;

					addMarker(): boolean;

					updateMarker(): boolean;

					removeMarker(): boolean;

					play(): boolean;

					pause(): boolean;

					resume(): boolean;

					stop(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace NoAudioSound {
			}

			class NoAudioSoundManager {
					game: Phaser.Game;

					sounds: any[];

					mute: boolean;

					volume: number;

					rate: number;

					detune: number;

					pauseOnBlur: boolean;

					locked: boolean;

					add(): ISound;

					addAudioSprite(): IAudioSpriteSound;

					play(): boolean;

					playAudioSprite(): boolean;

					remove(): boolean;

					removeByKey(): number;

					destroy(): void;

					forEachActiveSound(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace NoAudioSoundManager {
			}

			class WebAudioSound {
					audioBuffer: AudioBuffer;

					source: AudioBufferSourceNode;

					loopSource: AudioBufferSourceNode;

					muteNode: GainNode;

					volumeNode: GainNode;

					playTime: number;

					startTime: number;

					loopTime: number;

					rateUpdates: any[];

					hasEnded: boolean;

					hasLooped: boolean;

					duration: number;

					totalDuration: number;

					play(): boolean;

					pause(): boolean;

					resume(): boolean;

					stop(): boolean;

					createAndStartBufferSource(): void;

					createAndStartLoopBufferSource(): void;

					createBufferSource(): AudioBufferSourceNode;

					stopAndRemoveBufferSource(): void;

					stopAndRemoveLoopBufferSource(): void;

					applyConfig(): void;

					update(): void;

					destroy(): void;

					setRate(): void;

					getCurrentTime(): void;

					getLoopTime(): void;

					mute: boolean;

					volume: number;

					seek: number;

					loop: boolean;

					manager: Phaser.Sound.BaseSoundManager;

					key: string;

					isPlaying: boolean;

					isPaused: boolean;

					totalRate: number;

					config: any;

					currentConfig: any;

					rate: number;

					detune: number;

					markers: any;

					currentMarker: ISoundMarker;

					pendingRemove: boolean;

					addMarker(): boolean;

					updateMarker(): boolean;

					removeMarker(): ISoundMarker;

					resetConfig(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace WebAudioSound {
			}

			class WebAudioSoundManager {
					context: AudioContext;

					masterMuteNode: GainNode;

					masterVolumeNode: GainNode;

					destination: AudioNode;

					locked: boolean;

					createAudioContext(): AudioContext;

					add(): Phaser.Sound.WebAudioSound;

					unlock(): void;

					onBlur(): void;

					onFocus(): void;

					destroy(): void;

					mute: boolean;

					volume: number;

					game: Phaser.Game;

					sounds: any[];

					rate: number;

					detune: number;

					pauseOnBlur: boolean;

					_rate: number;

					_detune: number;

					unlocked: boolean;

					addAudioSprite(): IAudioSpriteSound;

					play(): boolean;

					playAudioSprite(): boolean;

					remove(): boolean;

					removeByKey(): number;

					pauseAll(): void;

					resumeAll(): void;

					stopAll(): void;

					update(): void;

					forEachActiveSound(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace WebAudioSoundManager {
			}

	}

	class Structs {
	}

	namespace Structs {
			class List {
					parent: any;

					list: any[];

					position: number;

					add(): any;

					addAt(): any;

					addMultiple(): any[];

					getAt(): any;

					getIndex(): number;

					sort(): any[];

					sortIndexHandler(): number;

					getByKey(): any;

					getByName(): any;

					getRandom(): any;

					getFirst(): any;

					getAll(): any[];

					count(): number;

					swap(): void;

					moveTo(): any;

					remove(): any;

					removeAt(): any;

					removeBetween(): any[];

					removeAll(): Phaser.Structs.List;

					bringToTop(): any;

					sendToBack(): any;

					moveUp(): any;

					moveDown(): any;

					reverse(): Phaser.Structs.List;

					shuffle(): Phaser.Structs.List;

					replace(): any;

					exists(): boolean;

					setAll(): void;

					each(): void;

					shutdown(): void;

					destroy(): void;

					length: number;

					first: number;

					last: number;

					next: number;

					previous: number;

			}

			namespace List {
			}

			class Map {
					entries: any;

					size: number;

					set(): Phaser.Structs.Map;

					get(): any;

					getArray(): any[];

					has(): boolean;

					delete(): Phaser.Structs.Map;

					clear(): Phaser.Structs.Map;

					keys(): any;

					values(): any[];

					dump(): void;

					each(): Phaser.Structs.Map;

					contains(): boolean;

					merge(): Phaser.Structs.Map;

			}

			namespace Map {
			}

			class ProcessQueue {
					_pending: any[];

					_active: any[];

					_destroy: any[];

					_toProcess: number;

					add(): Phaser.Structs.ProcessQueue;

					remove(): Phaser.Structs.ProcessQueue;

					update(): any[];

					getActive(): any[];

					destroy(): void;

			}

			namespace ProcessQueue {
			}

			class RTree {
			}

			namespace RTree {
			}

			class Set {
					entries: any[];

					set(): Phaser.Structs.Set;

					get(): any;

					getArray(): any[];

					delete(): Phaser.Structs.Set;

					dump(): void;

					each(): Phaser.Structs.Set;

					iterate(): Phaser.Structs.Set;

					iterateLocal(): Phaser.Structs.Set;

					clear(): Phaser.Structs.Set;

					contains(): boolean;

					union(): Phaser.Structs.Set;

					intersect(): Phaser.Structs.Set;

					difference(): Phaser.Structs.Set;

					size: number;

			}

			namespace Set {
			}

	}

	class Textures {
	}

	namespace Textures {
			class FilterMode {
					LINEAR: number;

					NEAREST: number;

			}

			namespace FilterMode {
			}

			class Frame {
					texture: Phaser.Textures.Texture;

					name: string;

					source: Phaser.Textures.TextureSource;

					sourceIndex: number;

					cutX: number;

					cutY: number;

					cutWidth: number;

					cutHeight: number;

					x: number;

					y: number;

					width: number;

					height: number;

					halfWidth: number;

					halfHeight: number;

					centerX: number;

					centerY: number;

					pivotX: number;

					pivotY: number;

					customPivot: boolean;

					rotated: boolean;

					autoRound: number;

					customData: any;

					data: any;

					setTrim(): Phaser.Textures.Frame;

					updateUVs(): Phaser.Textures.Frame;

					updateUVsInverted(): Phaser.Textures.Frame;

					clone(): Phaser.Textures.Frame;

					destroy(): void;

					realWidth: number;

					realHeight: number;

					uvs: any;

					radius: number;

					trimmed: boolean;

					canvasData: any;

			}

			namespace Frame {
			}

			class Parsers {
					static JSONArray(): Phaser.Textures.Texture;

					static JSONHash(): Phaser.Textures.Texture;

					static Pyxel(): Phaser.Textures.Texture;

					static SpriteSheet(): Phaser.Textures.Texture;

					static SpriteSheetFromAtlas(): Phaser.Textures.Texture;

					static StarlingXML(): Phaser.Textures.Texture;

					static UnityYAML(): Phaser.Textures.Texture;

			}

			namespace Parsers {
			}

			class Texture {
					manager: Phaser.Textures.TextureManager;

					key: string;

					source: Array.<Phaser.Textures.TextureSource>;

					dataSource: any[];

					frames: any;

					customData: any;

					firstFrame: string;

					frameTotal: number;

					add(): Phaser.Textures.Frame;

					has(): boolean;

					get(): Phaser.Textures.Frame;

					getTextureSourceIndex(): number;

					getFramesFromTextureSource(): Array.<Phaser.Textures.Frame>;

					getFrameNames(): Array.<string>;

					getSourceImage(): Image;

					setDataSource(): void;

					setFilter(): void;

					destroy(): void;

			}

			namespace Texture {
			}

			class TextureManager {
					game: Phaser.Game;

					name: string;

					list: any;

					_tempCanvas: HTMLCanvasElement;

					_tempContext: CanvasRenderingContext2D;

					_pending: number;

					boot(): void;

					updatePending(): void;

					addBase64(): void;

					addImage(): Phaser.Textures.Texture;

					generate(): Phaser.Textures.Texture;

					createCanvas(): Phaser.Textures.Texture;

					addCanvas(): Phaser.Textures.Texture;

					addAtlas(): Phaser.Textures.Texture;

					addAtlasJSONArray(): Phaser.Textures.Texture;

					addAtlasJSONHash(): Phaser.Textures.Texture;

					addUnityAtlas(): Phaser.Textures.Texture;

					addSpriteSheet(): Phaser.Textures.Texture;

					addSpriteSheetFromAtlas(): Phaser.Textures.Texture;

					addAtlasStarlingXML(): Phaser.Textures.Texture;

					addAtlasPyxel(): Phaser.Textures.Texture;

					create(): Phaser.Textures.Texture;

					exists(): boolean;

					get(): Phaser.Textures.Texture;

					cloneFrame(): Phaser.Textures.Frame;

					getFrame(): Phaser.Textures.Frame;

					getTextureKeys(): Array.<string>;

					getPixel(): Phaser.Display.Color;

					setTexture(): Phaser.GameObjects.GameObject;

					each(): void;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace TextureManager {
			}

			class TextureSource {
					texture: string;

					image: Image;

					compressionAlgorithm: number;

					resolution: number;

					width: number;

					height: number;

					scaleMode: any;

					isCanvas: boolean;

					isPowerOf2: boolean;

					glTexture: any;

					init(): void;

					setFilter(): void;

					destroy(): void;

			}

			namespace TextureSource {
			}

	}

	class Tilemaps {
			static ParseToTilemap(): Phaser.Tilemaps.Tilemap;

	}

	namespace Tilemaps {
			class Components {
					static IsInLayerBounds(): boolean;

					static PutTileAt(): Phaser.Tilemaps.Tile;

					static PutTileAtWorldXY(): Phaser.Tilemaps.Tile;

					static PutTilesAt(): void;

					static Randomize(): void;

					static RemoveTileAt(): Phaser.Tilemaps.Tile;

					static RemoveTileAtWorldXY(): Phaser.Tilemaps.Tile;

					static RenderDebug(): void;

					static ReplaceByIndex(): void;

					static SetCollision(): void;

					static SetCollisionBetween(): void;

					static SetCollisionByExclusion(): void;

					static SetCollisionByProperty(): void;

					static SetCollisionFromCollisionGroup(): void;

					static SetLayerCollisionIndex(): void;

					static SetTileCollision(): void;

					static SetTileIndexCallback(): void;

					static SetTileLocationCallback(): void;

					static Shuffle(): void;

					static SwapByIndex(): void;

					static TileToWorldX(): number;

					static TileToWorldXY(): Phaser.Math.Vector2;

					static TileToWorldY(): number;

					static WeightedRandomize(): void;

					static WorldToTileX(): number;

					static WorldToTileXY(): Phaser.Math.Vector2;

					static WorldToTileY(): number;

			}

			namespace Components {
			}

			class DynamicTilemapLayer {
					isTilemap: boolean;

					tilemap: Phaser.Tilemaps.Tilemap;

					layerIndex: number;

					layer: Phaser.Tilemaps.LayerData;

					tileset: Phaser.Tilemaps.Tileset;

					culledTiles: any[];

					calculateFacesAt(): Phaser.Tilemaps.DynamicTilemapLayer;

					calculateFacesWithin(): Phaser.Tilemaps.DynamicTilemapLayer;

					createFromTiles(): Array.<Phaser.GameObjects.Sprite>;

					cull(): Array.<Phaser.Tilemaps.Tile>;

					copy(): Phaser.Tilemaps.DynamicTilemapLayer;

					destroy(): void;

					fill(): Phaser.Tilemaps.DynamicTilemapLayer;

					filterTiles(): Array.<Phaser.Tilemaps.Tile>;

					findByIndex(): Phaser.Tilemaps.Tile;

					findTile(): Phaser.Tilemaps.Tile;

					forEachTile(): Phaser.Tilemaps.DynamicTilemapLayer;

					getTileAt(): Phaser.Tilemaps.Tile;

					getTileAtWorldXY(): Phaser.Tilemaps.Tile;

					getTilesWithin(): Array.<Phaser.Tilemaps.Tile>;

					getTilesWithinShape(): Array.<Phaser.Tilemaps.Tile>;

					getTilesWithinWorldXY(): Array.<Phaser.Tilemaps.Tile>;

					hasTileAt(): boolean;

					hasTileAtWorldXY(): boolean;

					putTileAt(): Phaser.Tilemaps.Tile;

					putTileAtWorldXY(): Phaser.Tilemaps.Tile;

					putTilesAt(): Phaser.Tilemaps.DynamicTilemapLayer;

					randomize(): Phaser.Tilemaps.DynamicTilemapLayer;

					removeTileAt(): Phaser.Tilemaps.Tile;

					removeTileAtWorldXY(): Phaser.Tilemaps.Tile;

					renderDebug(): Phaser.Tilemaps.DynamicTilemapLayer;

					replaceByIndex(): Phaser.Tilemaps.DynamicTilemapLayer;

					setCollision(): Phaser.Tilemaps.DynamicTilemapLayer;

					setCollisionBetween(): Phaser.Tilemaps.DynamicTilemapLayer;

					setCollisionByProperty(): Phaser.Tilemaps.DynamicTilemapLayer;

					setCollisionByExclusion(): Phaser.Tilemaps.DynamicTilemapLayer;

					setCollisionFromCollisionGroup(): Phaser.Tilemaps.DynamicTilemapLayer;

					setTileIndexCallback(): Phaser.Tilemaps.DynamicTilemapLayer;

					setTileLocationCallback(): Phaser.Tilemaps.DynamicTilemapLayer;

					shuffle(): Phaser.Tilemaps.DynamicTilemapLayer;

					swapByIndex(): Phaser.Tilemaps.DynamicTilemapLayer;

					tileToWorldX(): number;

					tileToWorldY(): number;

					tileToWorldXY(): Phaser.Math.Vector2;

					weightedRandomize(): Phaser.Tilemaps.DynamicTilemapLayer;

					worldToTileX(): number;

					worldToTileXY(): number;

					worldToTileXY(): Phaser.Math.Vector2;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace DynamicTilemapLayer {
			}

			class Formats {
					CSV: number;

					TILED_JSON: number;

					ARRAY_2D: number;

					WELTMEISTER: number;

			}

			namespace Formats {
			}

			class ImageCollection {
					name: string;

					firstgid: number;

					imageWidth: number;

					imageHeight: number;

					imageMarge: number;

					imageSpacing: number;

					properties: any;

					images: any[];

					total: number;

					containsImageIndex(): boolean;

					addImage(): Phaser.Tilemaps.ImageCollection;

					layer: Phaser.Tilemaps.LayerData;

					index: number;

					x: number;

					y: number;

					width: number;

					height: number;

					baseWidth: number;

					baseHeight: number;

					pixelX: number;

					pixelY: number;

					properties: any;

					rotation: number;

					collideLeft: boolean;

					collideRight: boolean;

					collideUp: boolean;

					collideDown: boolean;

					faceLeft: boolean;

					faceRight: boolean;

					faceTop: boolean;

					faceBottom: boolean;

					collisionCallback: any;

					collisionCallbackContext: any;

					tint: number;

					physics: any;

			}

			namespace ImageCollection {
			}

			class LayerData {
					name: string;

					x: number;

					y: number;

					width: number;

					height: number;

					tileWidth: number;

					tileHeight: number;

					baseTileWidth: number;

					baseTileHeight: number;

					widthInPixels: number;

					heightInPixels: number;

					alpha: number;

					visible: boolean;

					properties: any;

					indexes: any[];

					collideIndexes: any[];

					callbacks: any[];

					bodies: any[];

					data: any[];

					tilemapLayer: Phaser.Tilemaps.DynamicTilemapLayer;

			}

			namespace LayerData {
			}

			class MapData {
					name: string;

					width: number;

					height: number;

					tileWidth: number;

					tileHeight: number;

					widthInPixels: number;

					heightInPixels: number;

					format: number;

					orientation: string;

					version: string;

					properties: any;

					layers: any[];

					images: any[];

					objects: any;

					collision: any;

					tilesets: any[];

					imageCollections: any[];

					tiles: any[];

			}

			namespace MapData {
			}

			class ObjectLayer {
					name: string;

					opacity: number;

					properties: any;

					propertyTypes: any;

					type: string;

					visible: boolean;

					objects: any[];

			}

			namespace ObjectLayer {
			}

			class Parsers {
					static Parse(): any;

					static Parse2DArray(): any;

					static ParseCSV(): any;

			}

			namespace Parsers {
			}

			class StaticTilemapLayer {
					isTilemap: boolean;

					tilemap: Phaser.Tilemaps.Tilemap;

					layerIndex: number;

					layer: Phaser.Tilemaps.LayerData;

					tileset: Phaser.Tilemaps.Tileset;

					culledTiles: any[];

					vertexBuffer: any[];

					renderer: Phaser.Renderer.CanvasRenderer;

					bufferData: ArrayBuffer;

					vertexViewF32: number32Array;

					vertexViewU32: Uint32Array;

					dirty: boolean;

					vertexCount: number;

					contextRestore(): Phaser.Tilemaps.StaticTilemapLayer;

					upload(): Phaser.Tilemaps.StaticTilemapLayer;

					calculateFacesAt(): Phaser.Tilemaps.StaticTilemapLayer;

					calculateFacesWithin(): Phaser.Tilemaps.StaticTilemapLayer;

					createFromTiles(): Array.<Phaser.GameObjects.Sprite>;

					cull(): Array.<Phaser.Tilemaps.Tile>;

					destroy(): void;

					findByIndex(): Phaser.Tilemaps.Tile;

					findTile(): Phaser.Tilemaps.Tile;

					filterTiles(): Array.<Phaser.Tilemaps.Tile>;

					forEachTile(): Phaser.Tilemaps.StaticTilemapLayer;

					getTileAt(): Phaser.Tilemaps.Tile;

					getTileAtWorldXY(): Phaser.Tilemaps.Tile;

					getTilesWithin(): Array.<Phaser.Tilemaps.Tile>;

					getTilesWithinWorldXY(): Array.<Phaser.Tilemaps.Tile>;

					getTilesWithinShape(): Array.<Phaser.Tilemaps.Tile>;

					hasTileAt(): boolean;

					hasTileAtWorldXY(): boolean;

					renderDebug(): Phaser.Tilemaps.StaticTilemapLayer;

					setCollision(): Phaser.Tilemaps.StaticTilemapLayer;

					setCollisionBetween(): Phaser.Tilemaps.StaticTilemapLayer;

					setCollisionByProperty(): Phaser.Tilemaps.StaticTilemapLayer;

					setCollisionByExclusion(): Phaser.Tilemaps.StaticTilemapLayer;

					setTileIndexCallback(): Phaser.Tilemaps.StaticTilemapLayer;

					setCollisionFromCollisionGroup(): Phaser.Tilemaps.StaticTilemapLayer;

					setTileLocationCallback(): Phaser.Tilemaps.StaticTilemapLayer;

					tileToWorldX(): number;

					tileToWorldY(): number;

					tileToWorldXY(): Phaser.Math.Vector2;

					worldToTileX(): number;

					worldToTileXY(): number;

					worldToTileXY(): Phaser.Math.Vector2;

					renderCanvas(): void;

					renderWebGL(): void;

					scene: Phaser.Scene;

					type: string;

					name: string;

					active: boolean;

					tabIndex: number;

					data: Phaser.Data.DataManager;

					renderFlags: number;

					cameraFilter: number;

					input: Phaser.Input.InteractiveObject;

					body: Phaser.Physics.Body;

					setActive(): Phaser.GameObjects.GameObject;

					setName(): Phaser.GameObjects.GameObject;

					setDataEnabled(): Phaser.GameObjects.GameObject;

					setData(): Phaser.GameObjects.GameObject;

					getData(): any;

					setInteractive(): Phaser.GameObjects.GameObject;

					update(): void;

					toJSON(): any;

					willRender(): boolean;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					blendMode: number;

					setBlendMode(): Phaser.GameObjects.GameObject;

					depth: number;

					setDepth(): Phaser.GameObjects.GameObject;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					getCenter(): Phaser.Math.Vector2;

					getTopLeft(): Phaser.Math.Vector2;

					getTopRight(): Phaser.Math.Vector2;

					getBottomLeft(): Phaser.Math.Vector2;

					getBottomRight(): Phaser.Math.Vector2;

					getBounds(): Phaser.Geom.Rectangle;

					originX: number;

					originY: number;

					displayOriginX: number;

					displayOriginY: number;

					setOrigin(): Phaser.GameObjects.GameObject;

					setOriginFromFrame(): Phaser.GameObjects.GameObject;

					setDisplayOrigin(): Phaser.GameObjects.GameObject;

					updateDisplayOrigin(): Phaser.GameObjects.GameObject;

					defaultPipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					pipeline: Phaser.Renderer.WebGL.WebGLPipeline;

					initPipeline(): boolean;

					setPipeline(): boolean;

					resetPipeline(): boolean;

					getPipelineName(): string;

					scaleMode: number;

					setScaleMode(): Phaser.GameObjects.GameObject;

					width: number;

					height: number;

					displayWidth: number;

					displayHeight: number;

					setSizeToFrame(): Phaser.GameObjects.GameObject;

					setSize(): Phaser.GameObjects.GameObject;

					setDisplaySize(): Phaser.GameObjects.GameObject;

					x: number;

					y: number;

					z: number;

					w: number;

					scaleX: number;

					scaleY: number;

					angle: number;

					rotation: number;

					setPosition(): Phaser.GameObjects.GameObject;

					setRotation(): Phaser.GameObjects.GameObject;

					setAngle(): Phaser.GameObjects.GameObject;

					setScale(): Phaser.GameObjects.GameObject;

					setX(): Phaser.GameObjects.GameObject;

					setY(): Phaser.GameObjects.GameObject;

					setZ(): Phaser.GameObjects.GameObject;

					setW(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

					scrollFactorX: number;

					scrollFactorY: number;

					setScrollFactor(): Phaser.GameObjects.GameObject;

			}

			namespace StaticTilemapLayer {
			}

			class Tile {
					containsPoint(): boolean;

					containsPoint(): Phaser.Tilemaps.Tile;

					getCollisionGroup(): any;

					getTileData(): any;

					getLeft(): number;

					getRight(): number;

					getTop(): number;

					getBottom(): number;

					getBounds(): Phaser.Geom.Rectangle;

					getCenterX(): number;

					getCenterY(): number;

					destroy(): void;

					intersects(): boolean;

					isInteresting(): boolean;

					resetCollision(): Phaser.Tilemaps.Tile;

					resetFaces(): Phaser.Tilemaps.Tile;

					setCollision(): Phaser.Tilemaps.Tile;

					setCollisionCallback(): Phaser.Tilemaps.Tile;

					setSize(): Phaser.Tilemaps.Tile;

					updatePixelXY(): Phaser.Tilemaps.Tile;

					canCollide: boolean;

					collides: boolean;

					hasInterestingFace: boolean;

					tileset: Phaser.Tilemaps.Tileset;

					tilemapLayer: Phaser.Tilemaps.StaticTilemapLayer;

					tilemap: Phaser.Tilemaps.Tilemap;

					clearAlpha(): Phaser.GameObjects.GameObject;

					setAlpha(): Phaser.GameObjects.GameObject;

					alpha: number;

					alphaTopLeft: number;

					alphaTopRight: number;

					alphaBottomLeft: number;

					alphaBottomRight: number;

					flipX: boolean;

					flipY: boolean;

					toggleFlipX(): Phaser.GameObjects.GameObject;

					toggleFlipY(): Phaser.GameObjects.GameObject;

					setFlipX(): Phaser.GameObjects.GameObject;

					setFlipY(): Phaser.GameObjects.GameObject;

					setFlip(): Phaser.GameObjects.GameObject;

					resetFlip(): Phaser.GameObjects.GameObject;

					visible: boolean;

					setVisible(): Phaser.GameObjects.GameObject;

			}

			namespace Tile {
			}

			class Tilemap {
					scene: Phaser.Scene;

					tileWidth: number;

					tileHeight: number;

					width: number;

					height: number;

					orientation: string;

					format: number;

					version: number;

					properties: any;

					widthInPixels: number;

					heightInPixels: number;

					imageCollections: Array.<Phaser.Tilemaps.ImageCollection>;

					images: any[];

					layers: Array.<Phaser.Tilemaps.LayerData>;

					tilesets: Array.<Phaser.Tilemaps.Tileset>;

					objects: Array.<Phaser.Tilemaps.ObjectLayer>;

					currentLayerIndex: number;

					addTilesetImage(): Phaser.Tilemaps.Tileset;

					convertLayerToStatic(): Phaser.Tilemaps.StaticTilemapLayer;

					copy(): Phaser.Tilemaps.Tilemap;

					createBlankDynamicLayer(): Phaser.Tilemaps.DynamicTilemapLayer;

					createDynamicLayer(): Phaser.Tilemaps.DynamicTilemapLayer;

					createFromObjects(): Array.<Phaser.GameObjects.Sprite>;

					createFromTiles(): Array.<Phaser.GameObjects.Sprite>;

					createStaticLayer(): Phaser.Tilemaps.StaticTilemapLayer;

					destroy(): void;

					fill(): Phaser.Tilemaps.Tilemap;

					filterObjects(): Array.<object>;

					filterTiles(): Array.<Phaser.Tilemaps.Tile>;

					findByIndex(): Phaser.Tilemaps.Tile;

					findObject(): any;

					findTile(): Phaser.Tilemaps.Tile;

					forEachTile(): Phaser.Tilemaps.Tilemap;

					getImageIndex(): number;

					getIndex(): number;

					getLayer(): Phaser.Tilemaps.LayerData;

					getObjectLayer(): Phaser.Tilemaps.ObjectLayer;

					getLayerIndex(): number;

					getLayerIndexByName(): number;

					getTileAt(): Phaser.Tilemaps.Tile;

					getTileAtWorldXY(): Phaser.Tilemaps.Tile;

					getTilesWithin(): Array.<Phaser.Tilemaps.Tile>;

					getTilesWithinShape(): Array.<Phaser.Tilemaps.Tile>;

					getTilesWithinWorldXY(): Array.<Phaser.Tilemaps.Tile>;

					getTilesetIndex(): number;

					hasTileAt(): boolean;

					hasTileAtWorldXY(): boolean;

					layer: Phaser.Tilemaps.LayerData;

					putTileAt(): Phaser.Tilemaps.Tile;

					putTileAtWorldXY(): Phaser.Tilemaps.Tile;

					putTilesAt(): Phaser.Tilemaps.Tilemap;

					randomize(): Phaser.Tilemaps.Tilemap;

					calculateFacesAt(): Phaser.Tilemaps.Tilemap;

					calculateFacesWithin(): Phaser.Tilemaps.Tilemap;

					removeAllLayers(): Phaser.Tilemaps.Tilemap;

					removeTileAt(): Phaser.Tilemaps.Tile;

					removeTileAtWorldXY(): Phaser.Tilemaps.Tile;

					renderDebug(): Phaser.Tilemaps.Tilemap;

					replaceByIndex(): Phaser.Tilemaps.Tilemap;

					setCollision(): Phaser.Tilemaps.Tilemap;

					setCollisionBetween(): Phaser.Tilemaps.Tilemap;

					setCollisionByProperty(): Phaser.Tilemaps.Tilemap;

					setCollisionByExclusion(): Phaser.Tilemaps.Tilemap;

					setCollisionFromCollisionGroup(): Phaser.Tilemaps.Tilemap;

					setTileIndexCallback(): Phaser.Tilemaps.Tilemap;

					setTileLocationCallback(): Phaser.Tilemaps.Tilemap;

					setLayer(): Phaser.Tilemaps.Tilemap;

					setBaseTileSize(): Phaser.Tilemaps.Tilemap;

					setLayerTileSize(): Phaser.Tilemaps.Tilemap;

					shuffle(): Phaser.Tilemaps.Tilemap;

					swapByIndex(): Phaser.Tilemaps.Tilemap;

					tileToWorldX(): number;

					tileToWorldY(): number;

					tileToWorldXY(): Phaser.Math.Vector2;

					weightedRandomize(): Phaser.Tilemaps.Tilemap;

					worldToTileX(): number;

					worldToTileY(): number;

					worldToTileXY(): Phaser.Math.Vector2;

					_isStaticCall(): boolean;

			}

			namespace Tilemap {
			}

			class Tileset {
					name: string;

					firstgid: number;

					tileWidth: number;

					tileHeight: number;

					tileMargin: number;

					tileSpacing: number;

					tileProperties: any;

					tileData: any;

					image: Phaser.Textures.Texture;

					rows: number;

					columns: number;

					total: number;

					texCoordinates: Array.<object>;

					getTileProperties(): any;

					getTileData(): any;

					getTileCollisionGroup(): any;

					containsTileIndex(): boolean;

					getTileTextureCoordinates(): any;

					setImage(): Phaser.Tilemaps.Tileset;

					setTileSize(): Phaser.Tilemaps.Tileset;

					setSpacing(): Phaser.Tilemaps.Tileset;

					updateTileData(): Phaser.Tilemaps.Tileset;

			}

			namespace Tileset {
			}

	}

	class Time {
	}

	namespace Time {
			class Clock {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					now: number;

					timeScale: number;

					paused: boolean;

					_active: Array.<Phaser.Time.TimerEvent>;

					_pendingInsertion: Array.<Phaser.Time.TimerEvent>;

					_pendingRemoval: Array.<Phaser.Time.TimerEvent>;

					boot(): void;

					addEvent(): Phaser.Time.TimerEvent;

					delayedCall(): any;

					clearPendingEvents(): Phaser.Time.Clock;

					removeAllEvents(): Phaser.Time.Clock;

					preUpdate(): void;

					update(): void;

					shutdown(): void;

					destroy(): void;

			}

			namespace Clock {
			}

			class TimerEvent {
					delay: number;

					repeat: number;

					repeatCount: number;

					loop: boolean;

					callback: any;

					callbackScope: any;

					args: any[];

					timeScale: number;

					startAt: number;

					elapsed: number;

					paused: boolean;

					hasDispatched: boolean;

					reset(): Phaser.Time.TimerEvent;

					getProgress(): number;

					getOverallProgress(): number;

					getRepeatCount(): number;

					getElapsed(): number;

					getElapsedSeconds(): number;

					remove(): void;

					destroy(): void;

			}

			namespace TimerEvent {
			}

	}

	class Tweens {
			CREATED: number;

			INIT: number;

			OFFSET_DELAY: number;

			OFFSET_DELAY: number;

			PLAYING_FORWARD: number;

			PLAYING_FORWARD: number;

			PLAYING_BACKWARD: number;

			HOLD_DELAY: number;

			REPEAT_DELAY: number;

			COMPLETE: number;

			PENDING_ADD: number;

			LOOP_DELAY: number;

			LOOP_DELAY: number;

			ACTIVE: number;

			COMPLETE_DELAY: number;

			PENDING_REMOVE: number;

			REMOVED: number;

			static TweenData(): Phaser.Tweens.TweenData;

	}

	namespace Tweens {
			class Builders {
					static NumberTweenBuilder(): Phaser.Tweens.Tween;

					static TimelineBuilder(): Phaser.Tweens.Timeline;

					static TweenBuilder(): Phaser.Tweens.Tween;

			}

			namespace Builders {
			}

			class Timeline {
					manager: Phaser.Tweens.TweenManager;

					isTimeline: boolean;

					data: any[];

					totalData: number;

					useFrames: boolean;

					timeScale: number;

					loop: number;

					loopDelay: number;

					loopCounter: number;

					completeDelay: number;

					countdown: number;

					state: number;

					_pausedState: number;

					paused: boolean;

					elapsed: number;

					totalElapsed: number;

					duration: number;

					progress: number;

					totalDuration: number;

					totalProgress: number;

					setTimeScale(): Phaser.Tweens.Timeline;

					getTimeScale(): number;

					isPlaying(): boolean;

					add(): Phaser.Tweens.Timeline;

					queue(): Phaser.Tweens.Timeline;

					hasOffset(): boolean;

					isOffsetAbsolute(): boolean;

					isOffsetRelative(): boolean;

					getRelativeOffset(): number;

					calcDuration(): void;

					init(): boolean;

					resetTweens(): void;

					setCallback(): Phaser.Tweens.Timeline;

					play(): void;

					nextState(): void;

					update(): boolean;

					stop(): void;

					pause(): Phaser.Tweens.Timeline;

					resume(): Phaser.Tweens.Timeline;

					hasTarget(): boolean;

					destroy(): void;

					eventNames(): any[];

					listeners(): any[];

					listenerCount(): number;

					emit(): Boolean;

					on(): EventEmitter;

					addListener(): EventEmitter;

					once(): EventEmitter;

					removeListener(): EventEmitter;

					off(): EventEmitter;

					removeAllListeners(): EventEmitter;

			}

			namespace Timeline {
			}

			class Tween {
					parent: Phaser.Tweens.TweenManager;

					parentIsTimeline: boolean;

					data: Array.<Phaser.Tweens.TweenData>;

					totalData: number;

					targets: Array.<object>;

					totalTargets: number;

					useFrames: boolean;

					timeScale: number;

					loop: number;

					loopDelay: number;

					loopCounter: number;

					completeDelay: number;

					countdown: number;

					offset: number;

					calculatedOffset: number;

					state: number;

					_pausedState: number;

					paused: boolean;

					elapsed: number;

					totalElapsed: number;

					duration: number;

					progress: number;

					totalDuration: number;

					totalProgress: number;

					callbacks: any;

					getValue(): any;

					setTimeScale(): Phaser.Tweens.Tween;

					getTimeScale(): number;

					isPlaying(): boolean;

					isPaused(): boolean;

					hasTarget(): boolean;

					updateTo(): Phaser.Tweens.Tween;

					restart(): void;

					calcDuration(): void;

					init(): boolean;

					nextState(): void;

					pause(): Phaser.Tweens.Tween;

					play(): void;

					resetTweenData(): void;

					resume(): Phaser.Tweens.Tween;

					seek(): void;

					setCallback(): Phaser.Tweens.Tween;

					stop(): void;

					update(): boolean;

					setStateFromEnd(): number;

					setStateFromStart(): number;

					updateTweenData(): boolean;

			}

			namespace Tween {
			}

			class TweenManager {
					scene: Phaser.Scene;

					systems: Phaser.Scenes.Systems;

					timeScale: number;

					_add: any[];

					_pending: any[];

					_active: any[];

					_destroy: any[];

					_toProcess: number;

					boot(): void;

					createTimeline(): Phaser.Tweens.Timeline;

					timeline(): Phaser.Tweens.Timeline;

					create(): Phaser.Tweens.Tween;

					add(): Phaser.Tweens.Tween;

					existing(): Phaser.Tweens.TweenManager;

					addCounter(): Phaser.Tweens.Tween;

					preUpdate(): void;

					update(): void;

					makeActive(): Phaser.Tweens.TweenManager;

					each(): void;

					getAllTweens(): Array.<Phaser.Tweens.Tween>;

					getGlobalTimeScale(): number;

					getTweensOf(): Array.<Phaser.Tweens.Tween>;

					isTweening(): boolean;

					killAll(): Phaser.Tweens.TweenManager;

					killTweensOf(): Phaser.Tweens.TweenManager;

					pauseAll(): Phaser.Tweens.TweenManager;

					resumeAll(): Phaser.Tweens.TweenManager;

					setGlobalTimeScale(): Phaser.Tweens.TweenManager;

					shutdown(): void;

					destroy(): void;

			}

			namespace TweenManager {
			}

	}

	class Utils {
			static getTintFromnumbers(): number;

			static getTintAppendnumberAlpha(): number;

			static getTintAppendnumberAlphaAndSwap(): number;

			static getnumbersFromUintRGB(): number;

			static getComponentCount(): number;

			static NOOP(): void;

	}

	namespace Utils {
			class Array {
					static NumberArray(): Array.<number>;

					static NumberArrayStep(): Array.<number>;

					static QuickSelect(): void;

					static Range(): any;

					static RemoveRandomElement(): any;

					static RotateLeft(): any;

					static RotateRight(): any;

					static Shuffle(): any[];

					static SpliceOne(): any;

			}

			namespace Array {
					class Matrix {
							static MatrixToString(): string;

							static ReverseColumns(): any[];

							static ReverseRows(): any[];

							static Rotate180(): any[];

							static RotateLeft(): any[];

							static RotateMatrix(): any[];

							static RotateRight(): any[];

							static TransposeMatrix(): any[];

					}

					namespace Matrix {
					}

			}

			class Object {
					static IsPlainObject(): boolean;

					static Merge(): any;

					static MergeRight(): any;

			}

			namespace Object {
			}

			class String {
					static Pad(): string;

					static ReverseString(): string;

					static UppercaseFirst(): string;

			}

			namespace String {
			}

	}

}

