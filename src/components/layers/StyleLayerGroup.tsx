import * as React from 'react';
import LayerGroupName from './LayerGroupName';
import StyleLayerItem from './StyleLayerItem';

interface IProps {}

export default class StyleLayerGroup extends React.PureComponent<IProps> {
    public render() {
        return (
            <div className="w-full txt-truncate txt-xs">
                <LayerGroupName />
                <StyleLayerItem />
                <StyleLayerItem />
                <StyleLayerItem />
                <StyleLayerItem />
            </div>
        );
    }
}
