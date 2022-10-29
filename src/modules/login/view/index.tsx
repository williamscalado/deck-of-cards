import {
	ContainerButton,
	ContainerForm,
	ContainerInput,
	ContainerLogin,
	ErrorMessage,
	Title,
} from "./style";
import { FaUserAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IForm } from "../../../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { userFormValidation } from "../validation";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userStateData } from "../../../state";
import { toast } from "react-toastify";
export const Login = () => {
	const setUserData = useSetRecoilState(userStateData);
	const navigation = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IForm>({
		resolver: yupResolver(userFormValidation),
		defaultValues: { name: "" },
		mode: "onBlur",
	});

	const handleForm = (data: IForm) => {
		try {
			setUserData(data);
			navigation("/cards");
		} catch (error) {
			toast.error("Encontramos um problema ao gerar suas cartas");
		}
	};

	return (
		<ContainerLogin>
			<img src="/image/logo.png" alt="Cecilia's Cards" />
			<ContainerForm onSubmit={handleSubmit(handleForm)}>
				<Title>DIGITE SEU NOME</Title>
				<ContainerInput>
					<span>
						<FaUserAlt />
					</span>
					<input type="text" {...register("name")} />
				</ContainerInput>
				{errors.name ? (
					<ErrorMessage>{errors.name.message}</ErrorMessage>
				) : null}

				<ContainerButton>
					<button>VER CARTAS</button>
				</ContainerButton>
			</ContainerForm>
		</ContainerLogin>
	);
};
