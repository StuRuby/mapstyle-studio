import * as React from 'react';
import TablistItem from './TablistItem';

export default class Tablist extends React.Component<{}> {
    public render() {
        return (
            <div className="mb-neg1 flex-parent flex-parent--center-cross">
                <TablistItem />
                <TablistItem />
                <TablistItem />
                <TablistItem />
            </div>
        );
    }
}
