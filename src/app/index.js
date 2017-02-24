import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render() {
		return (
				<div>hhh
					<h3>Hello! </h3>
				</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));
