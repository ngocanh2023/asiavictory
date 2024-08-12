import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Main from './pages/main/main';
import Admin from './components/admin/admin';
import Agricultural from "./pages/agricultural/agricultural";
import Natural from "./pages/natural/natural";
import FrozenFood from "./pages/frozen/frozenfood";
import Market from "./pages/market/market";
import Technology from "./pages/technology/technology"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />	
				<Route path="/admin" element={<Admin/>}/>
				<Route path="/agricultural" element={<Agricultural />} />	
				<Route path="/natural" element={<Natural />} />	
				<Route path="/frozenfood" element={<FrozenFood />} />
				<Route path="/market" element={<Market />} />	
				<Route path="/technology" element={<Technology />} />	
			</Routes>
		</BrowserRouter>
	);
}

export default App;
