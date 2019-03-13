/// <reference types="mapbox-gl" />

declare module '@mapbox/mapbox-gl-style-spec'{
    export function format(style: mapboxgl.Style, space: number): string;

    export function migrate(style: mapboxgl.Style): mapboxgl.Style;
    
    export function composite(style: mapboxgl.Style): mapboxgl.Style;
    
    export function diff(before: mapboxgl.Style, after: mapboxgl.Style): any[];
    
    export function ValidationError(
        key: any,
        value: any,
        message: any,
        identifier: any,
    ): any;
    
    export function ParsingError(error: Error): void;
    
    export function createFilter(
        filter: any,
    ): (globalProperties: any, feature: any) => any;
    
    export function Color(r: number, g: number, b: number, a: number): void;
    
    export function validate(
        style: mapboxgl.Style,
        styleSpec: mapboxgl.Style,
    ): any[];
}


