import { Style } from 'mapbox-gl';
import { EmptyState, indexOfLayer, reNameStyle } from '../utils/style';

const TestStyle = Object.assign(EmptyState, { name: 'shixy' });

export default {
    state: TestStyle,
    reducers: {
        rename(state: Style, name: string) {
            return reNameStyle(state, name);
        },
    },
    effects: {},
};
