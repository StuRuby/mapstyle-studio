import * as React from 'react';
import EditorBackButton from './EditorBackButton';
import RenameInput from './RenameInput';

interface IProps {
    route: string;
    name: string | undefined;
    onConfirm: (name: string) => void;
}

const EditorTitle: React.FunctionComponent<IProps> = (props: IProps) => {
    return (
        <div className=" flex-parent">
            <div className="flex-child flex-child--no-shrink">
                <EditorBackButton route={props.route} />
            </div>
            <div className="flex-child flex-child--grow">
                <RenameInput labelName={props.name}  />
            </div>
        </div>
    );
};

export default EditorTitle;
