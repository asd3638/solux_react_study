import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            IsGoing: true,
            NumbersOfGuests: 2,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        alert('IsGoing: ' + this.state.IsGoing + '\nNumbers Of Guests: ' + this.state.NumbersOfGuests);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>폼</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>IsGoing: </label>
                    <input 
                        name='IsGoing'
                        type='checkbox'
                        checked={this.state.IsGoing}
                        onChange={this.handleChange}>
                    </input>

                    <label>Numbers of guests:</label>
                    <input
                        name='NumbersOfGuests'
                        type='number'
                        value={this.state.NumbersOfGuests}
                        onChange={this.handleChange}
                        >
                    </input>

                    <input type="submit" value="제출"></input>
                </form>
            </div>
        );
    }
}

export default Form;