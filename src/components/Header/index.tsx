import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userStateData } from "../../state";
import { ContainerHeader, ContainerUser } from "./style";

export const Header = () => {
	const navigate = useNavigate();
	const [dataUser, setDataUser] = useRecoilState(userStateData);
	const handleExit = () => {
		setDataUser({
			name: "",
		});
		navigate("/");
	};
	return (
		<ContainerHeader>
			<img src="/image/logo.png" alt="Cecilia's Cards" />
			<ContainerUser>
				Olá, {dataUser.name}
				<button onClick={handleExit}>Sair</button>
			</ContainerUser>
		</ContainerHeader>
	);
};
