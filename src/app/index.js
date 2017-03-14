/*import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
class App extends React.Component {

    constructor(){
		super();
		this.state = {
			homelink: "Home"
		}
	}
	onGreet(){
		console.log("this is greet");
	}
	onLinkChange(linkName){
		this.setState({
			homelink: linkName
		});
	}
	render() {
		var user = {
			name: "Anna",
			hobbies: ["sports", "watching movie"]
		};
		return (
				<div className="container">
					<div className="row">
						<div className="col-xs-10">
							<Header homelink={this.state.homelink} />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10">
							<Home name={"Max"} 
							initialage={27}
							 greet={this.onGreet}
							 changeLink={this.onLinkChange.bind(this)}
							 initiallink = {this.state.homelink}
							 />
						</div>
					</div>
				</div>
				
			);
	}
}

render(<App/>, window.document.getElementById("app"));*/

import { createStore } from "redux";

const initialState = {
	result: 1,
	lastValues: []
}
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD":
		   state = {
		   	...state,
		   	result: state.result + action.payload,
		   	lastValues: [...state.lastValues, action.payload]
		   }
		   break;
		case "SUBTRACT":
		   state = state - action.payload;
		   break;
	}
	return state;
}
const store = createStore(reducer);
store.subscribe(() => {
	console.log("store updated",store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 10
});
store.dispatch({
	type: "ADD",
	payload: 12
});
store.dispatch({
	type: "SUBTRACT",
	payload: 12
});