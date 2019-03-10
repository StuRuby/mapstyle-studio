import * as React from 'react';
import { HashRouter as Routes, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter: React.StatelessComponent<{}> = () => (
    <Routes>
        <div className="fixed top right bottom left">
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </div>
    </Routes>
);

export default AppRouter;
