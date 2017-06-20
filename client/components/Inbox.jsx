import React from 'react';
import { Router } from 'react-router';
import messages from '../../messages.json';


class Inbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages
        }
    }
    render() {
        const { messages } = this.state; 
        return (
            <div className="InboxPage">
                <div className="messages">
                    {
                        messages.map(message => 
                            <div className="" key={ message.id }>
                                { message.senderName } <br />
                                { message.senderEmail } <br />
                                { message.subject } <br />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default Inbox;