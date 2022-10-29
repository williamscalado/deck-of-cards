import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRouters } from "./routes";
import { GlobalStyle } from "./style/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<GlobalStyle />
				<AppRouters />
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>
);
