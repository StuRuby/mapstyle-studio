import * as React from 'react';

interface IProps {
    children: React.ReactNodeArray;
}

const App: React.StatelessComponent<IProps> = (props: IProps) => (
    <div>
        <div
            className="fixed top right bottom left"
            style={{ background: 'gray' }}
        >
            {props.children}
        </div>
    </div>
);

export default App;
