import * as React from 'react';
import EmptyState from './shared_component/empty_state';

const App: React.StatelessComponent<{}> = () => (
    <div>
        <EmptyState
            addClassName="mt12 mx12 txt-xs"
            message="您还没有添加图层，请点击新建图层增加您的第一个图层"
        />
    </div>
);

export default App;
