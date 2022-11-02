import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppRouters } from "./src/routes";

const AllTheProviders: FC = ({ children }: any) => {
	return (
		<React.StrictMode>
			<RecoilRoot>
				<BrowserRouter>
					<ToastContainer />

					{children}
				</BrowserRouter>
			</RecoilRoot>
		</React.StrictMode>
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
