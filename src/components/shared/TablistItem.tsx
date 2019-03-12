import * as React from 'react';

export default class TablistItem extends React.Component<{}> {
    public render() {
        const tabBtnClass =
            'border-b border--transparent border--gray-dark-on-active ' +
            'flex-child txt-truncate link link--gray h36 txt-xs is-active ml12';
        return (
            <button type="button" className={tabBtnClass}>
                tab
            </button>
        );
    }
}
