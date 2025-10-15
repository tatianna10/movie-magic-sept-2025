import { Router } from 'express';

import homeController from './controllers/homeController.js';
import movieController from './controllers/movieController.js';
import castController from './controllers/castContoller.js';
import authController from './controllers/authController.js';

const routes = Router();

routes.use(homeController);
routes.use('/movies', movieController);
routes.use('/casts', castController);
routes.use('/auth', authController);

//Add not found page
routes.get('*splat', (req, res) => {
    res.render('404');
});

export default routes;