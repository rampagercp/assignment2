import express from 'express';
const router = express.Router();
export default router;


//create an index controller instance
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage} from '../Controllers/index'

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET LOGIN page with /login. */
router.get('/login', DisplayLoginPage);

/* POST PROCESS LOGIN page WHEN USER CLICKS LOGIN BTN. */
router.post('/login', ProcessLoginPage);
/* GET DISPLAY  REGISTER page with /register. */
router.get('/register', DisplayRegisterPage);

/* POST PROCESS REGISTER page WHEN USER CLICKS REGISTER BTN. */
router.post('/register', ProcessRegisterPage);

/* GET process  LOGOUT page with /logout. */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;
