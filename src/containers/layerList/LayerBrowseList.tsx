import * as React from 'react';
import StyleLayerGroup from '../../components/layers/StyleLayerGroup';

interface IProps {}

export default class LayerBrowseList extends React.Component<IProps> {
    public render() {
        return (
            <div>
                <StyleLayerGroup />
                <StyleLayerGroup />
                <StyleLayerGroup />
                <StyleLayerGroup />
                <StyleLayerGroup />
                <StyleLayerGroup />
            </div>
        );
    }
}
