import React, { Component } from "react";

class ClassCounter extends Component<ClassCounterProps, ClassCounterState> {
    state: ClassCounterState = {
        count: 0,
    }
    constructor(props: ClassCounterProps) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment = () => {
        console.log("count: ", this.state.count + 1);
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div>
                ClassCounter
                <br />
                {this.state.count}
                <br />
                <button onClick={this.increment} > + 1 </button>
            </div>
        );
    }
}

export default ClassCounter;
