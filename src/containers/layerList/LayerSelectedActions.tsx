import { Icon, Tooltip } from 'antd';
import * as React from 'react';


interface IProps {
    // onAddNewLayer: () => void;
    // onDuplicate: () => void;
    // onToggleGroup: () => void;
    // onToggleVisibility: () => void;
    // onDelete: () => void;
    // selectedLayers: any;
    // layersAreFiltered: boolean;
}

export default class LayerSelectedActions extends React.Component<IProps> {
    public render() {
        return (
            <div className="flex-parent flex-parent--center-cross">
                <div className="txt-xs flex-child flex-child--grow mr12">
                    <Tooltip placement="top" title="添加图层">
                        <button
                            type="button"
                            className="btn btn--gray btn--s round px6 w-full"
                        >
                            <span className="flex-parent flex-parent--center-cross">
                                <span className="flex-child">
                                    <Icon type="file-add" theme="filled" />
                                </span>
                                <span className="flex-child">添加图层</span>
                            </span>
                        </button>
                    </Tooltip>
                </div>
                <div className="flex-child flex-child--no-shrink mr-neg6">
                    <div className="flex-parent">
                        <Tooltip placement="top" title="复制图层">
                            <button
                                type="button"
                                className="btn bg-transparent link link--gray txt-xs py3 px3"
                            >
                                <Icon type="copy" theme="filled" />
                            </button>
                        </Tooltip>
                        <Tooltip placement="top" title="添加分组">
                            <button
                                type="button"
                                className="btn bg-transparent link link--gray txt-xs py3 px3 px3"
                            >
                                <Icon type="folder-open" theme="filled" />
                            </button>
                        </Tooltip>
                        <Tooltip placement="top" title="显示图层">
                            <button
                                type="button"
                                className="btn bg-transparent link link--gray txt-xs py3 px3 px3"
                            >
                                <Icon type="eye" theme="filled" />
                            </button>
                        </Tooltip>
                        <Tooltip placement="top" title="删除图层">
                            <button
                                type="button"
                                className="btn bg-transparent link link--gray txt-xs py3 px3 px3"
                            >
                                <Icon type="delete" theme="filled" />
                            </button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        );
    }
}
