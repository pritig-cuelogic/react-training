import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialage,
            status: 0
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3,
            status: this.state.status + 1
        });
    }
    render() {
        return (
            <div>
                <p>This is new Component</p>
                <p>Your name is {this.props.name}</p>
                <p>Your age is {this.state.age}</p>
                <p>Your status is {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Older! </button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialage: React.PropTypes.number
}