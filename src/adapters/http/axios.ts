import axios, { AxiosRequestConfig } from "axios";
import { IHTTPRequest, IHTTPRequestError } from "../types";

const API_ENDPOINT = process.env.APICARD;

const errorMessages: IHTTPRequestError = {
	default: "something went wrong",
	noResponse: "no response from server",
	network: "network error",
};

function errorHandler(error: any): void {
	if (error.response) {
		throw `${error.response.data.message}` || errorMessages.default;
	} else if (error.request) {
		throw error.request.response || errorMessages.noResponse;
	} else {
		throw error.message || errorMessages.network;
	}
}

/* Generic instance. For generic requests. */
const genericRequest = axios.create({
	baseURL: API_ENDPOINT,
});

export async function fetchApi({
	url,
	method,
	headers,
	data,
	params,
}: IHTTPRequest): Promise<any> {
	try {
		const response = await genericRequest({
			url,
			headers,
			method,
			data,
			params,
		} as AxiosRequestConfig);
		return response.data;
	} catch (error) {
		errorHandler(error);
	}
}
