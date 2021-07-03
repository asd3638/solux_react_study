import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.setTime =  this.setTime.bind(this);
    }

    state = {
        date: this.props.date
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.setTime(),
        1000
        );
    }

    setTime() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default Clock;