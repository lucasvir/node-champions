import { Request, Response } from 'express';
import service from '../services/players-service';
import { PlayerModel, StatisticsModel } from '../models/player-model';

export const getAll = async (req: Request, res: Response) => {
	const httpResponse = await service.getAll();
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getById = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const httpResponse = await service.getById(id);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const insert = async (req: Request, res: Response) => {
	const data: PlayerModel = req.body;
	const httpResponse = await service.insert(data);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const update = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const data: StatisticsModel = req.body;
	const httpResponse = await service.update(id, data);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const remove = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const httpResponse = await service.deletePlayer(id);
	res.status(httpResponse.statusCode).json(httpResponse.body);
};
