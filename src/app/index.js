import React from "react";
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

render(<App/>, window.document.getElementById("app"));
