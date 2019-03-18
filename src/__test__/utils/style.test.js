import { groupLayers, renameLayerGroup } from '../../utils/style';
import exampleStyle from '../mock/example.style';

let groupedStyle = {};
describe('style utils', () => {
    it('group Layers function', () => {
        groupedStyle = groupLayers(
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

    it('rename group layer to test_group', () => {
        groupedStyle = renameLayerGroup(
            groupedStyle,
            'test_group_id',
            'test_group'
        );

        expect(
            groupedStyle.layers
                .filter(layer => layer.metadata && layer.metadata.mapbox_group)
                .every(layer => layer.metadata.mapbox_group === 'test_group')
        );
    });
});
