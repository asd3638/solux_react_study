import React from 'react';

class Greeting extends React.Component {
    state = {
        LoggedIn: this.props.LoggedIn
    }
    render() {
        return (
            <div>
                <h1>조건부 렌더링</h1>
                {
                    this.state.LoggedIn && <div>LoggedIn</div>
                }
            </div>
        );
    } 
}

export default Greeting