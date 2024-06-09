import { Router } from 'express';
import * as controller from '../controllers/user';
import * as middleware from '../middlewares/auth.middleware';

const router = Router();
router.post('/register', controller.register);
router.post('/register/admin', middleware.checkSuperAdmin, controller.createAdmin);
router.post('/login', controller.loginAsMember);
router.post('/login/super-admin', controller.loginAsSuperAdmin);
router.post('/login/admin', controller.loginAsAdmin);
router.get('/current-user', middleware.whoAmI, controller.checkUser);

export default router;