import * as React from 'react';

interface IProps {
    test: string;
}

export default class LayerEditor extends React.Component<IProps> {
    public render() {
        return (
            <div
                id="card-style-layers"
                className="absolute top left bottom w360 flex-parent flex-parent--column 
                shadow-darken10 bg-gray-faint border-l border--gray-light"
                style={{ marginLeft: '210px' }}
            />
        );
    }
}
