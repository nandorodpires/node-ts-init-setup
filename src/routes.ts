import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ message: 'API is running... ' }));

export default routes;
