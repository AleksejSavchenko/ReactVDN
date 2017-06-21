import React from 'react';
import { Router } from 'react-router';
import messages from '../../messages.json';
import './InboxPage.less';
import MessagePreview from './MessagePreview.jsx';

class Inbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages
        }
    }
    handlePreviewClick(messageId) {
        alert(messageId);
    }
    render() {
        const { messages } = this.state; 
        return (
            <div className="InboxPage">
                <div className="messages">
                    {
                        messages.map(message => 
                            <MessagePreview 
                                key = { message.id }
                                title = { message.subject }
                                senderName = { message.senderName }
                                onClick={this.handlePreviewClick.bind(null, message.id)}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Inbox;