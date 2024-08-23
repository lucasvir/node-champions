import * as repository from '../repositories/club-repository';
import * as HttpResponse from '../utils/http-helper';

const getAll = async () => {
	const data = await repository.findAll();
	return HttpResponse.ok(data);
};

export { getAll };
