import * as React from 'react';
import TSvg from '../../assets/svgs/T.svg';
import RenameInput from '../shared/RenameInput';

interface IProps {}

export default class StyleLayerName extends React.Component<IProps> {
    public render() {
        return (
            <div className="flex-parent w-full">
                <div className="flex-child flex-child--no-shrink">
                    <TSvg />
                </div>
                <div className="flex-child flex-child--grow">
                    <RenameInput />
                </div>
            </div>
        );
    }
}
