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

