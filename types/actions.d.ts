/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function Angle(items: any, value: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param callback - [description]
 * @param thisArg - [description]
 */
declare function Call(items: any, callback: Function, thisArg: any): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param compare - [description]
 * @param index - [description]
 */
declare function GetFirst(items: any, compare: any, index: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param options - [description]
 */
declare function GridAlign(items: any, options: any): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function IncAlpha(items: any, value: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function IncX(items: any, value: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param x - [description]
 * @param y - [description]
 */
declare function IncXY(items: any, x: number, y: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function IncY(items: any, value: number): any;

declare namespace Actions {
}

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param circle - [description]
 * @param [startAngle=0] - [description]
 * @param [endAngle=6.28] - [description]
 */
declare function PlaceOnCircle(items: any, circle: Phaser.Geom.Circle, startAngle?: number, endAngle?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param ellipse - [description]
 * @param [startAngle=0] - [description]
 * @param [endAngle=6.28] - [description]
 */
declare function PlaceOnEllipse(items: any, ellipse: Phaser.Geom.Ellipse, startAngle?: number, endAngle?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param line - [description]
 */
declare function PlaceOnLine(items: any, line: Phaser.Geom.Line): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param rect - [description]
 * @param [shift=1] - [description]
 */
declare function PlaceOnRectangle(items: any, rect: Phaser.Geom.Rectangle, shift?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param triangle - [description]
 * @param [stepRate=1] - [description]
 */
declare function PlaceOnTriangle(items: any, triangle: Phaser.Geom.Triangle, stepRate?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param key - [description]
 * @param [startFrame] - [description]
 */
declare function PlayAnimation(items: any, key: string, startFrame?: string | number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param circle - [description]
 */
declare function RandomCircle(items: any, circle: Phaser.Geom.Circle): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param ellipse - [description]
 */
declare function RandomEllipse(items: any, ellipse: Phaser.Geom.Ellipse): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param line - [description]
 */
declare function RandomLine(items: any, line: Phaser.Geom.Line): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param rect - [description]
 */
declare function RandomRectangle(items: any, rect: Phaser.Geom.Rectangle): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param triangle - [description]
 */
declare function RandomTriangle(items: any, triangle: Phaser.Geom.Triangle): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function Rotate(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param point - Any any with public `x` and `y` properties.
 * @param angle - The angle to rotate by, in radians.
 */
declare function RotateAround(items: any, point: any, angle: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param point - Any any with public `x` and `y` properties.
 * @param angle - The angle to rotate by, in radians.
 * @param distance - The distance from the point of rotation in pixels.
 */
declare function RotateAroundDistance(items: any, point: any, angle: number, distance: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function ScaleX(items: any, value: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param x - [description]
 * @param y - [description]
 */
declare function ScaleXY(items: any, x: number, y: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function ScaleY(items: any, value: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetAlpha(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function SetBlendMode(items: any, value: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetDepth(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param hitArea - [description]
 * @param hitAreaCallback - [description]
 */
declare function SetHitArea(items: any, hitArea: any, hitAreaCallback: Function): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param x - [description]
 * @param y - [description]
 */
declare function SetOrigin(items: any, x: number, y: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetRotation(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param x - [description]
 * @param y - [description]
 * @param [stepX=0] - [description]
 * @param [stepY=0] - [description]
 */
declare function SetScale(items: any, x: number, y: number, stepX?: number, stepY?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetScaleX(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetScaleY(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param topLeft - [description]
 * @param [topRight] - [description]
 * @param [bottomLeft] - [description]
 * @param [bottomRight] - [description]
 */
declare function SetTint(items: any, topLeft: number, topRight?: number, bottomLeft?: number, bottomRight?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 */
declare function SetVisible(items: any, value: boolean): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetX(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param x - [description]
 * @param y - [description]
 * @param [stepX=0] - [description]
 * @param [stepY=0] - [description]
 */
declare function SetXY(items: any, x: number, y: number, stepX?: number, stepY?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param value - [description]
 * @param [step=0] - [description]
 */
declare function SetY(items: any, value: number, step?: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param x - [description]
 * @param y - [description]
 * @param [direction=0] - [description]
 * @param [output] - [description]
 */
declare function ShiftPosition(items: any, x: number, y: number, direction?: number, output?: Phaser.Math.Vector2 | any): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 */
declare function Shuffle(items: any): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param property - [description]
 * @param min - [description]
 * @param max - [description]
 * @param inc - [description]
 */
declare function SmootherStep(items: any, property: string, min: number, max: number, inc: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param property - [description]
 * @param min - [description]
 * @param max - [description]
 * @param inc - [description]
 */
declare function SmoothStep(items: any, property: string, min: number, max: number, inc: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param property - [description]
 * @param min - [description]
 * @param max - [description]
 * @param inc - [description]
 */
declare function Spread(items: any, property: string, min: number, max: number, inc: number): any;

/**
 * [description]
 * @param items - An array of Game Objects. The contents of this array are updated by this Action.
 */
declare function ToggleVisible(items: any): any;

