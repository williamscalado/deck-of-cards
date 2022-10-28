import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Login } from "../modules/login/view";

export const AppRouters = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/cards" element={<h1>Elementos</h1>} />
			<Route path="*" element={<h1>Pagina não encontrada</h1>}></Route>
		</Routes>
	);
};
