import * as React from 'react';

interface IProps {
    test: string;
}

export default class Map extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    public render() {
        return (
            <div
                id="map"
                className="absolute top left right bottom fill-canvas mapboxgl-map"
            />
        );
    }
}
