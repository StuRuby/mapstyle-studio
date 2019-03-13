import { migrate } from '@mapbox/mapbox-gl-style-spec';
import * as React from 'react';
import EditorTitle from '../../components/shared/EditorTitle';

interface IProps {
    test?: string;
}

export default class LayerHeader extends React.Component<IProps> {
    public render() {
        return (
            <div className="pb3">
                <div className="flex-parent">
                    <div className="flex-child flex-child--no-shrink">
                        <EditorTitle route="/" />
                    </div>
                </div>
            </div>
        );
    }
}
