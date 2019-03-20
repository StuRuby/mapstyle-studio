import { Icon, Input, Tooltip } from 'antd';
import * as React from 'react';

enum InputSize {
    Large = 'large',
    Default = 'default',
    Small = 'small',
}

interface IProps {
    labelName: string;
    isValidName: () => void;
    inputIsSmall: InputSize;
    onConfirm: (name: string) => void;
    // restrictEditToIcon: boolean;
    labelTest: string;
    confirmTest: string;
    triggerTest?: string;
    labelContent?: any;
    showEditIcon?: boolean;
}

interface IState {
    renameMode: boolean;
    newName: string;
}

export default class RenameInput extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        confirmTest: '',
        inputIsSmall: InputSize.Small,
        labelTest: '',
        // restrictEditToIcon: false,
    };
    constructor(props: IProps) {
        super(props);
        this.state = {
            newName: '',
            renameMode: false,
        };
    }

    public toggleRenameMode = (e: React.FormEvent) => {
        e.stopPropagation();
        const { renameMode } = this.state;
        const { labelName } = this.props;
        this.setState({
            renameMode: !renameMode,
            newName: labelName,
        });
    }
    public render() {
        const { inputIsSmall } = this.props;

        const cursorPointer = !this.state.renameMode ? 'cursor-pointer' : '';
        return (
            <div className={`w-full ${cursorPointer}`}>
                {this.state.renameMode ? (
                    <Input
                        size={InputSize.Small}
                        defaultValue={this.props.labelName}
                        addonAfter={
                            <Icon
                                type="check"
                                onClick={this.toggleRenameMode}
                            />
                        }
                        onPressEnter={this.toggleRenameMode}
                    />
                ) : (
                    <div
                        className={`${
                            this.props.inputIsSmall ? 'txt-fancy' : ''
                        } flex-parent flex-parent--space-between-main`}
                        onClick={this.toggleRenameMode}
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
                    </div>
                )}
            </div>
        );
    }
}
