import * as yup from "yup";
import { IForm } from "../../../types";

export const userFormValidation = yup.object().shape({
	name: yup
		.string()
		.required("Digite seu nome")
		.min(3, "Nome muito curto")
		.max(30, "Nome muito grande"),
});
