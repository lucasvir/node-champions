import { ClubModel } from '../models/club-model';
import fs from 'fs/promises';

const findAll = async (): Promise<ClubModel[]> => {
	const data = await fs.readFile('src/database/clubs.json', 'utf-8');
	const clubs: ClubModel[] = JSON.parse(data);
	return clubs;
};

export { findAll };
