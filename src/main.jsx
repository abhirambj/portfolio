import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<BrowserRouter basename="/portfolio">
			<App />
		</BrowserRouter>
	</>
);
