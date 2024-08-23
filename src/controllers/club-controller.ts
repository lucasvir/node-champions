import { Request, Response } from 'express';
import * as service from '../services/club-service';

export const getAll = async (req: Request, res: Response) => {
	const httpResponse = await service.getAll();
	res.status(httpResponse.statusCode).json(httpResponse.body);
};
