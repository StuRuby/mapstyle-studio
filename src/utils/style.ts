import { set } from 'lodash';
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
    set(styleSheet, `metadata["mapbox:groups"][${groupId}]`, 'Group');
    layerIds.forEach((id) => {
        const index = indexOfLayer(style.layers || [], id);
        styleSheet = set(
            styleSheet,
            `layers[${index}][metadata][mapbox:group]`,
            groupId,
        );
    });
    return styleSheet;
};

// export const renameLayerGroup: (
//     style: Style,
//     groupId: string,
//     name: string,
// ) => Style = (style, groupId, name) => {

// };
