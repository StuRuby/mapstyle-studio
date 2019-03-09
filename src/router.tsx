import * as React from 'react';
import { HashRouter as Routes, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter: React.StatelessComponent<{}> = () => (
    <Routes>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </Routes>
);


export default AppRouter;