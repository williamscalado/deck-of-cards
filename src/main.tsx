import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./routes";
import { GlobalStyle } from "./style/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<AppRouters />
		</BrowserRouter>
	</React.StrictMode>
);
