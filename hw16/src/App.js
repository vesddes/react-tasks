import './App.css';
import React from "react";

function App() {

    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = { time: (new Date()).toLocaleTimeString(),
            id: 1}

            this.Start = this.Start.bind(this)
            this.Stop = this.Stop.bind(this)
        }

        tick() {
            this.setState({
                time: new Date().toLocaleTimeString(),
                id: this.interval
            })
        }

        Start() {
            if (this.state.id !== 0) return;
            this.interval = setInterval(() => {
                this.tick()}, 1000)
        }

        Stop() {
            clearInterval(this.interval)
            this.setState({
                id: 0
            })
        }

        render() {
            return (
                <div>
                    <h2>{this.state.time}</h2>
                    <button onClick={this.Start}>Start</button>
                    <button onClick={this.Stop}>Stop</button>
                </div>
        );
        }


        componentDidMount() {
            this.interval = setInterval(() => {
                this.tick()}, 1000)
        }


        componentWillUnmount() {
            clearInterval(this.interval)
        }
    }


return (
            <Clock />
    );
}

export default App;