import { Router } from 'express';
import * as playerController from './controllers/players-controller';
import * as clubController from './controllers/club-controller';

const router = Router();

//PLAYERS
router.get('/players', playerController.getAll);
router.get('/players/:id', playerController.getById);
router.post('/players', playerController.insert);
router.put('/players/:id', playerController.update);
router.delete('/players/:id', playerController.remove);

//CLUBS
router.get('/clubs', clubController.getAll);

export default router;
