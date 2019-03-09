import * as React from 'react';

interface IProps {
    children: React.ReactNode;
    onClick: (e: KeyboardEvent) => void;
}

export default class DivButton extends React.Component<IProps> {
    public render() {
        return (
            <div tabIndex={0} role="button">
                {this.props.children}
            </div>
        );
    }
}
