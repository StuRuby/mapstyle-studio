import * as React from 'react';

interface IProps {
    test: string;
}

export default class LayerList extends React.Component<IProps> {
    public render() {
        return (
            <div
                id="card-style-layers-pane"
                className=" absolute top left bottom bg-white flex-parent flex-parent--column "
                style={{ width: '210px' }}
            >
            
            </div>
        );
    }
}
