import {
	ContainerButton,
	ContainerForm,
	ContainerInput,
	ContainerLogin,
	Title,
} from "./style";
import { FaUserAlt } from "react-icons/fa";

export const Login = () => {
	return (
		<ContainerLogin>
			<img src="/image/logo.png" alt="Cecilia's Cards" />
			<ContainerForm>
				<Title>DIGITE SEU NOME</Title>
				<ContainerInput>
					<span>
						<FaUserAlt />
					</span>
					<input type="text" />
				</ContainerInput>

				<ContainerButton>
					<button>VER CARTAS</button>
				</ContainerButton>
			</ContainerForm>
		</ContainerLogin>
	);
};
