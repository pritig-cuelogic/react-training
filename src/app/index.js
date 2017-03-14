import {render} from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import React from "react";

import App from "./components/App";


const mathReducer = (state = {
	result: 1,
	lastValues: []
}, action) => {
	switch(action.type) {
		case "ADD":
		   state = {
		   	...state,
		   	result: state.result + action.payload,
		   	lastValues: [...state.lastValues, action.payload]
		   }
		   break;
		case "SUBTRACT":
		   state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
			};
		   break;
	}
	return state;
};

const userReducer = (state = {
	name: "priti",
	age: 25
}, action) => {
	switch(action.type) {
		case "SET_NAME":
		   state = {
		   	...state,
		   	name: action.payload
		   }
		   break;
		case "SET_AGE":
		   state = {
		   	...state,
		   	age: action.payload
		   }
		   break;
	}
	return state;
};

const store = createStore(
	combineReducers({mathReducer, userReducer}),
	 {}, 
	 applyMiddleware(logger()));

store.subscribe(() => {
	console.log("store updated",store.getState());
});


render(<Provider store={store}>
			<App />
		</ Provider>,
	 window.document.getElementById("app"));
