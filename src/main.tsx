import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import { AppRouters } from "./routes";
import { GlobalStyle } from "./style/global";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<GlobalStyle />
				<ToastContainer />
				<AppRouters />
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>
);
