import { Icon, Input, Tooltip } from 'antd';
import * as React from 'react';

interface IProps {
    labelName: string;
    isValidName: () => void;
    inputIsSmall: boolean;
    onConfirm: () => void;
    restrictEditToIcon: boolean;
    labelTest: string;
    confirmTest: string;
    triggerTest?: string;
    labelContent?: any;
    showEditIcon?: boolean;
}

interface IState {
    renameMode: boolean;
    errorMessage: string;
    newName: string;
    hovered: boolean;
}

export default class RenameInput extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        confirmTest: '',
        inputIsSmall: false,
        labelTest: '',
        restrictEditToIcon: false,
    };
    constructor(props: IProps) {
        super(props);
        this.state = {
            errorMessage: '',
            hovered: false,
            newName: '',
            renameMode: false,
        };
    }

    public render() {
        const { inputIsSmall } = this.props;
        const showEditIcon = this.props.showEditIcon
            ? this.props.showEditIcon
            : this.state.hovered;

        const formConfig = {
            newName: {
                autoFocus: true,
                initialValue: this.state.newName,
                // onBlur:this.onConfirm,
            },
        };
        const cursorPointer =
            !this.state.renameMode && this.props.restrictEditToIcon
                ? 'cursor-pointer'
                : '';
        return (
            <div className={`w-full ${cursorPointer}`}>
                {this.state.renameMode ? (
                    <Input />
                ) : (
                    <div
                        className={`${
                            this.props.inputIsSmall ? 'txt-fancy' : ''
                        } flex-parent flex-parent--space-between-main`}
                    >
                        <div className="lex-parent flex-parent--center-cross flex-child flex-child--grow">
                            <div className="txt-truncate">
                                {this.props.labelName}
                                {this.props.labelContent && (
                                    <span className="txt-normal txt-em ml6">
                                        {this.props.labelContent}
                                    </span>
                                )}
                            </div>
                        </div>
                        {showEditIcon && <Icon type="left" />}
                    </div>
                )}
            </div>
        );
    }
}
