import { HttpResponseModel } from '../models/http-response-model';
import { PlayerModel, StatisticsModel } from '../models/player-model';
import * as playerRepository from '../repositories/player-repository';
import * as HttpResponse from '../utils/http-helper';

const getAll = async (): Promise<HttpResponseModel> => {
	const data = await playerRepository.findAll();
	if (!data) return HttpResponse.noContent();
	return HttpResponse.ok(data);
};

const getById = async (id: number): Promise<HttpResponseModel> => {
	const data = await playerRepository.findById(id);
	if (!data) return HttpResponse.notFound();
	return HttpResponse.ok(data);
};

const insert = async (player: PlayerModel): Promise<HttpResponseModel> => {
	if (Object.keys(player).length <= 0) return HttpResponse.badRequest();
	const data = await playerRepository.save(player);

	return HttpResponse.created(data);
};

const update = async (
	id: number,
	statistics: StatisticsModel
): Promise<HttpResponseModel> => {
	if (Object.keys(statistics).length <= 0) return HttpResponse.badRequest();

	const data = await playerRepository.findAndModifyPlayer(id, statistics);
	if (!data) return HttpResponse.badRequest();

	return HttpResponse.ok(data);
};

const deletePlayer = async (id: number): Promise<HttpResponseModel> => {
	if (id <= 0) HttpResponse.badRequest();

	const isDeleted = await playerRepository.deletePlayer(id);
	if (!isDeleted) return HttpResponse.badRequest();

	return HttpResponse.noContent();
};

export = {
	getAll,
	getById,
	insert,
	deletePlayer,
	update,
};
