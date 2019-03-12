import { Icon } from 'antd';
import * as React from 'react';
import { ReactComponent as TSvg } from '../../assets/svgs/T.svg';

interface IProps {}

export default class LayerGroupName extends React.PureComponent<IProps> {
    public render() {
        return (
            <div>
                <div>
                    <div
                        role="button"
                        className="flex-parent flex-parent--center-cross flex-parent--space-between-main px12
                    h24 txt-normal border-t txt-truncate relative transition color-gray-dark w-full 
                    bg-gray-light-on-active bg-darken5-on-hover color-blue-on-hover txt-xs px3 
                    cursor-pointer py3 block border--white"
                    >
                        <div
                            className="flex-child flex-child--grow"
                            title="country-label"
                            data-test="layer_item-country"
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
                                <TSvg
                                    className="events-none icon flex-child flex-child--no-shrink mr3"
                                    // style={{ width: '18px', height: '18px' }}
                                />
                                <div className="flex-child flex-child--grow txt-truncate">
                                    country-label
                                </div>
                            </div>
                        </div>
                        <div className="cursor-grab">
                            <Icon type="bars" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
