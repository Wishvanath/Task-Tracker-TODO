import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, HashRouter as Router } from 'react-router-dom';
import TaskDetails from './component/taskDetails';
import TaskUpdate from './component/taskUpdate';
import TestTask from './component/testTask';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path ="/app" component={App} />
            <Route exact path = "/" component ={TaskDetails} />
            <Route exact path ="/task-update/:task_id" component={TaskUpdate} />
            <Route exact path ="/test" component={TestTask} />
        </div>
    </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
