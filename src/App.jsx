import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

function App() {
	return (
		<>
			<Routes>
				<Route path="/portfolio/" element={<Main />} />
				<Route path="/portfolio/resume/" element={<Resume />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
