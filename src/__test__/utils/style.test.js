import { groupLayers } from '../../utils/style';
import exampleStyle from '../mock/example.style';


describe('style utils', () => {
    it('group Layers function', () => {
        let groupedStyle = groupLayers(
            exampleStyle,
            ['landuse_park', 'building', 'tunnel_minor'],
            'test_group_id',
            'Group'
        );
        const result = groupedStyle.layers.filter(layer => {
            return (
                ['landuse_park', 'building', 'tunnel_minor'].indexOf(
                    layer.id
                ) !== -1
            );
        });

        expect(
            result.every(
                item => item.metadata['[mapbox:group'] === 'test_group_id'
            )
        );
    });
});
