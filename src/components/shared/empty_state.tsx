/**
 * empty_state shows while non-layers added
 */

import * as classnames from 'classnames';
import * as React from 'react';

interface IProps {
    className: string;
    addClassName: string;
    message?: string;
    messageClassName: string;
    illustration?: string;
    action?: () => void | string;
}

export default class EmptyState extends React.Component<IProps> {
    public static defaultProps: Partial<IProps> = {
        addClassName: '',
        className:
            'border border--gray-light border--dash py12 px12 round color-gray',
        messageClassName: '',
    };
    public render() {
        const {
            className,
            message,
            addClassName,
            messageClassName,
        } = this.props;
        return (
            <div className={`${className} ${addClassName}`}>
                {message && <div className={messageClassName}>{message}</div>}
            </div>
        );
    }
}
