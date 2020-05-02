import React, { Component } from 'react';
import {proxy} from '../proxy';
import {LeftPane} from './leftpane';
import {RightPane} from './rightpane';
import {ConversationDto} from '../interfaces/chat';

export class Main extends Component {

    state = { selectedConversation: undefined as (ConversationDto | undefined) };
    
    render() {
        return (
            <div className="main row">
                <LeftPane
                    inbox={proxy.inbox!}
                    selectedConversation={this.state.selectedConversation}
                    onSelect={c => this.setState({ selectedConversation: c })} />
                <RightPane conversation={this.state.selectedConversation}
                onBack={ () => this.setState( { selectedConversation: undefined } ) } />
            </div>
        );
    }
}