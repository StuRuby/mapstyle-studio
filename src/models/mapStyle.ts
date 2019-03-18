import { Style } from 'mapbox-gl';
import { EmptyState, indexOfLayer, reNameStyle } from '../utils/style';

export default {
    state: EmptyState,
    reducers: {
        rename(state: Style, name: string) {
            return reNameStyle(state, name);
        },
    },
    effects: {},
};
