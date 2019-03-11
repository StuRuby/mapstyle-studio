import * as React from 'react';

interface IProps {}

export default class LayerFilterActions extends React.Component<IProps> {
    public render() {
        return (
            <div className="txt-xs flex-parent flex-parent--center-cross flex-parent--space-between-main">
                <div className="flex-child unselectable">共有122个图层</div>
                <div className="flex-child py3">
                    {/* Here is for filter button */}
                </div>
            </div>
        );
    }
}
