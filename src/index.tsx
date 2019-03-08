import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import '@mapbox/mbx-assembly/dist/assembly.js';
import 'antd/dist/antd.css';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
