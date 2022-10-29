import * as yup from "yup";
import { IForm } from "../../../types";

export const userFormValidation = yup.object().shape({
	name: yup
		.string()
		.min(2, "Precisamos de mais um pouco.")
		.max(30, "Nome muito grande")
		.required("Digite seu nome"),
});
