import express from 'express';
const router = express.Router();
export default router;

//create an clothing controller instance
import {DisplayClothingListPage, DisplayEditPage} from '../Controllers/clothing';

/* GET Clothing-List PAGE WITH /clothing-list*/
router.get('/', DisplayClothingListPage);

 
/* display edit /:ig page - with /clothing-list/edited"id */
router.get('/edit/:id', DisplayEditPage);
 