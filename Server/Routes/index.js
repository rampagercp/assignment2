"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Controllers/index");
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/about', DisplayAboutPage);
router.get('/projects', DisplayProjectsPage);
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
});
//# sourceMappingURL=index.js.map