import { HttpResponseModel } from '../models/http-response-model';
import { PlayerModel, StatisticsModel } from '../models/player-model';
import { badRequest } from '../utils/http-helper';

const database: PlayerModel[] = [
	{
		id: 1,
		name: 'Lionel Messi',
		club: 'Paris Saint-Germain',
		nationality: 'Argentina',
		statistics: {
			overall: 93,
			pace: 85,
			shooting: 94,
			passing: 91,
			dribbling: 95,
			defending: 38,
			phisycal: 65,
		},
	},
	{
		id: 2,
		name: 'Tony Kross',
		club: 'Real Madrid',
		nationality: 'Alemanha',
		statistics: {
			overall: 89,
			pace: 78,
			shooting: 96,
			passing: 94,
			dribbling: 86,
			defending: 52,
			phisycal: 72,
		},
	},
	{
		id: 3,
		name: 'Lamine Yamal',
		club: 'Barcelona FC',
		nationality: 'Espanha',
		statistics: {
			overall: 88,
			pace: 90,
			shooting: 89,
			passing: 88,
			dribbling: 95,
			defending: 42,
			phisycal: 68,
		},
	},
];

const findAll = async (): Promise<PlayerModel[]> => {
	return database;
};

const findById = async (id: number): Promise<PlayerModel | undefined> => {
	const player = database.find((p) => p.id === id);
	return player;
};

const save = async (player: PlayerModel): Promise<PlayerModel> => {
	const newPLayer = player;
	database.push(newPLayer);
	return newPLayer;
};

const deletePlayer = async (id: number): Promise<boolean> => {
	const playerIndex = database.findIndex((p) => p.id === id);
	if (playerIndex < 0) return false;
	
	database.splice(playerIndex, 1);
	return true;
};

const findAndModifyPlayer = async (
	id: number,
	statistics: StatisticsModel
): Promise<PlayerModel | boolean> => {
	const playerIndex = database.findIndex((player) => player.id === id);
	if (playerIndex < 0) return false;
	
	database[playerIndex].statistics = statistics;
	return database[playerIndex];
};

export { findAll, findById, save, deletePlayer, findAndModifyPlayer };
