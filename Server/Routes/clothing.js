"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const clothing_1 = require("../Controllers/clothing");
router.get('/', clothing_1.DisplayClothingListPage);
router.get('/add', clothing_1.DisplayAddPage);
router.get('/edit/:id', clothing_1.DisplayEditPage);
router.post('/add', clothing_1.ProcessAddPage);
router.post('/edit/:id', clothing_1.ProcessEditPage);
router.get('/delete/:id', clothing_1.ProcessDeletePage);
//# sourceMappingURL=clothing.js.map