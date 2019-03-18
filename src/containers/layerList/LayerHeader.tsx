import * as React from 'react';
import EditorTitle from '../../components/shared/EditorTitle';

interface IProps {
    route: string;
    name: string | undefined;
    onConfirm: (name: string) => void;
}

const LayerHeader: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div className="pb3">
            <div className="flex-parent">
                <div className="flex-child flex-child--no-shrink">
                    <EditorTitle
                        route="/"
                        name={props.name}
                        onConfirm={props.onConfirm}
                    />
                </div>
            </div>
        </div>
    );
};

export default LayerHeader;
