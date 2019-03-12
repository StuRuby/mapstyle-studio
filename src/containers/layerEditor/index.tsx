import * as React from 'react';
import StyleLayerName from '../../components/layers/StyleLayerName';

interface IProps {
    test?: string;
}

export default class LayerEditor extends React.Component<IProps> {
    public render() {
        return (
            <div
                id="card-style-layers"
                className="absolute top left bottom w360 flex-parent flex-parent--column 
                shadow-darken10 bg-gray-faint border-l border--gray-light"
                style={{ marginLeft: '210px' }}
            >
                <div
                    className="flex-child flex-child--no-shrink flex-parent flex-parent--space-between-main 
                               flex-parent--end-cross bg-gray-faint mx12 border-b border--gray-light"
                >
                    <div className="flex-child flex-child--grow py6 my3 wmin0">
                        <StyleLayerName />
                    </div>
                </div>
            </div>
        );
    }
}
