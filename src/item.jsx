import React, {Component} from "react";
import "./App.css"

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: "",
            massage: ""
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            });
        }
        else {
            alert("Error");
        }
    }

    reset = () => {
        this.setState({count: this.state.count = 0})
    }

    prompt = () => {
        let factor = parseFloat(prompt("сан жаз"))

        let newCount = this.state.count * factor;
        this.setState({
            count: newCount
        })
    }

    handleChange = (event) => {
        this.setState({text: event.target.value});
    }

    send = () => {
        this.setState({massage: this.state.text});
        this.state.text = ""
    }

    handlePrass = (event) => {
        if(event.keyCode === 13) {
            this.send()
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Hello My Component</h2>
                <div className="content">
                    <div className="calculator">
                        <h3>{this.state.count}</h3>
                        <div className="wrapper">
                            <button onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                            <button onClick={this.prompt}>prompt</button>
                            <button onClick={this.reset}>reset</button>
                            <input onKeyDown={this.handlePrass} onChange={this.handleChange} type="text" placeholder="message..." value={this.state.text}  />
                            <button onClick={this.send}>Send</button>
                        </div>
                    <div className="item">
                        <div>{this.state.massage}</div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyComponent