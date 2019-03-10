import { Icon, Tooltip } from 'antd';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    route: string;
}

const iconStyle = {
    fontSize: '18px',
    height: '24px',
    width: '18px',
};

const EditorBackButton: React.StatelessComponent<IProps> = (props: IProps) => {
    return (
        <Tooltip
            placement="right"
            title={() => <span className="unselectable">返回</span>}
        >
            <Link className=" ml-neg6 block link" to={props.route}>
                <Icon type="left" style={iconStyle} />
                <Icon type="github" style={iconStyle} />
            </Link>
        </Tooltip>
    );
};

export default EditorBackButton;
