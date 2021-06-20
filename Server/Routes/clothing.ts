import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type clothing controller
import { DisplayAddPage, DisplayClothingListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/clothing';

// import util functions
import {AuthGuard} from '../Util/index';
/* GET /clothing-list page. */
router.get('/', DisplayClothingListPage);

/* GET - display /clothing-list/add page. */
router.get('/add', AuthGuard, DisplayAddPage);

/* GET - display /clothing-list/edit/:id page. */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);