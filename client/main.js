import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router';
import Timer from './components/Timer.jsx';
import Inbox from './components/InboxPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import Message from './components/Message.jsx';
import './App.less';

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <div className='menu-bar'>
                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/timer'>Timer</Link>
                    </div>

                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/about'>About</Link>
                    </div>

                    <div className='menu-item'>
                        <Link className='menu-item-link' to='/inbox'>Inbox</Link>
                    </div>
                </div>

                <div className='content'>
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
            <Route path = '/inbox' component = {Inbox}>
                <Route path='/inbox/messages/:messageId' component = {Message} />
            </Route>
            <Route path = '/about' component = {AboutPage} />
        </Route>
    </Router>,
    document.getElementById('mount-point')
);