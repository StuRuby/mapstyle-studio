import * as React from 'react';
import EditorBackButton from './EditorBackButton';
import RenameInput from './RenameInput';

interface IProps {
    route: string;
    // name: string;
    // onConfirm: () => void;
}

const EditorTitle: React.StatelessComponent<IProps> = (props: IProps) => {
    return (
        <div className=" flex-parent">
            <div className="flex-child flex-child--no-shrink">
                <EditorBackButton route={props.route} />
            </div>
            <div className="flex-child flex-child--grow">
                <RenameInput 
                    labelName='卡电掌门人，德伟长老'
                />
            </div>
        </div>
    );
};

export default EditorTitle;