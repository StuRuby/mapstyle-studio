import '@mapbox/mbx-assembly/dist/assembly.js';
import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './router';

ReactDOM.render(<Router />, document.getElementById('root') as HTMLElement);
