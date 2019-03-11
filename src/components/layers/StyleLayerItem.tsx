import * as React from 'react';

interface IProps {}

export default class StyleLayerItem extends React.PureComponent<IProps> {
    public render() {
        return (
            <div>
                <div
                    role="button"
                    className="flex-parent flex-parent--center-cross flex-parent--space-between-main 
                px12 h24 txt-normal border-t txt-truncate relative transition color-gray-dark 
                w-full bg-gray-light-on-active bg-darken5-on-hover color-blue-on-hover txt-xs px3 cursor-pointer 
                py3 block pl30 border--white"
                >
                    <div
                        className="flex-child flex-child--grow"
                        title="state-label"
                        data-test="layer_item-state"
                    >
                        <div className="flex-parent flex-parent--center-cross">
                            <div className="relative flex-child flex-child--no-shrink mr3 w12 h12">
                                <div className="h12 w12">
                                    <div className="fill-canvas h12 w12 round scroll-hidden events-none">
                                        <div
                                            data-test="color_value_preview-swatch"
                                            className="round border h12 w12 border--darken50"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-child flex-child--grow txt-truncate">
                                state-label
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
