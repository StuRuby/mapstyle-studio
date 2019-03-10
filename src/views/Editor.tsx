import * as React from 'react';
import LayerEditor from '../containers/layerEditor';
import LayerList from '../containers/layerList';
import Map from '../containers/map';

const Editor: React.StatelessComponent<{}> = () => {
    return (
        <div
            id="container"
            className="bg-white select-none absolute top right bottom left"
        >
            <Map />
            <div>
                <LayerList />
                <LayerEditor />
            </div>
        </div>
    );
};

export default Editor;
