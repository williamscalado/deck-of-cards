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
