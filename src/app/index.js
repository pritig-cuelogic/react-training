import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
class App extends React.Component {
	render() {
		var user = {
			name: "Anna",
			hobbies: ["sports", "watching movie"]
		};
		return (
				<div className="container">
					<div className="row">
						<div className="col-xs-10">
							<Header/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10">
							<Home name={"Max"} initialage={27} />
						</div>
					</div>
				</div>
				
			);
	}
}

render(<App/>, window.document.getElementById("app"));
