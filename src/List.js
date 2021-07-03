import React from 'react'

class List extends React.Component {
    render() {
        const numbers = this.props.numbers;
        return (
            <div>
                <h1>리스트와 키</h1>
                <ul>{
                    numbers.map((number) => <li key={number.toString()}>{number}</li>)
                }</ul>
            </div>
        );
    }
}   

export default List;