import { Navigate, Route } from "react-router";
import { Outlet, Routes, useLocation } from "react-router-dom";
import { Cards } from "../modules/cards/view";
import { Auth } from "../modules/auth/view";
import { useRecoilState } from "recoil";
import { userStateData } from "../state";

export const AppRouters = () => {
	const [userData] = useRecoilState(userStateData);
	function IsExistName() {
		let location = useLocation();
		if (!userData.name) return <Navigate to={"/"} state={{ from: "state" }} />;
		return <Outlet />;
	}
	return (
		<Routes>
			<Route path="/" element={<Auth />} />
			<Route element={<IsExistName />}>
				<Route path="/cards" element={<Cards />} />
			</Route>
			<Route path="*" element={<h1>Pagina não encontrada</h1>}></Route>
		</Routes>
	);
};
