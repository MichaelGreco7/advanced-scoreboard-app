import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elaspedTime: 0,
        previousTime: 0
    };

    componentDidMount() {
        this.intervalID = setInterval( () => this.tick(), 100);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elaspedTime: (prevState.elaspedTime - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !this.state.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ previousTime: Date.now() });
        }
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={this.handleStopwatch}>
                { this.state.isRunning ? 'Stop' : 'Start' }
                </button>
                <button>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;