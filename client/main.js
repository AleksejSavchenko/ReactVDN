import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import Timer from './components/Timer.jsx';
import Inbox from './components/Inbox.jsx';
import './App.less';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="nav-menu">
                    <div className="menu-item">
                        <Link to="/timer">Timer</Link>
                    </div>

                    <div className="menu-item">
                        <Link to="/inbox">Inbox</Link>
                    </div>
                </div>
                <div className="content">
                    Some App
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path = '/' component = {App}>
            <Route path = '/timer' component = {Timer} />
            <Route path = '/inbox' component = {Inbox} />
        </Route>
    </Router>,
    document.getElementById('mount-point')
);