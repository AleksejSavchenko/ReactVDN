import React from 'react';
import messages from '../../messages.json';
import './InboxPage.less';
import MessagePreview from './MessagePreview.jsx';
const PropTypes = require('prop-types');
class Inbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages
        };
    }

    handlePreviewClick(messageId) {
        this.context.router.push(`/inbox/messages/:${messageId}`)
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

                <div className="message-container">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

Inbox.contextTypes = {
    router: PropTypes.object.isRequired
};
export default Inbox;