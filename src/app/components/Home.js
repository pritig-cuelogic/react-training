import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialage,
            status: 0,
            homelink: "changed link"
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3,
            status: this.state.status + 1
        });
    }
    onChangeLink(){
        this.props.changeLink(this.state.homelink);
    }
    onChangeHandler(event){
        this.setState({
            homelink: event.target.value
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
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <input type="text" value={this.state.homelink} 
                onChange={(event) => this.onChangeHandler(event)}/>
                <hr/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)} >chnage header</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialage: React.PropTypes.number,
    greet: React.PropTypes.func,
    initiallink: React.PropTypes.string
}