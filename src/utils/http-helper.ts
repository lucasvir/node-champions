import { HttpResponseModel } from '../models/http-response-model';

const ok = async (data: any): Promise<HttpResponseModel> => {
	return {
		statusCode: 200,
		body: data,
	};
};

const created = async (data: any): Promise<HttpResponseModel> => {
	return {
		statusCode: 201,
		body: data,
	};
};

const badRequest = async (): Promise<HttpResponseModel> => {
	return {
		statusCode: 400,
		body: { message: 'Bad Request' },
	};
};

const noContent = async (): Promise<HttpResponseModel> => {
	return {
		statusCode: 204,
		body: null,
	};
};

const notFound = async (): Promise<HttpResponseModel> => {
	return {
		statusCode: 404,
		body: { message: 'Resource not found!' },
	};
};

export { ok, badRequest, noContent, notFound, created };
