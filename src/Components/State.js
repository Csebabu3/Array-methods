import React from 'react'

class State extends React.Component {
    state = {
        count: 0
    }
    Increment = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("show the value")
        })
    }
    render(){
    return (
        <div>
            <h1>state in React js</h1>
            <h>increases the value{this.state.count}</h>
            <button onClick={this.Increment}>Click me</button>
        </div>
    )
    }
}
export default State;
