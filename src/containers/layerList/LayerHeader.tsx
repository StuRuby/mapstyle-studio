import * as React from 'react';
import EditorBackButton from '../../components/shared/EditorBackButton';

interface IProps {
    test?: string;
}

export default class LayerHeader extends React.Component<IProps> {
    public render() {
        return (
            <div className="pb3">
                <div className="flex-parent">
                    <div className="flex-child flex-child--no-shrink">
                        <EditorBackButton route="/" />
                    </div>
                    <div className="flex-child flex-child--grow">
                        <div className="w-full cursor-pointer">
                            <div className="txt-fancy flex-parent flex-parent--space-between-main">
                                <div className="flex-parent flex-parent--center-cross flex-child flex-child--grow">
                                    <div
                                        data-test=""
                                        className="txt-truncate"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
