import * as React from 'react';

import { Timeline } from 'react-twitter-widgets'

interface State {
    twitterId: string,
    inputField: string
}

interface Props {
    twitterId: string,
    inputField: string,
    refreshData: any
}


export class TwitterFeed extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            twitterId: this.props.twitterId,
            inputField: this.props.twitterId
        };
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(event: any, onBlur: boolean) {
        if (!onBlur)
            this.setState({ inputField: event.target.value });
        else {
            this.setState({ twitterId: event.target.value });
            this.props.refreshData(event.target.value)
        }

    }
    render() {
        return (
            <div>
                <input type="text" className = "input-margin"  value={this.state.inputField} onChange={() => this.onChangeInput(event, false)} onBlur={() => this.onChangeInput(event, true)} />
                <br/>
                <div className="feed-border">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: this.state.twitterId
                    }}
                    options={{
                        username: this.state.twitterId,
                        height: '400'
                    }}
                />
                </div>
            </div>
        );
    }
}
