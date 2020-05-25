import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom'
import {router} from "../Router";
import Header from "./Components/Header/Header";

function App() {
	return (
			<div className="App">
				<Header/>
				<main>
					<Switch>{router.map((props, index) => <Route key={index} {...props}/>)}</Switch>
				</main>
			</div>
	);
}

export default App;
