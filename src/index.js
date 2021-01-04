import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

const Root = () => (
    <Router>
        <switch>
            <Route path="/" component={App} />
        </switch>
    </Router>
   
);


ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
