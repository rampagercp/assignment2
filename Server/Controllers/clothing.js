"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayEditPage = exports.DisplayClothingListPage = void 0;
const clothing_1 = __importDefault(require("../Models/clothing"));
function DisplayClothingListPage(req, res, next) {
    clothing_1.default.find(function (err, clothingCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection });
    });
}
exports.DisplayClothingListPage = DisplayClothingListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    clothing_1.default.findById(id, {}, {}, (err, clothingItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', item: clothingItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
//# sourceMappingURL=clothing.js.map