interface PlayerModel {
	id: number;
	name: string;
	club: string;
	nationality: string;
	statistics: {
		overall: number;
		pace: number;
		shooting: number;
		passing: number;
		dribbling: number;
		defending: number;
		phisycal: number;
	};
}

interface StatisticsModel {
	overall: number;
	pace: number;
	shooting: number;
	passing: number;
	dribbling: number;
	defending: number;
	phisycal: number;
}

export { PlayerModel, StatisticsModel };
