import * as React from 'react';
import LayerBrowseList from './LayerBrowseList';
import LayerFilterActions from './LayerFilterActions';
import LayerHeader from './LayerHeader';
import LayerSelectedActions from './LayerSelectedActions';

interface IProps {
    test?: string;
}

export default class LayerList extends React.Component<IProps> {
    public render() {
        return (
            <div
                id="card-style-layers-pane"
                className=" absolute top left bottom bg-white flex-parent flex-parent--column "
                style={{ width: '210px' }}
            >
                <div className="flex-child flex-child--no-shrink my3 pt6 pb6 mx12 border-b border--gray-light">
                    <LayerHeader />
                    <div className="mt6 mb6 pt6 border-t border--gray-light">
                        <LayerSelectedActions />
                    </div>
                    <div>
                        <LayerFilterActions />
                    </div>
                </div>
                <div className="flex-child flex-child--grow scroll-auto scroll-styled">
                    <LayerBrowseList />
                </div>
            </div>
        );
    }
}
