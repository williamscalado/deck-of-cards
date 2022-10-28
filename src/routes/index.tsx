import { Route } from "react-router";
import { Routes } from "react-router-dom";

export const AppRouters = () => {
	return (
		<Routes>
			<Route path="/" element={<h1>Elementos</h1>} />
			<Route path="/cards" element={<h1>Elementos</h1>} />
			<Route path="*" element={<h1>Pagina não encontrada</h1>}></Route>
		</Routes>
	);
};
