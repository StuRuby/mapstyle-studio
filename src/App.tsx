import * as React from 'react';
import Editor from './views/Editor';
interface IProps {
    children: React.ReactNodeArray;
}

const App: React.StatelessComponent<IProps> = (props: IProps) => (
    <div>
        <Editor />
    </div>
);

export default App;
