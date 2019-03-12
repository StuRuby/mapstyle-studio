import * as React from 'react';
import Editor from './views/Editor';

// import TestCount from './TestCount';

interface IProps {
    children: React.ReactNodeArray;
}

const App: React.StatelessComponent<IProps> = (props: IProps) => (
    <div>
        {/* <TestCount/> */}
        <Editor />
    </div>
);

export default App;
