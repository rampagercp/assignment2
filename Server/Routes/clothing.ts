import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type clothing controller
import { DisplayAddPage, DisplayClothingListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/clothing';

/* GET /clothing-list page. */
router.get('/', DisplayClothingListPage);

/* GET - display /clothing-list/add page. */
router.get('/add', DisplayAddPage);

/* GET - display /clothing-list/edit/:id page. */
router.get('/edit/:id', DisplayEditPage);

/* POST - process /clothing-list/add page */
router.post('/add', ProcessAddPage);

/* POST - process /clothing-list/edit/:id page */
router.post('/edit/:id', ProcessEditPage);

/* GET - process /clothing-list/delete/:id */
router.get('/delete/:id', ProcessDeletePage);