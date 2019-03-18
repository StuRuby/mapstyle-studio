import { get, set } from 'lodash';
import { Layer, Style } from 'mapbox-gl';

export const EmptyState: Style = {
    version: 8,
    sources: {},
    layers: [],
};

type indexOfLayer = number | null;
export const indexOfLayer: (
    layers: Layer[],
    layerId: string,
) => indexOfLayer = (layers: Layer[], layerId: string) => {
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].id === layerId) {
            return i;
        }
    }
    return null;
};

/**
 * 重命名
 * @param style
 * @param name
 */
export const reNameStyle: (style: Style, name: string) => Style = (
    style,
    name,
) => {
    return {
        ...style,
        name,
    };
};

/**
 * Layer group
 */

export const groupLayers: (
    style: Style,
    layerIds: string[],
    groupId: string,
    name: string,
) => Style = (style, layerIds, groupId, name) => {
    let styleSheet = { ...style };
    layerIds.forEach((id) => {
        const index = indexOfLayer(style.layers || [], id);
        if (index == null) return;
        styleSheet = set(
            styleSheet,
            `layers[${index}][metadata][mapbox_group]`,
            groupId,
        );
    });
    return styleSheet;
};

export const renameLayerGroup: (
    style: Style,
    groupId: string,
    name: string,
) => Style = (style, groupId, name) => {
    const styleSheet = { ...style };
    const layers = styleSheet.layers || [];

    layers.map((layer: Layer, index: number) => {
        if (layer.metadata && layer.metadata.mapbox_group === groupId) {
            layer.metadata.mapbox_group = name;
            return layer;
        }
        return layer;
    });
    set(styleSheet, 'layers', layers);
    return styleSheet;
};
