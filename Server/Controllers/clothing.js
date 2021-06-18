"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClothingListPage = void 0;
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
//# sourceMappingURL=clothing.js.map