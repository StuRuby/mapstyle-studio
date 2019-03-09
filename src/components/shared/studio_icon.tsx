import * as React from 'react';

interface IProps {
    name: string;
    size: number;
    inline: boolean;
    passthroughProps: object;
    themeIcon?: string;
}

export default class StudioIcon extends React.Component<IProps> {
    public render() {
        return <div />;
    }
}
